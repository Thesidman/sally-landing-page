"use client";

import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { cn } from '@/lib/utils';

const rotatingWords = [
  'leads',
  'meetings',
  'momentum',
  'engagement',
  'customers',
  'replies',
  'retention',
  'customer success conversations',
  'revenue',
  'pipeline',
  'speed',
  'happy customers',
];

export function RotatingHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(undefined);
  const longestWordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    if (longestWordRef.current) {
      setContainerWidth(longestWordRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="relative">
      {/* Hidden element to measure the longest word */}
      <span
        ref={longestWordRef}
        className="font-headline text-4xl md:text-5xl lg:text-6xl invisible absolute -z-10 whitespace-nowrap px-3 py-1"
      >
        {rotatingWords[7]}
      </span>

      <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-medium text-foreground !leading-tight tracking-tighter max-w-4xl">
        Sally gets you <span className="font-bold text-primary">more</span>
        <div 
          style={{ width: containerWidth ? `${containerWidth}px` : 'auto' }}
          className={cn(
            "inline-flex items-center justify-center align-middle ml-2",
            "transition-all duration-300"
          )}
        >
          <span
            className={cn(
              "inline-flex items-center justify-center px-3 py-1",
              "rounded-full border border-gray-200 bg-white/70 backdrop-blur-sm",
              "text-sm md:text-base lg:text-lg font-medium whitespace-nowrap",
              "shadow-sm shadow-[0_0_25px_rgba(0,0,0,0.04)]"
            )}
          >
            {rotatingWords[currentIndex]}
          </span>
        </div>
      </h1>
    </div>
  );
}
