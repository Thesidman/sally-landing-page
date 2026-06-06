'use client';

import type { TabName } from '@/lib/types';

interface NavItem {
  id: TabName | 'checkin';
  icon: string;
  label: string;
}

const ITEMS: NavItem[] = [
  { id: 'home',      icon: '⌂', label: 'Home' },
  { id: 'all',       icon: '≡', label: 'Loops' },
  { id: 'checkin',   icon: '◈', label: 'Check-in' },
  { id: 'bandwidth', icon: '▤', label: 'Bandwidth' },
];

interface BottomNavProps {
  activeTab: TabName;
  onTabChange: (tab: TabName) => void;
  onCheckin: () => void;
}

export default function BottomNav({ activeTab, onTabChange, onCheckin }: BottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] flex items-center z-50 border-t border-edge"
      style={{
        background: 'rgba(8,8,8,0.97)',
        backdropFilter: 'blur(12px)',
        paddingBottom: 'max(8px, env(safe-area-inset-bottom))',
      }}
    >
      {ITEMS.map((item) => {
        const isActive = item.id !== 'checkin' && activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => {
              if (item.id === 'checkin') onCheckin();
              else onTabChange(item.id as TabName);
            }}
            className="flex-1 flex flex-col items-center gap-[3px] bg-transparent border-none cursor-pointer py-[6px] font-cockpit text-[9px] tracking-[0.1em] uppercase transition-colors"
            style={{ color: isActive ? 'var(--text)' : 'var(--muted)' }}
          >
            <span style={{ fontSize: 17, lineHeight: 1 }}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
