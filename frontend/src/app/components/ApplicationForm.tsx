import { useState } from 'react';

interface FormData {
  name: string;
  gender: 'male' | 'female' | '';
  church: string;
  email: string;
  whatsapp: string;
  dob: string;
  course: string;
  permanentAddress: string;
  presentAddress: string;
  state: string;
  district: string;
  icpfStaff: string;
  icpfStation: string;
  talents: string;
  salvationYear: string;
  baptismYear: string;
  interestedToAttend: 'yes' | 'no' | '';
  reason: string;
}

interface ApplicationFormProps {
  onSubmitSuccess: () => void;
}

const inputStyle = (hasError?: boolean): React.CSSProperties => ({
  width: '100%', padding: '12px 16px', boxSizing: 'border-box',
  border: `1.5px solid ${hasError ? '#c0392b' : 'rgba(163,177,138,0.4)'}`,
  borderRadius: 12, fontSize: 15, outline: 'none',
  fontFamily: 'Inter, sans-serif', background: '#FAFAF8', color: '#222',
  transition: 'border-color 0.2s',
});

export function ApplicationForm({ onSubmitSuccess }: ApplicationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '', gender: '', church: '', email: '', whatsapp: '', dob: '',
    course: '', permanentAddress: '', presentAddress: '', state: '',
    district: '', icpfStaff: '', icpfStation: '', talents: '',
    salvationYear: '', baptismYear: '', interestedToAttend: '', reason: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('https://icpf-syl-2025.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name:            formData.name,
          gender:               formData.gender === 'male' ? 'Male' : 'Female',
          church:               formData.church,
          email:                formData.email,
          whatsapp_no:          formData.whatsapp,
          dob:                  formData.dob,
          course_class:         formData.course,
          permanent_address:    formData.permanentAddress,
          present_address:      formData.presentAddress,
          state:                formData.state,
          district:             formData.district,
          icpf_staff:           formData.icpfStaff,
          icpf_station:         formData.icpfStation,
          talent_skills:        formData.talents,
          year_of_salvation:    formData.salvationYear,
          year_of_baptism:      formData.baptismYear,
          interest_to_attend:   formData.interestedToAttend === 'yes' ? 'Yes' : 'No',
          reason_for_attending: formData.reason,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setSubmitting(false);
        return;
      }
      onSubmitSuccess();
    } catch {
      setError('Cannot connect to server. Please make sure the backend is running.');
    }
    setSubmitting(false);
  };

  const Label = ({ children, required }: { children: React.ReactNode, required?: boolean }) => (
    <label style={{ display: 'block', marginBottom: 7, fontSize: 13, fontWeight: 600, color: '#4A5D23', fontFamily: 'Inter, sans-serif', letterSpacing: 0.3 }}>
      {children} {required && <span style={{ color: '#c0392b' }}>*</span>}
    </label>
  );

  return (
    <section id="application-form" style={{ background: '#F9F9F7', padding: '88px 32px' }}>
      <div style={{ maxWidth: 780, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-block', background: 'rgba(74,93,35,0.08)', border: '1px solid rgba(74,93,35,0.15)', borderRadius: 6, padding: '5px 14px', marginBottom: 18 }}>
            <span style={{ color: '#4A5D23', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, fontFamily: 'Inter, sans-serif' }}>SYL 2026</span>
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(36px,5vw,54px)', color: '#4A5D23', margin: '0 0 14px', fontWeight: 400 }}>
            Application Form
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: '#666', lineHeight: 1.7 }}>
            Take the first step toward your mission
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 20 }}>
            <div style={{ width: 40, height: 1, background: 'rgba(74,93,35,0.2)' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#A3B18A' }} />
            <div style={{ width: 40, height: 1, background: 'rgba(74,93,35,0.2)' }} />
          </div>
        </div>

        {/* Form card */}
        <div style={{ background: '#fff', borderRadius: 24, padding: '48px', boxShadow: '0 8px 40px rgba(74,93,35,0.08)', border: '1px solid rgba(163,177,138,0.15)' }}>

          {/* Top accent */}
          <div style={{ height: 4, background: 'linear-gradient(90deg,#4A5D23,#A3B18A,#4A5D23)', borderRadius: 100, marginBottom: 40 }} />

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 24 }}>

              {/* Full Name */}
              <div>
                <Label required>Full Name</Label>
                <input style={inputStyle()} type="text" required value={formData.name}
                  onChange={e => handleChange('name', e.target.value)} placeholder="Enter your full name"
                  onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
              </div>

              {/* Gender */}
              <div>
                <Label required>Gender</Label>
                <div style={{ display: 'flex', gap: 24, marginTop: 4 }}>
                  {[['male','Male'],['female','Female']].map(([val, label]) => (
                    <label key={val} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#444' }}>
                      <input type="radio" name="gender" value={val} required
                        checked={formData.gender === val}
                        onChange={e => handleChange('gender', e.target.value)}
                        style={{ width: 18, height: 18, accentColor: '#4A5D23', cursor: 'pointer' }} />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Church */}
              <div>
                <Label required>Church</Label>
                <input style={inputStyle()} type="text" required value={formData.church}
                  onChange={e => handleChange('church', e.target.value)} placeholder="Your church name"
                  onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
              </div>

              {/* Email & WhatsApp */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div>
                  <Label required>Email</Label>
                  <input style={inputStyle()} type="email" required value={formData.email}
                    onChange={e => handleChange('email', e.target.value)} placeholder="your@email.com"
                    onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
                </div>
                <div>
                  <Label required>WhatsApp Number</Label>
                  <input style={inputStyle()} type="tel" required value={formData.whatsapp}
                    onChange={e => handleChange('whatsapp', e.target.value)} placeholder="+91 9876543210"
                    onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
                </div>
              </div>

              {/* DOB & Course */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div>
                  <Label required>Date of Birth</Label>
                  <input style={inputStyle()} type="date" required value={formData.dob}
                    onChange={e => handleChange('dob', e.target.value)}
                    onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
                </div>
                <div>
                  <Label required>Course / Class</Label>
                  <input style={inputStyle()} type="text" required value={formData.course}
                    onChange={e => handleChange('course', e.target.value)} placeholder="e.g. B.Tech 2nd Year"
                    onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
                </div>
              </div>

              {/* Permanent Address */}
              <div>
                <Label required>Permanent Address</Label>
                <textarea style={{ ...inputStyle(), resize: 'vertical' as const, minHeight: 80 }} required value={formData.permanentAddress}
                  onChange={e => handleChange('permanentAddress', e.target.value)} placeholder="Enter your permanent address"
                  onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
              </div>

              {/* Present Address */}
              <div>
                <Label>Present Address</Label>
                <textarea style={{ ...inputStyle(), resize: 'vertical' as const, minHeight: 80 }} value={formData.presentAddress}
                  onChange={e => handleChange('presentAddress', e.target.value)} placeholder="Present address (if different)"
                  onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
              </div>

              {/* State & District */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div>
                  <Label required>State</Label>
                  <input style={inputStyle()} type="text" required value={formData.state}
                    onChange={e => handleChange('state', e.target.value)} placeholder="e.g. Kerala"
                    onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
                </div>
                <div>
                  <Label required>District</Label>
                  <input style={inputStyle()} type="text" required value={formData.district}
                    onChange={e => handleChange('district', e.target.value)} placeholder="e.g. Thrissur"
                    onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
                </div>
              </div>

              {/* ICPF Staff & Station */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div>
                  <Label>ICPF Staff</Label>
                  <input style={inputStyle()} type="text" value={formData.icpfStaff}
                    onChange={e => handleChange('icpfStaff', e.target.value)} placeholder="Staff name (if any)"
                    onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
                </div>
                <div>
                  <Label>ICPF Station</Label>
                  <input style={inputStyle()} type="text" value={formData.icpfStation}
                    onChange={e => handleChange('icpfStation', e.target.value)} placeholder="Your ICPF station"
                    onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
                </div>
              </div>

              {/* Talents */}
              <div>
                <Label>Talents / Skills</Label>
                <input style={inputStyle()} type="text" value={formData.talents}
                  onChange={e => handleChange('talents', e.target.value)} placeholder="e.g. Music, Public Speaking, Writing"
                  onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
              </div>

              {/* Salvation & Baptism */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div>
                  <Label>Year of Salvation</Label>
                  <input style={inputStyle()} type="number" value={formData.salvationYear}
                    onChange={e => handleChange('salvationYear', e.target.value)} placeholder="YYYY" min="1900" max="2026"
                    onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
                </div>
                <div>
                  <Label>Year of Baptism</Label>
                  <input style={inputStyle()} type="number" value={formData.baptismYear}
                    onChange={e => handleChange('baptismYear', e.target.value)} placeholder="YYYY" min="1900" max="2026"
                    onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
                </div>
              </div>

              {/* Interested to Attend */}
              <div>
                <Label required>Are you interested to attend?</Label>
                <div style={{ display: 'flex', gap: 24, marginTop: 4 }}>
                  {[['yes','Yes'],['no','No']].map(([val, label]) => (
                    <label key={val} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#444' }}>
                      <input type="radio" name="interestedToAttend" value={val} required
                        checked={formData.interestedToAttend === val}
                        onChange={e => handleChange('interestedToAttend', e.target.value)}
                        style={{ width: 18, height: 18, accentColor: '#4A5D23', cursor: 'pointer' }} />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Reason */}
              <div>
                <Label required>Reason for attending SYL</Label>
                <textarea style={{ ...inputStyle(), resize: 'vertical' as const, minHeight: 120 }} required value={formData.reason}
                  onChange={e => handleChange('reason', e.target.value)}
                  placeholder="Share your motivation and what you hope to gain from this experience..."
                  onFocus={e => (e.target.style.borderColor = '#4A5D23')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(163,177,138,0.4)')} />
              </div>

              {/* Error */}
              {error && (
                <div style={{ background: '#fff3f3', border: '1px solid #fcc', borderRadius: 10, padding: '12px 16px', color: '#c0392b', fontSize: 14, fontFamily: 'Inter, sans-serif' }}>
                  ⚠️ {error}
                </div>
              )}

              {/* Submit */}
              <button type="submit" disabled={submitting} style={{
                background: submitting ? '#7a9440' : '#4A5D23', color: '#fff', border: 'none',
                padding: '16px', borderRadius: 100, fontFamily: 'Inter, sans-serif',
                fontWeight: 700, fontSize: 16, cursor: submitting ? 'not-allowed' : 'pointer',
                boxShadow: '0 6px 20px rgba(74,93,35,0.28)', transition: 'all 0.2s',
                marginTop: 8,
              }}
                onMouseOver={e => { if (!submitting) { e.currentTarget.style.background = '#3d4e1d'; e.currentTarget.style.transform = 'translateY(-1px)'; }}}
                onMouseOut={e => { e.currentTarget.style.background = submitting ? '#7a9440' : '#4A5D23'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {submitting ? '⏳ Submitting your application...' : 'Submit Application'}
              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
