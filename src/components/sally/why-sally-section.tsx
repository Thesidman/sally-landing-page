'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  CheckCircle2,
  MessageCircle,
  TrendingUp,
  Zap,
  Users,
  BrainCircuit,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'f1',
    tag: 'Compounding conversations',
    icon: Users,
    heading: 'Get personalised conversations started on WhatsApp instantly.',
    text: "Sally finds the right people in your groups and opens natural, human-sounding chats with them. No effort, no prep, no manual typing.",
    visual: 'constellation',
  },
  {
    id: 'f2',
    tag: 'Intelligence layer',
    icon: BrainCircuit,
    heading: 'It understands every reply and drives the conversation for you.',
    text: 'Sally reads context, picks up intent, asks the right questions, qualifies people, and keeps the chat moving. No workflows. No templates. Just smart, adaptive conversations.',
    visual: 'triangulation',
  },
  {
    id: 'f3',
    tag: 'Trusted channel',
    icon: ShieldCheck,
    heading: 'Built on the channel people trust the most.',
    text: 'WhatsApp gets faster, more honest replies than LinkedIn or email. Sally turns this trust into a real advantage — more responses, better conversations, higher conversions.',
    visual: 'orbit',
  },
];

const SectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true }}
    className="text-center max-w-4xl mx-auto flex flex-col items-center"
  >
    <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-gradient-to-b from-[#E8FFF4] to-[#D6FBE9] border border-[#CDF5E2] shadow-sm">
      <span className="text-xs font-semibold tracking-wider uppercase text-black/70">
        WHY SALLY
      </span>
    </div>
    <h2
      className="font-headline text-4xl md:text-[42px] font-bold text-foreground tracking-tighter"
      style={{ letterSpacing: '-0.01em' }}
    >
      Why Sally gives you unfair leverage.
    </h2>
    <p
      className="mt-4 text-lg text-[#4D4D4D]"
    >
      Sally turns WhatsApp into a compounding engine your competitors simply don’t have.
    </p>
  </motion.div>
);

const ConstellationVisual = () => {
    const contacts = [
        { name: 'Ananya S.', group: 'GrowthX group', selected: true },
        { name: 'Ben Carter', group: 'GrowthX group', selected: false },
        { name: 'Chloe Davis', group: 'GrowthX group', selected: true },
        { name: 'David Chen', group: 'GrowthX group', selected: true },
        { name: 'Eva Rodriguez', group: 'GrowthX group', selected: false },
    ];
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Sally Node */}
            <motion.div 
                className="absolute z-10 size-14 bg-gradient-to-br from-[#79E6BF] to-[#41C58D] rounded-full shadow-[0_8px_24px_rgba(65,197,141,0.4)]"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 rounded-full bg-white/20" />
                <div className="absolute inset-0 rounded-full shadow-inner-soft-sm" />
                <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/10 rounded-full" />
                <Bot className="absolute inset-0 m-auto size-7 text-white/90" />
            </motion.div>
            
            {/* Contact List */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[140px] space-y-2">
                {contacts.map((c, i) => (
                    <motion.div
                        key={i}
                        className={cn("flex items-center gap-2 p-1.5 rounded-lg border bg-white/60 backdrop-blur-sm transition-all duration-300", c.selected ? "border-primary/30 shadow-md" : "border-transparent")}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <div className="size-6 rounded-full bg-gray-200 flex-shrink-0"></div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-[11px] font-medium text-foreground truncate">{c.name}</p>
                            <p className="text-[9px] text-muted-foreground truncate">{c.group}</p>
                        </div>
                        {c.selected && <div className="size-1.5 rounded-full bg-primary flex-shrink-0 mr-1 shadow-[0_0_4px_1px_hsl(var(--primary))]"/>}
                    </motion.div>
                ))}
            </div>

            {/* Chat Snippets */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[150px] space-y-3">
                {[1,2,3].map((i) => (
                     <motion.div 
                        key={i}
                        className="p-2 space-y-1.5 rounded-lg bg-white/50 backdrop-blur-sm border border-black/5 shadow-sm"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                        viewport={{ once: true }}
                     >
                         <div className="h-2 w-10/12 rounded-full bg-gray-200/80 ml-auto"></div>
                         <div className="h-2 w-8/12 rounded-full bg-primary/20"></div>
                     </motion.div>
                ))}
            </div>

             <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                <defs>
                    <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#AAF4D8" />
                        <stop offset="100%" stopColor="#6FDAA9" />
                    </linearGradient>
                </defs>
                 {[0,2,3].map(i => (
                    <motion.path 
                        key={i}
                        d={`M 140 ${62 + i*32} Q 190 ${62 + i*32}, 210 130`}
                        stroke="url(#line-grad-1)" fill="none" strokeWidth="1.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: 'easeInOut' }}
                        viewport={{ once: true }}
                    />
                 ))}
                 {[0,1,2].map(i => (
                    <motion.path 
                        key={i}
                        d={`M 238 130 Q 250 ${100 + i*30}, 300 ${80 + i * 54}`}
                        stroke="hsl(var(--primary) / 0.3)" fill="none" strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + i * 0.1, ease: 'easeInOut' }}
                        viewport={{ once: true }}
                    />
                 ))}
            </svg>
        </div>
    );
};

