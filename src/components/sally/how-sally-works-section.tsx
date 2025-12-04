'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { QRPanel } from './how-sally-panels/qr-panel';
import { ProfilePanel } from './how-sally-panels/profile-panel';
import { ContactsPanel } from './how-sally-panels/contacts-panel';
import { ObjectivePanel } from './how-sally-panels/objective-panel';
import { ConversationPanel } from './how-sally-panels/conversation-panel';

const stepsData = {
  header: 'How Sally works',
  subhead: 'Link your WhatsApp. Define outcomes. Watch Sally handle the conversations.',
  label: 'No heavy integrations. Just scan and go.',
  steps: [
    {
      id: 's1',
      title: 'Connect by scanning a QR',
      text: 'Open Sally, scan the QR with WhatsApp — your number links instantly. No approvals or extra numbers.',
    },
    {
      id: 's2',
      title: 'Set up your profile',
      text: 'Tell Sally who you are: name, role, full bio, and how you want to appear. Enable the impersonation toggle to choose whether Sally speaks as you or as your representative.',
    },
    {
      id: 's3',
      title: 'Pick who to talk to',
      text: 'Upload numbers, paste a CSV, or pick contacts from your phone. Select one person or an entire segment. Sally dedupes automatically.',
    },
    {
      id: 's4',
      title: 'Define objectives & context',
      text: 'Set what you want from the conversations — demo, feedback, re-engage, intro, or custom. Add context notes so Sally frames each chat accurately.',
    },
    {
      id: 's5',
      title: 'Sally runs the conversations',
      text: 'Sally opens natural chats, understands replies, qualifies intent, and moves things forward. When something needs your touch, Sally sends a WhatsApp ping with context and a suggested reply. Your WhatsApp reply is automatically recorded inside Sally.',
    },
  ],
  microcopy: 'No templates. No rigid workflows. Just real conversations that scale.',
  primaryCta: { text: 'Get early access' },
};

const panels = [
  { id: 's1', type: 'qr', data: { status: 'connected', caption: 'Scan with WhatsApp to connect your number.' } },
  { id: 's2', type: 'profile', data: { name: 'Alex Howard', role: 'Head of Growth', tone: 'Friendly', preview: 'Hey {first_name} — quick Q...' } },
  { id: 's3', type: 'contacts', data: { selected: ['+919876543210', '+14151234567'], hint: 'High intent — joined last week' } },
  { id: 's4', type: 'objective', data: { tags: ['Demo', 'Feedback'], context: 'Book a 15-min demo next week. Tone: casual.' } },
  { id: 's5', type: 'conversation', data: { messages: [{ from: 'Sally', text: 'Hi Aisha — are you open to a quick demo next week?' }, { from: 'Aisha', text: 'Yes — what times do you have?' }, { from: 'Sally', text: 'I can propose: Tue 10am, Wed 3pm — which works?' }, { from: 'Sally', flag: 'needs_touch', suggestedReply: 'Yes — Tue 10am works. Send calendar invite?' }] } },
];

export function HowSallyWorksSection() {
  const [activeStepId, setActiveStepId] = useState(stepsData.steps[0].id);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
  
    stepRefs.current.forEach((ref) => {
      if (!ref) return;
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const stepId = entry.target.getAttribute('data-step-id');
              if (stepId) {
                setActiveStepId(stepId);
              }
            }
          });
        },
        {
          root: null,
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0,
        }
      );
  
      observer.observe(ref);
      observers.push(observer);
    });
  
    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [stepRefs, containerRef]);
  
  const activeStepIndex = stepsData.steps.findIndex(s => s.id === activeStepId);
  const activePanel = panels.find(p => p.id === activeStepId);

  return (
    <section aria-labelledby="how-sally-works" className="py-24 sm:py-32 relative bg-transparent">
       <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="container mx-auto max-w-7xl px-6" ref={containerRef}>
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 bg-gradient-to-r from-green-50/50 to-teal-50/50 rounded-full border border-primary/20 shadow-sm">
            <span className="text-xs font-medium tracking-widest uppercase text-accent-foreground">{stepsData.label}</span>
          </div>

          <h2 id="how-sally-works" className="font-headline text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">{stepsData.header}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{stepsData.subhead}</p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          <div className="lg:max-w-md space-y-2 relative">
             <div className="absolute left-[-32px] top-0 bottom-0 flex flex-col justify-between py-2">
                {stepsData.steps.map((step, index) => {
                    const isActive = index === activeStepIndex;
                    const isCompleted = index < activeStepIndex;
                    return (
                        <div key={step.id} className="flex items-center h-full relative">
                           <div className={cn("size-3 rounded-full transition-all duration-300", 
                            isActive ? "bg-primary shadow-[0_0_12px_3px_hsl(var(--primary)/0.5)]" :
                            isCompleted ? "bg-primary/50" :
                            "bg-gray-200"
                           )}/>
                        </div>
                    )
                })}
             </div>
            <div>
              {stepsData.steps.map((step, index) => (
                <div key={step.id}
                  ref={el => stepRefs.current[index] = el}
                  data-step-id={step.id}
                  className="min-h-[16rem] py-8"
                  >
                  <h3 className={cn(
                      "text-2xl font-semibold transition-colors text-foreground relative",
                      "after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-primary after:transition-all after:duration-500",
                      activeStepId === step.id ? "after:w-1/3" : "after:w-0"
                    )}>
                      {step.title}
                  </h3>
                   <AnimatePresence>
                    {activeStepId === step.id && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-muted-foreground text-base leading-relaxed"
                      >
                        {step.text}
                      </motion.p>
                    )}
                   </AnimatePresence>
                </div>
              ))}
            </div>
             <p className="px-4 pt-4 text-sm text-muted-foreground">{stepsData.microcopy}</p>
             <div className="!mt-8 flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                    size="lg"
                    className="relative h-14 px-8 text-base font-semibold rounded-full group transition-all duration-300 overflow-hidden"
                    style={{
                    background: 'linear-gradient(to right, #25D366, #0FBF80)',
                    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.25), inset 0 2px 4px rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.08)'
                    }}
                >
                    <span className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></span>
                    <span className="relative z-10 text-black flex items-center">
                    {stepsData.primaryCta.text}
                    <span className="ml-2 size-6 flex items-center justify-center rounded-full bg-white">
                        <ArrowRight className="size-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    </span>
                </Button>
             </div>
          </div>

          <div className="relative lg:sticky top-24 h-full min-h-[500px]">
            <div className="w-full aspect-[4/3] rounded-2xl bg-white/60 backdrop-blur-xl p-4 shadow-2xl border border-white/80 ring-1 ring-inset ring-black/5"
              style={{
                boxShadow: "0 28px 60px rgba(6,22,15,0.08)",
                backgroundImage: "linear-gradient(120deg, rgba(36,211,154,0.02), rgba(19,185,133,0.01))"
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStepId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.2, 0.9, 0.2, 1] }}
                  className="h-full"
                >
                  {activePanel?.type === 'qr' && <QRPanel {...activePanel.data} isActive={true} />}
                  {activePanel?.type === 'profile' && <ProfilePanel {...activePanel.data} />}
                  {activePanel?.type === 'contacts' && <ContactsPanel {...activePanel.data} />}
                  {activePanel?.type === 'objective' && <ObjectivePanel {...activePanel.data} />}
                  {activePanel?.type === 'conversation' && <ConversationPanel {...activePanel.data} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
