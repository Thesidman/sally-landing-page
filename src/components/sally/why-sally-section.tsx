'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  MessageCircle,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'f1',
    tag: 'Compounding conversations',
    heading: 'Get personalised conversations started on WhatsApp instantly.',
    text: "Sally finds the right people in your groups and opens natural, human-sounding chats with them. No effort, no prep, no manual typing.",
    visual: 'constellation',
    layout: 'text-left',
  },
  {
    id: 'f2',
    tag: 'Intelligence layer',
    heading: 'It understands every reply and drives the conversation for you.',
    text: 'Sally reads context, picks up intent, asks the right questions, qualifies people, and keeps the chat moving. No workflows. No templates. Just smart, adaptive conversations.',
    visual: 'intelligence',
    layout: 'text-right',
  },
  {
    id: 'f3',
    tag: 'Trusted channel',
    heading: 'Built on the channel people trust the most.',
    text: 'WhatsApp gets faster, more honest replies than LinkedIn or email. Sally turns this trust into a real advantage — more responses, better conversations, higher conversions.',
    visual: 'orbit',
    layout: 'text-left',
  },
];

const SectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true }}
    className="text-center max-w-3xl mx-auto flex flex-col items-center"
  >
    <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-gradient-to-b from-[#E8FFF4] to-[#D6FBE9] border border-[#CDF5E2] shadow-sm">
      <span className="text-xs font-semibold tracking-wider uppercase text-black/70">
        WHY SALLY
      </span>
    </div>
    <h2
      className="font-headline text-4xl md:text-[42px] font-bold text-foreground tracking-tighter"
      style={{ letterSpacing: '-0.02em' }}
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
        { name: 'Ananya S.', group: 'GrowthX group', status: 'High intent', selected: true },
        { name: 'Ben Carter', group: 'GrowthX group', status: 'New', selected: false },
        { name: 'Chloe Davis', group: 'GrowthX group', status: 'Warm', selected: true },
        { name: 'David Chen', group: 'GrowthX group', status: 'New', selected: false },
        { name: 'Eva Rodriguez', group: 'GrowthX group', status: 'New', selected: false },
    ];
    return (
        <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-mint-500/5 opacity-50"></div>
             <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
             }} />

            <div className="relative w-full h-full flex items-center justify-between gap-10">
                {/* Group List Panel */}
                <motion.div
                    className="w-[45%] space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                >
                    {contacts.map((c, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            className={cn(
                                "flex items-center gap-2 p-2 rounded-lg border bg-white/60 backdrop-blur-sm transition-all duration-300", 
                                c.selected ? "border-primary/30 shadow-md" : "border-transparent"
                            )}
                        >
                            <div className="size-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-xs font-medium text-foreground truncate">{c.name}</p>
                                <p className="text-[10px] text-muted-foreground truncate">{c.group}</p>
                            </div>
                             <div className={cn("text-[9px] font-semibold px-1.5 py-0.5 rounded-full", {
                                 "bg-red-100 text-red-700": c.status === 'High intent',
                                 "bg-yellow-100 text-yellow-700": c.status === 'Warm',
                                 "bg-gray-100 text-gray-600": c.status === 'New',
                             })}>{c.status}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Chat Stacks */}
                <motion.div 
                    className="w-[55%] relative h-full"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.5}}
                    viewport={{once: true}}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-mint-500/10 to-transparent rounded-2xl"></div>
                    <div className="relative p-4 space-y-4">
                        {[1,2].map((i) => (
                             <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 + i * 0.15, ease: 'easeOut' }}
                                viewport={{ once: true }}
                                className="p-2 space-y-2 rounded-lg bg-white/50 backdrop-blur-sm border border-black/5 shadow-sm"
                             >
                                 <div className="h-2 w-10/12 rounded-full bg-gray-200/80 ml-auto"></div>
                                 <div className="h-2 w-8/12 rounded-full bg-primary/20"></div>
                             </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const IntelligenceVisual = () => {
    const capsules = [
        "Pricing inquiry", "Needs timeline", "Budget fit", "Team size", "Annual vs monthly"
    ];

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 gap-6 overflow-hidden">
             <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
             }} />
             <div className="absolute inset-0 bg-gradient-to-b from-white to-mint-500/5 opacity-50"></div>
            
            <motion.div 
                className="p-3 bg-white rounded-xl shadow-md border border-gray-100/80 w-full max-w-sm"
                initial={{opacity:0, y:-10}} whileInView={{opacity:1, y:0}} transition={{delay:0.2, ease: 'easeOut'}} viewport={{once:true}}
            >
                <p className="text-sm text-foreground text-center">"Can you send over pricing for the team plan?"</p>
            </motion.div>

            <motion.div
                className="flex flex-wrap items-center justify-center gap-2 max-w-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.08, delayChildren: 0.4 }}
            >
                {capsules.map((item) => (
                    <motion.div 
                        key={item} 
                        variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-mint-500/10 text-mint-700 shadow-sm border border-mint-500/20"
                    >
                        {item}
                    </motion.div>
                ))}
            </motion.div>
            
            <motion.div 
                className="relative flex items-start gap-2 max-w-sm"
                initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay:1, ease: 'easeOut'}} viewport={{once:true}}
            >
                <div className="p-3 bg-mint-500/10 rounded-xl shadow-sm border border-mint-500/20 w-full">
                    <p className="text-sm text-foreground text-center">"Happy to share pricing — do you prefer annual or monthly?"</p>
                </div>
            </motion.div>
        </div>
    )
};


