import { useState, useEffect } from 'react';
import logo from "../../assets/113b9760dca95ce0969b43463d5d6df40182d606.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: isScrolled ? 'rgba(249,249,247,0.97)' : '#F9F9F7',
      backdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${isScrolled ? 'rgba(74,93,35,0.12)' : 'rgba(74,93,35,0.08)'}`,
      boxShadow: isScrolled ? '0 4px 24px rgba(74,93,35,0.08)' : 'none',
      transition: 'all 0.3s ease',
      padding: isScrolled ? '8px 0' : '14px 0',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="ICPF Logo" style={{ height: 52, width: 'auto', objectFit: 'contain', transition: 'opacity 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          {[['home','Home'],['syl-method','Method']].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', fontSize: 13, fontWeight: 600,
              letterSpacing: 1.5, textTransform: 'uppercase' as const, color: '#666',
              cursor: 'pointer', fontFamily: 'Inter, sans-serif',
              padding: '4px 0', borderBottom: '2px solid transparent', transition: 'all 0.2s',
            }}
              onMouseOver={e => { e.currentTarget.style.color = '#4A5D23'; e.currentTarget.style.borderBottomColor = '#4A5D23'; }}
              onMouseOut={e => { e.currentTarget.style.color = '#666'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
            >{label}</button>
          ))}
          <button onClick={() => scrollTo('application-form')} style={{
            background: '#4A5D23', color: '#fff', border: 'none',
            padding: '11px 28px', borderRadius: 100,
            fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 13,
            letterSpacing: 1, textTransform: 'uppercase' as const, cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(74,93,35,0.25)', transition: 'all 0.2s',
          }}
            onMouseOver={e => { e.currentTarget.style.background = '#3d4e1d'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(74,93,35,0.35)'; }}
            onMouseOut={e => { e.currentTarget.style.background = '#4A5D23'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(74,93,35,0.25)'; }}
          >Join Now</button>
        </nav>
      </div>
    </header>
  );
}
