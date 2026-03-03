const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const path = require('path')
const fs = require('fs')
const ExcelJS = require('exceljs')

const app = express()
const PORT = process.env.PORT || 5000
const ADMIN_TOKEN = 'icpf-admin-2025'

// ── Simple JSON file database ─────────────────────────────────
const dataDir = path.join(__dirname, 'data')
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
const DB_FILE = path.join(dataDir, 'registrations.json')
if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, '[]')

function readDB() {
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'))
}
function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2))
}
console.log('✅ Database ready (JSON file)')

// ── Middleware ────────────────────────────────────────────────
app.use(helmet({ contentSecurityPolicy: false }))
app.use(cors({ origin: '*' }))
app.use(express.json())

// ── Auth middleware ───────────────────────────────────────────
function auth(req, res, next) {
  const token = req.headers['x-admin-token'] || req.query.token
  if (token !== ADMIN_TOKEN) return res.status(401).json({ error: 'Unauthorized' })
  next()
}

// ── POST /api/register ────────────────────────────────────────
app.post('/api/register', (req, res) => {
  const b = req.body
  const required = [
    'full_name','gender','church','email','whatsapp_no',
    'dob','course_class','permanent_address','state',
    'district','interest_to_attend','reason_for_attending'
  ]
  const errors = {}
  required.forEach(f => {
    if (!b[f] || !b[f].toString().trim()) errors[f] = 'This field is required'
  })
  if (Object.keys(errors).length) return res.status(400).json({ success: false, errors })

  const all = readDB()

  // Check duplicate email
  const exists = all.find(r => r.email === b.email.toLowerCase())
  if (exists) return res.status(409).json({ success: false, errors: { email: 'This email is already registered.' } })

  // Save new registration
  const newReg = {
    id: Date.now(),
    full_name: b.full_name,
    gender: b.gender,
    church: b.church,
    email: b.email.toLowerCase(),
    whatsapp_no: b.whatsapp_no,
    dob: b.dob,
    course_class: b.course_class,
    permanent_address: b.permanent_address,
    present_address: b.present_address || '',
    state: b.state,
    district: b.district,
    icpf_staff: b.icpf_staff || '',
    icpf_station: b.icpf_station || '',
    talent_skills: b.talent_skills || '',
    year_of_salvation: b.year_of_salvation || '',
    year_of_baptism: b.year_of_baptism || '',
    interest_to_attend: b.interest_to_attend,
    reason_for_attending: b.reason_for_attending,
    created_at: new Date().toLocaleString('en-IN')
  }
  all.push(newReg)
  writeDB(all)

  res.status(201).json({ success: true, message: 'Registration successful! 🙏' })
})

// ── GET /api/admin/registrations ─────────────────────────────
app.get('/api/admin/registrations', auth, (req, res) => {
  const all = readDB()
  res.json({ success: true, total: all.length, data: all.reverse() })
})

// ── GET /api/admin/stats ──────────────────────────────────────
app.get('/api/admin/stats', auth, (req, res) => {
  const all = readDB()
  const today = new Date().toLocaleDateString('en-IN')
  res.json({
    success: true,
    stats: {
      total:  all.length,
      male:   all.filter(r => r.gender === 'Male').length,
      female: all.filter(r => r.gender === 'Female').length,
      yes:    all.filter(r => r.interest_to_attend === 'Yes').length,
      today:  all.filter(r => r.created_at?.startsWith(today)).length,
    }
  })
})

// ── GET /api/admin/export (Excel) ─────────────────────────────
app.get('/api/admin/export', auth, async (req, res) => {
  const rows = readDB()
  const wb = new ExcelJS.Workbook()
  const ws = wb.addWorksheet('SYL 2025 Registrations')
  ws.columns = [
    { header: 'S.No',                 key: 'sno',                  width: 6  },
    { header: 'Full Name',            key: 'full_name',            width: 22 },
    { header: 'Gender',               key: 'gender',               width: 10 },
    { header: 'Church',               key: 'church',               width: 22 },
    { header: 'Email',                key: 'email',                width: 28 },
    { header: 'WhatsApp No',          key: 'whatsapp_no',          width: 16 },
    { header: 'Date of Birth',        key: 'dob',                  width: 14 },
    { header: 'Course/Class',         key: 'course_class',         width: 20 },
    { header: 'Permanent Address',    key: 'permanent_address',    width: 30 },
    { header: 'Present Address',      key: 'present_address',      width: 30 },
    { header: 'State',                key: 'state',                width: 14 },
    { header: 'District',             key: 'district',             width: 14 },
    { header: 'ICPF Staff',           key: 'icpf_staff',           width: 16 },
    { header: 'ICPF Station',         key: 'icpf_station',         width: 16 },
    { header: 'Talent/Skills',        key: 'talent_skills',        width: 20 },
    { header: 'Year of Salvation',    key: 'year_of_salvation',    width: 16 },
    { header: 'Year of Baptism',      key: 'year_of_baptism',      width: 15 },
    { header: 'Interest to Attend',   key: 'interest_to_attend',   width: 18 },
    { header: 'Reason for Attending', key: 'reason_for_attending', width: 36 },
    { header: 'Registered At',        key: 'created_at',           width: 22 },
  ]
  ws.getRow(1).eachCell(cell => {
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4A5D23' } }
    cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 }
    cell.alignment = { vertical: 'middle', horizontal: 'center' }
  })
  ws.getRow(1).height = 24
  rows.forEach((r, i) => ws.addRow({ sno: i + 1, ...r }))
  ws.views = [{ state: 'frozen', ySplit: 1 }]

  const filename = `ICPF_SYL2025_${new Date().toISOString().split('T')[0]}.xlsx`
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
  await wb.xlsx.write(res)
  res.end()
})

// ── Health check ──────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'ICPF SYL Backend running 🙏' })
})

app.listen(PORT, () => {
  console.log(`\n✅ ICPF SYL Backend running on http://localhost:${PORT}`)
  console.log(`📥 Excel: http://localhost:${PORT}/api/admin/export?token=${ADMIN_TOKEN}\n`)
})
