import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  { to: '/', label: '📊 Dashboard', roles: ['superadmin', 'resource', 'news', 'blog'] },
  { to: '/library', label: '📚 Library', roles: ['superadmin', 'resource'] },
  { to: '/publications', label: '📄 Publications', roles: ['superadmin', 'resource'] },
  { to: '/forms', label: '📋 Forms', roles: ['superadmin', 'resource'] },
  { to: '/leads', label: '📥 Downloads', roles: ['superadmin', 'resource'] },
  { to: '/business-setup-leads', label: '📥 Business Setup Downloads', roles: ['superadmin', 'resource'] },
  { to: '/news-events', label: '📰 News & Events', roles: ['superadmin', 'news'] },
  { to: '/blogs', label: '📰 Blogs', roles: ['superadmin', 'blog'] },
  { to: '/users', label: '👤 Users', roles: ['superadmin'] },
];

const roleLabels = {
  superadmin: 'Super Admin',
  resource: 'Resource User',
  news: 'News User',
  blog: 'Blog User',
};

const linkBase = {
  display: 'block', padding: '12px 24px',
  textDecoration: 'none', fontSize: 14,
  transition: 'background 0.15s',
};

export default function Sidebar() {
  const { logout, admin } = useAuth();
  const visibleLinks = links.filter(l => l.roles.includes(admin?.role));

  return (
    <aside style={{ width: 240, minHeight: '100vh', background: '#0f1f3d', color: '#fff', display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 24px 24px', borderBottom: '1px solid #1e3a6e' }}>
        <div style={{ fontSize: 18, fontWeight: 700 }}>de tempête</div>
        <div style={{ fontSize: 12, color: '#8ba3c7', marginTop: 4 }}>Admin Panel</div>
      </div>
      <nav style={{ flex: 1, padding: '16px 0' }}>
        {visibleLinks.map(({ to, label }) => (
          <NavLink key={to} to={to} end={to === '/'}
            style={({ isActive }) => ({
              ...linkBase,
              color: isActive ? '#fff' : '#8ba3c7',
              background: isActive ? '#1e3a6e' : 'transparent',
              borderLeft: isActive ? '3px solid #4a9eff' : '3px solid transparent',
            })}>
            {label}
          </NavLink>
        ))}
      </nav>
      <div style={{ padding: '16px 24px', borderTop: '1px solid #1e3a6e' }}>
        <div style={{ fontSize: 13, color: '#8ba3c7', marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {admin?.name}
        </div>
        <div style={{ fontSize: 11, color: '#4a9eff', marginBottom: 10, fontWeight: 600 }}>
          {roleLabels[admin?.role] || admin?.role}
        </div>
        <button onClick={logout}
          style={{ background: 'transparent', border: '1px solid #8ba3c7', color: '#8ba3c7', padding: '6px 16px', borderRadius: 6, cursor: 'pointer', fontSize: 13, width: '100%' }}>
          Logout
        </button>
      </div>
    </aside>
  );
}