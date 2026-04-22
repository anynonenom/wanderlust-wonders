export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2 6 Q 12 -1, 22 6 T 42 6 T 62 6 T 82 6 T 102 6 T 118 6" />
    </svg>
  );
}

export function Compass({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="32" cy="32" r="28" />
      <circle cx="32" cy="32" r="22" strokeDasharray="2 4" />
      <path d="M32 12 L36 32 L32 52 L28 32 Z" fill="currentColor" />
      <circle cx="32" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}

export function HandArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 40" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 28 Q 25 8, 60 22" />
      <path d="M52 14 L62 22 L54 30" />
    </svg>
  );
}
