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

const EMPTY = { name: '', email: '', password: '', role: 'superadmin' };

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
  {/* Header */}
  <div className="mb-6 flex items-center justify-between">
    <h2 className="text-3xl font-bold text-slate-900">
      Users ({admins.length})
    </h2>

    <button
      onClick={() => {
        setShowCreate((p) => !p);
        setMsg("");
        setErrMsg("");
      }}
      className="rounded-lg bg-slate-900 px-5 py-2.5 font-semibold text-white transition hover:bg-slate-800"
    >
      {showCreate ? "Cancel" : "+ Create User"}
    </button>
  </div>

  {/* Create User Form */}
  {showCreate && (
    <div className="mb-7 max-w-lg rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
      <h3 className="mb-5 text-lg font-bold text-slate-900">
        Create New User
      </h3>

      {msg && (
        <div className="mb-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600">
          {msg}
        </div>
      )}

      {errMsg && (
        <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {errMsg}
        </div>
      )}

      <div className="mb-4">
        <label className={labelStyle}>Name</label>
        <input 
          value={form.name}
          onChange={(e) =>
            setForm((p) => ({ ...p, name: e.target.value }))
          }
          style={inputStyle}
        />
      </div>

      <div className="mb-4">
        <label className={labelStyle}>Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm((p) => ({ ...p, email: e.target.value }))
          }
          style={inputStyle}
        />
      </div>

      <div className="mb-4">
        <label className={labelStyle}>Password (min 8 chars)</label>
        <input
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm((p) => ({ ...p, password: e.target.value }))
          }
          style={inputStyle}
        />
      </div>

      <div className="mb-5">
        <label className={labelStyle}>Role</label>
        <select
          value={form.role}
          onChange={(e) =>
            setForm((p) => ({ ...p, role: e.target.value }))
          }
          style={inputStyle}
        >
          {roles
            
            .map((r) => (
              <option key={r} value={r}>
                {roleLabels[r] || r}
              </option>
            ))}
        </select>
      </div>

      <button
        onClick={handleCreate}
        disabled={creating}
        className={`rounded-lg px-6 py-2.5 font-semibold text-white transition ${
          creating
            ? "cursor-not-allowed bg-slate-400"
            : "bg-slate-900 hover:bg-slate-800"
        }`}
      >
        {creating ? "Creating..." : "Create User"}
      </button>
    </div>
  )}

  {/* Table */}
  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
    {loading ? (
      <div className="py-16 text-center text-gray-400">
        Loading...
      </div>
    ) : (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="border-b-2 border-gray-200 bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Email
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Role
              </th>
              <th className="px-4 py-3 text-right font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {admins.map((a) => (
              <tr
                key={a._id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-gray-600">
                  {a.name}
                </td>

                <td className="px-4 py-3 text-gray-600">
                  {a.email}
                </td>

                <td className="px-4 py-3">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                    style={{
                      background: roleBadgeColor[a.role] || "#34cf23",
                    }}
                  >
                    {roleLabels[a.role] || a.role}
                  </span>
                </td>

                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => handleDelete(a._id)}
                    className="rounded-md bg-red-600 px-4 py-1.5 text-sm text-white transition hover:bg-red-700"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
</div>
  );
}