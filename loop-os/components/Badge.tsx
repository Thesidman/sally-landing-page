'use client';

import type { LoopStatus } from '@/lib/types';

const LABEL: Record<LoopStatus, string> = {
  not_started: 'Not Started',
  in_progress: 'In Progress',
  blocked: 'Blocked',
  won: 'Won',
  lost: 'Lost',
};

const STYLE: Record<LoopStatus, { color: string; borderColor: string; background: string }> = {
  not_started: { color: 'var(--muted)',  borderColor: 'var(--border)', background: 'transparent' },
  in_progress: { color: 'var(--warn)',   borderColor: 'var(--warn)',   background: 'rgba(255,149,0,.08)' },
  blocked:     { color: 'var(--fire)',   borderColor: 'var(--fire)',   background: 'rgba(255,59,59,.08)' },
  won:         { color: 'var(--win)',    borderColor: 'var(--win)',    background: 'rgba(48,209,88,.08)' },
  lost:        { color: 'var(--muted)',  borderColor: 'var(--border)', background: 'transparent' },
};

export default function Badge({ status }: { status: LoopStatus }) {
  const s = STYLE[status];
  return (
    <span
      className="inline-block text-[9px] tracking-[0.1em] uppercase px-[6px] py-[2px] rounded-[3px] border font-cockpit"
      style={{ color: s.color, borderColor: s.borderColor, background: s.background,
               textDecoration: status === 'lost' ? 'line-through' : 'none' }}
    >
      {LABEL[status]}
    </span>
  );
}
