import { ChefHat, Flame } from 'lucide-react';

export function CulinaryLoader() {
  return (
    <div className="relative flex items-center justify-center h-48 w-64">
      {/* Flame */}
      <div className="relative">
        <Flame className="w-28 h-28 text-primary animate-flicker" strokeWidth={1.5} />
        {/* Smoke animation */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <span className="absolute block w-1 h-4 bg-muted-foreground/50 rounded-full animate-steam" style={{ left: '40%', animationDelay: '0s' }}></span>
          <span className="absolute block w-1 h-5 bg-muted-foreground/50 rounded-full animate-steam" style={{ left: '50%', animationDelay: '0.5s' }}></span>
          <span className="absolute block w-1 h-3 bg-muted-foreground/50 rounded-full animate-steam" style={{ left: '60%', animationDelay: '1s' }}></span>
        </div>
      </div>

      {/* Chef Hat */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <ChefHat className="w-20 h-20 text-foreground -rotate-12" strokeWidth={1.5} />
      </div>
    </div>
  );
}
