import { useEffect, useState, useCallback } from 'react';
import API from '../api/axios';

const LIMIT = 20;

const toCsvCell = (value) => {
  const str = value === null || value === undefined ? '' : String(value);
  if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
};

// Turns a raw field id like "uae_shareholder_count" or "contact_full_name"
// into a readable label like "Shareholder Count" / "Full Name" — strips the
// known section prefixes and title-cases the rest. Used as a fallback for
// older submissions saved before readableAnswers existed.
const PREFIXES = ['uae_', 'ksa_', 'uk_', 'usa_', 'estonia_', 'bd_', 'common_', 'contact_'];
const labelFromKey = (key) => {
  let stripped = key;
  for (const p of PREFIXES) {
    if (stripped.startsWith(p)) { stripped = stripped.slice(p.length); break; }
  }
  return stripped
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
};

// Gets a [{label, value}] list for display, preferring the saved
// readableAnswers, falling back to a derived version of the raw answers.
const getAnswerRows = (row) => {
  if (Array.isArray(row.readableAnswers) && row.readableAnswers.length > 0) {
    return row.readableAnswers;
  }
  if (!row.answers || typeof row.answers !== 'object') return [];
  return Object.entries(row.answers)
    .filter(([, v]) => v !== undefined && v !== '' && v !== null)
    .map(([key, v]) => ({
      label: labelFromKey(key),
      value: Array.isArray(v) ? v.join(', ') : String(v),
    }));
};

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'country', label: 'Country' },
  { key: 'createdAt', label: 'Date' },
];

export default function BusinessSetupCalculatorSubmissions() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const fetchItems = useCallback(async (pg = page) => {
    setLoading(true);
    try {
      const { data } = await API.get(`/business-setup-calculator/admin/all?page=${pg}&limit=${LIMIT}`);
      setItems(data.items); setTotal(data.total); setPages(data.pages);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => { fetchItems(page); }, [page]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this submission? This cannot be undone.')) return;
    try {
      await API.delete(`/business-setup-calculator/admin/${id}`);
      if (items.length === 1 && page > 1) setPage(page - 1);
      else fetchItems(page);
    } catch {
      alert('Delete failed');
    }
  };

  const handleExportCSV = async () => {
    setExporting(true);
    try {
      let all = []; let pg = 1; let totalPages = 1;
      do {
        const { data } = await API.get(`/business-setup-calculator/admin/all?page=${pg}&limit=200`);
        all = all.concat(data.items);
        totalPages = data.pages;
        pg++;
      } while (pg <= totalPages);

      const header = columns.map((c) => toCsvCell(c.label)).join(',');
      const rows = all.map((row) =>
        columns.map((c) => toCsvCell(c.key === 'createdAt' ? new Date(row[c.key]).toLocaleString() : (row[c.key] ?? '-'))).join(',')
      );
      const csv = [header, ...rows].join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `business-setup-calculator-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a); a.click(); a.remove();
      URL.revokeObjectURL(url);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center flex-wrap gap-3 mb-6">
        <h2 className="text-2xl font-bold text-[#0f1f3d]">Cost Calculator Submissions ({total})</h2>
        <button onClick={handleExportCSV} disabled={exporting || total === 0}
          className={`px-5 py-[10px] bg-[#0f1f3d] text-white rounded-lg font-semibold text-sm ${(exporting || total === 0) ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'}`}>
          {exporting ? 'Preparing CSV...' : '⬇ Export CSV'}
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] overflow-hidden">
        {loading ? (
          <div className="p-16 text-center text-gray-400">Loading...</div>
        ) : items.length === 0 ? (
          <div className="p-16 text-center text-gray-400">No submissions yet</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  {columns.map((c) => (
                    <th key={c.key} className="text-left px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">{c.label}</th>
                  ))}
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Answers</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((row) => {
                  const answerRows = getAnswerRows(row);
                  return (
                    <>
                      <tr key={row._id} className="border-b border-gray-100 hover:bg-gray-50">
                        {columns.map((c) => (
                          <td key={c.key} className="px-4 py-3 text-gray-700 whitespace-nowrap">
                            {c.key === 'createdAt' ? new Date(row[c.key]).toLocaleString() : (row[c.key] ?? '-')}
                          </td>
                        ))}
                        <td className="px-4 py-3">
                          <button
                            onClick={() => setExpandedId(expandedId === row._id ? null : row._id)}
                            className="text-[#0f1f3d] underline text-sm"
                          >
                            {expandedId === row._id ? 'Hide' : 'View'} answers
                          </button>
                        </td>
                        <td className="px-4 py-3 text-right whitespace-nowrap">
                          <button onClick={() => handleDelete(row._id)}
                            className="px-3 py-1.5 bg-red-600 text-white rounded-md text-xs font-semibold hover:opacity-90">
                            Delete
                          </button>
                        </td>
                      </tr>
                      {expandedId === row._id && (
                        <tr className="bg-gray-50 border-b border-gray-100">
                          <td colSpan={columns.length + 2} className="px-6 py-5">
                            {answerRows.length > 0 ? (
                              <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                                {answerRows.map((a, i) => (
                                  <div key={i} className="flex flex-col gap-0.5">
                                    <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{a.label}</dt>
                                    <dd className="text-sm text-gray-800">{a.value}</dd>
                                  </div>
                                ))}
                              </dl>
                            ) : (
                              <p className="text-sm text-gray-400">No answers recorded</p>
                            )}
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {pages > 1 && (
        <div className="flex justify-between items-center mt-4">
          <span className="text-[13px] text-gray-500">Page {page} of {pages}</span>
          <div className="flex gap-2">
            <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}
              className={`px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-semibold ${page <= 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[#0f1f3d] cursor-pointer hover:bg-gray-50'}`}>
              Previous
            </button>
            <button disabled={page >= pages} onClick={() => setPage((p) => p + 1)}
              className={`px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-semibold ${page >= pages ? 'text-gray-400 cursor-not-allowed' : 'text-[#0f1f3d] cursor-pointer hover:bg-gray-50'}`}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}