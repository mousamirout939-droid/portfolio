export default function VerifiedTick({ children }) {
  return (
    <span className="verified">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M3 8.5L6.2 11.5L13 4.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </span>
  );
}
