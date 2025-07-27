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
          {/* Flame behind hat */}
          <g className="origin-bottom transform scale-110 translate-y-2">
            <path
              d="M100 90 C 80 40, 120 40, 100 20 C 100 40, 110 70, 100 90 Z"
              fill="hsl(var(--primary))"
              className="animate-flicker"
              style={{ animationDuration: '1.2s' }}
            />
            <path
              d="M100 90 C 90 60, 80 70, 85 45 C 90 65, 100 75, 100 90 Z"
              fill="hsl(var(--accent))"
              className="animate-flicker"
              style={{ animationDelay: '0.3s', animationDuration: '1.5s' }}
            />
            <path
              d="M100 90 C 110 60, 120 70, 115 45 C 110 65, 100 75, 100 90 Z"
              fill="hsl(var(--accent))"
              className="animate-flicker"
              style={{ animationDelay: '0.6s', animationDuration: '1.8s' }}
            />
          </g>

          {/* Chef's Hat */}
          <path
            d="M70 100 C 40 100, 40 60, 80 50 C 90 45, 110 45, 120 50 C 160 60, 160 100, 130 100 Z"
            fill="hsl(var(--background))"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            strokeLinejoin="round"
          />
           <path
            d="M60 150 Q50 150 50 140 L50 110 Q50 100 60 100 L140 100 Q150 100 150 110 L150 140 Q150 150 140 150 Z"
            fill="hsl(var(--background))"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            strokeLinejoin="round"
          />
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
