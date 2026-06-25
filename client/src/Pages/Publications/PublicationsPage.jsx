// client/src/Pages/Publications/PublicationsPage.jsx
import { useEffect, useState } from 'react';
import API from '../../api/axios';
import DownloadButton from '../../Components/Shared/DownloadButton';
import PageHero from '../../Components/Shared/PageHero';

export default function PublicationsPage({ region, title }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    API.get(`/publications?region=${region}`)
      .then(({ data }) => setItems(data))
      .catch(() => setError('Failed to load publications'))
      .finally(() => setLoading(false));
  }, [region]);

  return (
    <div>
      <PageHero tag="Publications" title={<>Some Essential Resources<br />For Businesses</>} />

      {/* Content Section */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 40, fontWeight: 300, color: '#0f1f3d', marginBottom: 48 }}>
          {title} <strong style={{ fontWeight: 800 }}>Publications</strong>
        </h2>

        {error && <div style={{ padding: '14px 20px', background: '#fef2f2', color: '#dc2626', borderRadius: 8, marginBottom: 20 }}>{error}</div>}

        {loading ? (
          <div style={{ textAlign: 'center', padding: 60, color: '#9ca3af' }}>Loading...</div>
        ) : items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 60, color: '#9ca3af' }}>No publications found</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: 24 }}>
            {items.map(item => (
              <div key={item._id} style={{
                border: '1px solid #e2e8f0', borderRadius: 12, padding: 24,
                display: 'flex', gap: 20, alignItems: 'flex-start',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: 140, height: 190, objectFit: 'cover', borderRadius: 6, flexShrink: 0, border: '1px solid #e2e8f0', background: '#f8fafc' }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f1f3d', marginBottom: 8, lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#9ca3af', marginBottom: 20 }}>File Format: {item.fileFormat}</p>
                  <DownloadButton resourceType="publication" resourceId={item._id} label="Download Now" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}