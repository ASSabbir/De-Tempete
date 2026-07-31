import { useEffect, useState, useCallback } from 'react';
import API from '../api/axios';
import DataTable from '../components/DataTable';
import { uploadToImgBB } from '../utils/imgbbUpload';
import { useAuth } from '../context/AuthContext';

const MAX_IMAGES = 5;

const EMPTY = {
  title: '', description: '', description2: '', description3: '',
  images: [], eventDate: '', eventTime: '', isActive: true,
};

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
  {
    key: 'images', label: 'Images',
    render: v => (
      <span style={{ fontSize: 13, color: '#6b7280' }}>
        {Array.isArray(v) ? v.length : 0} / {MAX_IMAGES}
      </span>
    ),
  },
  { key: 'eventDate', label: 'Date', render: v => v ? new Date(v).toLocaleDateString() : '-' },
  { key: 'eventTime', label: 'Time' },
  { key: 'slug', label: 'Slug' },
  { key: 'status', label: 'Approval', render: statusBadge },
  { key: 'isActive', label: 'Status', render: v => <span style={{ color: v ? '#10b981' : '#ef4444', fontWeight: 600 }}>{v ? 'Active' : 'Inactive'}</span> },
];

const inputStyle = { width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 14, boxSizing: 'border-box' };
const labelStyle = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 };
const textareaStyle = { ...inputStyle, minHeight: 110, resize: 'vertical', fontFamily: 'inherit' };

const TILE_SIZE = 100;
const tileBase = { width: TILE_SIZE, height: TILE_SIZE, borderRadius: 10, position: 'relative', overflow: 'hidden', flexShrink: 0 };

export default function NewsEvents() {
  const { admin } = useAuth();
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [editing, setEditing] = useState(null);
  const [saving, setSaving] = useState(false);
  const [uploadingSlot, setUploadingSlot] = useState(null);
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
      images: Array.isArray(item.images) ? item.images : (item.coverImage ? [item.coverImage] : []),
      eventDate: item.eventDate ? new Date(item.eventDate).toISOString().split('T')[0] : '',
    });
    setEditing(item._id);
    setError('');
    setShowModal(true);
  };
  const closeModal = () => { setShowModal(false); setError(''); };

  const handleAddImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (form.images.length >= MAX_IMAGES) return;

    setUploadingSlot('new');
    setError('');
    try {
      const url = await uploadToImgBB(file);
      setForm(p => ({ ...p, images: [...p.images, url] }));
    } catch (err) {
      setError(err.message || 'Image upload failed');
    } finally {
      setUploadingSlot(null);
      e.target.value = '';
    }
  };

  const handleReplaceImage = async (index, e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingSlot(index);
    setError('');
    try {
      const url = await uploadToImgBB(file);
      setForm(p => {
        const next = [...p.images];
        next[index] = url;
        return { ...p, images: next };
      });
    } catch (err) {
      setError(err.message || 'Image upload failed');
    } finally {
      setUploadingSlot(null);
      e.target.value = '';
    }
  };

  const handleRemoveImage = (index) => {
    setForm(p => ({ ...p, images: p.images.filter((_, i) => i !== index) }));
  };

  const handleSave = async () => {
    if (!form.images || form.images.length === 0) {
      setError('Please upload at least one image before saving');
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

  const handlePublish = async (id) => {
    try {
      await API.patch(`/news-events/${id}/status`, { status: 'published' });
      fetchItems(page);
    } catch {
      alert('Publish failed');
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

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Images ({form.images.length}/{MAX_IMAGES})</label>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {form.images.map((url, index) => (
                  <div key={index} style={{ ...tileBase, border: '1px solid #e5e7eb' }}>
                    <img src={url} alt={`Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    {uploadingSlot === index && (
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600, color: '#374151' }}>
                        Uploading...
                      </div>
                    )}
                    <button type="button" onClick={() => handleRemoveImage(index)} title="Remove image"
                      style={{ position: 'absolute', top: 4, right: 4, width: 20, height: 20, borderRadius: '50%', background: 'rgba(17,24,39,0.75)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12, lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      ×
                    </button>
                    <label title="Replace image"
                      style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(15,31,61,0.8)', color: '#fff', fontSize: 11, fontWeight: 600, textAlign: 'center', padding: '4px 0', cursor: 'pointer' }}>
                      Replace
                      <input type="file" accept="image/*" onChange={(e) => handleReplaceImage(index, e)} style={{ display: 'none' }} />
                    </label>
                  </div>
                ))}

                {form.images.length < MAX_IMAGES && (
                  <label style={{ ...tileBase, border: '2px dashed #d1d5db', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, cursor: 'pointer', color: '#6b7280', background: '#f9fafb' }}>
                    {uploadingSlot === 'new' ? (
                      <span style={{ fontSize: 11, fontWeight: 600 }}>Uploading...</span>
                    ) : (
                      <>
                        <span style={{ fontSize: 22, lineHeight: 1 }}>+</span>
                        <span style={{ fontSize: 11, fontWeight: 600 }}>Add image</span>
                      </>
                    )}
                    <input type="file" accept="image/*" onChange={handleAddImage} style={{ display: 'none' }} disabled={uploadingSlot === 'new'} />
                  </label>
                )}
              </div>
              <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 8 }}>
                Up to {MAX_IMAGES} images. Click an image to replace it, or use × to remove it.
              </p>
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
              <button onClick={handleSave} disabled={saving || uploadingSlot !== null}
                style={{ padding: '10px 20px', background: '#0f1f3d', color: '#fff', border: 'none', borderRadius: 8, cursor: (saving || uploadingSlot !== null) ? 'not-allowed' : 'pointer', fontWeight: 600, opacity: (saving || uploadingSlot !== null) ? 0.7 : 1 }}>
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}