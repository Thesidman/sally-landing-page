'use client';

import type { Loop } from '@/lib/types';
import Header from '@/components/Header';
import Badge from '@/components/Badge';
import { isActive, dlLabel } from '@/lib/utils';

const COLORS = ['var(--blue)', 'var(--win)', 'var(--warn)', 'var(--purple)', 'var(--fire)'];

export default function BandwidthView({ loops }: { loops: Loop[] }) {
  const active = loops.filter(isActive).sort((a, b) => b.bandwidth - a.bandwidth);
  const total = active.reduce((s, l) => s + l.bandwidth, 0);
  const over = total > 100;

  return (
    <div className="screen-enter min-h-screen pb-20">
      <Header title="Bandwidth" />

      {/* Summary */}
      <div className="flex items-end justify-between px-5 pt-6 pb-2">
        <div>
          <div className="label-xs mb-1">Total allocated</div>
          <div
            className="text-[36px] font-bold leading-none font-cockpit"
            style={{ color: over ? 'var(--fire)' : total > 80 ? 'var(--warn)' : 'var(--win)' }}
          >
            {total}%
          </div>
        </div>
        <div className="text-right text-[11px] font-cockpit">
          {over
            ? <div className="text-fire">OVER by {total - 100}%</div>
            : <div className="text-muted">{100 - total}% free</div>}
          <div className="text-muted mt-1">{active.length} active loops</div>
        </div>
      </div>

      {/* Master bar */}
      <div className="px-5 pb-5">
        <div className="h-[5px] bg-surface2 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${Math.min(total, 100)}%`,
              background: over ? 'var(--fire)' : total > 80 ? 'var(--warn)' : 'var(--win)',
            }}
          />
        </div>
      </div>

      <div className="h-px bg-surface2" />

      {!active.length && (
        <div className="text-center pt-10 text-[11px] text-muted tracking-[0.05em]">No active loops</div>
      )}

      {active.map((loop, i) => (
        <div key={loop.id} className="px-5 py-4 border-b border-edge">
          <div className="flex justify-between items-start mb-1.5">
            <div className="text-[13px] text-cockpit flex-1 pr-3 leading-snug">{loop.title}</div>
            <div className="text-[16px] font-bold font-cockpit" style={{ color: COLORS[i % COLORS.length] }}>
              {loop.bandwidth}%
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Badge status={loop.status} />
            <span className="text-[10px] text-muted font-cockpit">P{loop.priority}</span>
            <span className="text-[10px] text-muted font-cockpit">{dlLabel(loop.deadline)}</span>
          </div>
          <div className="h-[3px] bg-surface2 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${loop.bandwidth}%`, background: COLORS[i % COLORS.length] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
