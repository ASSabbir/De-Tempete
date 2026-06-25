import { useState } from 'react';
import DownloadGateModal from './DownloadGateModal';

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

export default function DownloadButton({ resourceType, resourceId, label = 'Download', variant = 'filled' }) {
  const [open, setOpen] = useState(false);

  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '10px 22px', borderRadius: 8, cursor: 'pointer',
    fontWeight: 600, fontSize: 14, border: 'none',
    transition: 'opacity 0.15s', whiteSpace: 'nowrap',
  };
  const styles = variant === 'filled'
    ? { ...base, background: '#0f1f3d', color: '#fff' }
    : { ...base, background: 'transparent', color: '#0f1f3d', border: '1.5px solid #0f1f3d' };

  return (
    <>
      <button onClick={() => setOpen(true)} style={styles}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
        <DownloadIcon />
        {label}
      </button>
      {open && (
        <DownloadGateModal
          resource={{ type: resourceType, id: resourceId }}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}