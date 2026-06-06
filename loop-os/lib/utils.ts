import type { Loop, DailyNote } from './types';

export const uid = () =>
  Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);

export const todayStr = (): string => new Date().toISOString().slice(0, 10);

export function daysUntil(d: string): number {
  const target = new Date(d + 'T00:00:00');
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - now.getTime()) / 86400000);
}

export function dlLabel(d: string): string {
  const n = daysUntil(d);
  if (n < 0) return `${Math.abs(n)}d overdue`;
  if (n === 0) return 'due today';
  if (n === 1) return 'due tomorrow';
  return `${n}d left`;
}

export function dlColor(d: string): string {
  const n = daysUntil(d);
  return n < 0 ? 'var(--fire)' : n <= 2 ? 'var(--warn)' : 'var(--win)';
}

export const isActive = (l: Loop) => l.status !== 'won' && l.status !== 'lost';

export function isOnFire(l: Loop): boolean {
  if (!isActive(l)) return false;
  return l.status === 'blocked' || daysUntil(l.deadline) < 0;
}

export function isWatching(l: Loop): boolean {
  if (!isActive(l) || isOnFire(l)) return false;
  return l.type === 'delegate';
}

export function isThisWeek(l: Loop): boolean {
  if (!isActive(l) || isOnFire(l) || isWatching(l)) return false;
  return true;
}

export type CardSection = 'fire' | 'watch' | 'week' | 'closed';

export function cardSection(l: Loop): CardSection {
  if (isOnFire(l)) return 'fire';
  if (isWatching(l)) return 'watch';
  if (isThisWeek(l)) return 'week';
  return 'closed';
}

export function lastNote(l: Loop): DailyNote | null {
  return l.dailyNotes?.length ? l.dailyNotes[l.dailyNotes.length - 1] : null;
}

export const blankLoop = (): Loop => ({
  id: uid(),
  title: '',
  type: 'execute',
  priority: 5,
  bandwidth: 10,
  deadline: '',
  winCondition: '',
  lossCondition: '',
  quantMetric: '',
  qualMetric: '',
  status: 'not_started',
  blocker: '',
  dailyNotes: [],
  closureNote: '',
  createdAt: new Date().toISOString(),
});
