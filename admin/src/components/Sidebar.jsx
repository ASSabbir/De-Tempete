import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  { to: '/', label: '📊 Dashboard' },
  { to: '/library', label: '📚 Library' },
  { to: '/publications', label: '📄 Publications' },
  { to: '/forms', label: '📋 Forms' },
];

const linkBase = {
  display: 'block', padding: '12px 24px',
  textDecoration: 'none', fontSize: 14,
  transition: 'background 0.15s',
};

export default function Sidebar() {
  const { logout, admin } = useAuth();
  return (
    <aside style={{ width: 240, minHeight: '100vh', background: '#0f1f3d', color: '#fff', display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 24px 24px', borderBottom: '1px solid #1e3a6e' }}>
        <div style={{ fontSize: 18, fontWeight: 700 }}>de tempête</div>
        <div style={{ fontSize: 12, color: '#8ba3c7', marginTop: 4 }}>Admin Panel</div>
      </div>
      <nav style={{ flex: 1, padding: '16px 0' }}>
        {links.map(({ to, label }) => (
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
        <div style={{ fontSize: 13, color: '#8ba3c7', marginBottom: 8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {admin?.name}
        </div>
        <button onClick={logout}
          style={{ background: 'transparent', border: '1px solid #8ba3c7', color: '#8ba3c7', padding: '6px 16px', borderRadius: 6, cursor: 'pointer', fontSize: 13, width: '100%' }}>
          Logout
        </button>
      </div>
    </aside>
  );
}