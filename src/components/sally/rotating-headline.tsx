"use client";

import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { cn } from '@/lib/utils';

const rotatingWords = [
  'LEADS',
  'MEETINGS',
  'MOMENTUM',
  'ENGAGEMENT',
  'CUSTOMERS',
  'REPLIES',
  'RETENTION',
  'CUSTOMER SUCCESS CONVERSATIONS',
  'REVENUE',
  'PIPELINE',
  'SPEED',
  'HAPPY CUSTOMERS',
];

const longestWord = rotatingWords.reduce(
  (a, b) => (a.length > b.length ? a : b),
  ''
);

export function RotatingHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(undefined);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const longestWordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        setIsAnimatingOut(false);
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
    <div className="relative mt-4">
      {/* Hidden element to measure the longest word and set a fixed width */}
      <span
        ref={longestWordRef}
        className="font-headline font-semibold text-2xl md:text-3xl lg:text-4xl invisible absolute -z-10 whitespace-nowrap tracking-wider"
      >
        {longestWord}
      </span>

      <div 
        style={{ width: containerWidth ? `${containerWidth}px` : 'auto' }}
        className={cn(
          "inline-flex items-center justify-center h-10 md:h-12 lg:h-14",
          "transition-all duration-300"
        )}
      >
        <span
          key={currentIndex}
          className={cn(
            "font-headline font-semibold text-2xl md:text-3xl lg:text-4xl text-foreground whitespace-nowrap tracking-wider text-center",
            "bg-gradient-to-b from-primary/80 to-accent-foreground/80 bg-clip-text text-transparent",
            "transition-all duration-500",
            isAnimatingOut ? 'animate-slide-down-fade' : 'animate-slide-up-fade',
            "[text-shadow:0_4px_20px_hsl(var(--primary)/0.1)]"
          )}
        >
          {rotatingWords[currentIndex]}
        </span>
      </div>
    </div>
  );
}
