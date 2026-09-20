export function SvgUnderline({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 280 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12c28-8 56-10 84-8 36 3 70 11 106 8 28-2 56-8 86-10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path
        d="M18 15c24-4 48-5 72-3"
        opacity="0.55"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  )
}
