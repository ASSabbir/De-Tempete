import { useState } from 'react';
import API from '../api/axios';

export const isLocalFile = (v) => typeof v === 'string' && v.startsWith('local:');
const prettyName = (v) => v.slice('local:'.length).replace(/^[a-f0-9]{8}__/, '');

// Opens a stored document in a new tab.
// Uploaded files need a short-lived link first; old Drive links open directly.
export async function openDocument(value) {
  if (!value) return;
  if (!isLocalFile(value)) {
    window.open(value, '_blank', 'noopener,noreferrer');
    return;
  }
  const tab = window.open('', '_blank'); // opened first so popup blockers allow it
  try {
    const { data } = await API.post('/uploads/sign', { ref: value });
    if (tab) tab.location.href = data.url;
    else window.open(data.url, '_blank');
  } catch {
    if (tab) tab.close();
    alert('Could not open the file');
  }
}

const inputStyle = { width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 14, boxSizing: 'border-box' };
const smallBtn = (bg) => ({ padding: '5px 12px', background: bg, color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 12, fontWeight: 600 });

export default function DocumentUploadField({ value, onChange, onError }) {
  const [uploading, setUploading] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    onError?.('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      const { data } = await API.post('/uploads/document', formData, { timeout: 300000 });
      onChange(data.ref);
    } catch (err) {
      onError?.(err.response?.data?.message || 'Upload failed');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div>
      {isLocalFile(value) && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '10px 14px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: '#166534', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            📄 {prettyName(value)}
          </span>
          <span style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
            <button type="button" onClick={() => openDocument(value)} style={smallBtn('#0f1f3d')}>Open</button>
            <button type="button" onClick={() => onChange('')} style={smallBtn('#dc2626')}>Remove</button>
          </span>
        </div>
      )}

      <input
        type="file"
        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip"
        onChange={handleFile}
        disabled={uploading}
        style={inputStyle}
      />
      <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 6 }}>
        {uploading
          ? 'Uploading, please wait. Do not click Save until it finishes.'
          : isLocalFile(value)
            ? 'Choose another file to replace the current one. PDF, Word, Excel, PowerPoint or ZIP, max 50 MB.'
            : 'PDF, Word, Excel, PowerPoint or ZIP, max 50 MB.'}
      </p>

      {!isLocalFile(value) && (
        <div style={{ marginTop: 10 }}>
          <label style={{ display: 'block', fontSize: 12, color: '#6b7280', marginBottom: 4 }}>
            Or keep an existing link (old Google Drive links still work)
          </label>
          <input
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="https://..."
            style={inputStyle}
          />
        </div>
      )}
    </div>
  );
}