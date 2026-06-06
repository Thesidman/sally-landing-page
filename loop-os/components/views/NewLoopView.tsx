'use client';

import { useState } from 'react';
import type { Loop, LoopType, LoopStatus } from '@/lib/types';
import Header, { HeaderBtn } from '@/components/Header';
import { blankLoop } from '@/lib/utils';

interface Props {
  onSave: (loop: Loop) => void;
  onBack: () => void;
}

interface Errors { title?: boolean; deadline?: boolean; win?: boolean; loss?: boolean; }

function FormGroup({ label, error, children }: { label: string; error?: boolean; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <label className="label-xs block mb-2">
        {label}{error && <span className="text-fire ml-1">* required</span>}
      </label>
      {children}
    </div>
  );
}

function RangeRow({ value, min, max, step, suffix, onChange }: {
  value: number; min: number; max: number; step?: number; suffix?: string; onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <input type="range" min={min} max={max} step={step ?? 1} value={value}
        onChange={(e) => onChange(Number(e.target.value))} />
      <span className="text-[16px] text-cockpit font-cockpit min-w-[40px] text-right">
        {value}{suffix}
      </span>
    </div>
  );
}

function TypeToggle({ value, onChange }: { value: LoopType; onChange: (v: LoopType) => void }) {
  const Btn = ({ id, label }: { id: LoopType; label: string }) => (
    <button
      onClick={() => onChange(id)}
      className="font-cockpit text-[11px] py-[10px] px-2 rounded-[4px] cursor-pointer transition-all text-center leading-snug border"
      style={{
        background: value === id ? 'var(--surface2)' : 'var(--surface)',
        borderColor: value === id ? 'var(--text)' : 'var(--border)',
        color: value === id ? 'var(--text)' : 'var(--muted)',
      }}
    >
      {label}
    </button>
  );
  return (
    <div className="grid grid-cols-2 gap-2">
      <Btn id="execute" label="Execute myself" />
      <Btn id="delegate" label="Delegate + monitor" />
    </div>
  );
}

export default function NewLoopView({ onSave, onBack }: Props) {
  const [form, setForm] = useState<Loop>(blankLoop());
  const [errs, setErrs] = useState<Errors>({});
  const set = <K extends keyof Loop>(k: K, v: Loop[K]) => setForm((p) => ({ ...p, [k]: v }));

  function submit() {
    const e: Errors = {};
    if (!form.title.trim()) e.title = true;
    if (!form.deadline) e.deadline = true;
    if (!form.winCondition.trim()) e.win = true;
    if (!form.lossCondition.trim()) e.loss = true;
    setErrs(e);
    if (!Object.keys(e).length) onSave(form);
  }

  return (
    <div className="screen-enter min-h-screen pb-20">
      <Header
        title="New Loop"
        left={<HeaderBtn onClick={onBack}>← Back</HeaderBtn>}
      />
      <div className="p-5">
        <FormGroup label="Title" error={errs.title}>
          <input className="fi" placeholder="What is this loop?"
            value={form.title} onChange={(e) => set('title', e.target.value)} />
        </FormGroup>

        <FormGroup label="Type">
          <TypeToggle value={form.type} onChange={(v) => set('type', v)} />
        </FormGroup>

        <FormGroup label="Priority">
          <RangeRow value={form.priority} min={1} max={10}
            onChange={(v) => set('priority', v)} />
        </FormGroup>

        <FormGroup label="Bandwidth allocation">
          <RangeRow value={form.bandwidth} min={5} max={100} step={5} suffix="%"
            onChange={(v) => set('bandwidth', v)} />
        </FormGroup>

        <FormGroup label="Hard deadline" error={errs.deadline}>
          <input className="fi" type="date"
            value={form.deadline} onChange={(e) => set('deadline', e.target.value)} />
        </FormGroup>

        <FormGroup label="Win condition" error={errs.win}>
          <textarea className="fi" style={{ resize: 'none', minHeight: 70 }}
            placeholder="Specific, measurable. What does done look like?"
            value={form.winCondition} onChange={(e) => set('winCondition', e.target.value)} />
        </FormGroup>

        <FormGroup label="Loss condition" error={errs.loss}>
          <textarea className="fi" style={{ resize: 'none', minHeight: 70 }}
            placeholder="At what point do you kill this and call it a loss?"
            value={form.lossCondition} onChange={(e) => set('lossCondition', e.target.value)} />
        </FormGroup>

        <FormGroup label="Quantitative metric">
          <input className="fi" placeholder="The number that moves if this is working"
            value={form.quantMetric} onChange={(e) => set('quantMetric', e.target.value)} />
        </FormGroup>

        <FormGroup label="Qualitative metric">
          <input className="fi" placeholder="What can you feel/observe if this is working?"
            value={form.qualMetric} onChange={(e) => set('qualMetric', e.target.value)} />
        </FormGroup>

        <FormGroup label="Initial status">
          <select className="fi"
            value={form.status}
            onChange={(e) => set('status', e.target.value as LoopStatus)}
          >
            <option value="not_started">Not Started</option>
            <option value="in_progress">In Progress</option>
            <option value="blocked">Blocked</option>
          </select>
        </FormGroup>

        {form.status === 'blocked' && (
          <FormGroup label="Blocker">
            <input className="fi" placeholder="What is blocking this?"
              value={form.blocker} onChange={(e) => set('blocker', e.target.value)} />
          </FormGroup>
        )}

        <button className="btn-primary" onClick={submit}>Open Loop →</button>
      </div>
    </div>
  );
}
