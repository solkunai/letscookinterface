export function CulinaryLoader() {
  return (
    <div className="relative flex items-center justify-center h-48 w-64">
      <div className="relative w-48 h-48">
        <svg
          viewBox="0 0 100 125"
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 8px 16px hsla(var(--primary)/0.3))',
          }}
        >
          <g className="animate-bob">
            {/* Main flame body (larger, back) */}
            <path
              d="M50 0 L95 100 H5 Z"
              fill="hsl(var(--accent))"
              transform="matrix(0.8, 0, 0, 0.9, 10, 15)"
            />
            {/* Secondary flame (smaller, front) */}
            <path
              d="M50 20 L80 100 H20 Z"
              fill="hsl(var(--primary))"
               transform="matrix(0.7, 0, 0, 0.8, 15, 20)"
            />
            {/* Base detail */}
            <path
              d="M25 100 C 40 110, 60 110, 75 100 L 50 120 Z"
              fill="hsl(var(--background))"
              className="opacity-50"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
