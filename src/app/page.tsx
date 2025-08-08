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
      const iconSize = 80; // Adjust spacing between icons
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
                transform: `translate(-50%, -50%) scale(0.7)`,
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
      <main className="relative flex min-h-screen w-full flex-col justify-between bg-background p-4">
        <BackgroundPattern />

        {/* Centered Loader Content */}
        <div className="z-10 flex flex-col items-center justify-center space-y-8 text-center flex-1">
          <CulinaryLoader />

          <div className="flex flex-col items-center space-y-4 max-w-xs md:max-w-sm">
            <h1
              className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-shimmer bg-[length:200%_auto]"
              style={{
                filter: "drop-shadow(0 0 10px hsl(var(--primary) / 0.8))",
              }}
            >
              Warming up the kitchen...
            </h1>
            <p className="text-base text-muted-foreground font-body">
              The kitchen is almost ready for your NFT and memecoin recipes.
            </p>
            <div className="w-48 mt-4">
              <LoadingDots />
            </div>
          </div>
        </div>

        {/* Social Links at the Bottom */}
        <div className="z-10 flex justify-center space-x-6 text-muted-foreground pb-6">
          <a
            href="https://twitter.com/letscook_fun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-foreground transition-colors"
          >
            <FaXTwitter color="#000000" size={25} />
            <span>@letscook_fun</span>
          </a>
          <a
            href="https://discord.gg/HJB7NGdZuM"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-foreground transition-colors"
          >
            <FaDiscord color="#5865F2" size={30} />
            <span>Join Discord</span>
          </a>
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
