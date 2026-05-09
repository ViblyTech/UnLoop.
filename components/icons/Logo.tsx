interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 32, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="orb-gradient" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#9B85FF" />
          <stop offset="60%" stopColor="#6B7FFF" />
          <stop offset="100%" stopColor="#4A5FC4" />
        </radialGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#orb-gradient)" />
      <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.35)" />
    </svg>
  );
}
