export function CulinaryLoader() {
  return (
    <div className="relative flex items-center justify-center h-48 w-64">
      <div className="relative w-40 h-40 animate-bob">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 6px 8px rgba(0,0,0,0.15))',
          }}
        >
          {/* Chef's Hat */}
          <path
            d="M60 150 Q50 150 50 140 L50 110 Q50 100 60 100 L140 100 Q150 100 150 110 L150 140 Q150 150 140 150 Z"
            fill="hsl(var(--background))"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path
            d="M70 100 C 40 100, 40 60, 80 50 C 90 45, 110 45, 120 50 C 160 60, 160 100, 130 100 Z"
            fill="hsl(var(--background))"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Flame */}
          <g className="animate-flicker origin-bottom">
            <path
              d="M100 50 C 90 30, 110 30, 100 10 C 100 30, 105 40, 100 50 Z"
              fill="hsl(var(--primary))"
            />
            <path
              d="M100 50 C 95 35, 85 45, 90 25 C 95 40, 100 45, 100 50 Z"
              fill="hsl(var(--accent))"
              style={{ animation: 'flicker 1s ease-in-out infinite 0.2s' }}
            />
            <path
              d="M100 50 C 105 35, 115 45, 110 25 C 105 40, 100 45, 100 50 Z"
              fill="hsl(var(--accent))"
              style={{ animation: 'flicker 1s ease-in-out infinite 0.4s' }}
            />
          </g>
        </svg>

        {/* Smoke animation */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full h-full">
          <span
            className="absolute block w-1 h-4 bg-muted-foreground/30 rounded-full animate-steam"
            style={{ left: '48%', animationDelay: '0s' }}
          ></span>
          <span
            className="absolute block w-1.5 h-6 bg-muted-foreground/30 rounded-full animate-steam"
            style={{ left: '52%', animationDelay: '0.7s' }}
          ></span>
        </div>
      </div>
    </div>
  );
}