const TriangulationVisual = () => {
    const pillars = {
        Intent: ["Pricing inquiry", "Timeline: next week", "Seat count"],
        Context: ["Last interaction: 2mo ago", "Viewed pricing page", "Competitor: Salesforce"],
        Objections: ["Budget uncertainty", "Decision stage: evaluating", "Needs stakeholder buy-in"],
    };

    return(
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
            <motion.div 
                className="p-2.5 bg-white rounded-xl shadow-md border border-gray-100/80"
                initial={{opacity:0, y:-10}} whileInView={{opacity:1, y:0}} transition={{delay:0.2}} viewport={{once:true}}
            >
                <p className="text-xs text-foreground">Can you send over pricing for the team plan?</p>
            </motion.div>

            <div className="w-full flex justify-between mt-6 px-2">
                {Object.entries(pillars).map(([pillar, items], pIndex) => (
                    <div key={pillar} className="flex flex-col items-center space-y-2">
                        <p className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">{pillar}</p>
                        <div className="space-y-1.5">
                            {items.map((item, iIndex) => (
                                <motion.div 
                                    key={item} 
                                    className={cn(
                                        "px-2 py-0.5 rounded-full text-[10px] font-medium transition-colors",
                                        pIndex === 0 && iIndex < 2 ? "bg-primary/20 text-primary-foreground shadow-sm" : "bg-gray-100 text-gray-500"
                                    )}
                                    initial={{opacity:0, scale:0.8}}
                                    whileInView={{opacity:1, scale:1}}
                                    transition={{delay: 0.4 + (pIndex * 3 + iIndex) * 0.05}}
                                    viewport={{once:true}}
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                 <defs>
                    <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#65DBB1" />
                        <stop offset="100%" stopColor="#AAF4D8" />
                    </linearGradient>
                </defs>
                 <motion.path d="M 195 45 Q 90 100, 90 135 C 90 170, 150 190, 290 220"
                    stroke="url(#line-grad-2)"
                    fill="none" strokeWidth="2.5"
                    pathLength="1"
                    className="drop-shadow-[0_4px_8px_hsl(var(--primary)/0.5)]"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
                    viewport={{ once: true }}
                 />
                 <motion.g initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.5}}>
                    <circle cx="290" cy="220" r="3" fill="#65DBB1" />
                 </motion.g>
                {[
                    "M 195 45 Q 195 90, 195 125",
                    "M 195 45 Q 290 90, 295 145",
                ].map((d,i) => (
                     <motion.path key={i} d={d}
                        stroke="hsl(var(--border) / 0.5)"
                        fill="none" strokeWidth="1" strokeDasharray="2 3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 + i*0.1, ease: "easeInOut" }}
                        viewport={{ once: true }}
                     />
                ))}
            </svg>

            <motion.div 
                className="absolute bottom-4 right-4 flex items-start gap-1.5"
                initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay:1.2}} viewport={{once:true}}
            >
                <Bot className="size-4 text-primary mt-1.5 flex-shrink-0" />
                <div className="p-2.5 bg-primary/10 rounded-xl shadow-sm border border-primary/20">
                    <p className="text-xs text-foreground">Happy to share pricing — would you prefer annual or monthly?</p>
                </div>
            </motion.div>
        </div>
    )
};


const OrbitVisual = () => {
    const moons = [
        { icon: TrendingUp, text: 'Higher conversions', position: 'top-1/4 -left-4' },
        { icon: MessageCircle, text: 'Honest conversations', position: 'top-0 right-10' },
        { icon: Zap, text: 'Faster replies', position: 'top-1/2 -right-8' },
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="absolute w-[400px] h-[400px] -bottom-48 -right-48">
                 <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#22B36B] to-[#8FF2C5] rounded-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                 >
                     <div className="absolute inset-0 rounded-full opacity-5" style={{
                         backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
                     }}></div>
                 </motion.div>
            </div>
             <div className="absolute w-[280px] h-[280px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 opacity-20">
                    <motion.circle cx="50" cy="50" r="45" stroke="hsl(var(--primary) / 0.5)" strokeWidth="0.5" fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                </svg>

                 {moons.map((moon, i) => (
                     <motion.div
                        key={moon.text}
                        className="absolute flex flex-col items-center gap-1.5"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + i * 0.15, type: 'spring', stiffness: 300, damping: 20 }}
                        viewport={{ once: true }}
                        style={{ 
                            transform: `rotate(${i * 120 - 90}deg) translate(140px) rotate(-${i * 120 - 90}deg)` 
                        }}
                    >
                         <div className="flex size-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-white/50">
                            <moon.icon className="size-7 text-primary" strokeWidth={1.5}/>
                         </div>
                         <p className="text-xs font-medium text-foreground">{moon.text}</p>
                     </motion.div>
                 ))}
            </div>
        </div>
    );
};


