import heroImage from "../../assets/fb1ee411c93617ca46398d49b25ec79cecaf6cd2.png";

export function HeroSection() {
  return (
    <section style={{ background: '#F9F9F7', overflow: 'hidden' }}>

      {/* ── HERO TEXT AREA ── */}
      <div style={{ position: 'relative', padding: '72px 32px 60px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: 340, height: 340, background: 'rgba(163,177,138,0.13)', borderRadius: '50%', filter: 'blur(70px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: 260, height: 260, background: 'rgba(74,93,35,0.07)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(74,93,35,0.08)', border: '1px solid rgba(74,93,35,0.15)', borderRadius: 100, padding: '6px 20px', marginBottom: 32 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4A5D23' }} />
            <span style={{ color: '#4A5D23', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>Equipping Tomorrow's Leaders · Est. 1980</span>
          </div>

          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(44px,7vw,88px)', color: '#4A5D23', margin: '0 0 4px', lineHeight: 1.05, letterSpacing: -1, fontWeight: 400 }}>
            ICPF – School of
          </h1>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(44px,7vw,88px)', color: '#4A5D23', fontStyle: 'italic', margin: '0 0 28px', lineHeight: 1.05, letterSpacing: -1, fontWeight: 400 }}>
            Youth Leadership
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 28 }}>
            <div style={{ width: 60, height: 1, background: 'rgba(74,93,35,0.2)' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#A3B18A' }} />
            <div style={{ width: 60, height: 1, background: 'rgba(74,93,35,0.2)' }} />
          </div>

          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, color: '#666', lineHeight: 1.85, maxWidth: 580, margin: '0 auto 44px' }}>
            Developing Christian disciples among students to carry out the Great Commission of Jesus Christ in the Colleges and Universities.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: '#4A5D23', color: '#fff', border: 'none', padding: '14px 36px', borderRadius: 100, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: 0.5, cursor: 'pointer', boxShadow: '0 6px 20px rgba(74,93,35,0.28)', transition: 'all 0.2s' }}
              onMouseOver={e => { e.currentTarget.style.background = '#3d4e1d'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={e => { e.currentTarget.style.background = '#4A5D23'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              Apply for SYL 2025
            </button>
            <button onClick={() => document.getElementById('syl-method')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'transparent', color: '#4A5D23', border: '1.5px solid rgba(74,93,35,0.3)', padding: '14px 32px', borderRadius: 100, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = '#4A5D23'; e.currentTarget.style.background = 'rgba(74,93,35,0.05)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(74,93,35,0.3)'; e.currentTarget.style.background = 'transparent'; }}>
              Learn More ↓
            </button>
          </div>
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px 80px' }}>
        <div style={{ position: 'relative', borderRadius: 28, overflow: 'hidden', boxShadow: '0 32px 80px rgba(74,93,35,0.18), 0 8px 20px rgba(0,0,0,0.08)', border: '1px solid rgba(163,177,138,0.2)' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: 'linear-gradient(90deg,#4A5D23,#A3B18A,#4A5D23)', zIndex: 2 }} />
          <img src={heroImage} alt="ICPF Community" style={{ width: '100%', height: 'clamp(260px,42vw,540px)', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,34,9,0.55) 0%, transparent 45%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ color: '#fff', fontFamily: "'Instrument Serif', serif", fontSize: 22, marginBottom: 4 }}></div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif', fontSize: 13 }}></div>
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              {[['Est.','1980'],['Mission','Nationwide']].map(([l,v]) => (
                <div key={l} style={{ textAlign: 'center' }}>
                  <div style={{ color: '#A3B18A', fontFamily: "'Instrument Serif', serif", fontSize: 20 }}>{v}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11, fontFamily: 'Inter, sans-serif', letterSpacing: 1 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
