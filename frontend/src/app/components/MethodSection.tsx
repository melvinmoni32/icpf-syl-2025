import { Sprout, Send, Users } from 'lucide-react';

export function MethodSection() {
  const methods = [
    {
      Icon: Sprout,
      title: 'Grow',
      subtitle: 'Identify',
      number: '01',
      description: 'We identify passionate young believers who demonstrate a heart for mission and a desire to grow in their faith. Through careful assessment and prayer, we recognize those whom God is calling to this transformative journey.'
    },
    {
      Icon: Send,
      title: 'Go',
      subtitle: 'Inspire & Equip',
      number: '02',
      description: "We inspire students with a compelling vision for God's Kingdom and equip them with biblical knowledge, leadership skills, and practical ministry training. Our comprehensive curriculum prepares them to serve effectively in any context."
    },
    {
      Icon: Users,
      title: 'Guide',
      subtitle: 'Induct',
      number: '03',
      description: 'We induct graduates into active ministry roles, providing ongoing mentorship and support as they step into their calling. Our network of leaders ensures that every SYL graduate is connected to meaningful opportunities for Kingdom impact.'
    }
  ];

  return (
    <section id="syl-method" style={{ background: '#F9F9F7', padding: '88px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'inline-block', background: 'rgba(74,93,35,0.08)', border: '1px solid rgba(74,93,35,0.15)', borderRadius: 6, padding: '5px 14px', marginBottom: 18 }}>
            <span style={{ color: '#4A5D23', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, fontFamily: 'Inter, sans-serif' }}>Our Approach</span>
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(36px,5vw,56px)', color: '#4A5D23', margin: '0 0 16px', fontWeight: 400 }}>
            The SYL <span style={{ fontStyle: 'italic' }}>Method</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <div style={{ width: 40, height: 1, background: 'rgba(74,93,35,0.2)' }} />
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#A3B18A' }} />
            <div style={{ width: 40, height: 1, background: 'rgba(74,93,35,0.2)' }} />
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 24 }}>
          {methods.map(({ Icon, title, subtitle, number, description }, i) => (
            <div key={i}
              style={{ background: '#fff', border: '1px solid rgba(163,177,138,0.25)', borderRadius: 20, padding: '36px 32px', position: 'relative', overflow: 'hidden', transition: 'all 0.25s', cursor: 'default' }}
              onMouseOver={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(74,93,35,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(163,177,138,0.5)'; }}
              onMouseOut={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(163,177,138,0.25)'; }}
            >
              {/* Big faint number */}
              <div style={{ position: 'absolute', top: 16, right: 24, fontFamily: "'Instrument Serif', serif", fontSize: 72, color: 'rgba(163,177,138,0.15)', lineHeight: 1, userSelect: 'none' as const }}>
                {number}
              </div>

              {/* Icon */}
              <div style={{ width: 56, height: 56, background: 'rgba(163,177,138,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <Icon size={26} color="#4A5D23" />
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: '#4A5D23', margin: '0 0 6px', fontWeight: 400 }}>
                {title}
              </h3>

              {/* Subtitle */}
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#A3B18A', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, margin: '0 0 16px' }}>
                {subtitle}
              </p>

              {/* Divider */}
              <div style={{ width: 36, height: 2, background: 'rgba(163,177,138,0.5)', borderRadius: 100, marginBottom: 16 }} />

              {/* Description */}
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#666', lineHeight: 1.85, margin: 0 }}>
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
