import { useEffect, useState } from 'react';
import API from '../api/axios';

const inputStyle = {
  width: '100%', padding: '10px 14px', border: '1px solid #d1d5db',
  borderRadius: 8, fontSize: 14, boxSizing: 'border-box', outline: 'none',
};
const labelStyle = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 };

const roleLabels = {
  superadmin: 'Super Admin',
  resource: 'Resource User',
  news: 'News User',
  blog: 'Blog User',
};

const roleBadgeColor = {
  superadmin: '#0f1f3d',
  resource: '#3b82f6',
  news: '#8b5cf6',
  blog: '#ec4899',
};

const EMPTY = { name: '', email: '', password: '', role: 'resource' };

export default function Users() {
  const [admins, setAdmins] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(EMPTY);
  const [creating, setCreating] = useState(false);
  const [msg, setMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [showCreate, setShowCreate] = useState(false);

  const fetchAdmins = async () => {
    setLoading(true);
    try {
      const [adminsRes, rolesRes] = await Promise.all([
        API.get('/auth/admins'),
        API.get('/auth/roles'),
      ]);
      setAdmins(adminsRes.data);
      setRoles(rolesRes.data);
    } catch {
      setErrMsg('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchAdmins(); }, []);

  const handleCreate = async () => {
    if (!form.name || !form.email || !form.password || !form.role) {
      setErrMsg('All fields required');
      return;
    }
    setCreating(true);
    setMsg('');
    setErrMsg('');
    try {
      await API.post('/auth/create-admin', form);
      setMsg('User created successfully');
      setForm(EMPTY);
      fetchAdmins();
    } catch (err) {
      setErrMsg(err.response?.data?.message || 'Failed to create user');
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Remove this user? They will lose access immediately.')) return;
    try {
      await API.delete(`/auth/admins/${id}`);
      setAdmins(p => p.filter(a => a._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || 'Delete failed');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0f1f3d' }}>Users ({admins.length})</h2>
        <button onClick={() => { setShowCreate(p => !p); setMsg(''); setErrMsg(''); }}
          style={{ padding: '10px 20px', background: '#0f1f3d', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>
          {showCreate ? 'Cancel' : '+ Create User'}
        </button>
      </div>

      {showCreate && (
        <div style={{ background: '#fff', borderRadius: 12, padding: 28, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', maxWidth: 480, marginBottom: 28 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f1f3d', marginBottom: 20 }}>Create New User</h3>

          {msg && <div style={{ background: '#f0fdf4', color: '#16a34a', padding: '10px 14px', borderRadius: 8, marginBottom: 16, fontSize: 14 }}>{msg}</div>}
          {errMsg && <div style={{ background: '#fef2f2', color: '#dc2626', padding: '10px 14px', borderRadius: 8, marginBottom: 16, fontSize: 14 }}>{errMsg}</div>}

          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Name</label>
            <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} style={inputStyle} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Email</label>
            <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={inputStyle} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Password (min 8 chars)</label>
            <input type="password" value={form.password} onChange={e => setForm(p => ({ ...p, password: e.target.value }))} style={inputStyle} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Role</label>
            <select value={form.role} onChange={e => setForm(p => ({ ...p, role: e.target.value }))}
              style={{ ...inputStyle, cursor: 'pointer' }}>
              {roles.filter(r => r !== 'superadmin').map(r => (
                <option key={r} value={r}>{roleLabels[r] || r}</option>
              ))}
            </select>
          </div>

          <button onClick={handleCreate} disabled={creating}
            style={{ padding: '10px 24px', background: '#0f1f3d', color: '#fff', border: 'none', borderRadius: 8, cursor: creating ? 'not-allowed' : 'pointer', fontWeight: 600, opacity: creating ? 0.7 : 1 }}>
            {creating ? 'Creating...' : 'Create User'}
          </button>
        </div>
      )}

      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: 60, textAlign: 'center', color: '#9ca3af' }}>Loading...</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Name</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Email</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Role</th>
                <th style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 600, color: '#374151' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((a) => (
                <tr key={a._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '12px 16px', color: '#4b5563' }}>{a.name}</td>
                  <td style={{ padding: '12px 16px', color: '#4b5563' }}>{a.email}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{
                      padding: '3px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600, color: '#fff',
                      background: roleBadgeColor[a.role] || '#6b7280',
                    }}>
                      {roleLabels[a.role] || a.role}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <button onClick={() => handleDelete(a._id)}
                      style={{ padding: '6px 14px', background: '#dc2626', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 13 }}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}