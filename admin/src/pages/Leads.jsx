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

// Turns a value into a safe CSV cell (quotes it if it contains a comma, quote, or newline).
const toCsvCell = (value) => {
  const str = value === null || value === undefined ? '' : String(value);
  if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
};

export default function Leads() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);

  const fetchItems = useCallback(async (pg) => {
    setLoading(true);
    try {
      const { data } = await API.get(`/leads/admin/all?page=${pg}&limit=30`);
      setItems(data.items);
      setTotal(data.total);
      setPages(data.pages);
    } finally {
      setLoading(false);
    }
  }, []);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { fetchItems(page); }, [page, fetchItems]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this lead? This cannot be undone.')) return;
    try {
      await API.delete(`/leads/${id}`);
      // if we just deleted the last row on a page beyond page 1, step back a page
      if (items.length === 1 && page > 1) setPage(page - 1);
      else fetchItems(page);
    } catch {
      alert('Delete failed');
    }
  };

  const handleExportCSV = async () => {
    setExporting(true);
    try {
      // pull every page, not just what's currently on screen
      let all = [];
      let pg = 1;
      let totalPages = 1;
      do {
        const { data } = await API.get(`/leads/admin/all?page=${pg}&limit=200`);
        all = all.concat(data.items);
        totalPages = data.pages;
        pg++;
      } while (pg <= totalPages);

      const headerRow = columns.map(c => toCsvCell(c.label)).join(',');
      const dataRows = all.map(row =>
        columns.map(col => {
          const raw = col.key === 'createdAt' ? new Date(row[col.key]).toLocaleString() : row[col.key];
          return toCsvCell(raw ?? '');
        }).join(',')
      );
      const csv = [headerRow, ...dataRows].join('\n');

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      alert('Export failed');
    } finally {
      setExporting(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0f1f3d' }}>
          Downloads / Leads ({total})
        </h2>
        <button
          onClick={handleExportCSV}
          disabled={exporting || total === 0}
          style={{
            padding: '10px 20px', background: '#0f1f3d', color: '#fff', border: 'none',
            borderRadius: 8, fontWeight: 600, fontSize: 14,
            cursor: (exporting || total === 0) ? 'not-allowed' : 'pointer',
            opacity: (exporting || total === 0) ? 0.6 : 1,
          }}
        >
          {exporting ? 'Preparing CSV...' : '⬇ Export CSV'}
        </button>
      </div>

      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: 60, textAlign: 'center', color: '#9ca3af' }}>Loading...</div>
        ) : (
          <DataTable columns={columns} data={items} onDelete={handleDelete} />
        )}
      </div>

      {pages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 13, color: '#6b7280' }}>Page {page} of {pages}</span>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page <= 1}
              style={{ padding: '6px 12px', background: '#fff', color: page <= 1 ? '#9ca3af' : '#374151', border: '1px solid #d1d5db', borderRadius: 6, cursor: page <= 1 ? 'not-allowed' : 'pointer' }}>
              Previous
            </button>
            {Array.from({ length: pages }, (_, i) => (
              <button key={i} onClick={() => setPage(i + 1)}
                style={{ padding: '6px 12px', background: page === i + 1 ? '#0f1f3d' : '#fff', color: page === i + 1 ? '#fff' : '#374151', border: '1px solid #d1d5db', borderRadius: 6, cursor: 'pointer' }}>
                {i + 1}
              </button>
            ))}
            <button onClick={() => setPage(p => Math.min(pages, p + 1))} disabled={page >= pages}
              style={{ padding: '6px 12px', background: '#fff', color: page >= pages ? '#9ca3af' : '#374151', border: '1px solid #d1d5db', borderRadius: 6, cursor: page >= pages ? 'not-allowed' : 'pointer' }}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}