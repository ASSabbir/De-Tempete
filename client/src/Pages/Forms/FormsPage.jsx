// client/src/Pages/Forms/FormsPage.jsx
import { useEffect, useState } from 'react';
import API from '../../api/axios';
import DownloadButton from '../../Components/Shared/DownloadButton';
import PageHero from '../../Components/Shared/PageHero';

export default function FormsPage({ region, title }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    API.get(`/forms?region=${region}`)
      .then(({ data }) => setItems(data))
      .catch(() => setError('Failed to load forms'))
      .finally(() => setLoading(false));
  }, [region]);

  return (
    <div>
      <PageHero tag="Forms" title={<>Some Essential Resources<br />For Businesses</>} />

      {/* Content Section */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 40, fontWeight: 300, color: '#0f1f3d', marginBottom: 48 }}>
          {title} <strong style={{ fontWeight: 800 }}>Forms</strong>
        </h2>

        {error && <div style={{ padding: '14px 20px', background: '#fef2f2', color: '#dc2626', borderRadius: 8, marginBottom: 20 }}>{error}</div>}

        <div style={{ border: '1.5px solid #e2e8f0', borderRadius: 12, overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: 60, textAlign: 'center', color: '#9ca3af' }}>Loading...</div>
          ) : items.length === 0 ? (
            <div style={{ padding: 40, textAlign: 'center', color: '#9ca3af' }}>No forms found</div>
          ) : items.map((item, idx) => (
            <div key={item._id} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '18px 24px', gap: 24,
              borderBottom: idx < items.length - 1 ? '1px solid #f1f5f9' : 'none',
              transition: 'background 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#1a202c', marginBottom: 2 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#9ca3af' }}>Issuing Authority: {item.issuingAuthority}</div>
              </div>
             <DownloadButton resourceType="form" resourceId={item._id} label="Download" variant="outlined" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}