export function WhySallySection() {
    const visuals: { [key: string]: React.ReactNode } = {
        constellation: <ConstellationVisual />,
        triangulation: <TriangulationVisual />,
        orbit: <OrbitVisual />,
    };
    
    return (
      <section className="py-28 sm:py-36 bg-[#FAFAF7] relative overflow-hidden">
         <div className="absolute inset-0 -z-10 opacity-[0.06]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
         }} />
  
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader />
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <motion.div
                    key={feature.id}
                    className="bg-white rounded-[28px] border border-[#EAF3EE] shadow-[0_22px_60px_rgba(0,0,0,0.045)] p-8 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    {/* Text Zone */}
                    <div className="flex-shrink-0">
                        <div className="inline-flex items-center gap-2 rounded-2xl px-3 py-1 text-xs font-semibold bg-[#EEFFF7] border border-[#D4F6E7] text-primary-foreground">
                            {feature.tag}
                        </div>
                        <h3 className="mt-4 font-headline text-xl font-semibold tracking-tight text-foreground">
                            {feature.heading}
                        </h3>
                        <p className="mt-2 text-base text-black/60 max-w-[85%] leading-relaxed">
                            {feature.text}
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="my-6 border-t border-gray-200/60"></div>
                    
                    {/* Visual Zone */}
                    <div className="flex-1 relative bg-gradient-to-br from-[#F6FFFB] to-[#F2FBF5] rounded-xl overflow-hidden">
                         <div className="absolute inset-0 opacity-50" style={{
                            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
                        }} />
                        {visuals[feature.visual]}
                    </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

// Add a new utility class for soft inner shadow if not present in tailwind.config.ts
// tailwind.config.ts
// theme: {
//   extend: {
//     boxShadow: {
//       'inner-soft-sm': 'inset 0 1px 2px rgba(0,0,0,0.06)',
//     }
//   }
// }
