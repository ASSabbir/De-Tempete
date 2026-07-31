import { useEffect, useState } from 'react';
import API from '../api/axios';
import { useAuth } from '../context/AuthContext';

const STAT_CONFIG = {
  library: { endpoint: '/library/admin/all', label: 'Library Items', color: '#3b82f6' },
  publications: { endpoint: '/publications/admin/all', label: 'Publications', color: '#10b981' },
  forms: { endpoint: '/forms/admin/all', label: 'Forms', color: '#f59e0b' },
  newsEvents: { endpoint: '/news-events/admin/all', label: 'News & Events', color: '#8b5cf6' },
  blogs: { endpoint: '/blogs/admin/all', label: 'Blogs', color: '#ec4899' },
};

// which stat cards each role sees
const ROLE_STATS = {
  superadmin: ['library', 'publications', 'forms', 'newsEvents', 'blogs'],
  resource: ['library', 'publications', 'forms'],
  news: ['newsEvents'],
  blog: ['blogs'],
};

export default function Dashboard() {
  const { admin } = useAuth();
  const [stats, setStats] = useState({});
  const [pending, setPending] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const keys = ROLE_STATS[admin?.role] || [];
    if (keys.length === 0) { setLoading(false); return; }

    Promise.all(keys.map(key => API.get(`${STAT_CONFIG[key].endpoint}?limit=1`)))
      .then(results => {
        const nextStats = {};
        keys.forEach((key, i) => { nextStats[key] = results[i].data.total || 0; });
        setStats(nextStats);
      })
      .catch(console.error)
      .finally(() => setLoading(false));

    // Super Admin also gets a pending-approval count per section
    if (admin?.role === 'superadmin') {
      Promise.all(keys.map(key => API.get(`${STAT_CONFIG[key].endpoint}?limit=1&status=pending`)))
        .then(results => {
          const nextPending = {};
          keys.forEach((key, i) => { nextPending[key] = results[i].data.total || 0; });
          setPending(nextPending);
        })
        .catch(console.error);
    }
  }, [admin?.role]);

  const keys = ROLE_STATS[admin?.role] || [];
  const totalPending = Object.values(pending).reduce((sum, n) => sum + n, 0);

  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0f1f3d', marginBottom: 8 }}>Dashboard</h2>
      <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 28 }}>
        Welcome back, {admin?.name}.
      </p>

      {admin?.role === 'superadmin' && totalPending > 0 && (
        <div style={{
          background: '#fffbeb', border: '1px solid #fde68a', color: '#92400e',
          borderRadius: 10, padding: '14px 18px', marginBottom: 28, fontSize: 14, fontWeight: 600,
        }}>
          ⏳ {totalPending} item{totalPending === 1 ? '' : 's'} waiting for your approval across all sections
        </div>
      )}

      {loading ? (
        <div style={{ padding: 40, textAlign: 'center', color: '#9ca3af' }}>Loading...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(keys.length, 3)}, 1fr)`, gap: 20 }}>
          {keys.map((key) => {
            const { label, color } = STAT_CONFIG[key];
            const pendingCount = pending[key];
            return (
              <div key={key} style={{ background: '#fff', borderRadius: 12, padding: 28, boxShadow: '0 1px 8px rgba(0,0,0,0.06)', borderLeft: `4px solid ${color}` }}>
                <div style={{ fontSize: 36, fontWeight: 700, color }}>{stats[key] ?? 0}</div>
                <div style={{ fontSize: 14, color: '#6b7280', marginTop: 4 }}>{label}</div>
                {admin?.role === 'superadmin' && pendingCount > 0 && (
                  <div style={{ fontSize: 12, color: '#d97706', marginTop: 8, fontWeight: 600 }}>
                    {pendingCount} pending approval
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}