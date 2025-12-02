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

// Find the longest word to set a fixed width for the container
const longestWord = rotatingWords.reduce(
  (a, b) => (a.length > b.length ? a : b),
  ''
);

export function RotatingHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(undefined);
  const [isAnimating, setIsAnimating] = useState(false);
  const longestWordRef = useRef<HTMLSpanElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 250); // half of animation duration
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
        className="font-headline font-semibold text-4xl md:text-5xl lg:text-6xl invisible absolute -z-10 whitespace-nowrap px-6"
      >
        {longestWord}
      </span>

      <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-medium text-foreground !leading-tight tracking-tighter max-w-4xl">
        Sally gets you <span className="font-semibold text-primary">more</span>
        <div 
          style={{ width: containerWidth ? `${containerWidth}px` : 'auto' }}
          className={cn(
            "inline-flex items-center justify-center align-bottom ml-2 h-[3.5rem] md:h-[4.5rem] lg:h-[5.5rem]",
            "transition-all duration-300"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-center w-full h-full px-6",
              "rounded-full border border-primary/10 bg-gradient-to-br from-white to-secondary/50 backdrop-blur-sm",
              "shadow-sm shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
            )}
          >
            <span
              ref={wordRef}
              key={currentIndex}
              className={cn(
                "text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground whitespace-nowrap",
                "animate-slide-up-fade"
              )}
            >
              {rotatingWords[currentIndex]}
            </span>
          </div>
        </div>
      </h1>
    </div>
  );
}
