'use client';

import { useState, useEffect } from 'react';
import type { Loop } from '@/lib/types';
import { todayStr } from '@/lib/utils';

const STORE = 'loopOS_v2';
const CI_KEY = 'loopOS_ci';

export function useLoops() {
  const [loops, setLoops] = useState<Loop[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORE);
      if (raw) setLoops(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      try { localStorage.setItem(STORE, JSON.stringify(loops)); } catch {}
    }
  }, [loops, loaded]);

  const updateLoop = (updated: Loop) =>
    setLoops(prev => prev.map(l => (l.id === updated.id ? updated : l)));

  const addLoop = (loop: Loop) => setLoops(prev => [...prev, loop]);

  const deleteLoop = (id: string) => setLoops(prev => prev.filter(l => l.id !== id));

  function hasCheckedInToday(): boolean {
    const active = loops.filter(l => l.status !== 'won' && l.status !== 'lost');
    if (!active.length) return true;
    try { return localStorage.getItem(CI_KEY) === todayStr(); } catch { return false; }
  }

  const markCheckedIn = () => {
    try { localStorage.setItem(CI_KEY, todayStr()); } catch {}
  };

  return { loops, loaded, updateLoop, addLoop, deleteLoop, hasCheckedInToday, markCheckedIn };
}
