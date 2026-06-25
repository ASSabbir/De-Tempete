import { useEffect, useState } from 'react';
import API from '../api/axios';

const inputStyle = {
  width: '100%', padding: '10px 14px', border: '1px solid #d1d5db',
  borderRadius: 8, fontSize: 14, boxSizing: 'border-box', outline: 'none',
};
const labelStyle = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 };

export default function Dashboard() {
  const [stats, setStats] = useState({ library: 0, publications: 0, forms: 0 });
  const [createForm, setCreateForm] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [creating, setCreating] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    Promise.all([
      API.get('/library/admin/all?limit=1'),
      API.get('/publications/admin/all?limit=1'),
      API.get('/forms/admin/all?limit=1'),
    ]).then(([lib, pub, frm]) => {
      setStats({
        library: lib.data.total || 0,
        publications: pub.data.total || 0,
        forms: frm.data.total || 0,
      });
    }).catch(console.error);
  }, []);

  const handleCreateAdmin = async () => {
    if (!createForm.name || !createForm.email || !createForm.password) {
      setErrMsg('All fields required');
      return;
    }
    setCreating(true);
    setMsg('');
    setErrMsg('');
    try {
      await API.post('/auth/create-admin', createForm);
      setMsg('Admin created successfully');
      setCreateForm({ name: '', email: '', password: '' });
    } catch (err) {
      setErrMsg(err.response?.data?.message || 'Failed to create admin');
    } finally {
      setCreating(false);
    }
  };

  const statCards = [
    { label: 'Library Items', value: stats.library, color: '#3b82f6' },
    { label: 'Publications', value: stats.publications, color: '#10b981' },
    { label: 'Forms', value: stats.forms, color: '#f59e0b' },
  ];

  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0f1f3d', marginBottom: 28 }}>Dashboard</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 40 }}>
        {statCards.map(({ label, value, color }) => (
          <div key={label} style={{ background: '#fff', borderRadius: 12, padding: 28, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', borderLeft: `4px solid ${color}` }}>
            <div style={{ fontSize: 36, fontWeight: 700, color }}>{value}</div>
            <div style={{ fontSize: 14, color: '#6b7280', marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>

      <div style={{ background: '#fff', borderRadius: 12, padding: 28, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', maxWidth: 480 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: showCreate ? 20 : 0 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f1f3d' }}>Create New Admin</h3>
          <button onClick={() => { setShowCreate(p => !p); setMsg(''); setErrMsg(''); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: 22, lineHeight: 1, padding: '0 4px' }}>
            {showCreate ? '−' : '+'}
          </button>
        </div>

        {showCreate && (
          <>
            {msg && <div style={{ background: '#f0fdf4', color: '#16a34a', padding: '10px 14px', borderRadius: 8, marginBottom: 16, fontSize: 14 }}>{msg}</div>}
            {errMsg && <div style={{ background: '#fef2f2', color: '#dc2626', padding: '10px 14px', borderRadius: 8, marginBottom: 16, fontSize: 14 }}>{errMsg}</div>}

            {[
              { key: 'name', label: 'Name', type: 'text' },
              { key: 'email', label: 'Email', type: 'email' },
              { key: 'password', label: 'Password (min 8 chars)', type: 'password' },
            ].map(({ key, label, type }) => (
              <div key={key} style={{ marginBottom: 16 }}>
                <label style={labelStyle}>{label}</label>
                <input type={type} value={createForm[key]}
                  onChange={e => setCreateForm(p => ({ ...p, [key]: e.target.value }))}
                  style={inputStyle} />
              </div>
            ))}

            <button onClick={handleCreateAdmin} disabled={creating}
              style={{ padding: '10px 24px', background: '#0f1f3d', color: '#fff', border: 'none', borderRadius: 8, cursor: creating ? 'not-allowed' : 'pointer', fontWeight: 600, opacity: creating ? 0.7 : 1 }}>
              {creating ? 'Creating...' : 'Create Admin'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}