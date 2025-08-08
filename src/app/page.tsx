"use client";

import { useState, useEffect } from "react";
import { CulinaryLoader } from "@/components/culinary-loader";
import { LoadingDots } from "@/components/loading-dots";
import { ChefHat, Flame } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BackgroundPattern = () => {
  const [pattern, setPattern] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generatePattern = () => {
      const icons = [ChefHat, Flame];
      const newPattern: JSX.Element[] = [];

      const { innerWidth, innerHeight } = window;

      // Responsive icon spacing - smaller on mobile
      const iconSize = innerWidth < 768 ? 60 : 80;
      const numCols = Math.ceil(innerWidth / iconSize);
      const numRows = Math.ceil(innerHeight / iconSize);

      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const Icon = icons[(row + col) % icons.length];
          newPattern.push(
            <div
              key={`${col}-${row}`}
              className="absolute text-accent/30"
              style={{
                left: `${col * iconSize + iconSize / 2}px`,
                top: `${row * iconSize + iconSize / 2}px`,
                transform: `translate(-50%, -50%) scale(${
                  innerWidth < 768 ? "0.5" : "0.7"
                })`,
              }}
            >
              <Icon className="w-8 h-8" />
            </div>
          );
        }
      }
      setPattern(newPattern);
    };

    generatePattern();
    window.addEventListener("resize", generatePattern);
    return () => window.removeEventListener("resize", generatePattern);
  }, []);

  return <div className="absolute inset-0 z-0">{pattern}</div>;
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <main className="relative h-screen w-full bg-background overflow-hidden">
        <BackgroundPattern />

        {/* Main Content Container */}
        <div className="z-10 h-full flex flex-col justify-between p-4">
          {/* Centered Loader Content */}
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            {/* <div className="flex flex-col justify-center items-center space-y-4 md:space-y-8"> */}
              <CulinaryLoader />

              <div className="flex flex-col items-center space-y-4 max-w-xs md:max-w-sm">
                <h1
                  className="font-headline text-2xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-shimmer bg-[length:200%_auto]"
                  style={{
                    filter: "drop-shadow(0 0 10px hsl(var(--primary) / 0.8))",
                  }}
                >
                  Warming up the kitchen...
                </h1>
                <p className="text-sm md:text-base text-muted-foreground font-body">
                  The kitchen is almost ready for your NFT and memecoin recipes.
                </p>
                <div className="w-32 md:w-48 mt-2 md:mt-4">
                  <LoadingDots />
                </div>
              {/* </div> */}
            </div>
          </div>

          {/* Social Links at the Bottom */}
          <div className="flex z-50 justify-center space-x-4 md:space-x-6 text-muted-foreground pb-16 md:pb-6">
            <a
              href="https://twitter.com/letscook_fun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 md:space-x-2 hover:text-foreground transition-colors text-sm md:text-base"
            >
              <FaXTwitter color="#000000" size={20} className="md:w-6 md:h-6" />
              <span className="hidden sm:inline">@letscook_fun</span>
            </a>
            <a
              href="https://discord.gg/HJB7NGdZuM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 md:space-x-2 hover:text-foreground transition-colors text-sm md:text-base"
            >
              <FaDiscord color="#5865F2" size={24} className="md:w-8 md:h-8" />
              <span className="hidden sm:inline">Join Discord</span>
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <h1 className="font-headline text-5xl text-foreground">
        Welcome to Culinary Countdown!
      </h1>
    </main>
  );
}
