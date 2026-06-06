'use client';

import type { Loop } from '@/lib/types';
import Header from '@/components/Header';
import LoopCard from '@/components/LoopCard';
import { isOnFire, isWatching, isThisWeek, isActive, daysUntil } from '@/lib/utils';

interface Props {
  loops: Loop[];
  checkedIn: boolean;
  onSelect: (l: Loop) => void;
  onNew: () => void;
  onCheckin: () => void;
}

function Section({
  label, color, count, children, empty,
}: {
  label: string; color: string; count: number; children: React.ReactNode; empty: string;
}) {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] tracking-[0.2em] uppercase font-cockpit" style={{ color }}>{label}</span>
        <span className="text-[10px] text-muted font-cockpit">{count}</span>
      </div>
      {count === 0
        ? <div className="text-center py-5 text-[11px] text-muted tracking-[0.05em]">{empty}</div>
        : children}
    </div>
  );
}

export default function HomeView({ loops, checkedIn, onSelect, onNew, onCheckin }: Props) {
  const fire  = loops.filter(isOnFire).sort((a, b) => daysUntil(a.deadline) - daysUntil(b.deadline));
  const week  = loops.filter(isThisWeek).sort((a, b) => daysUntil(a.deadline) - daysUntil(b.deadline));
  const watch = loops.filter(isWatching).sort((a, b) => b.priority - a.priority);
  const activeCount = loops.filter(isActive).length;

  return (
    <div className="screen-enter min-h-screen pb-20">
      <Header
        title="LOOP OS"
        right={<span className="text-[10px] text-muted font-cockpit">{activeCount} open</span>}
      />

      {!checkedIn && activeCount > 0 && (
        <div
          className="mx-5 mt-4 flex items-center justify-between px-[14px] py-3 rounded-[6px] cursor-pointer"
          style={{ background: 'rgba(10,132,255,0.08)', border: '1px solid rgba(10,132,255,0.25)' }}
          onClick={onCheckin}
        >
          <span className="text-[11px] font-cockpit tracking-[0.05em]" style={{ color: 'var(--blue)' }}>
            Morning check-in pending
          </span>
          <span style={{ color: 'var(--blue)' }}>→</span>
        </div>
      )}

      <Section label="On Fire" color="var(--fire)" count={fire.length} empty="Nothing burning">
        {fire.map((l) => <LoopCard key={l.id} loop={l} onClick={() => onSelect(l)} />)}
      </Section>

      <div className="h-px bg-surface2" />

      <Section label="This Week" color="var(--warn)" count={week.length} empty="Clear runway">
        {week.map((l) => <LoopCard key={l.id} loop={l} onClick={() => onSelect(l)} />)}
      </Section>

      <div className="h-px bg-surface2" />

      <Section label="Watching" color="var(--blue)" count={watch.length} empty="Nothing delegated">
        {watch.map((l) => <LoopCard key={l.id} loop={l} onClick={() => onSelect(l)} />)}
      </Section>

      {/* FAB */}
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
