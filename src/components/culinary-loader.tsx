import { ChefHat, CookingPot, Utensils } from 'lucide-react';

export function CulinaryLoader() {
  return (
    <div className="relative flex items-end justify-center h-48 w-64">
      {/* Cooking Pot */}
      <div className="relative">
        <CookingPot className="w-24 h-24 text-primary" strokeWidth={1.5} />
        {/* Steam animation */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <span className="absolute block w-1 h-4 bg-muted-foreground/50 rounded-full animate-steam" style={{ left: '40%', animationDelay: '0s' }}></span>
          <span className="absolute block w-1 h-5 bg-muted-foreground/50 rounded-full animate-steam" style={{ left: '50%', animationDelay: '0.5s' }}></span>
          <span className="absolute block w-1 h-3 bg-muted-foreground/50 rounded-full animate-steam" style={{ left: '60%', animationDelay: '1s' }}></span>
        </div>
      </div>

      {/* Chef Hat */}
      <div className="absolute -top-4 -right-8 animate-bob">
        <ChefHat className="w-16 h-16 text-foreground -rotate-12" strokeWidth={1.5} />
      </div>

      {/* Utensils */}
      <div className="absolute -top-2 -left-8 animate-stir">
        <Utensils className="w-14 h-14 text-foreground rotate-12" strokeWidth={1.5} />
      </div>
    </div>
  );
}
