export function CulinaryLoader() {
  return (
    <div className="relative flex items-center justify-center h-48 w-64">
      <div className="relative w-48 h-48">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.2))',
          }}
        >
          {/* Frying Pan */}
          <g transform="translate(0, 20)">
            <path
              d="M30 80 C10 80, 10 40, 30 40 L130 40 C150 40, 150 80, 130 80 Z"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <path
              d="M130 60 H190"
              stroke="hsl(var(--muted))"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </g>
          
          {/* Flame */}
          <g transform="translate(65, 110)">
            <path 
              d="M35 50 C 35 50, 55 50, 55 30 C 55 10, 25 10, 25 30 C 25 50, 35 50, 35 50 Z" 
              fill="hsl(var(--accent))" 
              className="animate-flicker" 
              style={{ animationDelay: '0s', transformOrigin: '50% 100%' }}
            />
            <path 
              d="M45 50 C 45 50, 65 50, 65 25 C 65 0, 25 0, 25 25 C 25 50, 45 50, 45 50 Z" 
              fill="hsl(var(--primary))" 
              className="animate-flicker" 
              style={{ animationDelay: '0.2s', transformOrigin: '50% 100%' }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
