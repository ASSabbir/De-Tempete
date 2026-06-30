import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import skylineImg from '../../asstes/images/de-tempete.webp';

export default function NewsEventsHero({ title, subtitle, cta }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#0f1f3d',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${skylineImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(15,31,61,0.55) 0%, rgba(15,31,61,0.75) 60%, rgba(15,31,61,0.92) 100%)',
      }} />

      <div style={{
        position: 'relative',
        textAlign: 'center',
        maxWidth: 760,
        padding: '160px 24px 100px',
      }}>
        <h1 style={{
          fontSize: 56,
          fontWeight: 800,
          color: '#fff',
          margin: '0 0 24px',
          lineHeight: 1.15,
          transform: visible ? 'translateY(0)' : 'translateY(-30px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease',
        }}>
          {title}
        </h1>

        {subtitle && (
          <p style={{
            fontSize: 17,
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.7,
            margin: '0 0 36px',
            transform: visible ? 'translateY(0)' : 'translateY(-20px)',
            opacity: visible ? 1 : 0,
            transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, opacity 0.7s ease 0.12s',
          }}>
            {subtitle}
          </p>
        )}

        {cta && (
          <div style={{
            transform: visible ? 'translateY(0)' : 'translateY(-12px)',
            opacity: visible ? 1 : 0,
            transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.24s, opacity 0.7s ease 0.24s',
          }}>
            <Link to={cta.to} style={{
              display: 'inline-block',
              padding: '14px 34px',
              border: '1.5px solid #fff',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 15,
            }}>
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}