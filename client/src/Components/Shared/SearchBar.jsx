import { useState } from 'react';

export default function SearchBar({ value, onChange, placeholder = 'Type to start searching...' }) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{
      position: 'relative', width: '100%',
      border: `1.5px solid ${focused ? '#0f1f3d' : '#d1d5db'}`,
      borderRadius: 8, background: '#fff', transition: 'border-color 0.2s',
    }}>
      <svg style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }}
        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        style={{
          width: '100%', padding: '14px 40px 14px 42px',
          border: 'none', outline: 'none', borderRadius: 8,
          fontSize: 15, background: 'transparent', boxSizing: 'border-box',
        }}
      />
      {value && (
        <button onClick={() => onChange('')}
          style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: 20, lineHeight: 1, padding: 0 }}>
          ×
        </button>
      )}
    </div>
  );
}