export function Zellige({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-current opacity-30" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-60">
        <path
          d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z"
          fill="currentColor"
        />
      </svg>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-40">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-60">
        <path
          d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z"
          fill="currentColor"
        />
      </svg>
      <span className="h-px w-12 bg-current opacity-30" />
    </div>
  );
}
