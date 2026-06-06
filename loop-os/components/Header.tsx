'use client';

interface HeaderProps {
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export default function Header({ title, left, right }: HeaderProps) {
  return (
    <div
      className="sticky top-0 z-50 flex items-center justify-between gap-2 px-5 pt-4 pb-3 border-b border-edge"
      style={{ background: 'rgba(8,8,8,0.96)', backdropFilter: 'blur(12px)' }}
    >
      <div className="w-[60px] flex justify-start">{left}</div>
      <div className="flex-1 text-center text-[11px] tracking-[0.2em] uppercase text-cockpit truncate">
        {title}
      </div>
      <div className="w-[60px] flex justify-end">{right}</div>
    </div>
  );
}

export function HeaderBtn({
  onClick,
  children,
  color = 'var(--blue)',
}: {
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      className="text-[11px] tracking-[0.05em] font-cockpit bg-transparent border-none cursor-pointer p-1 whitespace-nowrap"
      style={{ color }}
    >
      {children}
    </button>
  );
}
