import { useEffect, useState } from 'react';
import API from '../api/axios';

const cardStyle = { background: '#fff', borderRadius: 12, padding: 28, boxShadow: '0 1px 8px rgba(0,0,0,0.06)' };
const thStyle = { textAlign: 'left', padding: '10px 14px', fontSize: 13, fontWeight: 700, color: '#374151', borderBottom: '1px solid #e5e7eb' };
const tdStyle = { padding: '12px 14px', fontSize: 14, color: '#111827', borderBottom: '1px solid #f1f5f9' };
const pageBtnStyle = (disabled) => ({
  padding: '8px 16px', borderRadius: 6, border: '1px solid #d1d5db',
  background: '#fff', color: disabled ? '#9ca3af' : '#0f1f3d',
  cursor: disabled ? 'not-allowed' : 'pointer', fontSize: 14, fontWeight: 600,
});

const LIMIT = 20;

const csvColumns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'guide', label: 'Guide' },
  { key: 'createdAt', label: 'Date' },
];

// Turns a value into a safe CSV cell (quotes it if it contains a comma, quote, or newline).
const toCsvCell = (value) => {
  const str = value === null || value === undefined ? '' : String(value);
  if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
};

export default function BusinessSetupLeads() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError('');
    API.get(`/business-setup-leads/admin/all?page=${page}&limit=${LIMIT}`)
      .then(({ data }) => {
        setItems(data.items || []);
        setTotal(data.total || 0);
        setPages(data.pages || 1);
      })
      .catch(() => setError('Failed to load leads'))
      .finally(() => setLoading(false));
  }, [page]);

  const formatDate = (d) =>
    new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  const handleExportCSV = async () => {
    setExporting(true);
    setError('');
    try {
      // pull every page, not just what's on screen
      let all = [];
      let pg = 1;
      let totalPages = 1;
      do {
        const { data } = await API.get(`/business-setup-leads/admin/all?page=${pg}&limit=200`);
        all = all.concat(data.items || []);
        totalPages = data.pages || 1;
        pg++;
      } while (pg <= totalPages);

      const headerRow = csvColumns.map(c => toCsvCell(c.label)).join(',');
      const dataRows = all.map(row =>
        csvColumns.map(col => {
          const raw = col.key === 'createdAt' ? formatDate(row[col.key]) : row[col.key];
          return toCsvCell(raw ?? '');
        }).join(',')
      );
      const csv = [headerRow, ...dataRows].join('\n');

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `business-setup-leads-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setError('Export failed');
    } finally {
      setExporting(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0f1f3d', marginBottom: 8 }}>
            Business Setup Downloads
          </h2>
          <p style={{ fontSize: 14, color: '#6b7280' }}>
            {total} total submission{total === 1 ? '' : 's'}
          </p>
        </div>
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

      <div style={{ ...cardStyle, marginTop: 20 }}>
        {error && (
          <div style={{ background: '#fef2f2', color: '#dc2626', padding: '10px 14px', borderRadius: 8, marginBottom: 16, fontSize: 14 }}>
            {error}
          </div>
        )}

        {loading ? (
          <div style={{ padding: 40, textAlign: 'center', color: '#6b7280' }}>Loading...</div>
        ) : items.length === 0 ? (
          <div style={{ padding: 40, textAlign: 'center', color: '#6b7280' }}>No submissions yet</div>
        ) : (
          <>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Email</th>
                  <th style={thStyle}>Phone</th>
                  <th style={thStyle}>Guide</th>
                  <th style={thStyle}>Date</th>
                </tr>
              </thead>
              <tbody>
                {items.map((lead) => (
                  <tr key={lead._id}>
                    <td style={tdStyle}>{lead.name}</td>
                    <td style={tdStyle}>{lead.email}</td>
                    <td style={tdStyle}>{lead.phone}</td>
                    <td style={tdStyle}>{lead.guide}</td>
                    <td style={tdStyle}>{formatDate(lead.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
              <span style={{ fontSize: 13, color: '#6b7280' }}>
                Page {page} of {pages}
              </span>
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  style={pageBtnStyle(page <= 1)}
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                  Previous
                </button>
                <button
                  style={pageBtnStyle(page >= pages)}
                  disabled={page >= pages}
                  onClick={() => setPage((p) => Math.min(pages, p + 1))}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}