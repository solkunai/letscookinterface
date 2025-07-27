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
          
          {/* Stylized Flame */}
          <g transform="translate(60, 115) scale(1.2)">
            <path 
              d="M40 50 Q 50 40, 60 50 T 40 50"
              fill="hsl(var(--primary))" 
              className="animate-flicker" 
              style={{ animationDelay: '0s', transformOrigin: '50% 100%' }}
            />
            <path 
              d="M45 50 Q 50 30, 55 50 T 45 50"
              fill="hsl(var(--accent))" 
              className="animate-flicker" 
              style={{ animationDelay: '0.3s', transformOrigin: '50% 100%' }}
            />
             <path 
              d="M35 50 Q 50 35, 65 50 T 35 50"
              fill="hsl(var(--primary) / 0.7)" 
              className="animate-flicker" 
              style={{ animationDelay: '0.6s', transformOrigin: '50% 100%' }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
