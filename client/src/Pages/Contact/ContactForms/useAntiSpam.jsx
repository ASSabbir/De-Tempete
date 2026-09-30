import { useState } from "react";

// Renders an invisible honeypot field + captures a form-load timestamp.
// Bots tend to fill every field and submit instantly — humans don't.
export function useAntiSpam() {
  const [loadedAt] = useState(() => Date.now());
  const [gotcha, setGotcha] = useState("");

  const HoneypotField = (
    <input
      type="text" name="_gotcha" value={gotcha} onChange={(e) => setGotcha(e.target.value)}
      autoComplete="off" tabIndex={-1}
      style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      aria-hidden="true"
    />
  );

  return { formLoadedAt: loadedAt, gotcha, HoneypotField };
}