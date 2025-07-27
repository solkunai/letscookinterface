export function CulinaryLoader() {
  return (
    <div className="relative flex items-center justify-center h-48 w-64">
      <div className="relative w-40 h-40 animate-bob">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.2))',
          }}
        >
          <g transform="translate(25, 25) scale(0.75)">
            <path
              d="M150,120 C150,120 150,180 150,180 L50,180 C50,180 50,120 50,120 L150,120 Z"
              fill="hsl(var(--card-foreground))"
            />
            <path
              d="M50,120 C20,120 20,80 50,80 C50,50 80,50 100,50 C120,50 150,50 150,80 C180,80 180,120 150,120"
              fill="hsl(var(--card-foreground))"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
