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
  'CUSTOMER SUCCESS',
  'CONVERSATIONS',
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
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    if (longestWordRef.current) {
      setContainerWidth(longestWordRef.current.offsetWidth + 4); // add a little padding
    }
  }, []);

  return (
    <div className="relative mt-2 h-20 md:h-24 lg:h-28 flex items-center justify-center">
      <span
        ref={longestWordRef}
        className="font-headline font-black text-4xl md:text-5xl lg:text-6xl invisible absolute -z-10 whitespace-nowrap tracking-tight italic"
        style={{ fontStretch: 'condensed' }}
      >
        {longestWord}
      </span>

      <div 
        style={{ width: containerWidth ? `${containerWidth}px` : 'auto' }}
        className={cn(
          "inline-flex items-center justify-center h-full",
          "transition-all duration-300"
        )}
      >
        <span
          key={currentIndex}
          className={cn(
            "font-headline font-black text-4xl md:text-5xl lg:text-6xl text-foreground italic whitespace-nowrap tracking-tight text-center",
            "transition-all duration-500",
            isAnimatingOut ? 'animate-slide-down-fade' : 'animate-slide-up-fade',
            "drop-shadow-[0_4px_15px_hsl(var(--primary)/0.1)]"
          )}
          style={{ fontStretch: 'condensed' }}
        >
          {rotatingWords[currentIndex]}
        </span>
      </div>
    </div>
  );
}
