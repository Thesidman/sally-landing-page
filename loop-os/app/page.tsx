'use client';

import { useState, useEffect } from 'react';
import type { Loop, ViewName, TabName } from '@/lib/types';
import { useLoops } from '@/hooks/useLoops';
import BottomNav from '@/components/BottomNav';
import HomeView from '@/components/views/HomeView';
import AllView from '@/components/views/AllView';
import NewLoopView from '@/components/views/NewLoopView';
import DetailView from '@/components/views/DetailView';
import CheckInView from '@/components/views/CheckInView';
import BandwidthView from '@/components/views/BandwidthView';

export default function Page() {
  const { loops, loaded, addLoop, updateLoop, deleteLoop, hasCheckedInToday, markCheckedIn } = useLoops();
  const [view, setView]   = useState<ViewName>('home');
  const [tab, setTab]     = useState<TabName>('home');
  const [sel, setSel]     = useState<Loop | null>(null);

  // Register service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' }).catch(() => {});
    }
  }, []);

  // Keep sel in sync when loops change
  useEffect(() => {
    if (sel) {
      const fresh = loops.find((l) => l.id === sel.id);
      if (fresh) setSel(fresh);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loops]);

  function openLoop(loop: Loop) { setSel(loop); setView('detail'); }
  function goNew()              { setView('new'); }
  function goBack()             { setView(tab); setSel(null); }

  function switchTab(t: TabName) {
    setTab(t);
    setView(t);
    setSel(null);
  }

  function handleSave(loop: Loop) {
    addLoop(loop);
    setView(tab);
  }

  function handleDelete() {
    if (sel) { deleteLoop(sel.id); setSel(null); setView(tab); }
  }

  function handleCheckinComplete() {
    markCheckedIn();
    setView('home');
    setTab('home');
  }

  const showNav = view !== 'new' && view !== 'checkin';

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-[11px] tracking-[0.2em] uppercase text-muted font-cockpit">Loading…</span>
      </div>
    );
  }

  return (
    <div className="relative max-w-[480px] mx-auto min-h-screen">
      {view === 'home' && (
        <HomeView
          loops={loops}
          checkedIn={hasCheckedInToday()}
          onSelect={openLoop}
          onNew={goNew}
          onCheckin={() => setView('checkin')}
        />
      )}
      {view === 'all' && (
        <AllView loops={loops} onSelect={openLoop} onNew={goNew} />
      )}
      {view === 'bandwidth' && (
        <BandwidthView loops={loops} />
      )}
      {view === 'new' && (
        <NewLoopView onSave={handleSave} onBack={goBack} />
      )}
      {view === 'detail' && sel && (
        <DetailView
          loop={sel}
          onBack={goBack}
          onUpdate={updateLoop}
          onDelete={handleDelete}
        />
      )}
      {view === 'checkin' && (
        <CheckInView
          loops={loops}
          onUpdate={updateLoop}
          onBack={() => setView('home')}
          onComplete={handleCheckinComplete}
        />
      )}

      {showNav && (
        <BottomNav
          activeTab={tab}
          onTabChange={switchTab}
          onCheckin={() => setView('checkin')}
        />
      )}
    </div>
  );
}
