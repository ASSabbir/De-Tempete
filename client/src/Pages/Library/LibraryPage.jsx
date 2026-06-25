// client/src/Pages/Library/LibraryPage.jsx
import { useEffect, useState, useCallback, useRef } from 'react';
import API from '../../api/axios';
import SearchBar from '../../Components/Shared/SearchBar';
import DownloadButton from '../../Components/Shared/DownloadButton';
import PageHero from '../../Components/Shared/PageHero';

const DEBOUNCE = 400;

export default function LibraryPage({ region, title }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const debounceRef = useRef(null);
  const latestReq = useRef(0);

  useEffect(() => {
    API.get(`/library/categories?region=${region}`)
      .then(({ data }) => setCategories(data))
      .catch(() => {});
  }, [region]);

  const fetchItems = useCallback(async (search, cat, pg) => {
    const reqId = ++latestReq.current;
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams({ region, page: pg, limit: 20 });
      if (search) params.set('q', search);
      if (cat) params.set('category', cat);
      const { data } = await API.get(`/library?${params}`);
      if (reqId !== latestReq.current) return;
      setItems(data.items);
      setTotal(data.total);
      setPages(data.pages);
    } catch {
      if (reqId !== latestReq.current) return;
      setError('Failed to load items');
    } finally {
      if (reqId === latestReq.current) setLoading(false);
    }
  }, [region]);

  useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setPage(1);
      fetchItems(q, category, 1);
    }, DEBOUNCE);
    return () => clearTimeout(debounceRef.current);
  }, [q, category, fetchItems]);

  const goToPage = useCallback((pg) => {
    setPage(pg);
    fetchItems(q, category, pg);
  }, [q, category, fetchItems]);

  return (
    <div>
      <PageHero tag="Library" title={<>Some Essential Resources<br />For Businesses</>} />

      {/* Content Section */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 40, fontWeight: 300, color: '#0f1f3d', marginBottom: 48 }}>
          {title} <strong style={{ fontWeight: 800 }}>Library</strong>
        </h2>

        <div style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <SearchBar value={q} onChange={setQ} placeholder="Type to start searching..." />
          </div>
          <select value={category} onChange={e => setCategory(e.target.value)}
            style={{ padding: '14px 16px', border: '1.5px solid #d1d5db', borderRadius: 8, fontSize: 14, minWidth: 160, cursor: 'pointer', outline: 'none' }}>
            <option value="">All Categories</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {error && <div style={{ padding: '14px 20px', background: '#fef2f2', color: '#dc2626', borderRadius: 8, marginBottom: 20 }}>{error}</div>}

        <div style={{ border: '1.5px solid #e2e8f0', borderRadius: 12, overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: 60, textAlign: 'center', color: '#9ca3af' }}>Loading...</div>
          ) : items.length === 0 ? (
            <div style={{ padding: 60, textAlign: 'center', color: '#9ca3af' }}>No results found</div>
          ) : items.map((item, idx) => (
            <div key={item._id} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '20px 28px', gap: 24,
              borderBottom: idx < items.length - 1 ? '1px solid #f1f5f9' : 'none',
              transition: 'background 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#1e40af', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#6b7280' }}>Issuing Authority: {item.issuingAuthority}</div>
                <div style={{ fontSize: 13, color: '#6b7280', display: 'flex', gap: 20, marginTop: 2, flexWrap: 'wrap' }}>
                  <span>Category: {item.category}</span>
                  <span>Issue Date: {new Date(item.issueDate).toLocaleDateString('en-US')}</span>
                </div>
              </div>
              <div style={{ flexShrink: 0 }}>
                <DownloadButton resourceType="library" resourceId={item._id} label="Download" />
              </div>
            </div>
          ))}
        </div>

        {pages > 1 && (
          <div style={{ display: 'flex', gap: 8, marginTop: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            {Array.from({ length: pages }, (_, i) => (
              <button key={i} onClick={() => goToPage(i + 1)}
                style={{
                  padding: '8px 14px',
                  background: page === i + 1 ? '#0f1f3d' : '#fff',
                  color: page === i + 1 ? '#fff' : '#374151',
                  border: '1px solid #d1d5db', borderRadius: 6, cursor: 'pointer',
                  fontWeight: page === i + 1 ? 700 : 400,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  if (page !== i + 1) {
                    e.currentTarget.style.borderColor = '#0f1f3d';
                    e.currentTarget.style.background = '#f8fafc';
                  }
                }}
                onMouseLeave={e => {
                  if (page !== i + 1) {
                    e.currentTarget.style.borderColor = '#d1d5db';
                    e.currentTarget.style.background = '#fff';
                  }
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