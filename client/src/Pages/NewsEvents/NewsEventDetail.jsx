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
      <section className="ned-hero">
        {heroImage && (
          <img src={heroImage} alt={item.title} className="ned-hero-img" />
        )}
        <div className="ned-hero-overlay" />
        <div className="ned-hero-inner">
          <h1 className="ned-title">{item.title}</h1>
          <p className="ned-excerpt">{excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <section className="ned-content-grid">
        <div>
          <div className="ned-eyebrow">Details</div>
          <h2 className="ned-heading">About the Event</h2>

          <div className="rich-content" dangerouslySetInnerHTML={{ __html: item.description || '' }} />
          {item.description2 && (
            <div className="rich-content" style={{ marginTop: 8 }} dangerouslySetInnerHTML={{ __html: item.description2 }} />
          )}
          {item.description3 && (
            <div className="rich-content" style={{ marginTop: 8 }} dangerouslySetInnerHTML={{ __html: item.description3 }} />
          )}

          {galleryImages.length > 0 && (
            <div className="ned-gallery-wrap">
              <div className="ned-eyebrow" style={{ marginBottom: 16 }}>
                Gallery
              </div>
              <div className="ned-gallery-grid">
                {galleryImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${item.title} gallery ${i + 1}`}
                    loading="lazy"
                    className="ned-gallery-img"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="ned-aside">
          <h3 className="ned-aside-title">Recent</h3>
          <div className="ned-aside-list">
            {recent.map(r => (
              <Link key={r._id} to={`/news-events/${r.slug}`} style={{ textDecoration: 'none' }}>
                <div className="ned-card">
                  <img src={r.images?.[0]} alt={r.title} loading="lazy" className="ned-card-img" />
                  <div className="ned-card-body">
                    <div className="ned-card-date">
                      <CalendarIcon />
                      {new Date(r.eventDate).toLocaleDateString('en-GB')}
                    </div>
                    <div className="ned-card-title">{r.title}</div>
                    <div className="ned-card-desc">{stripHtml(r.description, 90)}</div>
                    <span className="ned-card-btn">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <style>{`
        /* ---------- Hero (mobile-first base) ---------- */
        .ned-hero {
          position: relative;
          min-height: 260px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .ned-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .ned-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15,31,61,0.15) 0%, rgba(15,31,61,0.85) 100%);
        }
        .ned-hero-inner {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 16px 28px;
          width: 100%;
        }
        .ned-title {
          font-size: 26px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.25;
        }
        .ned-excerpt {
          font-size: 14px;
          color: rgba(255,255,255,0.9);
          max-width: 700px;
          line-height: 1.6;
        }

        /* ---------- Content layout ---------- */
        .ned-content-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 36px 16px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
        }
        .ned-eyebrow {
          font-size: 13px;
          font-weight: 700;
          color: #4a9eff;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .ned-heading {
          font-size: 24px;
          font-weight: 800;
          color: #0f1f3d;
          margin-bottom: 22px;
        }

        /* ---------- Gallery ---------- */
        .ned-gallery-wrap { margin-top: 36px; }
        .ned-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
        }
        .ned-gallery-img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 10px;
          background: #f3f4f6;
          box-shadow: 0 1px 6px rgba(0,0,0,0.06);
        }

        /* ---------- Aside / Recent ---------- */
        .ned-aside-title { font-size: 20px; font-weight: 800; color: #0f1f3d; margin-bottom: 16px; }
        .ned-aside-list { display: flex; flex-direction: column; gap: 16px; }
        .ned-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }
        .ned-card-img { width: 100%; height: 150px; object-fit: cover; background: #f3f4f6; }
        .ned-card-body { padding: 14px; }
        .ned-card-date { display: flex; align-items: center; gap: 6px; color: #0f1f3d; font-size: 12px; margin-bottom: 8px; }
        .ned-card-title { font-size: 15px; font-weight: 700; color: #0f1f3d; margin-bottom: 8px; line-height: 1.3; }
        .ned-card-desc { font-size: 13px; color: #6b7280; margin-bottom: 12px; line-height: 1.5; }
        .ned-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          background: #4fd1e8;
          color: #0f1f3d;
          border-radius: 6px;
          font-weight: 700;
          font-size: 13px;
        }

        /* ---------- Tablet (>=768px) ---------- */
        @media (min-width: 768px) {
          .ned-hero { min-height: 340px; }
          .ned-hero-inner { padding: 48px 24px 40px; }
          .ned-title { font-size: 34px; }
          .ned-excerpt { font-size: 15px; }
          .ned-content-grid { padding: 48px 24px; gap: 40px; }
          .ned-heading { font-size: 27px; }
          .ned-gallery-grid { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; }
          .ned-gallery-img { height: 150px; }
        }

        /* ---------- Laptop / Desktop (>=1024px) ---------- */
        @media (min-width: 1024px) {
          .ned-hero { min-height: 420px; }
          .ned-hero-inner { padding: 60px 24px 50px; }
          .ned-title { font-size: 42px; }
          .ned-excerpt { font-size: 16px; }
          .ned-content-grid {
            grid-template-columns: 1fr 340px;
            padding: 60px 24px;
            gap: 48px;
          }
          .ned-heading { font-size: 30px; }
          .ned-gallery-grid { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; }
          .ned-gallery-img { height: 160px; }
        }

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