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
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19.54 0c-.88 0-1.72.18-2.5.48L16.26 2h-1.3l-.98 1.48-3.96 5.96-1.5-1.5.94-1.42-1.3-1.3-1.42.94-1.5-1.5-2.96 3.96-1.48.98v1.3L0 19.54c0 .88.18 1.72.48 2.5l.48.78.48.78.78.48.78.48c.78.3 1.62.48 2.5.48h.02c.88 0 1.72-.18 2.5-.48l.78-.48.78-.48.48-.78.48-.78c.3-.78.48-1.62.48-2.5v-.02c0-.88-.18-1.72-.48-2.5l-.48-.78-2.88-2.88 2.88-2.88.78.48c.78.3 1.62.48 2.5.48h.02c.88 0 1.72-.18 2.5-.48l.78-.48.78-.48.48-.78.48-.78c.3-.78.48-1.62.48-2.5v-.02c0-.88-.18-1.72-.48-2.5l-.48-.78-.48-.78-.78-.48-.78-.48c-.78-.3-1.62-.48-2.5-.48zm-1.5 5.92c.3.14.58.3.82.48l.02.02c.24.18.46.4.64.64l.02.02c.18.24.34.52.48.82v.02c.14.3.24.6.32.92v.02c.08.32.12.64.12.98s-.04.66-.12.98v.02c-.08.32-.18.62-.32.92v.02c-.14.3-.3.58-.48.82l-.02.02c-.18.24-.4.46-.64.64l-.02.02c-.24.18-.52.34-.82.48v.02c-.3.14-.6.24-.92.32h-.02c-.32.08-.64.12-.98.12s-.66-.04-.98-.12h-.02c-.32-.08-.62-.18-.92-.32h-.02c-.3-.14-.58-.3-.82-.48l-.02-.02c-.24-.18-.46-.4-.64-.64l-.02-.02c-.18-.24-.34-.52-.48-.82v-.02c-.14-.3-.24-.6-.32-.92v-.02c-.08-.32-.12-.64-.12-.98s.04-.66.12.98v.02c.08.32.18.62.32.92v.02c.14.3.3-.58.48.82l.02.02c.18.24.4-.46.64-.64l.02.02c.24-.18.52-.34.82-.48v.02c.3-.14.6-.24.92-.32h.02c.32-.08.64-.12.98-.12s.66.04.98.12h.02c.32.08.62.18.92.32z" />
  </svg>
);

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-8">
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
          <a href="https://twitter.com/letscook_sol" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-foreground transition-colors">
            <XIcon className="h-5 w-5" />
            <span>@letscook_sol</span>
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
