'use client';

import { useState, useEffect } from 'react';
import type { Loop, LoopStatus, LoopType } from '@/lib/types';
import Header, { HeaderBtn } from '@/components/Header';
import Badge from '@/components/Badge';
import ClosureSheet from '@/components/ClosureSheet';
import { isActive, dlLabel, dlColor, todayStr } from '@/lib/utils';

interface Props {
  loop: Loop;
  onBack: () => void;
  onUpdate: (l: Loop) => void;
  onDelete: () => void;
}

function DL({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-[14px] last:mb-0">
      <div className="label-xs mb-1">{label}</div>
      <div className="text-[13px] text-cockpit">{children}</div>
    </div>
  );
}

function StatusGrid({
  current, onChange,
}: {
  current: LoopStatus;
  onChange: (s: LoopStatus) => void;
}) {
  const opts: { id: LoopStatus; label: string }[] = [
    { id: 'not_started', label: 'Not Started' },
    { id: 'in_progress', label: 'In Progress' },
    { id: 'blocked',     label: 'Blocked' },
    { id: 'won',         label: 'Won ✓' },
    { id: 'lost',        label: 'Lost ✗' },
  ];

  function extraStyle(id: LoopStatus, isActive: boolean): React.CSSProperties {
    if (!isActive) return {};
    if (id === 'won')     return { borderColor: 'var(--win)',  color: 'var(--win)' };
    if (id === 'lost')    return { borderColor: 'var(--fire)', color: 'var(--fire)' };
    if (id === 'blocked') return { borderColor: 'var(--fire)', color: 'var(--fire)' };
    return {};
  }

  return (
    <div className="grid grid-cols-2 gap-2 mb-4">
      {opts.map((o) => {
        const active = current === o.id;
        return (
          <button key={o.id} className={`sopt ${active ? 'sopt-active' : ''}`}
            style={extraStyle(o.id, active)}
            onClick={() => onChange(o.id)}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export default function DetailView({ loop, onBack, onUpdate, onDelete }: Props) {
  const [editing, setEditing] = useState(false);
  const [ef, setEf] = useState<Loop>({ ...loop });
  const [newNote, setNewNote] = useState('');
  const [closure, setClosure] = useState<'won' | 'lost' | null>(null);
  const closed = !isActive(loop);

  useEffect(() => setEf({ ...loop }), [loop.id]);

  const eset = <K extends keyof Loop>(k: K, v: Loop[K]) => setEf((p) => ({ ...p, [k]: v }));

  function changeStatus(s: LoopStatus) {
    if (s === 'won' || s === 'lost') { setClosure(s); return; }
    onUpdate({ ...loop, status: s, blocker: s !== 'blocked' ? '' : loop.blocker });
  }

  function handleClosure(note: string) {
    onUpdate({ ...loop, status: closure!, closureNote: note });
    setClosure(null);
  }

  function addNote() {
    if (!newNote.trim()) return;
    onUpdate({ ...loop, dailyNotes: [...(loop.dailyNotes ?? []), { date: todayStr(), note: newNote.trim() }] });
    setNewNote('');
  }

  function updateBlocker(val: string) {
    onUpdate({
      ...loop, blocker: val,
      status: val ? 'blocked' : loop.status === 'blocked' ? 'in_progress' : loop.status,
    });
  }

  function saveEdit() { onUpdate({ ...ef }); setEditing(false); }

  const dlN = dlLabel(loop.deadline);
  const dlC = dlColor(loop.deadline);

  // ── Edit mode ───────────────────────────────────────────────────
  if (editing) {
    return (
      <div className="screen-enter min-h-screen pb-20">
        <Header
          title="Edit Loop"
          left={<HeaderBtn onClick={() => setEditing(false)}>← Cancel</HeaderBtn>}
          right={<HeaderBtn onClick={saveEdit} color="var(--win)">Save</HeaderBtn>}
        />
        <div className="p-5">
          {([
            ['Title',              'text',     'title',        ''],
            ['Quantitative metric','text',     'quantMetric',  ''],
            ['Qualitative metric', 'text',     'qualMetric',   ''],
          ] as [string, string, keyof Loop, string][]).map(([label, type, key, ph]) => (
            <div key={key} className="mb-5">
              <label className="label-xs block mb-2">{label}</label>
              <input className="fi" type={type} placeholder={ph}
                value={ef[key] as string}
                onChange={(e) => eset(key, e.target.value)} />
            </div>
          ))}

          <div className="mb-5">
            <label className="label-xs block mb-2">Type</label>
            <div className="grid grid-cols-2 gap-2">
              {(['execute', 'delegate'] as LoopType[]).map((t) => (
                <button key={t} className="font-cockpit text-[11px] py-[10px] px-2 rounded-[4px] cursor-pointer transition-all text-center border"
                  style={{
                    background: ef.type === t ? 'var(--surface2)' : 'var(--surface)',
                    borderColor: ef.type === t ? 'var(--text)' : 'var(--border)',
                    color: ef.type === t ? 'var(--text)' : 'var(--muted)',
                  }}
                  onClick={() => eset('type', t)}>
                  {t === 'execute' ? 'Execute myself' : 'Delegate + monitor'}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <label className="label-xs block mb-2">Priority</label>
            <div className="flex items-center gap-3">
              <input type="range" min={1} max={10} value={ef.priority}
                onChange={(e) => eset('priority', Number(e.target.value))} />
              <span className="text-[16px] text-cockpit font-cockpit w-8 text-right">{ef.priority}</span>
            </div>
          </div>

          <div className="mb-5">
            <label className="label-xs block mb-2">Bandwidth</label>
            <div className="flex items-center gap-3">
              <input type="range" min={5} max={100} step={5} value={ef.bandwidth}
                onChange={(e) => eset('bandwidth', Number(e.target.value))} />
              <span className="text-[16px] text-cockpit font-cockpit w-12 text-right">{ef.bandwidth}%</span>
            </div>
          </div>

          <div className="mb-5">
            <label className="label-xs block mb-2">Deadline</label>
            <input className="fi" type="date" value={ef.deadline}
              onChange={(e) => eset('deadline', e.target.value)} />
          </div>

          {(['winCondition', 'lossCondition'] as const).map((k) => (
            <div key={k} className="mb-5">
              <label className="label-xs block mb-2">
                {k === 'winCondition' ? 'Win condition' : 'Loss condition'}
              </label>
              <textarea className="fi" style={{ resize: 'none', minHeight: 70 }}
                value={ef[k]} onChange={(e) => eset(k, e.target.value)} />
            </div>
          ))}

          <div className="mt-4">
            <button className="btn-danger"
              onClick={() => { if (confirm('Delete this loop?')) onDelete(); }}>
              Delete Loop
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Detail mode ─────────────────────────────────────────────────
  return (
    <div className="screen-enter min-h-screen pb-20">
      {closure && (
        <ClosureSheet outcome={closure} onConfirm={handleClosure} onCancel={() => setClosure(null)} />
      )}

      <Header
        title={loop.title}
        left={<HeaderBtn onClick={onBack}>← Back</HeaderBtn>}
        right={!closed ? <HeaderBtn onClick={() => setEditing(true)}>Edit</HeaderBtn> : undefined}
      />

      {/* Closed banner */}
      {closed && (
        <div className="p-5 border-b border-edge"
          style={{ background: loop.status === 'won' ? 'rgba(48,209,88,.05)' : 'rgba(255,59,59,.05)' }}>
          <div className="flex items-center gap-3 mb-2">
            <span style={{ fontSize: 22 }}>{loop.status === 'won' ? '✓' : '✗'}</span>
            <span className="label-xs" style={{ color: loop.status === 'won' ? 'var(--win)' : 'var(--fire)' }}>
              {loop.status === 'won' ? 'WON' : 'LOST'}
            </span>
          </div>
          {loop.closureNote && (
            <p className="text-[13px] text-muted2 italic">"{loop.closureNote}"</p>
          )}
        </div>
      )}

      {/* Status controls */}
      {!closed && (
        <div className="p-5 border-b border-edge">
          <div className="label-xs mb-[10px]">Status</div>
          <StatusGrid current={loop.status} onChange={changeStatus} />
          {loop.status === 'blocked' && (
            <>
              <div className="label-xs mb-2">Blocker</div>
              <div className="flex gap-2">
                <input className="fi flex-1" placeholder="What is blocking this?"
                  defaultValue={loop.blocker}
                  onBlur={(e) => updateBlocker(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && updateBlocker((e.target as HTMLInputElement).value)} />
              </div>
            </>
          )}
        </div>
      )}

      {/* Core fields */}
      <div className="p-5 border-b border-edge">
        <div className="grid grid-cols-2 gap-4 mb-[14px]">
          <DL label="Deadline">
            <span style={{ color: dlC }}>{dlN}</span>
            <div className="text-[11px] text-muted mt-1">
              {new Date(loop.deadline + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
          </DL>
          <DL label="Type">
            <span className="text-[11px]">{loop.type === 'execute' ? 'Execute myself' : 'Delegate + monitor'}</span>
          </DL>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <DL label="Priority">{loop.priority}/10</DL>
          <DL label="Bandwidth">{loop.bandwidth}%</DL>
        </div>
      </div>

      {/* Win/Loss conditions */}
      <div className="p-5 border-b border-edge">
        <DL label="Win condition">
          {loop.winCondition || <span className="text-muted italic">—</span>}
        </DL>
        <DL label="Loss condition">
          {loop.lossCondition || <span className="text-muted italic">—</span>}
        </DL>
      </div>

      {/* Metrics */}
      {(loop.quantMetric || loop.qualMetric) && (
        <div className="p-5 border-b border-edge">
          {loop.quantMetric && <DL label="Quant metric">{loop.quantMetric}</DL>}
          {loop.qualMetric  && <DL label="Qual metric">{loop.qualMetric}</DL>}
        </div>
      )}

      {/* Daily note input */}
      {!closed && (
        <div className="p-5 border-b border-edge">
          <div className="label-xs mb-2">Today's note</div>
          <div className="flex gap-2">
            <input className="fi flex-1" placeholder="One line update..."
              value={newNote} onChange={(e) => setNewNote(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addNote()} />
            <button onClick={addNote}
              className="bg-transparent cursor-pointer text-[16px] text-cockpit px-[14px] rounded-[4px] border border-edge">
              ↵
            </button>
          </div>
        </div>
      )}

      {/* Notes history */}
      {loop.dailyNotes?.length > 0 && (
        <div className="px-5 pb-5 pt-4">
          <div className="label-xs mb-2">History</div>
          {[...loop.dailyNotes].reverse().map((n, i) => (
            <div key={i} className="flex gap-3 py-[10px] border-b border-edge">
              <div className="text-[10px] text-muted whitespace-nowrap pt-0.5">{n.date}</div>
              <div className="text-[12px] text-cockpit flex-1">{n.note}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
