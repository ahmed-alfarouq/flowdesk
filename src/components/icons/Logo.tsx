const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={250}
      height={60}
      viewBox="0 0 300 80"
      role="img"
      aria-label="Desk Flow"
      className={className}
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#605bff" />
          <stop offset="1" stopColor="#ef37ff" />
        </linearGradient>

        <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.06" />
        </linearGradient>

        <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="10"
            floodColor="#0b0826"
            floodOpacity="0.12"
          />
        </filter>

        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 z" fill="#ff8f6b" />
        </marker>
      </defs>

      {/* Icon without vertical translate */}
      <g transform="translate(10,0)">
        <rect
          x="0"
          y="0"
          width="80"
          height="80"
          rx="18"
          fill="url(#g1)"
          filter="url(#shadow)"
        />

        <rect x="0" y="0" width="80" height="80" rx="18" fill="url(#g2)" />

        <path
          d="M36 28
             C36 22, 42 18, 48 18
             H64
             C72 18, 78 24, 78 32
             V44
             C78 56, 68 64, 56 64
             H44
             C40 64, 36 60, 36 56
             V28 Z"
          fill="white"
          fillOpacity="0.95"
          transform="translate(-10,0)"
        />

        <path
          d="M44 36
             C56 30, 68 30, 76 36"
          fill="none"
          stroke="#ff8f6b"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          markerEnd="url(#arrowhead)"
          transform="translate(-2,16) scale(0.8)"
        />

        <circle
          cx="24"
          cy="68"
          r="4"
          fill="#26c0e2"
          transform="translate(-5,4) scale(0.9)"
        />
      </g>

      {/* Text block aligned with icon */}
      <g transform="translate(100,50)" aria-hidden="true">
        <text
          x="0"
          y="0"
          fontFamily="Nunito, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          fontSize="36"
          fontWeight="700"
          fill="#030229"
          letterSpacing="-0.6"
          dominantBaseline="middle"
        >
          Desk
        </text>
        <text
          x="92"
          y="0"
          fontFamily="Nunito, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          fontSize="36"
          fontWeight="700"
          fill="#605bff"
          letterSpacing="-0.6"
          dominantBaseline="middle"
        >
          Flow
        </text>

        <text
          x="0"
          y="28"
          fontFamily="Nunito, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          fontSize="12"
          fill="#6b6b85"
        >
          Plan • Track • Collaborate
        </text>
      </g>
    </svg>
  );
};

export default Logo;
