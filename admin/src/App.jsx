import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import Publications from './pages/Publications';
import Forms from './pages/Forms';
import Leads from './pages/Leads';
import NewsEvents from './pages/NewsEvents';
import Blogs from './pages/Blogs';
import BusinessSetupLeads from './pages/Businesssetupleads';
import Users from './pages/Users';

// Guards a single route by role. If the logged-in admin's role isn't in `roles`,
// bounce back to the dashboard instead of showing the page.
function RoleRoute({ roles, children }) {
  const { admin } = useAuth();
  if (!roles.includes(admin?.role)) return <Navigate to="/" replace />;
  return children;
}

function ProtectedLayout() {
  const { admin } = useAuth();
  if (!admin) return <Navigate to="/login" replace />;
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f1f5f9' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: 32, minWidth: 0 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/library" element={<RoleRoute roles={['superadmin', 'resource']}><Library /></RoleRoute>} />
          <Route path="/publications" element={<RoleRoute roles={['superadmin', 'resource']}><Publications /></RoleRoute>} />
          <Route path="/forms" element={<RoleRoute roles={['superadmin', 'resource']}><Forms /></RoleRoute>} />
          <Route path="/leads" element={<RoleRoute roles={['superadmin', 'resource']}><Leads /></RoleRoute>} />
          <Route path="/business-setup-leads" element={<RoleRoute roles={['superadmin', 'resource']}><BusinessSetupLeads /></RoleRoute>} />
          <Route path="/news-events" element={<RoleRoute roles={['superadmin', 'news']}><NewsEvents /></RoleRoute>} />
          <Route path="/blogs" element={<RoleRoute roles={['superadmin', 'blog']}><Blogs /></RoleRoute>} />
          <Route path="/users" element={<RoleRoute roles={['superadmin']}><Users /></RoleRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ProtectedLayout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}