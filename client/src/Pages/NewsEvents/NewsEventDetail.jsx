import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import API from '../../api/axios';

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

function renderDescription(text) {
  const blocks = text.split(/\n\s*\n/);
  return blocks.map((block, i) => {
    const lines = block.split('\n').filter(Boolean);
    const isList = lines.length > 0 && lines.every(l => l.trim().startsWith('- '));
    if (isList) {
      return (
        <ul key={i} style={{ margin: '0 0 20px', paddingLeft: 22, color: '#374151', fontSize: 15, lineHeight: 1.8 }}>
          {lines.map((l, j) => <li key={j}>{l.trim().replace(/^- /, '')}</li>)}
        </ul>
      );
    }
    return (
      <p key={i} style={{ margin: '0 0 20px', color: '#374151', fontSize: 15, lineHeight: 1.8 }}>
        {block}
      </p>
    );
  });
}

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

  return (
    <div>
      {/* Hero with cover image */}
      <section style={{ position: 'relative', minHeight: 420, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src={item.coverImage} alt={item.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,31,61,0.15) 0%, rgba(15,31,61,0.85) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '60px 24px 50px', width: '100%' }}>
          <h1 style={{ fontSize: 42, fontWeight: 800, color: '#fff', marginBottom: 16 }}>{item.title}</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', maxWidth: 700, lineHeight: 1.6 }}>{item.excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#4a9eff', marginBottom: 8 }}>Details</div>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: '#0f1f3d', marginBottom: 28 }}>About the Event</h2>

          {renderDescription(item.description)}

          {item.galleryImages?.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginTop: 32 }}>
              {item.galleryImages.map((img, i) => (
                <img key={i} src={img} alt={`${item.title} gallery ${i + 1}`} loading="lazy"
                  style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 8, background: '#f3f4f6' }} />
              ))}
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
                  <img src={r.coverImage} alt={r.title} loading="lazy"
                    style={{ width: '100%', height: 150, objectFit: 'cover', background: '#f3f4f6' }} />
                  <div style={{ padding: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#0f1f3d', fontSize: 12, marginBottom: 8 }}>
                      <CalendarIcon />
                      {new Date(r.eventDate).toLocaleDateString('en-GB')}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#0f1f3d', marginBottom: 8, lineHeight: 1.3 }}>{r.title}</div>
                    <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 12, lineHeight: 1.5 }}>{r.excerpt}</div>
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
    </div>
  );
}