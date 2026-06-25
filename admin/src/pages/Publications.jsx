import { useEffect, useState } from 'react';
import API from '../api/axios';
import DataTable from '../components/DataTable';

const REGIONS = ['UAE', 'KSA', 'UK', 'BD'];
const EMPTY = { title: '', fileFormat: 'PDF', imageUrl: '', downloadUrl: '', region: 'UAE', isActive: true };

const columns = [
  { key: 'title', label: 'Title' },
  { key: 'fileFormat', label: 'Format' },
  { key: 'region', label: 'Region' },
  { key: 'imageUrl', label: 'Image', render: (v) => v ? <a href={v} target="_blank" rel="noreferrer" style={{ color: '#3b82f6', fontSize: 12 }}>Preview</a> : '-' },
  { key: 'isActive', label: 'Status', render: (v) => <span style={{ color: v ? '#10b981' : '#ef4444', fontWeight: 600 }}>{v ? 'Active' : 'Inactive'}</span> },
];

const inputStyle = { width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 14, boxSizing: 'border-box' };
const labelStyle = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 };

export default function Publications() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [editing, setEditing] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const fetchItems = async () => {
    setLoading(true);
    try {
      const { data } = await API.get('/publications/admin/all');
      setItems(data.items);
      setTotal(data.total);
    } catch {
      setError('Failed to load');
    } finally {
      setLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { fetchItems(); }, []);

  const openAdd = () => { setForm(EMPTY); setEditing(null); setError(''); setShowModal(true); };
  const openEdit = (item) => { setForm({ ...item }); setEditing(item._id); setError(''); setShowModal(true); };
  const closeModal = () => { setShowModal(false); setError(''); };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      if (editing) await API.put(`/publications/${editing}`, form);
      else await API.post('/publications', form);
      closeModal();
      fetchItems();
    } catch (err) {
      setError(err.response?.data?.message || 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete?')) return;
    try {
      await API.delete(`/publications/${id}`);
      fetchItems();
    } catch {
      alert('Delete failed');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0f1f3d' }}>Publications ({total})</h2>
        <button onClick={openAdd}
          style={{ padding: '10px 20px', background: '#0f1f3d', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>
          + Add
        </button>
      </div>

      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: 60, textAlign: 'center', color: '#9ca3af' }}>Loading...</div>
        ) : (
          <DataTable columns={columns} data={items} onEdit={openEdit} onDelete={handleDelete} />
        )}
      </div>

      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 16 }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 32, width: '100%', maxWidth: 520, maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: '#0f1f3d' }}>
              {editing ? 'Edit' : 'Add'} Publication
            </h3>
            {error && <div style={{ background: '#fef2f2', color: '#dc2626', padding: '10px 14px', borderRadius: 8, marginBottom: 16, fontSize: 14 }}>{error}</div>}

            {[
              { key: 'title', label: 'Title' },
              { key: 'fileFormat', label: 'File Format (e.g. PDF)' },
              { key: 'imageUrl', label: 'Image URL' },
              { key: 'downloadUrl', label: 'Download URL' },
            ].map(({ key, label }) => (
              <div key={key} style={{ marginBottom: 16 }}>
                <label style={labelStyle}>{label}</label>
                <input value={form[key]} onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))} style={inputStyle} />
              </div>
            ))}

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Region</label>
              <select value={form.region} onChange={e => setForm(p => ({ ...p, region: e.target.value }))}
                style={{ ...inputStyle, cursor: 'pointer' }}>
                {REGIONS.map(r => <option key={r}>{r}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" id="pubActive" checked={form.isActive}
                onChange={e => setForm(p => ({ ...p, isActive: e.target.checked }))} />
              <label htmlFor="pubActive" style={{ fontSize: 14, cursor: 'pointer' }}>Active</label>
            </div>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <button onClick={closeModal} style={{ padding: '10px 20px', border: '1px solid #d1d5db', borderRadius: 8, cursor: 'pointer', background: '#fff' }}>Cancel</button>
              <button onClick={handleSave} disabled={saving}
                style={{ padding: '10px 20px', background: '#0f1f3d', color: '#fff', border: 'none', borderRadius: 8, cursor: saving ? 'not-allowed' : 'pointer', fontWeight: 600, opacity: saving ? 0.7 : 1 }}>
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}