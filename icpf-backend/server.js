const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { MongoClient, ObjectId } = require('mongodb');
const ExcelJS = require('exceljs');

const app = express();
const PORT = process.env.PORT || 5000;

// ── MongoDB Connection ──
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://icpfadmin:icpf2025secure@icpf-syl.dcu4nan.mongodb.net/icpf-syl?appName=icpf-syl';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'icpf-admin-2025';

let db;
let registrationsCollection;

async function connectDB() {
  try {
    const client = new MongoClient(MONGO_URI, {
     tls: true,
     tlsAllowInvalidCertificates: true,
});
    await client.connect();
    db = client.db('icpf-syl');
    registrationsCollection = db.collection('registrations');
    console.log('✅ MongoDB Connected Successfully!');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  }
}

// ── Middleware ──
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin: '*' }));
app.use(express.json());

// ── Health Check ──
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'ICPF SYL Backend running 🙏' });
});

// ── Register Student ──
app.post('/api/register', async (req, res) => {
  try {
    const {
      full_name, gender, church, email, whatsapp_no, dob,
      course_class, permanent_address, present_address, state,
      district, icpf_staff, icpf_station, talent_skills,
      year_of_salvation, year_of_baptism, interest_to_attend,
      reason_for_attending
    } = req.body;

    // Validate required fields
    const required = { full_name, gender, church, email, whatsapp_no, dob, course_class, permanent_address, state, district };
    for (const [key, value] of Object.entries(required)) {
      if (!value || value.toString().trim() === '') {
        return res.status(400).json({ error: `Missing required field: ${key}` });
      }
    }

    // Check duplicate email
    const existing = await registrationsCollection.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return res.status(409).json({ error: 'This email is already registered!' });
    }

    // Save registration
    const registration = {
      full_name: full_name.trim(),
      gender,
      church: church.trim(),
      email: email.toLowerCase().trim(),
      whatsapp_no: whatsapp_no.trim(),
      dob,
      course_class: course_class.trim(),
      permanent_address: permanent_address.trim(),
      present_address: present_address?.trim() || '',
      state: state.trim(),
      district: district.trim(),
      icpf_staff: icpf_staff?.trim() || '',
      icpf_station: icpf_station?.trim() || '',
      talent_skills: talent_skills?.trim() || '',
      year_of_salvation: year_of_salvation || '',
      year_of_baptism: year_of_baptism || '',
      interest_to_attend: interest_to_attend || '',
      reason_for_attending: reason_for_attending?.trim() || '',
      registered_at: new Date().toISOString()
    };

    await registrationsCollection.insertOne(registration);

    res.status(201).json({ success: true, message: 'Registration successful! 🙏' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// ── Admin: Get All Registrations ──
app.get('/api/admin/registrations', async (req, res) => {
  const token = req.query.token || req.headers['x-admin-token'];
  if (token !== ADMIN_TOKEN) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const registrations = await registrationsCollection.find({}).sort({ registered_at: -1 }).toArray();
    res.json({ total: registrations.length, registrations });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Admin: Stats ──
app.get('/api/admin/stats', async (req, res) => {
  const token = req.query.token || req.headers['x-admin-token'];
  if (token !== ADMIN_TOKEN) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const all = await registrationsCollection.find({}).toArray();
    const today = new Date().toISOString().split('T')[0];
    res.json({
      total: all.length,
      male: all.filter(r => r.gender === 'Male').length,
      female: all.filter(r => r.gender === 'Female').length,
      interested: all.filter(r => r.interest_to_attend === 'Yes').length,
      today: all.filter(r => r.registered_at?.startsWith(today)).length
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Admin: Export Excel ──
app.get('/api/admin/export', async (req, res) => {
  const token = req.query.token || req.headers['x-admin-token'];
  if (token !== ADMIN_TOKEN) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const registrations = await registrationsCollection.find({}).sort({ registered_at: 1 }).toArray();

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Registrations');

    sheet.getRow(1).values = ['#', 'Full Name', 'Gender', 'Church', 'Email', 'WhatsApp', 'DOB',
      'Course/Class', 'Permanent Address', 'Present Address', 'State', 'District',
      'ICPF Staff', 'ICPF Station', 'Talents/Skills', 'Year of Salvation',
      'Year of Baptism', 'Interested to Attend', 'Reason for Attending', 'Registered At'];

    sheet.getRow(1).eachCell(cell => {
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4A5D23' } };
      cell.font = { color: { argb: 'FFFFFFFF' }, bold: true, size: 11 };
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    });
    sheet.getRow(1).height = 30;

    registrations.forEach((r, i) => {
      sheet.addRow([
        i + 1, r.full_name, r.gender, r.church, r.email, r.whatsapp_no, r.dob,
        r.course_class, r.permanent_address, r.present_address, r.state, r.district,
        r.icpf_staff, r.icpf_station, r.talent_skills, r.year_of_salvation,
        r.year_of_baptism, r.interest_to_attend, r.reason_for_attending,
        r.registered_at ? new Date(r.registered_at).toLocaleString('en-IN') : ''
      ]);
    });

    sheet.columns.forEach(col => { col.width = 20; });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=SYL2025-Registrations-${Date.now()}.xlsx`);

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error('Export error:', err);
    res.status(500).json({ error: 'Export failed' });
  }
});

// ── Start Server ──
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ ICPF SYL Backend running on http://localhost:${PORT}`);
    console.log(`📊 Excel: http://localhost:${PORT}/api/admin/export?token=${ADMIN_TOKEN}`);
  });
});
