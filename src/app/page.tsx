"use client";

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { CulinaryLoader } from '@/components/culinary-loader';
import { cn } from '@/lib/utils';

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev + 1) % 100);
    }, 20); // Faster interval for smoother animation
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-8">
        <CulinaryLoader />
        
        <div 
          className={cn(
            "flex flex-col items-center space-y-4 text-center transition-opacity duration-1000",
          )}
        >
          <h1 className="font-headline text-3xl md:text-4xl text-foreground">
            Warming up the kitchen...
          </h1>
          <p className="max-w-sm text-base text-muted-foreground font-body">
            The kitchen is almost ready for your NFT and memecoin recipes.
          </p>
          <Progress value={progress} className="w-full max-w-xs bg-primary/20 [&>div]:bg-accent" />
        </div>
      </div>
    </main>
  );
}
