import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import heroImg from '../../asstes/images/de-tempete.webp';
export default function PageHero({ tag, title, subtitle, cta }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        background: '#16224a',
        overflow: 'hidden',
        minHeight: 480,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* left-to-right fade so text stays readable, image stays visible on right */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, #0f1f3d 0%, #16224a 30%, rgba(22,34,74,0.55) 55%, rgba(22,34,74,0.15) 75%, transparent 100%)',
      }} />

      <div style={{ position: 'relative', width: '100%', maxWidth: 1320, margin: '0 auto', padding: '120px 60px' }}>
        <div style={{
          position: 'relative',
          paddingLeft: 28,
          maxWidth: 620,
          overflow: 'hidden',
        }}>
          {/* vertical bar — slides in from left */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 4,
            bottom: 4,
            width: 3,
            background: '#4a9eff',
            transform: visible ? 'scaleY(1)' : 'scaleY(0)',
            transformOrigin: 'top',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }} />

          <div style={{
            transform: visible ? 'translateX(0)' : 'translateX(-40px)',
            opacity: visible ? 1 : 0,
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, opacity 0.6s ease 0.15s',
          }}>
            <div style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#4a9eff',
              marginBottom: 16,
              letterSpacing: '0.02em',
            }}>
              // {tag}
            </div>
            <h1 style={{
              fontSize: 44,
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              margin: 0,
            }}>
              {title}
            </h1>
            {subtitle && (
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginTop: 20, maxWidth: 560 }}>
                {subtitle}
              </p>
            )}
            {cta && (
              <Link to={cta.to} style={{
                display: 'inline-block', marginTop: 28, padding: '13px 30px',
                border: '1.5px solid #fff', color: '#fff', textDecoration: 'none',
                borderRadius: 6, fontWeight: 700, fontSize: 14,
              }}>
                {cta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}