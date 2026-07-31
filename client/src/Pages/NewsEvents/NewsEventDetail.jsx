import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import API from '../../api/axios';
import { stripHtml } from '../../utils/stripHtml';

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export default function NewsEventDetail() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    Promise.all([
      API.get(`/news-events/${slug}`),
      API.get(`/news-events/recent?exclude=${slug}`),
    ])
      .then(([detail, rec]) => {
        setItem(detail.data);
        setRecent(rec.data);
      })
      .catch(() => setError('Event not found'))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div style={{ padding: 100, textAlign: 'center', color: '#9ca3af' }}>Loading...</div>;
  if (error || !item) return <div style={{ padding: 100, textAlign: 'center', color: '#dc2626' }}>{error || 'Not found'}</div>;

  const heroImage = item.images?.[0];
  const galleryImages = item.images?.slice(1) || [];
  const excerpt = stripHtml(item.description, 180);

  return (
    <div>
      {/* Hero with cover image */}
      <section style={{ position: 'relative', minHeight: 420, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        {heroImage && (
          <img src={heroImage} alt={item.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,31,61,0.15) 0%, rgba(15,31,61,0.85) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '60px 24px 50px', width: '100%' }}>
          <h1 style={{ fontSize: 42, fontWeight: 800, color: '#fff', marginBottom: 16 }}>{item.title}</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', maxWidth: 700, lineHeight: 1.6 }}>{excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#4a9eff', marginBottom: 8, letterSpacing: 0.5, textTransform: 'uppercase' }}>Details</div>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: '#0f1f3d', marginBottom: 28 }}>About the Event</h2>

          <div className="rich-content" dangerouslySetInnerHTML={{ __html: item.description || '' }} />
          {item.description2 && (
            <div className="rich-content" style={{ marginTop: 8 }} dangerouslySetInnerHTML={{ __html: item.description2 }} />
          )}
          {item.description3 && (
            <div className="rich-content" style={{ marginTop: 8 }} dangerouslySetInnerHTML={{ __html: item.description3 }} />
          )}

          {galleryImages.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#4a9eff', marginBottom: 16, letterSpacing: 0.5, textTransform: 'uppercase' }}>
                Gallery
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
                {galleryImages.map((img, i) => (
                  <img key={i} src={img} alt={`${item.title} gallery ${i + 1}`} loading="lazy"
                    style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 10, background: '#f3f4f6', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }} />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0f1f3d', marginBottom: 20 }}>Recent</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {recent.map(r => (
              <Link key={r._id} to={`/news-events/${r.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}>
                  <img src={r.images?.[0]} alt={r.title} loading="lazy"
                    style={{ width: '100%', height: 150, objectFit: 'cover', background: '#f3f4f6' }} />
                  <div style={{ padding: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#0f1f3d', fontSize: 12, marginBottom: 8 }}>
                      <CalendarIcon />
                      {new Date(r.eventDate).toLocaleDateString('en-GB')}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#0f1f3d', marginBottom: 8, lineHeight: 1.3 }}>{r.title}</div>
                    <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 12, lineHeight: 1.5 }}>{stripHtml(r.description, 90)}</div>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '7px 14px', background: '#4fd1e8', color: '#0f1f3d', borderRadius: 6,
                      fontWeight: 700, fontSize: 13,
                    }}>
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <style>{`
        .rich-content { font-size: 15px; color: #374151; line-height: 1.8; }
        .rich-content p { margin: 0 0 20px; }
        .rich-content h2 { font-size: 24px; font-weight: 800; color: #0f1f3d; margin: 28px 0 14px; }
        .rich-content h3 { font-size: 20px; font-weight: 700; color: #0f1f3d; margin: 24px 0 12px; }

        /* Custom diamond bullets instead of default browser dots — Tailwind's
           preflight resets ul/ol to list-style:none app-wide, so we build our own. */
        .rich-content ul {
          list-style: none;
          margin: 0 0 20px;
          padding: 0;
        }
        .rich-content ul li {
          position: relative;
          padding-left: 26px;
          margin-bottom: 10px;
        }
        .rich-content ul li::before {
          content: '';
          position: absolute;
          left: 4px;
          top: 8px;
          width: 8px;
          height: 8px;
          background: #4a9eff;
          transform: rotate(45deg);
          border-radius: 2px;
        }

        /* Custom numbered badges for ordered lists */
        .rich-content ol {
          list-style: none;
          counter-reset: rc-counter;
          margin: 0 0 20px;
          padding: 0;
        }
        .rich-content ol li {
          counter-increment: rc-counter;
          position: relative;
          padding-left: 32px;
          margin-bottom: 10px;
        }
        .rich-content ol li::before {
          content: counter(rc-counter);
          position: absolute;
          left: 0;
          top: 0;
          width: 21px;
          height: 21px;
          line-height: 21px;
          text-align: center;
          background: #0f1f3d;
          color: #fff;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 700;
        }

        .rich-content blockquote { border-left: 3px solid #4a9eff; margin: 20px 0; padding: 4px 0 4px 18px; color: #4b5563; font-style: italic; }
        .rich-content strong { font-weight: 700; color: #0f1f3d; }
      `}</style>
    </div>
  );
}