export function KrewLogo({ size = 28 }) {
  const scale = size / 28
  return (
    <svg
      width={100 * scale}
      height={size}
      viewBox="0 0 100 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Krew"
    >
      {/* Node circles */}
      <circle cx="6" cy="4" r="2.5" fill="#5B5BD6" />
      <circle cx="6" cy="14" r="2.5" fill="#5B5BD6" />
      <circle cx="6" cy="24" r="2.5" fill="#5B5BD6" />
      <circle cx="17" cy="8" r="2.5" fill="#5B5BD6" />
      <circle cx="17" cy="20" r="2.5" fill="#5B5BD6" />
      {/* Lines */}
      <line x1="6" y1="4" x2="6" y2="24" stroke="#5B5BD6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="14" x2="17" y2="8" stroke="#5B5BD6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="14" x2="17" y2="20" stroke="#5B5BD6" strokeWidth="1.5" strokeLinecap="round" />
      {/* Wordmark */}
      <text
        x="26"
        y="20"
        fontFamily="Syne, sans-serif"
        fontSize="18"
        fontWeight="800"
        fill="white"
        letterSpacing="-0.5"
      >
        KREW
      </text>
    </svg>
  )
}
