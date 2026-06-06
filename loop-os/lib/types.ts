export type LoopType = 'execute' | 'delegate';
export type LoopStatus = 'not_started' | 'in_progress' | 'blocked' | 'won' | 'lost';

export interface DailyNote {
  date: string;
  note: string;
}

export interface Loop {
  id: string;
  title: string;
  type: LoopType;
  priority: number;
  bandwidth: number;
  deadline: string;
  winCondition: string;
  lossCondition: string;
  quantMetric: string;
  qualMetric: string;
  status: LoopStatus;
  blocker: string;
  dailyNotes: DailyNote[];
  closureNote: string;
  createdAt: string;
}

export type ViewName = 'home' | 'all' | 'bandwidth' | 'new' | 'detail' | 'checkin';
export type TabName = 'home' | 'all' | 'bandwidth';
