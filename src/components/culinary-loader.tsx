export function CulinaryLoader() {
  return (
    <div className="relative flex items-center justify-center h-48 w-64">
      <div
        className="relative w-48 h-48 animate-bob"
        style={{
          filter: 'drop-shadow(0 6px 12px hsla(var(--primary)/0.4))',
        }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="chefHatPath">
              <path d="M 60,80 C 40,80 40,50 60,50 C 70,40 90,40 100,50 C 110,40 130,40 140,50 C 160,50 160,80 140,80 Z" />
            </clipPath>
          </defs>

          {/* Pig Head */}
          <g>
            <circle cx="100" cy="120" r="50" fill="hsl(340 100% 90%)" />
            {/* Nose */}
            <g className="animate-wiggle" style={{ transformOrigin: '100px 125px' }}>
              <ellipse
                cx="100"
                cy="125"
                rx="25"
                ry="18"
                fill="hsl(340 100% 85%)"
              />
              {/* Nostrils */}
              <circle cx="92" cy="125" r="3" fill="hsl(340 60% 50%)" />
              <circle cx="108" cy="125" r="3" fill="hsl(340 60% 50%)" />
            </g>
            {/* Eyes */}
            <circle cx="85" cy="110" r="4" fill="hsl(0 0% 10%)" />
            <circle cx="115" cy="110" r="4" fill="hsl(0 0% 10%)" />
             {/* Ears */}
            <path d="M 65 90 A 20 20 0 0 1 50 70 C 55 85, 60 90, 65 90 Z" fill="hsl(340 100% 90%)" stroke="hsl(340 100% 85%)" strokeWidth="2"/>
            <path d="M 135 90 A 20 20 0 0 0 150 70 C 145 85, 140 90, 135 90 Z" fill="hsl(340 100% 90%)" stroke="hsl(340 100% 85%)" strokeWidth="2"/>
          </g>

          {/* Chef Hat */}
          <g>
            <path
              d="M 60,80 C 40,80 40,50 60,50 C 70,40 90,40 100,50 C 110,40 130,40 140,50 C 160,50 160,80 140,80 Z"
              fill="hsl(0 0% 100%)"
            />
            <rect x="60" y="75" width="80" height="10" fill="hsl(0 0% 100%)" />
          </g>
        </svg>
      </div>
    </div>
  );
}
