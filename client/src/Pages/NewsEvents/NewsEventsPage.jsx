import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router';
import API from '../../api/axios';
import NewsEventsHero from '../../Components/Shared/NewsEventsHero';

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export default function NewsEventsPage() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchItems = useCallback(async (pg) => {
    setLoading(true);
    try {
      const { data } = await API.get(`/news-events?page=${pg}&limit=20`);
      setItems(data.items);
      setPages(data.pages);
    } catch {
      setError('Failed to load');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchItems(page); }, [page, fetchItems]);

  return (
    <div>
      <NewsEventsHero
        title="News & Events"
        subtitle="Outsourcing accounting services can provide startups with cost-effective, expert support, enabling them to better manage their finances and focus on business growth"
        cta={{ label: 'Start Now', to: '/contact' }}
      />

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '70px 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 36, fontWeight: 800, color: '#0f1f3d', marginBottom: 20 }}>
          Strategic Engagements
        </h2>
        <p style={{ textAlign: 'center', fontSize: 15, color: '#6b7280', maxWidth: 760, margin: '0 auto 48px', lineHeight: 1.7 }}>
          <strong style={{ fontStyle: 'italic', color: '#374151' }}>de tempête</strong> actively participates in and hosts international forums, business summits, trade exhibitions, and strategic networking platforms across global markets. These engagements reflect the brand's commitment to industry collaboration, international partnerships, innovation, and long-term business growth.
        </p>

        {error && <div style={{ padding: '14px 20px', background: '#fef2f2', color: '#dc2626', borderRadius: 8, marginBottom: 20 }}>{error}</div>}

        {loading ? (
          <div style={{ textAlign: 'center', padding: 60, color: '#9ca3af' }}>Loading...</div>
        ) : items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 60, color: '#9ca3af' }}>No news or events found</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {items.map(item => (
              <div key={item._id} style={{
                background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)', transition: 'all 0.25s', display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <img src={item.coverImage} alt={item.title} loading="lazy"
                  style={{ width: '100%', height: 190, objectFit: 'cover', background: '#f3f4f6' }} />
                <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#0f1f3d', fontSize: 13, marginBottom: 10 }}>
                    <CalendarIcon />
                    {new Date(item.eventDate).toLocaleDateString('en-GB')}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f1f3d', marginBottom: 10, lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 18, lineHeight: 1.5, flex: 1 }}>{item.excerpt}</p>
                  <Link to={`/news-events/${item.slug}`} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6, alignSelf: 'flex-start',
                    padding: '9px 18px', background: '#4fd1e8', color: '#0f1f3d', borderRadius: 6,
                    textDecoration: 'none', fontWeight: 700, fontSize: 14,
                  }}>
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {pages > 1 && (
          <div style={{ display: 'flex', gap: 8, marginTop: 36, justifyContent: 'center', flexWrap: 'wrap' }}>
            {Array.from({ length: pages }, (_, i) => (
              <button key={i} onClick={() => setPage(i + 1)}
                style={{
                  padding: '8px 14px',
                  background: page === i + 1 ? '#0f1f3d' : '#fff',
                  color: page === i + 1 ? '#fff' : '#374151',
                  border: '1px solid #d1d5db', borderRadius: 6, cursor: 'pointer',
                  fontWeight: page === i + 1 ? 700 : 400,
                }}>
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}