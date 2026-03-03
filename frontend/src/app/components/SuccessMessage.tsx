interface SuccessMessageProps {
  onClose: () => void;
}

export function SuccessMessage({ onClose }: SuccessMessageProps) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', padding: 24 }}>
      <div style={{ background: '#fff', borderRadius: 28, padding: '56px 44px', maxWidth: 460, width: '100%', boxShadow: '0 32px 80px rgba(0,0,0,0.2)', textAlign: 'center', position: 'relative' }}>

        {/* Close */}
        <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, background: '#f5f3ef', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', fontSize: 16, color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
          onMouseOver={e => (e.currentTarget.style.background = '#ebe8e2')}
          onMouseOut={e => (e.currentTarget.style.background = '#f5f3ef')}>✕</button>

        {/* Icon */}
        <div style={{ width: 84, height: 84, background: 'linear-gradient(135deg,#4A5D23,#6b8034)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', boxShadow: '0 8px 24px rgba(74,93,35,0.3)' }}>
          <span style={{ color: '#fff', fontSize: 36 }}>✓</span>
        </div>

        {/* Divider */}
        <div style={{ width: 48, height: 3, background: '#A3B18A', borderRadius: 100, margin: '0 auto 24px' }} />

        <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 34, color: '#4A5D23', margin: '0 0 14px', fontWeight: 400 }}>
          Application Received!
        </h3>
        <p style={{ color: '#666', lineHeight: 1.85, marginBottom: 10, fontSize: 16, fontFamily: 'Inter, sans-serif' }}>
          Thank you for applying to SYL 2025. Your mission starts here!
        </p>
        <p style={{ color: '#A3B18A', fontWeight: 600, fontSize: 15, marginBottom: 32, fontFamily: 'Inter, sans-serif' }}>
          🙏 God bless you!
        </p>

        {/* Info box */}
        <div style={{ background: 'rgba(74,93,35,0.05)', border: '1px solid rgba(74,93,35,0.12)', borderRadius: 14, padding: '16px 20px', marginBottom: 28 }}>
          <p style={{ color: '#4A5D23', fontSize: 14, margin: 0, lineHeight: 1.75, fontFamily: 'Inter, sans-serif' }}>
            We'll contact you via WhatsApp and Email with further details about SYL 2025.
          </p>
        </div>

        <button onClick={onClose} style={{ background: '#4A5D23', color: '#fff', border: 'none', padding: '14px', borderRadius: 100, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 15, cursor: 'pointer', width: '100%', boxShadow: '0 4px 16px rgba(74,93,35,0.28)', transition: 'all 0.2s' }}
          onMouseOver={e => { e.currentTarget.style.background = '#3d4e1d'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseOut={e => { e.currentTarget.style.background = '#4A5D23'; e.currentTarget.style.transform = 'translateY(0)'; }}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
