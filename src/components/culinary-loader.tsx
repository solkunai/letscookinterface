export function CulinaryLoader() {
  return (
    <div className="relative flex items-center justify-center h-48 w-64">
      <div className="relative w-32 h-32">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
          }}
        >
          <path
            d="M25,85 C20,85 15,80 15,75 L15,65 C15,60 20,55 25,55 L75,55 C80,55 85,60 85,65 L85,75 C85,80 80,85 75,85 Z"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50,55 C65,55 70,30 50,20 C30,30 35,55 50,55 Z"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-flicker"
          />
          <path
            d="M50,55 Q40,45 45,35"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-flicker"
            style={{ animationDelay: '0.2s' }}
          />
          <path
            d="M50,55 Q60,45 55,35"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-flicker"
            style={{ animationDelay: '0.4s' }}
          />
          <path
            d="M25,55 C15,55 10,30 25,25 C35,20 45,30 50,55"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M75,55 C85,55 90,30 75,25 C65,20 55,30 50,55"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Smoke animation */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full h-full">
          <span
            className="absolute block w-1 h-4 bg-muted-foreground/30 rounded-full animate-steam"
            style={{ left: '45%', animationDelay: '0s' }}
          ></span>
          <span
            className="absolute block w-1.5 h-6 bg-muted-foreground/30 rounded-full animate-steam"
            style={{ left: '50%', animationDelay: '0.5s' }}
          ></span>
          <span
            className="absolute block w-1 h-3 bg-muted-foreground/30 rounded-full animate-steam"
            style={{ left: '55%', animationDelay: '1s' }}
          ></span>
        </div>
      </div>
    </div>
  );
}
