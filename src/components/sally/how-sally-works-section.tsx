'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { PhoneScreenQR } from './how-sally-panels/phone-screen-qr';
import { PhoneScreenProfile } from './how-sally-panels/phone-screen-profile';
import { PhoneScreenContacts } from './how-sally-panels/phone-screen-contacts';
import { PhoneScreenObjective } from './how-sally-panels/phone-screen-objective';
import { PhoneScreenConversation } from './how-sally-panels/phone-screen-conversation';

const stepsData = {
  header: 'How Sally works',
  subhead: 'Link your WhatsApp. Define outcomes. Watch Sally handle the conversations.',
  label: 'No heavy integrations. Just scan and go.',
  steps: [
    {
      id: 's1',
      title: 'Connect by scanning a QR',
      text: 'Open Sally, scan the QR with WhatsApp — your number links instantly. No approvals, no extra numbers.',
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
      text: "Sally opens natural chats, understands replies, qualifies intent, and moves things forward. When something needs your touch, Sally sends a WhatsApp ping with context and a suggested reply. Your WhatsApp reply is automatically recorded inside Sally.",
    },
  ],
  microcopy: 'No templates. No rigid workflows. Just real conversations that scale.',
  primaryCta: { text: 'Get early access' },
};

const panels = [
  { id: 's1', component: PhoneScreenQR },
  { id: 's2', component: PhoneScreenProfile },
  { id: 's3', component: PhoneScreenContacts },
  { id: 's4', component: PhoneScreenObjective },
  { id: 's5', component: PhoneScreenConversation },
];

const Step = ({
  step,
  isActive,
}: {
  step: (typeof stepsData.steps)[0];
  isActive: boolean;
}) => {
  return (
    <div className="relative flex items-start gap-5">
       <div className="mt-1.5 flex flex-col items-center">
        <div
          className={cn(
            'size-3 rounded-full border-2 transition-all duration-300',
            isActive ? 'border-primary bg-primary shadow-[0_0_12px_hsl(var(--primary))]' : 'border-gray-300'
          )}
        />
      </div>
      <div className="flex-1 pb-6">
        <h3
          className={cn(
            'font-headline text-2xl font-semibold tracking-tighter transition-colors duration-300',
            isActive ? 'text-foreground' : 'text-foreground/40'
          )}
        >
          {step.title}
           <AnimatePresence>
            {isActive && (
              <motion.div
                className="mt-1 h-0.5 w-1/4 bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '25%' }}
                exit={{ width: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            )}
          </AnimatePresence>
        </h3>
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0.9, 0.2, 1] }}
            >
              <div className="p-4 rounded-xl bg-white/50 backdrop-blur-md border border-gray-200/70 shadow-sm">
                <p className="text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


export function HowSallyWorksSection() {
  const [activeStepId, setActiveStepId] = useState(stepsData.steps[0].id);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStepId(ref.id);
            }
          });
        },
        {
          rootMargin: '-30% 0px -60% 0px',
          threshold: 0,
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const activePanelIndex = panels.findIndex((p) => p.id === activeStepId);

  return (
    <section
      aria-labelledby="how-sally-works"
      className="py-28 sm:py-32 bg-[#FAFAF7] relative overflow-hidden"
    >
       <div className="absolute inset-0 -z-10 opacity-[0.06]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
         }} />
         <div className="absolute top-0 right-0 w-1/2 h-1/2 -z-10 -translate-y-1/4 translate-x-1/4 rounded-full bg-primary/5 opacity-50 blur-[180px]"></div>

      <div className="container mx-auto max-w-7xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 bg-gradient-to-r from-accent/50 to-secondary/50 rounded-full border border-primary/20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent-foreground">
              {stepsData.label}
            </span>
          </div>

          <h2
            id="how-sally-works"
            className="font-headline text-4xl md:text-5xl font-semibold tracking-tighter text-foreground"
          >
            {stepsData.header}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {stepsData.subhead}
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          <div className="lg:max-w-md relative">
            <div className="absolute left-[5px] top-1.5 bottom-0 w-px bg-gray-200"></div>
            <div className="flex flex-col">
              {stepsData.steps.map((step, index) => (
                <div
                  key={step.id}
                  id={step.id}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className="pl-2"
                >
                  <Step
                    step={step}
                    isActive={activeStepId === step.id}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 pl-8">
              <Button
                asChild
                size="lg"
                className="relative h-14 px-6 text-base font-semibold rounded-full group transition-all duration-300 overflow-hidden"
                style={{
                  background: 'linear-gradient(to right, #25D366, #0FBF80)',
                  boxShadow:
                    '0 6px 20px rgba(37, 211, 102, 0.25), inset 0 2px 4px rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              >
                <a href="#">
                  <span className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></span>
                  <span className="relative z-10 text-black flex items-center">
                    {stepsData.primaryCta.text}
                    <span className="ml-2 size-6 flex items-center justify-center rounded-full bg-white">
                      <ArrowRight className="size-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </span>
                </a>
              </Button>
               <p className="mt-4 text-sm text-muted-foreground">{stepsData.microcopy}</p>
            </div>
          </div>

          <div className="relative lg:sticky top-24 h-full min-h-[680px]">
            <div
              className="w-full max-w-[360px] mx-auto rounded-3xl p-3 bg-white/60 backdrop-blur-xl border border-white/80"
              style={{
                boxShadow: '0 28px 60px rgba(6,22,15,0.08)',
                backgroundImage:
                  'linear-gradient(120deg, rgba(36,211,154,0.12), rgba(19,185,133,0.04))',
              }}
            >
              <div className="relative h-[700px] w-full bg-black rounded-[18px] overflow-hidden shadow-inner">
                
                <AnimatePresence mode="wait">
                  {panels.map(
                    (panel, index) =>
                      index === activePanelIndex && (
                        <motion.div
                          key={panel.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.2, 0.9, 0.2, 1],
                          }}
                          className="absolute inset-0"
                        >
                          <panel.component />
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
