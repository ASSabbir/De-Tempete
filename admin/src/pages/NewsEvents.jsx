import { useEffect, useState, useCallback } from 'react';
import API from '../api/axios';
import DataTable from '../components/DataTable';
import { uploadToImgBB } from '../utils/imgbbUpload';

const EMPTY = {
  title: '', description: '', description2: '', description3: '',
  coverImage: '', eventDate: '', eventTime: '', isActive: true,
};

const columns = [
  { key: 'title', label: 'Title' },
  { key: 'eventDate', label: 'Date', render: v => v ? new Date(v).toLocaleDateString() : '-' },
  { key: 'eventTime', label: 'Time' },
  { key: 'slug', label: 'Slug' },
  { key: 'isActive', label: 'Status', render: v => <span style={{ color: v ? '#10b981' : '#ef4444', fontWeight: 600 }}>{v ? 'Active' : 'Inactive'}</span> },
];

const inputStyle = { width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 14, boxSizing: 'border-box' };
const labelStyle = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 };
const textareaStyle = { ...inputStyle, minHeight: 110, resize: 'vertical', fontFamily: 'inherit' };

export default function NewsEvents() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [editing, setEditing] = useState(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const fetchItems = useCallback(async (pg = page) => {
    setLoading(true);
    try {
      const { data } = await API.get(`/news-events/admin/all?page=${pg}&limit=20`);
      setItems(data.items);
      setTotal(data.total);
      setPages(data.pages);
    } catch {
      setError('Failed to load items');
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => { fetchItems(page); }, [page]);

  const openAdd = () => { setForm(EMPTY); setEditing(null); setError(''); setShowModal(true); };
  const openEdit = (item) => {
    setForm({
      ...item,
      eventDate: item.eventDate ? new Date(item.eventDate).toISOString().split('T')[0] : '',
    });
    setEditing(item._id);
    setError('');
    setShowModal(true);
  };
  const closeModal = () => { setShowModal(false); setError(''); };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');
    try {
      const url = await uploadToImgBB(file);
      setForm(p => ({ ...p, coverImage: url }));
    } catch (err) {
      setError(err.message || 'Image upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!form.coverImage) {
      setError('Please upload a cover image before saving');
      return;
    }
    setSaving(true);
    setError('');
    try {
      if (editing) await API.put(`/news-events/${editing}`, form);
      else await API.post('/news-events', form);
      closeModal();
      fetchItems(editing ? page : 1);
      if (!editing) setPage(1);
    } catch (err) {
      setError(err.response?.data?.message || 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this item?')) return;
    try {
      await API.delete(`/news-events/${id}`);
      fetchItems(page);
    } catch {
      alert('Delete failed');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0f1f3d' }}>News & Events ({total})</h2>
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

      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 16 }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 32, width: '100%', maxWidth: 600, maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: '#0f1f3d' }}>
              {editing ? 'Edit' : 'Add'} News / Event
            </h3>
            {error && <div style={{ background: '#fef2f2', color: '#dc2626', padding: '10px 14px', borderRadius: 8, marginBottom: 16, fontSize: 14 }}>{error}</div>}

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Cover Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} style={inputStyle} />
              {uploading && <p style={{ fontSize: 13, color: '#6b7280', marginTop: 6 }}>Uploading...</p>}
              {form.coverImage && !uploading && (
                <img
                  src={form.coverImage}
                  alt="Cover preview"
                  style={{ marginTop: 10, width: '100%', maxHeight: 180, objectFit: 'cover', borderRadius: 8 }}
                />
              )}
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Title</label>
              <input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} style={inputStyle} />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Description 1</label>
              <textarea value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} style={textareaStyle} />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Description 2</label>
              <textarea value={form.description2} onChange={e => setForm(p => ({ ...p, description2: e.target.value }))} style={textareaStyle} />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Description 3</label>
              <textarea value={form.description3} onChange={e => setForm(p => ({ ...p, description3: e.target.value }))} style={textareaStyle} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={labelStyle}>Event Date</label>
                <input type="date" value={form.eventDate} onChange={e => setForm(p => ({ ...p, eventDate: e.target.value }))} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Event Time</label>
                <input type="time" value={form.eventTime} onChange={e => setForm(p => ({ ...p, eventTime: e.target.value }))} style={inputStyle} />
              </div>
            </div>

            <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" id="neActive" checked={form.isActive}
                onChange={e => setForm(p => ({ ...p, isActive: e.target.checked }))} />
              <label htmlFor="neActive" style={{ fontSize: 14, cursor: 'pointer' }}>Active</label>
            </div>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <button onClick={closeModal} style={{ padding: '10px 20px', border: '1px solid #d1d5db', borderRadius: 8, cursor: 'pointer', background: '#fff' }}>Cancel</button>
              <button onClick={handleSave} disabled={saving || uploading}
                style={{ padding: '10px 20px', background: '#0f1f3d', color: '#fff', border: 'none', borderRadius: 8, cursor: (saving || uploading) ? 'not-allowed' : 'pointer', fontWeight: 600, opacity: (saving || uploading) ? 0.7 : 1 }}>
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}