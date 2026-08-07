import { useEffect, useState } from 'react';
import API from '../api/axios';
import DataTable from '../components/DataTable';
import { useAuth } from '../context/AuthContext';

const REGIONS = ['UAE', 'KSA', 'UK', 'BD','Estonia','USA'];
const EMPTY = { title: '', issuingAuthority: '', downloadUrl: '', region: 'UAE', isActive: true };

const statusBadge = (status) => (
  <span style={{
    padding: '3px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600, color: '#fff',
    background: status === 'published' ? '#16a34a' : '#d97706',
  }}>
    {status === 'published' ? 'Published' : 'Pending'}
  </span>
);

const columns = [
  { key: 'title', label: 'Title' },
  { key: 'issuingAuthority', label: 'Authority' },
  { key: 'region', label: 'Region' },
  { key: 'status', label: 'Approval', render: statusBadge },
  { key: 'isActive', label: 'Status', render: (v) => <span style={{ color: v ? '#10b981' : '#ef4444', fontWeight: 600 }}>{v ? 'Active' : 'Inactive'}</span> },
];

const inputStyle = { width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 14, boxSizing: 'border-box' };
const labelStyle = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 };

export default function Forms() {
  const { admin } = useAuth();
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
      const { data } = await API.get('/forms/admin/all');
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
      const { data } = editing ? await API.put(`/forms/${editing}`, form) : await API.post('/forms', form);
      if (editing) {
        setItems(p => p.map(i => i._id === editing ? data : i));
      } else {
        setItems(p => [data, ...p]);
        setTotal(t => t + 1);
      }
      closeModal();
      setForm(EMPTY);
    } catch (err) {
      setError(err.response?.data?.message || 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete?')) return;
    try {
      await API.delete(`/forms/${id}`);
      setItems(p => p.filter(i => i._id !== id));
      setTotal(t => t - 1);
    } catch {
      alert('Delete failed');
    }
  };

  const handlePublish = async (id) => {
    try {
      const { data } = await API.patch(`/forms/${id}/status`, { status: 'published' });
      setItems(p => p.map(i => i._id === id ? data : i));
    } catch {
      alert('Publish failed');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0f1f3d' }}>Forms ({total})</h2>
        <button onClick={openAdd}
          style={{ padding: '10px 20px', background: '#0f1f3d', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>
          + Add
        </button>
      </div>

      {admin?.role !== 'superadmin' && (
        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af', borderRadius: 8, padding: '10px 16px', marginBottom: 20, fontSize: 13 }}>
          New items and edits go to Super Admin for approval before they appear on the live site.
        </div>
      )}

      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: 60, textAlign: 'center', color: '#9ca3af' }}>Loading...</div>
        ) : (
          <DataTable
            columns={columns}
            data={items}
            onEdit={openEdit}
            onDelete={handleDelete}
            onPublish={admin?.role === 'superadmin' ? handlePublish : undefined}
          />
        )}
      </div>

      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 16 }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 32, width: '100%', maxWidth: 480, maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: '#0f1f3d' }}>
              {editing ? 'Edit' : 'Add'} Form
            </h3>
            {error && <div style={{ background: '#fef2f2', color: '#dc2626', padding: '10px 14px', borderRadius: 8, marginBottom: 16, fontSize: 14 }}>{error}</div>}

            {[
              { key: 'title', label: 'Title' },
              { key: 'issuingAuthority', label: 'Issuing Authority' },
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
              <input type="checkbox" id="frmActive" checked={form.isActive}
                onChange={e => setForm(p => ({ ...p, isActive: e.target.checked }))} />
              <label htmlFor="frmActive" style={{ fontSize: 14, cursor: 'pointer' }}>Active</label>
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