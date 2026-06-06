'use client';

import { useState, useRef, useEffect } from 'react';

interface Props {
  outcome: 'won' | 'lost';
  onConfirm: (note: string) => void;
  onCancel: () => void;
}

export default function ClosureSheet({ outcome, onConfirm, onCancel }: Props) {
  const [note, setNote] = useState('');
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const t = setTimeout(() => ref.current?.focus(), 300);
    return () => clearTimeout(t);
  }, []);

  const color = outcome === 'won' ? 'var(--win)' : 'var(--fire)';

  return (
    <div
      className="fixed inset-0 z-[400] flex items-end"
      style={{ background: 'rgba(0,0,0,0.87)', animation: 'screenIn 0.2s ease' }}
      onClick={onCancel}
    >
      <div
        className="bg-surface border-t border-edge rounded-t-xl w-full sheet-enter"
        style={{ paddingBottom: 'max(24px, env(safe-area-inset-bottom))' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5">
          <div className="text-[12px] tracking-[0.15em] uppercase mb-1 font-cockpit" style={{ color }}>
            {outcome === 'won' ? 'Close as Win' : 'Close as Loss'}
          </div>
          <div className="text-[11px] text-muted mb-5 leading-relaxed">
            One sentence. What happened? No closure without reflection.
          </div>
          <textarea
            ref={ref}
            className="fi mb-4"
            style={{ minHeight: 80, resize: 'none' }}
            placeholder="What actually happened with this loop?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button
            className={outcome === 'won' ? 'btn-win mb-2' : 'btn-danger mb-2'}
            style={{ opacity: note.trim() ? 1 : 0.35 }}
            onClick={() => note.trim() && onConfirm(note.trim())}
          >
            {outcome === 'won' ? 'Mark Won ✓' : 'Mark Lost ✗'}
          </button>
          <button className="btn-ghost" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
