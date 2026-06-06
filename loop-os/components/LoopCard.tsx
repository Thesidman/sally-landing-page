'use client';

import type { Loop } from '@/lib/types';
import Badge from './Badge';
import { cardSection, dlLabel, dlColor, lastNote, isActive, todayStr } from '@/lib/utils';

const BORDER: Record<string, string> = {
  fire: 'var(--fire)',
  watch: 'var(--blue)',
  week: 'var(--warn)',
  closed: 'var(--border)',
};

export default function LoopCard({ loop, onClick }: { loop: Loop; onClick: () => void }) {
  const sec = cardSection(loop);
  const ln = lastNote(loop);

  return (
    <div
      onClick={onClick}
      className="bg-surface rounded-[6px] p-[14px] mb-2 cursor-pointer transition-colors active:bg-surface2 border border-edge"
      style={{ borderLeftWidth: 2, borderLeftColor: BORDER[sec] }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="text-[14px] font-semibold text-cockpit flex-1 leading-snug">{loop.title}</div>
        <div className="text-[10px] text-muted whitespace-nowrap pt-0.5">P{loop.priority}</div>
      </div>
      <div className="flex items-center gap-2.5 flex-wrap">
        <Badge status={loop.status} />
        {isActive(loop) && (
          <span className="text-[10px] font-cockpit" style={{ color: dlColor(loop.deadline) }}>
            {dlLabel(loop.deadline)}
          </span>
        )}
        <span className="text-[10px] text-muted font-cockpit">{loop.bandwidth}% bw</span>
        {loop.type === 'delegate' && (
          <span className="text-[10px] text-blue font-cockpit">delegated</span>
        )}
      </div>
      {loop.status === 'blocked' && loop.blocker && (
        <div className="mt-2 pt-2 border-t border-edge text-[11px] text-fire italic">
          ⚠ {loop.blocker}
        </div>
      )}
      {ln && ln.date === todayStr() && (
        <div className="mt-2 pt-2 border-t border-edge text-[11px] text-muted2 italic">
          ↳ {ln.note}
        </div>
      )}
    </div>
  );
}
