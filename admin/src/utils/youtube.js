// Accepts a YouTube link (watch, youtu.be, shorts, embed) or a pasted <iframe> embed
// code, and returns the 11-character video id, or null if it isn't a YouTube video.
export const parseYouTubeId = (input) => {
  const s = String(input || '').trim();
  if (!s) return null;

  // If an <iframe ... src="..."> was pasted, use its src.
  const srcMatch = s.match(/src\s*=\s*["']([^"']+)["']/i);
  let candidate = srcMatch ? srcMatch[1] : s;
  if (candidate.startsWith('//')) candidate = `https:${candidate}`;
  if (!/^https?:\/\//i.test(candidate)) candidate = `https://${candidate}`;

  let url;
  try {
    url = new URL(candidate);
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase().replace(/^(www|m)\./, '');
  let id = null;

  if (host === 'youtu.be') {
    id = url.pathname.split('/')[1];
  } else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    if (url.pathname === '/watch') {
      id = url.searchParams.get('v');
    } else {
      const m = url.pathname.match(/^\/(embed|shorts|live|v)\/([\w-]{11})/);
      if (m) id = m[2];
    }
  }

  return id && /^[\w-]{11}$/.test(id) ? id : null;
};

// '' = no video, null = invalid, otherwise a clean watch URL that is safe to store.
export const cleanVideoUrl = (raw) => {
  const s = String(raw || '').trim();
  if (!s) return '';
  const id = parseYouTubeId(s);
  return id ? `https://www.youtube.com/watch?v=${id}` : null;
};