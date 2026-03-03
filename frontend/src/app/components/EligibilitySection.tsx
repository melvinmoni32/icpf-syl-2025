export function EligibilitySection() {
  const criteria = [
    { text: 'Deeply surrendered to Jesus Christ', icon: '✝️' },
    { text: 'Age 18 years or above', icon: '🎓' },
    { text: 'Proficient in English language', icon: '📖' },
  ];

  return (
    <section style={{ background: '#F9F9F7', padding: '88px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 60, alignItems: 'center' }}>

          {/* Left */}
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(74,93,35,0.08)', border: '1px solid rgba(74,93,35,0.15)', borderRadius: 6, padding: '5px 14px', marginBottom: 20 }}>
              <span style={{ color: '#4A5D23', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, fontFamily: 'Inter, sans-serif' }}>Requirements</span>
            </div>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(36px,5vw,54px)', color: '#4A5D23', margin: '0 0 16px', lineHeight: 1.1, fontWeight: 400 }}>
              Are you <span style={{ fontStyle: 'italic' }}>eligible?</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: '#666', lineHeight: 1.8, marginBottom: 32 }}>
              Join us if you meet these essential requirements for the School of Youth Leadership.
            </p>
            <button
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: '#4A5D23', color: '#fff', border: 'none', padding: '13px 30px', borderRadius: 100, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14, cursor: 'pointer', boxShadow: '0 4px 16px rgba(74,93,35,0.25)', transition: 'all 0.2s' }}
              onMouseOver={e => { e.currentTarget.style.background = '#3d4e1d'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseOut={e => { e.currentTarget.style.background = '#4A5D23'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >Apply Now →</button>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {criteria.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 18,
                background: '#fff', borderRadius: 16, padding: '20px 24px',
                border: '1px solid rgba(163,177,138,0.2)',
                boxShadow: '0 2px 12px rgba(74,93,35,0.06)',
                transition: 'all 0.2s',
              }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(74,93,35,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(74,93,35,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ width: 48, height: 48, background: '#4A5D23', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#fff', fontSize: 20 }}>✓</span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#333', fontWeight: 500, margin: 0, lineHeight: 1.4 }}>{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
