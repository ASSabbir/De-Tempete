import { useEffect, useState, useCallback } from 'react';
import API from '../api/axios';
import DataTable from '../components/DataTable';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'company', label: 'Company' },
  { key: 'resourceTitle', label: 'Resource' },
  { key: 'resourceType', label: 'Type' },
  { key: 'region', label: 'Region' },
  { key: 'createdAt', label: 'Date', render: v => new Date(v).toLocaleString() },
];

export default function Leads() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchItems = useCallback(async (pg = page) => {
    setLoading(true);
    try {
      const { data } = await API.get(`/leads/admin/all?page=${pg}&limit=30`);
      setItems(data.items);
      setTotal(data.total);
      setPages(data.pages);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => { fetchItems(page); }, [page]);

  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0f1f3d', marginBottom: 24 }}>
        Downloads / Leads ({total})
      </h2>
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: 60, textAlign: 'center', color: '#9ca3af' }}>Loading...</div>
        ) : (
          <DataTable columns={columns} data={items} />
        )}
      </div>
      {pages > 1 && (
        <div style={{ display: 'flex', gap: 8, marginTop: 16, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          {Array.from({ length: pages }, (_, i) => (
            <button key={i} onClick={() => setPage(i + 1)}
              style={{ padding: '6px 12px', background: page === i + 1 ? '#0f1f3d' : '#fff', color: page === i + 1 ? '#fff' : '#374151', border: '1px solid #d1d5db', borderRadius: 6, cursor: 'pointer' }}>
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}