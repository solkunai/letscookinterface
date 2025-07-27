export function CulinaryLoader() {
  return (
    <div className="relative flex items-center justify-center h-48 w-64">
      <div className="relative w-48 h-48 animate-bob">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.2))',
          }}
        >
          <g transform="translate(10, 20) scale(1.4)">
            <path
              d="M100 150 C 70 100, 130 100, 100 50 C 100 100, 115 130, 100 150 Z"
              fill="hsl(var(--primary))"
              className="animate-flicker"
              style={{ animationDuration: '1.2s' }}
            />
            <path
              d="M100 150 C 90 120, 80 130, 85 105 C 90 125, 100 135, 100 150 Z"
              fill="hsl(var(--accent))"
              className="animate-flicker"
              style={{ animationDelay: '0.3s', animationDuration: '1.5s' }}
            />
             <path
              d="M100 150 C 110 120, 120 130, 115 105 C 110 125, 100 135, 100 150 Z"
              fill="hsl(var(--accent))"
              className="animate-flicker"
              style={{ animationDelay: '0.6s', animationDuration: '1.8s' }}
            />
          </g>
        </svg>

        {/* Smoke animation */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full h-full">
          <span
            className="absolute block w-1.5 h-6 bg-muted-foreground/30 rounded-full animate-steam"
            style={{ left: '48%', animationDelay: '0s' }}
          ></span>
          <span
            className="absolute block w-2 h-8 bg-muted-foreground/30 rounded-full animate-steam"
            style={{ left: '52%', animationDelay: '0.7s' }}
          ></span>
          <span
            className="absolute block w-1.5 h-5 bg-muted-foreground/30 rounded-full animate-steam"
            style={{ left: '55%', animationDelay: '1.2s' }}
          ></span>
        </div>
      </div>
    </div>
  );
}
