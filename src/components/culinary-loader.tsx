export function CulinaryLoader() {
  return (
    <div className="relative flex items-center justify-center h-48 w-64">
      <div className="relative w-32 h-48">
        <svg
          viewBox="0 0 384 512"
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 6px 12px hsla(var(--primary)/0.4))',
          }}
        >
          <g className="animate-bob">
            <path
              fill="hsl(var(--accent))"
              d="M281.5 32C281.5 32 248.3 151.2 248.3 224.2C248.3 297.2 301.9 352 384 352C384 352 384 480 281.5 480C179 480 95.8 402 95.8 320C95.8 238 128.5 32 281.5 32Z"
              transform="translate(-60, 0)"
            />
            <path
              fill="hsl(var(--primary))"
              d="M0 256C0 256 32.3 128.3 128.3 128.3C224.3 128.3 256 256 256 256C256 256 224.3 384.3 128.3 384.3C32.3 384.3 0 256 0 256Z"
              transform="translate(10, -80) scale(0.6)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
