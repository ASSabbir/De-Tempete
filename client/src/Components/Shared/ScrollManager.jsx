import { useEffect } from 'react';
import { useLocation } from 'react-router';

// React Router never touches scroll position on navigation — that's normal
// full-page-load behavior the browser gives you for free, but an SPA router
// has to replicate it manually. This handles both cases:
//   1. Plain route change (no hash) -> jump to top, like a fresh page load.
//   2. Route change WITH a hash (e.g. /services/uk/compliance#uk-payroll)
//      -> smoothly scroll to the element with that id, once it's mounted.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');

      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };

      // The target page may still be mounting (images, lazy content, etc.)
      // right after navigation, so retry once shortly after the first try.
      const immediate = setTimeout(scrollToTarget, 0);
      const retry = setTimeout(scrollToTarget, 200);
      return () => {
        clearTimeout(immediate);
        clearTimeout(retry);
      };
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}