'use client';

import { useState, useEffect } from 'react';
import type { Loop, LoopStatus } from '@/lib/types';
import Header, { HeaderBtn } from '@/components/Header';
import ClosureSheet from '@/components/ClosureSheet';
import { isActive, dlLabel, todayStr } from '@/lib/utils';

interface Props {
  loops: Loop[];
  onUpdate: (l: Loop) => void;
  onBack: () => void;
  onComplete: () => void;
}

export default function CheckInView({ loops, onUpdate, onBack, onComplete }: Props) {
  const active = loops.filter(isActive);
  const [idx, setIdx] = useState(0);
  const [status, setStatus] = useState<LoopStatus>('not_started');
  const [note, setNote] = useState('');
  const [blocker, setBlocker] = useState('');
  const [closure, setClosure] = useState<'won' | 'lost' | null>(null);

  useEffect(() => {
    if (active[idx]) {
      setStatus(active[idx].status);
      setNote('');
      setBlocker(active[idx].blocker ?? '');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  if (!active.length) {
    return (
      <div className="screen-enter min-h-screen pb-20">
        <Header title="Check-in" left={<HeaderBtn onClick={onBack}>← Back</HeaderBtn>} />
        <div className="text-center pt-20 text-[11px] text-muted tracking-[0.05em]">
          No active loops to check in on.
        </div>
      </div>
    );
  }

  const loop = active[idx];
  const isLast = idx === active.length - 1;

  function handleStatus(s: LoopStatus) {
    if (s === 'won' || s === 'lost') { setClosure(s); return; }
    setStatus(s);
  }

  function advance(overrides?: Partial<Loop>) {
    const updates: Loop = {
      ...loop,
      status,
      blocker: status === 'blocked' ? blocker : '',
      ...overrides,
    };
    if (note.trim()) {
      updates.dailyNotes = [...(loop.dailyNotes ?? []), { date: todayStr(), note: note.trim() }];
    }
    onUpdate(updates);
    if (isLast) onComplete();
    else setIdx((i) => i + 1);
  }

  function handleClosure(closureNote: string) {
    const updates: Partial<Loop> = { status: closure!, closureNote };
    if (note.trim()) {
      updates.dailyNotes = [...(loop.dailyNotes ?? []), { date: todayStr(), note: note.trim() }];
    }
    onUpdate({ ...loop, ...updates });
    setClosure(null);
    if (isLast) onComplete();
    else setIdx((i) => i + 1);
  }

  const statusOpts: { id: LoopStatus; label: string }[] = [
    { id: 'not_started', label: 'Not Started' },
    { id: 'in_progress', label: 'In Progress' },
    { id: 'blocked',     label: 'Blocked' },
    { id: 'won',         label: 'Won ✓' },
    { id: 'lost',        label: 'Lost ✗' },
  ];

  function soptStyle(id: LoopStatus): React.CSSProperties {
    if (status !== id) return {};
    if (id === 'won')  return { borderColor: 'var(--win)',  color: 'var(--win)' };
    if (id === 'lost') return { borderColor: 'var(--fire)', color: 'var(--fire)' };
    if (id === 'blocked') return { borderColor: 'var(--fire)', color: 'var(--fire)' };
    return {};
  }

  return (
    <div className="screen-enter min-h-screen pb-20">
      {closure && (
        <ClosureSheet outcome={closure} onConfirm={handleClosure} onCancel={() => setClosure(null)} />
      )}

      <Header
        title="Morning Check-in"
        left={<HeaderBtn onClick={onBack}>← Exit</HeaderBtn>}
      />

      <div className="text-center text-[10px] text-muted tracking-[0.1em] font-cockpit pt-4">
        {idx + 1} / {active.length}
      </div>

      <div className="mx-5 mt-3 bg-surface border border-edge rounded-[8px] p-5">
        {/* Loop info */}
        <div className="mb-4">
          <div className="label-xs mb-1">Loop</div>
          <div className="text-[16px] font-semibold text-cockpit leading-snug">{loop.title}</div>
          <div className="text-[11px] text-muted mt-1.5">
            {dlLabel(loop.deadline)} · P{loop.priority} · {loop.bandwidth}% bw
          </div>
          {loop.winCondition && (
            <div className="mt-2 pt-2 border-t border-edge text-[11px] text-muted2">
              Win: {loop.winCondition}
            </div>
          )}
        </div>

        {/* Status grid */}
        <div className="label-xs mb-2">Status</div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {statusOpts.map((o) => (
            <button key={o.id}
              className={`sopt ${status === o.id ? 'sopt-active' : ''}`}
              style={soptStyle(o.id)}
              onClick={() => handleStatus(o.id)}>
              {o.label}
            </button>
          ))}
        </div>

        {/* Blocker field */}
        {status === 'blocked' && (
          <div className="mb-4">
            <div className="label-xs mb-2">Blocker</div>
            <input className="fi" placeholder="What's blocking this?"
              value={blocker} onChange={(e) => setBlocker(e.target.value)} />
          </div>
        )}

        {/* Note input */}
        <div className="mb-4">
          <div className="label-xs mb-2">One-line note</div>
          <input className="fi" placeholder="State of this loop today?"
            value={note} onChange={(e) => setNote(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && advance()} />
        </div>

        <button className="btn-primary" onClick={() => advance()}>
          {isLast ? 'Complete Check-in →' : 'Next →'}
        </button>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 py-4">
        {active.map((_, i) => (
          <div key={i} className="w-[6px] h-[6px] rounded-full transition-colors"
            style={{
              background: i < idx ? 'var(--win)' : i === idx ? 'var(--text)' : 'var(--border)',
            }} />
        ))}
      </div>
    </div>
  );
}
