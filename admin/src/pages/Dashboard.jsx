import { useEffect, useState } from 'react';
import API from '../api/axios';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';


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
      <style>{`
      .hourglass {
        font-size: 2rem;
        display: inline-flex;
        animation: flipHourglass 5s ease-in-out infinite;
        transform-origin: center;
      }

      @keyframes flipHourglass {
        0%, 45% {
          transform: rotate(0deg);
        }

        50%, 95% {
          transform: rotate(180deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
      <h2 className="text-3xl font-bold text-slate-900 mb-2">
        Dashboard
      </h2>

      <p className="text-sm text-gray-500 mb-7">
        Welcome back, {admin?.name}.
      </p>

      {admin?.role === "superadmin" && totalPending > 0 && (
        <div className="mb-7 flex items-center gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3">
          <div className="hourglass">⌛</div>

          <p className="text-xl font-medium text-amber-800">
            <span className="text-red-500">{totalPending}</span>{" "}
            item{totalPending === 1 ? "" : "s"} waiting for your approval across all sections
          </p>
        </div>
      )}

      {loading ? (
        <div className="py-10 text-center text-gray-400">
          Loading...
        </div>
      ) : (
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: `repeat(${Math.min(keys.length, 3)}, minmax(0, 1fr))`,
          }}
        >
          {keys.map((key) => {
            const { label, color } = STAT_CONFIG[key];
            const pendingCount = pending[key];


            return (
              <Link
                to={`/${key === 'newsEvents' ? 'news-events' : key}`}
                key={key}
                className="rounded-tr-2xl rounded-br-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md"
                style={{ borderLeft: `4px solid ${color}` }}
              >
                <h3
                  className="text-4xl font-bold"
                  style={{ color }}
                >
                  {stats[key] ?? 0}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {label}
                </p>

                {admin?.role === "superadmin" && pendingCount > 0 && (
                  <div className='flex'>
                    <p className="mt-3 text-xl font-semibold rounded-2xl text-red-500   ">
                      {pendingCount} pending approval
                    </p>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}