import { useState, useEffect } from 'react';
import API from '../../api/axios';
import logo from '../../asstes/img_temp/logo1.webp';

const inputStyle = {
  width: '100%', padding: '15px 18px', background: '#383f52',
  border: 'none', borderRadius: 8, color: '#fff',
  fontSize: 14, outline: 'none', boxSizing: 'border-box', marginBottom: 14,
};

const placeholderStyle = { color: '#9aa0b3' };

export default function DownloadGateModal({ resource, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', designation: '' });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) {
      setError('Name, email and phone are required');
      return;
    }
    if (!agreed) {
      setError('Please agree to the Terms & Conditions to continue');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const { data } = await API.post('/leads', {
        ...form,
        resourceType: resource.type,
        resourceId: resource.id,
      });
      window.open(data.downloadUrl, '_blank', 'noopener,noreferrer');
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 2000, padding: 16,
      }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#0d1526', borderRadius: 12, padding: '32px 32px 28px',
        width: '100%', maxWidth: 470, position: 'relative',
        border: '1px solid #1e2d4a',
        boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 18, right: 18, width: 30, height: 30,
          borderRadius: '50%', background: '#fff', border: 'none',
          color: '#22b8e0', fontSize: 18, cursor: 'pointer', lineHeight: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700,
        }}>×</button>

        <img src={logo} alt="de tempête" style={{ height: 38, marginBottom: 32, display: 'block' }} />

        <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.3 }}>
          Access Premium Resource
        </h2>
        <p style={{ fontSize: 15, color: '#cdd1dc', marginBottom: 26 }}>
          Fill the form below to download the resource.
        </p>

        {error && (
          <div style={{ background: 'rgba(220,38,38,0.15)', color: '#fca5a5', padding: '10px 14px', borderRadius: 6, marginBottom: 14, fontSize: 13 }}>
            {error}
          </div>
        )}

         <style>{`
          .dgm-input::placeholder { color: #6b7280; }
          .dgm-input:focus { outline: none; }
          .dgm-checkbox { accent-color: #22b8e0; cursor: pointer; }
        `}</style>

        <input className="dgm-input" placeholder="Name" value={form.name}
          style={{ ...inputStyle, background: '#1c2333', border: '1px solid #2d3650', borderRadius: 6, padding: '13px 16px', fontSize: 15, color: '#fff', marginBottom: 12 }}
          onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
        <input className="dgm-input" placeholder="Email" type="email" value={form.email}
          style={{ ...inputStyle, background: '#1c2333', border: '1px solid #2d3650', borderRadius: 6, padding: '13px 16px', fontSize: 15, color: '#fff', marginBottom: 12 }}
          onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
        <input className="dgm-input" placeholder="Phone" value={form.phone}
          style={{ ...inputStyle, background: '#1c2333', border: '1px solid #2d3650', borderRadius: 6, padding: '13px 16px', fontSize: 15, color: '#fff', marginBottom: 12 }}
          onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          <input className="dgm-input" placeholder="Company" value={form.company}
            style={{ ...inputStyle, flex: 1, background: '#1c2333', border: '1px solid #2d3650', borderRadius: 6, padding: '13px 16px', fontSize: 15, color: '#fff', marginBottom: 0 }}
            onChange={e => setForm(p => ({ ...p, company: e.target.value }))} />
          <input className="dgm-input" placeholder="Designation" value={form.designation}
            style={{ ...inputStyle, flex: 1, background: '#1c2333', border: '1px solid #2d3650', borderRadius: 6, padding: '13px 16px', fontSize: 15, color: '#fff', marginBottom: 0 }}
            onChange={e => setForm(p => ({ ...p, designation: e.target.value }))} />
        </div>

        <label style={{
          display: 'flex', alignItems: 'flex-start', gap: 10,
          fontSize: 13, color: '#cdd1dc', cursor: 'pointer',
          marginBottom: 4, lineHeight: 1.5,
        }}>
          <input
            type="checkbox"
            className="dgm-checkbox"
            checked={agreed}
            onChange={e => { setAgreed(e.target.checked); if (error) setError(''); }}
            style={{ width: 16, height: 16, marginTop: 2, flexShrink: 0 }}
          />
          <span>
            I agree to the <a href="/terms-conditions" target="_blank" rel="noopener noreferrer" style={{ color: '#38d1e8', textDecoration: 'underline' }}>Terms & Conditions</a> and <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#38d1e8', textDecoration: 'underline' }}>Privacy Policy</a>
          </span>
        </label>

        <button onClick={handleSubmit} disabled={loading || !agreed} style={{
          width: '100%', padding: '15px', marginTop: 14,
          background: 'linear-gradient(90deg, #38d1e8 0%, #22b8e0 100%)',
          color: '#0a1220', border: 'none',
          borderRadius: 8, fontWeight: 700, fontSize: 16,
          cursor: (loading || !agreed) ? 'not-allowed' : 'pointer', opacity: (loading || !agreed) ? 0.5 : 1,
          letterSpacing: 0.2,
        }}>
          {loading ? 'Submitting...' : 'Download Now'}
        </button>
      </div>
    </div>
  );
}