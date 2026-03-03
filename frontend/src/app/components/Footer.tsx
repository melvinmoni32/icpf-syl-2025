export function Footer() {
  return (
    <footer style={{ background: '#4A5D23', color: '#fff' }}>
      {/* Top decorative bar */}
      <div style={{ height: 4, background: 'linear-gradient(90deg, #A3B18A, #6b8034, #A3B18A)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 32px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 44, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.12)' }}>

          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: '#fff', margin: '0 0 14px', fontWeight: 400 }}>ICPF</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.85, margin: '0 0 20px', fontFamily: 'Inter, sans-serif' }}>
              Inter Collegiate Prayer Fellowship – School of Youth Leadership. Developing mission-minded leaders for Christ.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 100, padding: '5px 14px' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#A3B18A' }} />
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 11, fontFamily: 'Inter, sans-serif', letterSpacing: 1 }}>Est. 1980 · Kerala</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#A3B18A', margin: '0 0 20px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
              {[['home','Home'],['syl-method','Method'],['application-form','Apply Now']].map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}
                    onClick={e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }}
                    style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, textDecoration: 'none', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                    onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                  >
                    <span style={{ color: '#A3B18A', fontSize: 12 }}>→</span> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#A3B18A', margin: '0 0 20px' }}>Contact</h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.85, fontFamily: 'Inter, sans-serif', margin: 0 }}>
              For inquiries about the SYL program, please reach out to your local ICPF staff or visit our offices at Mount Olive Counselling Centre, Pathanamthitta.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' as const, gap: 10 }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: 0, fontFamily: 'Inter, sans-serif' }}>
            © 2025 School of Youth Leadership · All rights reserved
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: 0, fontFamily: 'Inter, sans-serif' }}>
            Made with 🙏 for ICPF
          </p>
        </div>
      </div>
    </footer>
  );
}
