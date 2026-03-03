export function AboutSection() {
  return (
    <section style={{ background: '#fff', padding: '88px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>

          {/* Left */}
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(163,177,138,0.15)', border: '1px solid rgba(163,177,138,0.3)', borderRadius: 6, padding: '5px 14px', marginBottom: 20 }}>
              <span style={{ color: '#4A5D23', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, fontFamily: 'Inter, sans-serif' }}>Our Vision</span>
            </div>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(38px,5vw,58px)', color: '#4A5D23', margin: '0 0 20px', lineHeight: 1.1, fontWeight: 400 }}>
              Empowering the <br />
              <span style={{ fontStyle: 'italic', color: '#7a9440' }}>Next Generation</span>
            </h2>
            <div style={{ width: 56, height: 4, background: '#4A5D23', borderRadius: 100, marginBottom: 32 }} />
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' as const }}>
              {[['40+','Years of Ministry'],['1000+','Students Impacted'],['Est.','1980']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, color: '#4A5D23', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#888', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: '#555', lineHeight: 1.9, marginBottom: 28 }}>
              <span style={{ float: 'left' as const, fontFamily: "'Instrument Serif', serif", fontSize: 72, color: '#4A5D23', lineHeight: 0.75, marginRight: 8, marginTop: 12 }}>T</span>
              he School of Youth Leadership (SYL) is committed to developing the next generation of mission-minded leaders who will transform colleges, workplaces, and communities across the nation.
            </p>
            <div style={{ borderLeft: '3px solid #A3B18A', paddingLeft: 20, margin: '28px 0', fontFamily: "'Instrument Serif', serif", fontSize: 18, color: '#666', fontStyle: 'italic', lineHeight: 1.75 }}>
              "We believe that when young people are deeply rooted in Christ, they become powerful instruments of transformation in every sphere of society."
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#555', lineHeight: 1.9, marginBottom: 28 }}>
              Through intentional discipleship, biblical teaching, and hands-on ministry experience, SYL prepares students to become catalysts for Kingdom advancement.
            </p>
            <button
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'transparent', color: '#4A5D23', border: '1.5px solid #4A5D23', padding: '11px 28px', borderRadius: 100, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseOver={e => { e.currentTarget.style.background = '#4A5D23'; e.currentTarget.style.color = '#fff'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4A5D23'; }}
            >Apply Now →</button>
          </div>

        </div>
      </div>
    </section>
  );
}
