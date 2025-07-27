"use client";

import { useState, useEffect } from 'react';
import { CulinaryLoader } from '@/components/culinary-loader';
import { cn } from '@/lib/utils';
import { LoadingDots } from '@/components/loading-dots';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.317 4.36981C18.7915 3.72559 17.181 3.25415 15.5121 3C15.4352 3.24433 15.3403 3.56572 15.2635 3.86919C13.653 3.58231 12.0046 3.58231 10.3941 3.86919C10.3173 3.56572 10.2223 3.24433 10.1455 3C8.47656 3.25415 6.86611 3.72559 5.34069 4.36981C2.43764 7.78843 1.43689 11.2311 2.10295 14.579C3.81889 15.9328 5.66033 16.9346 7.58102 17.6538C7.83446 17.2217 8.04978 16.7515 8.24707 16.2634C7.60285 15.9943 6.99676 15.687 6.41662 15.3414C6.52686 15.2312 6.6371 15.1119 6.72922 14.9926C10.2415 16.9346 15.4141 16.9346 18.9264 14.9926C19.0185 15.1119 19.1287 15.2312 19.239 15.3414C18.6588 15.687 18.0527 15.9943 17.4085 16.2634C17.6058 16.7515 17.8211 17.2217 18.0745 17.6538C19.9952 16.9346 21.8366 15.9328 23.5526 14.579C24.2468 10.9882 23.1358 7.54552 20.317 4.36981ZM9.68041 12.9242C8.85382 12.9242 8.18776 12.1673 8.18776 11.2311C8.18776 10.2949 8.83571 9.53797 9.68041 9.53797C10.5251 9.53797 11.1912 10.2949 11.173 11.2311C11.173 12.1673 10.5251 12.9242 9.68041 12.9242ZM16.0099 12.9242C15.1834 12.9242 14.5173 12.1673 14.5173 11.2311C14.5173 10.2949 15.1652 9.53797 16.0099 9.53797C16.8546 9.53797 17.5207 10.2949 17.5025 11.2311C17.5025 12.1673 16.8546 12.9242 16.0099 12.9242Z" />
    </svg>
);

const Smoke = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute bottom-0 h-24 w-12 rounded-full bg-muted/40 blur-xl"
    style={{
      animation: `smoke-rise 8s infinite`,
      ...style,
    }}
  />
);

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 overflow-hidden">
      <Smoke style={{ left: '10%', animationDelay: '0s' }} />
      <Smoke style={{ left: '20%', animationDelay: '3s', width: '4rem', height: '8rem' }} />
      <Smoke style={{ left: '35%', animationDelay: '1s' }} />
      <Smoke style={{ right: '10%', animationDelay: '2s', width: '3rem', height: '10rem' }} />
      <Smoke style={{ right: '25%', animationDelay: '4s' }} />
      <Smoke style={{ right: '40%', animationDelay: '5.5s', width: '2.5rem' }} />

      <div className="z-10 flex flex-col items-center justify-center space-y-8">
        <CulinaryLoader />
        
        <div 
          className={cn(
            "flex flex-col items-center space-y-4 text-center transition-opacity duration-1000",
          )}
        >
          <h1 className="font-headline text-4xl md:text-5xl text-foreground font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-shimmer bg-[length:200%_auto]">
            Warming up the kitchen...
          </h1>
          <p className="max-w-sm text-base text-muted-foreground font-body">
            The kitchen is almost ready for your NFT and memecoin recipes.
          </p>
          <LoadingDots />
        </div>

        <div className="absolute bottom-8 flex items-center space-x-6 text-muted-foreground">
          <a href="https://twitter.com/letscook_fun" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-foreground transition-colors">
            <XIcon className="h-5 w-5" />
            <span>@letscook_fun</span>
          </a>
          <a href="https://discord.gg/KFHdB3qm" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-foreground transition-colors">
             <DiscordIcon className="h-5 w-5" />
            <span>Join Discord</span>
          </a>
        </div>
      </div>
    </main>
  );
}
