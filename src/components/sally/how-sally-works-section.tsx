'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { QRPanel } from './how-sally-panels/qr-panel';
import { ProfilePanel } from './how-sally-panels/profile-panel';
import { ContactsPanel } from './how-sally-panels/contacts-panel';
import { ObjectivePanel } from './how-sally-panels/objective-panel';
import { ConversationPanel } from './how-sally-panels/conversation-panel';

const stepsData = {
  header: 'How Sally works',
  subhead: 'Connect your WhatsApp. Set a goal. Let Sally handle the rest.',
  label: 'No complex setups. Just scan a QR.',
  steps: [
    {
      id: 's1',
      title: 'Scan a QR to connect your WhatsApp',
      text: 'Open Sally, scan the QR from the WhatsApp app on your phone. Your number is instantly linked — your phone becomes the control plane.',
    },
    {
      id: 's2',
      title: 'Tell Sally who you are',
      text: 'Set your profile once: name, role, and voice. Sally writes like you — not like a bot.',
    },
    {
      id: 's3',
      title: 'Choose who to talk to',
      text: 'Upload numbers, paste CSV, or pick contacts from your WhatsApp list. Single contact or bulk — your call.',
    },
    {
      id: 's4',
      title: 'Set the objective & context',
      text: 'Define what you want: demo, feedback, re-engage, intro, or custom. Add optional context notes for higher accuracy.',
    },
    {
      id: 's5',
      title: 'Sally runs the chats and only pings you when needed',
      text: 'Sally opens natural conversations, reads replies, understands intent, qualifies people, and moves the chat forward. If a reply needs your touch, she sends a concise notification with context and a suggested reply.',
    },
  ],
  microcopy: 'No templates. No workflows. Just human-feeling conversations that scale.',
  primaryCta: { text: 'Start your first conversation' },
  secondaryCta: { text: 'See a demo' },
};

const panels = [
  { id: 'p1', type: 'qr', data: { status: 'connected', caption: 'Scan with WhatsApp to connect your number.' } },
  { id: 'p2', type: 'profile', data: { name: 'Alex Howard', role: 'Head of Growth', tone: 'Friendly', preview: 'Hey {first_name} — quick Q...' } },
  { id: 'p3', type: 'contacts', data: { selected: ['+919876543210', '+14151234567'], hint: 'High intent — joined last week' } },
  { id: 'p4', type: 'objective', data: { tags: ['Demo', 'Feedback'], context: 'Book a 15-min demo next week. Tone: casual.' } },
  { id: 'p5', type: 'conversation', data: { messages: [{ from: 'Sally', text: 'Hi Aisha — are you open to a quick demo next week?' }, { from: 'Aisha', text: 'Yes — what times do you have?' }, { from: 'Sally', text: 'I can propose: Tue 10am, Wed 3pm — which works?' }, { from: 'Sally', flag: 'needs_touch', suggestedReply: 'Yes — Tue 10am works. Send calendar invite?' }] } },
];

export function HowSallyWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  const renderPanel = (index: number) => {
    const panel = panels[index];
    if (!panel) return null;

    switch (panel.type) {
      case 'qr':
        return <QRPanel {...panel.data} isActive={activeStep === index} />;
      case 'profile':
        return <ProfilePanel {...panel.data} />;
      case 'contacts':
        return <ContactsPanel {...panel.data} />;
      case 'objective':
        return <ObjectivePanel {...panel.data} />;
      case 'conversation':
        return <ConversationPanel {...panel.data} />;
      default:
        return null;
    }
  };

  return (
    <section aria-labelledby="how-sally-works" className="py-24 sm:py-32 bg-background relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0, hsl(160 50% 98%), transparent 50%), radial-gradient(circle at 10% 20%, hsl(170 50% 96%), transparent 40%), radial-gradient(circle at 90% 30%, hsl(155 55% 97%), transparent 40%)',
          opacity: 0.7,
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="container mx-auto max-w-6xl px-6">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="inline-block px-3 py-1 text-sm text-muted-foreground bg-white/50 rounded-full border shadow-sm mb-4">{stepsData.label}</p>
          <h2 id="how-sally-works" className="font-headline text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">{stepsData.header}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{stepsData.subhead}</p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          <div className="lg:max-w-md space-y-2">
            <ol>
              {stepsData.steps.map((step, index) => (
                <li key={step.id} 
                  className={cn(
                    "p-4 rounded-xl cursor-pointer transition-all duration-300",
                    activeStep === index ? 'bg-white shadow-lg' : 'hover:bg-gray-50'
                  )}
                  onMouseEnter={() => setActiveStep(index)}
                  >
                  <div className="flex items-start gap-4">
                     <div className={cn("mt-1 flex-shrink-0 size-6 rounded-full flex items-center justify-center transition-all", activeStep === index ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600')}>
                      {activeStep === index ? <CheckCircle className="size-4" /> : <span className="text-xs font-bold">{index + 1}</span>}
                    </div>
                    <div>
                      <h3 className={cn("text-lg font-semibold transition-colors", activeStep === index ? "text-foreground" : "text-gray-600")}>{step.title}</h3>
                      <p className={cn("mt-1 text-muted-foreground transition-all duration-300", activeStep === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0")}>{step.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
             <p className="px-4 pt-4 text-sm text-muted-foreground">{stepsData.microcopy}</p>
            <div className="!mt-8 flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-12 text-base font-semibold rounded-full group transition-all duration-300 overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground">
                {stepsData.primaryCta.text}
                <ArrowRight className="size-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="ghost" className="h-12 text-base font-semibold rounded-full text-muted-foreground hover:text-foreground">
                {stepsData.secondaryCta.text}
                 <ChevronRight className="size-4 ml-1" />
              </Button>
            </div>
          </div>

          <div className="relative lg:sticky top-24 h-full min-h-[500px]">
            <div className="w-full aspect-[4/3] rounded-2xl bg-white/60 backdrop-blur-xl p-4 shadow-2xl border border-white/80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderPanel(activeStep)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Minimalist presence animation component to reduce boilerplate
const AnimatePresence = ({ children, mode }: { children: React.ReactNode, mode: 'wait' | 'sync' | 'popLayout' }) => {
    const [presence, setPresence] = useState(children);
    React.useEffect(() => {
      if (mode === 'wait') {
        const timer = setTimeout(() => setPresence(children), 300);
        return () => clearTimeout(timer);
      }
      setPresence(children);
    }, [children, mode]);
  
    return <>{presence}</>;
};
