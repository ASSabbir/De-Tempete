import { useEffect, useState } from 'react';
import API from '../api/axios';

const LIMIT = 20;
const EMPTY_GUIDE = { guideKey: '', label: '', downloadUrl: '', isActive: true };

// Edit this list to match the guide keys actually wired up in the site's code.
// { value, label } — label is just for display in the dropdown.
const GUIDE_KEY_OPTIONS = [
  { value: 'uae-guide-2026', label: 'UAE Business Setup Guide 2026' },
  { value: 'uk-guide-2026', label: 'UK Business Setup Guide 2026' },
  { value: 'bd-guide-2026', label: 'Bangladesh Business Setup Guide 2026' },
  { value: 'ksa-guide-2026', label: 'KSA Business Setup Guide 2026' },
  { value: 'usa-guide-2026', label: 'USA Business Setup Guide 2026' },
  { value: 'estonia-guide-2026', label: 'Estonia Business Setup Guide 2026' },
  { value: 'aml-guide-2026', label: 'AML Business Setup Guide 2026' },
  { value: 'ebrochure-guide-2026', label: 'E-Brochure Guide 2026' },
];

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
  // ── Guide links ──────────────────────────
  const [guides, setGuides] = useState([]);
  const [guidesLoading, setGuidesLoading] = useState(true);
  const [guidesError, setGuidesError] = useState('');
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [guideForm, setGuideForm] = useState(EMPTY_GUIDE);
  const [editingGuide, setEditingGuide] = useState(null);
  const [savingGuide, setSavingGuide] = useState(false);

  // ── Leads (downloads) ────────────────────
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [exporting, setExporting] = useState(false);

  const fetchGuides = async () => {
    setGuidesLoading(true);
    try {
      const { data } = await API.get('/business-setup-leads/guides/admin/all');
      setGuides(data || []);
    } catch {
      setGuidesError('Failed to load guide links');
    } finally {
      setGuidesLoading(false);
    }
  };

  useEffect(() => { fetchGuides(); }, []);

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

  // ── Guide link handlers ──────────────────
  const openAddGuide = () => { setGuideForm(EMPTY_GUIDE); setEditingGuide(null); setGuidesError(''); setShowGuideModal(true); };
  const openEditGuide = (g) => { setGuideForm({ ...g }); setEditingGuide(g._id); setGuidesError(''); setShowGuideModal(true); };
  const closeGuideModal = () => { setShowGuideModal(false); setGuidesError(''); };

  const handleSaveGuide = async () => {
    if (!guideForm.guideKey || !guideForm.label || !guideForm.downloadUrl) {
      setGuidesError('Key, label and download link are all required');
      return;
    }
    setSavingGuide(true);
    setGuidesError('');
    try {
      if (editingGuide) await API.put(`/business-setup-leads/guides/${editingGuide}`, guideForm);
      else await API.post('/business-setup-leads/guides', guideForm);
      closeGuideModal();
      fetchGuides();
    } catch (err) {
      setGuidesError(err.response?.data?.message || 'Save failed');
    } finally {
      setSavingGuide(false);
    }
  };

  const handleDeleteGuide = async (id) => {
    if (!window.confirm('Delete this guide link? Any page still using this key will stop working until you add a replacement.')) return;
    try {
      await API.delete(`/business-setup-leads/guides/${id}`);
      fetchGuides();
    } catch {
      alert('Delete failed');
    }
  };

  // ── CSV export (unchanged) ───────────────
  const handleExportCSV = async () => {
    setExporting(true);
    setError('');
    try {
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

  // If we're editing a guide whose key isn't in GUIDE_KEY_OPTIONS (e.g. legacy data),
  // still show it in the dropdown so nothing silently changes on save.
  const guideKeyOptions = GUIDE_KEY_OPTIONS.some(o => o.value === guideForm.guideKey) || !guideForm.guideKey
    ? GUIDE_KEY_OPTIONS
    : [{ value: guideForm.guideKey, label: `${guideForm.guideKey} (current)` }, ...GUIDE_KEY_OPTIONS];

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0f1f3d] mb-2">
        Business Setup
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Manage the guide links people download, and see who's downloaded them.
      </p>

      {/* ══════════════ GUIDE LINKS ══════════════ */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold text-[#0f1f3d]">Guide Links ({guides.length})</h3>
        <button
          onClick={openAddGuide}
          className="px-[18px] py-[9px] bg-[#0f1f3d] text-white border-none rounded-lg cursor-pointer font-semibold text-sm hover:opacity-90"
        >
          + Add Guide
        </button>
      </div>

      <div className="bg-white rounded-xl p-7 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
        {guidesError && (
          <div className="bg-red-50 text-red-600 px-[14px] py-[10px] rounded-lg mb-4 text-sm">
            {guidesError}
          </div>
        )}

        {guidesLoading ? (
          <div className="p-10 text-center text-gray-500">Loading...</div>
        ) : guides.length === 0 ? (
          <div className="p-10 text-center text-gray-500">No guide links yet</div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left px-[14px] py-[10px] text-[13px] font-bold text-gray-700 border-b border-gray-200">Guide</th>
                <th className="text-left px-[14px] py-[10px] text-[13px] font-bold text-gray-700 border-b border-gray-200">Key</th>
                <th className="text-left px-[14px] py-[10px] text-[13px] font-bold text-gray-700 border-b border-gray-200">Link</th>
                <th className="text-left px-[14px] py-[10px] text-[13px] font-bold text-gray-700 border-b border-gray-200">Status</th>
                <th className="text-right px-[14px] py-[10px] text-[13px] font-bold text-gray-700 border-b border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {guides.map((g) => (
                <tr key={g._id}>
                  <td className="px-[14px] py-3 text-sm text-gray-900 border-b border-gray-100">{g.label}</td>
                  <td className="px-[14px] py-3 text-sm text-gray-900 border-b border-gray-100">
                    <code className="text-xs bg-slate-100 px-[6px] py-[2px] rounded">{g.guideKey}</code>
                  </td>
                  <td className="px-[14px] py-3 text-sm text-gray-900 border-b border-gray-100">
                    <a href={g.downloadUrl} target="_blank" rel="noopener noreferrer" className="text-[#0f1f3d] underline">Open</a>
                  </td>
                  <td className="px-[14px] py-3 text-sm border-b border-gray-100">
                    <span className={`font-semibold ${g.isActive ? 'text-emerald-500' : 'text-red-500'}`}>{g.isActive ? 'Active' : 'Inactive'}</span>
                  </td>
                  <td className="px-[14px] py-3 text-sm border-b border-gray-100 text-right">
                    <button onClick={() => openEditGuide(g)}
                      className="mr-2 px-[14px] py-[6px] bg-[#0f1f3d] text-white border-none rounded-md cursor-pointer text-[13px] hover:opacity-90">
                      Edit
                    </button>
                    <button onClick={() => handleDeleteGuide(g._id)}
                      className="px-[14px] py-[6px] bg-red-600 text-white border-none rounded-md cursor-pointer text-[13px] hover:opacity-90">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ══════════════ DOWNLOAD LEADS ══════════════ */}
      <div className="flex justify-between items-start flex-wrap gap-3 mb-2 mt-10">
        <div>
          <h3 className="text-lg font-bold text-[#0f1f3d] mb-1">
            Downloads
          </h3>
          <p className="text-sm text-gray-500">
            {total} total submission{total === 1 ? '' : 's'}
          </p>
        </div>
        <button
          onClick={handleExportCSV}
          disabled={exporting || total === 0}
          className={`px-5 py-[10px] bg-[#0f1f3d] text-white border-none rounded-lg font-semibold text-sm ${
            (exporting || total === 0) ? 'cursor-not-allowed opacity-60' : 'cursor-pointer opacity-100 hover:opacity-90'
          }`}
        >
          {exporting ? 'Preparing CSV...' : '⬇ Export CSV'}
        </button>
      </div>

      <div className="bg-white rounded-xl p-7 shadow-[0_1px_8px_rgba(0,0,0,0.06)] mt-3">
        {error && (
          <div className="bg-red-50 text-red-600 px-[14px] py-[10px] rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        {loading ? (
          <div className="p-10 text-center text-gray-500">Loading...</div>
        ) : items.length === 0 ? (
          <div className="p-10 text-center text-gray-500">No submissions yet</div>
        ) : (
          <>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left px-[14px] py-[10px] text-[13px] font-bold text-gray-700 border-b border-gray-200">Name</th>
                  <th className="text-left px-[14px] py-[10px] text-[13px] font-bold text-gray-700 border-b border-gray-200">Email</th>
                  <th className="text-left px-[14px] py-[10px] text-[13px] font-bold text-gray-700 border-b border-gray-200">Phone</th>
                  <th className="text-left px-[14px] py-[10px] text-[13px] font-bold text-gray-700 border-b border-gray-200">Guide</th>
                  <th className="text-left px-[14px] py-[10px] text-[13px] font-bold text-gray-700 border-b border-gray-200">Date</th>
                </tr>
              </thead>
              <tbody>
                {items.map((lead) => (
                  <tr key={lead._id}>
                    <td className="px-[14px] py-3 text-sm text-gray-900 border-b border-gray-100">{lead.name}</td>
                    <td className="px-[14px] py-3 text-sm text-gray-900 border-b border-gray-100">{lead.email}</td>
                    <td className="px-[14px] py-3 text-sm text-gray-900 border-b border-gray-100">{lead.phone}</td>
                    <td className="px-[14px] py-3 text-sm text-gray-900 border-b border-gray-100">{lead.guide}</td>
                    <td className="px-[14px] py-3 text-sm text-gray-900 border-b border-gray-100">{formatDate(lead.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center mt-6">
              <span className="text-[13px] text-gray-500">
                Page {page} of {pages}
              </span>
              <div className="flex gap-2">
                <button
                  className={`px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-semibold ${
                    page <= 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[#0f1f3d] cursor-pointer hover:bg-gray-50'
                  }`}
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                  Previous
                </button>
                <button
                  className={`px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-semibold ${
                    page >= pages ? 'text-gray-400 cursor-not-allowed' : 'text-[#0f1f3d] cursor-pointer hover:bg-gray-50'
                  }`}
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

      {/* ══════════════ GUIDE MODAL ══════════════ */}
      {showGuideModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-4">
          <div className="bg-white rounded-xl p-8 w-full max-w-[480px] max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-6 text-[#0f1f3d]">
              {editingGuide ? 'Edit' : 'Add'} Guide
            </h3>
            {guidesError && <div className="bg-red-50 text-red-600 px-[14px] py-[10px] rounded-lg mb-4 text-sm">{guidesError}</div>}

            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-gray-700 mb-[6px]">
                Key {editingGuide && <span className="text-red-500 font-normal">(change with caution — must match the site's code)</span>}
              </label>
              <select
                value={guideForm.guideKey}
                onChange={e => setGuideForm(p => ({ ...p, guideKey: e.target.value }))}
                className="w-full px-[14px] py-[10px] border border-gray-300 rounded-lg text-sm box-border bg-white"
              >
                <option value="" disabled>Select a guide key…</option>
                {guideKeyOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-gray-700 mb-[6px]">Label</label>
              <input
                value={guideForm.label}
                onChange={e => setGuideForm(p => ({ ...p, label: e.target.value }))}
                placeholder="e.g. UAE Business Setup Guide 2026"
                className="w-full px-[14px] py-[10px] border border-gray-300 rounded-lg text-sm box-border"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[13px] font-semibold text-gray-700 mb-[6px]">Download Link</label>
              <input
                value={guideForm.downloadUrl}
                onChange={e => setGuideForm(p => ({ ...p, downloadUrl: e.target.value }))}
                placeholder="https://drive.google.com/..."
                className="w-full px-[14px] py-[10px] border border-gray-300 rounded-lg text-sm box-border"
              />
            </div>

            <div className="mb-6 flex items-center gap-2">
              <input type="checkbox" id="guideActive" checked={guideForm.isActive}
                onChange={e => setGuideForm(p => ({ ...p, isActive: e.target.checked }))} />
              <label htmlFor="guideActive" className="text-sm cursor-pointer">Active</label>
            </div>

            <div className="flex gap-3 justify-end">
              <button onClick={closeGuideModal} className="px-5 py-[10px] border border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50">Cancel</button>
              <button onClick={handleSaveGuide} disabled={savingGuide}
                className={`px-5 py-[10px] bg-[#0f1f3d] text-white border-none rounded-lg font-semibold ${savingGuide ? 'cursor-not-allowed opacity-70' : 'cursor-pointer opacity-100 hover:opacity-90'}`}>
                {savingGuide ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}