'use client';

import { useState } from 'react';
import type { Loop } from '@/lib/types';
import Header from '@/components/Header';
import LoopCard from '@/components/LoopCard';
import { isActive, daysUntil } from '@/lib/utils';

interface Props {
  loops: Loop[];
  onSelect: (l: Loop) => void;
  onNew: () => void;
}

export default function AllView({ loops, onSelect, onNew }: Props) {
  const [tab, setTab] = useState<'active' | 'closed'>('active');

  const list = loops
    .filter((l) => tab === 'active' ? isActive(l) : !isActive(l))
    .sort((a, b) => daysUntil(a.deadline) - daysUntil(b.deadline));

  const TabBtn = ({ id, label }: { id: 'active' | 'closed'; label: string }) => (
    <button
      onClick={() => setTab(id)}
      className="text-[10px] tracking-[0.1em] uppercase font-cockpit bg-transparent border-none cursor-pointer px-0 py-1 transition-colors"
      style={{
        color: tab === id ? 'var(--text)' : 'var(--muted)',
        borderBottom: tab === id ? '1px solid var(--text)' : '1px solid transparent',
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="screen-enter min-h-screen pb-20">
      <Header
        title="All Loops"
        right={
          <div className="flex gap-4">
            <TabBtn id="active" label="Active" />
            <TabBtn id="closed" label="Closed" />
          </div>
        }
      />
      <div className="p-5">
        {list.length === 0
          ? <div className="text-center py-10 text-[11px] text-muted tracking-[0.05em]">No loops here</div>
          : list.map((l) => <LoopCard key={l.id} loop={l} onClick={() => onSelect(l)} />)}
      </div>

      <button
        onClick={onNew}
        className="fixed bottom-[72px] right-5 w-12 h-12 rounded-full border-none cursor-pointer flex items-center justify-center text-[24px] font-cockpit transition-transform active:scale-95 z-[150]"
        style={{ background: 'var(--text)', color: 'var(--bg)', boxShadow: '0 4px 20px rgba(0,0,0,0.6)' }}
      >
        +
      </button>
    </div>
  );
}
