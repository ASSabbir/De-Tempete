// Strips HTML tags and collapses whitespace, for card/list previews where
// you want plain text, not the raw <p>/<strong> markup TipTap produces.
export function stripHtml(html, maxLength = 140) {
  if (!html) return '';
  
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '…';
}