const OrbitVisual = () => {
    const moons = [
        { icon: Zap, text: 'Speed', position: 'top-1/4 -left-4' },
        { icon: MessageCircle, text: 'Honesty', position: 'top-0 right-10' },
        { icon: TrendingUp, text: 'Uplift', position: 'top-1/2 -right-8' },
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
            }} />

            <motion.div 
                className="absolute w-[400px] h-[400px] -bottom-48 -right-48"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                 <div className="absolute inset-0 bg-gradient-to-t from-[#22B36B] to-[#8FF2C5] rounded-full blur-3xl"></div>
            </motion.div>

             <div className="absolute w-full h-full top-0 left-0">
                 <svg viewBox="0 0 300 300" className="w-full h-full absolute inset-0 opacity-20">
                    <motion.circle cx="150" cy="150" r="110" stroke="hsl(var(--primary) / 0.5)" strokeWidth="0.5" fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    />
                </svg>

                 <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px] -translate-x-1/2 -translate-y-1/2">
                    {moons.map((moon, i) => (
                         <motion.div
                            key={moon.text}
                            className="absolute flex flex-col items-center gap-1.5"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 + i * 0.15, type: 'spring', stiffness: 300, damping: 20 }}
                            viewport={{ once: true }}
                            style={{ 
                                transform: `rotate(${i * 120 - 90}deg) translate(110px) rotate(-${i * 120 - 90}deg)` 
                            }}
                        >
                             <div className="flex size-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-white/50">
                                <moon.icon className="size-7 text-primary" strokeWidth={1.5}/>
                             </div>
                         </motion.div>
                     ))}
                </div>
            </div>
             <div className="absolute w-[450px] h-[450px] -bottom-56 -right-56">
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
        </div>
    );
};

export function WhySallySection() {
    const visuals: { [key: string]: React.ReactNode } = {
        constellation: <ConstellationVisual />,
        intelligence: <IntelligenceVisual />,
        orbit: <OrbitVisual />,
    };
    
    return (
      <section className="py-28 sm:py-36 bg-[#FAFAF7] relative overflow-hidden">
         <div className="absolute inset-0 -z-10 opacity-[0.08]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
         }} />
  
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader />
          
          <div className="mt-20 space-y-12">
            {features.map((feature, index) => {
              const textBlock = (
                <motion.div
                  key={`${feature.id}-text`}
                  className="bg-white rounded-3xl border border-[#E7F5EC] shadow-2xl shadow-black/5 p-10 h-full flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="inline-flex items-center gap-2 rounded-2xl px-3 py-1 text-xs font-semibold bg-[#EEFFF7] border border-[#D4F6E7] text-primary-foreground mb-6">
                    {feature.tag}
                  </div>
                  <h3 className="font-headline text-xl font-semibold tracking-tight text-foreground">
                    {feature.heading}
                  </h3>
                  <p className="mt-2 text-base text-black/60 max-w-[90%] leading-relaxed">
                    {feature.text}
                  </p>
                </motion.div>
              );

              const visualBlock = (
                 <motion.div
                  key={`${feature.id}-visual`}
                  className="bg-white rounded-3xl border border-[#E7F5EC] shadow-2xl shadow-black/5 min-h-[400px] md:min-h-full relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="absolute inset-0 opacity-[0.06]" style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
                    }} />
                    {visuals[feature.visual]}
                </motion.div>
              );

              return (
                <div key={feature.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                   {feature.layout === 'text-left' ? 
                     <>{textBlock}{visualBlock}</> :
                     <>{visualBlock}{textBlock}</>
                   }
                </div>
              );
            })}
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
