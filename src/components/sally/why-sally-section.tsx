'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Check,
  MessageCircle,
  TrendingUp,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'f1',
    heading: 'Get personalised conversations started on WhatsApp instantly.',
    text: 'Sally finds the right people in your groups and opens natural, human-sounding chats with them. No effort, no prep, no manual typing.',
    icon: Zap,
  },
  {
    id: 'f2',
    heading: 'It understands every reply and drives the conversation for you.',
    text: 'Sally reads context, picks up intent, asks the right questions, qualifies people, and keeps the chat moving. No workflows. No templates. Just smart, adaptive conversations.',
    icon: Bot,
  },
  {
    id: 'f3',
    heading: 'Built on the channel people trust the most.',
    text: 'WhatsApp gets faster, more honest replies than LinkedIn or email. Sally turns this trust into a real advantage — more responses, better conversations, higher conversions.',
    icon: MessageCircle,
  },
];

const SectionTag = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
      style={{
        background: 'linear-gradient(to bottom, #ECFBF4, #FFFFFF)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
        border: '1px solid rgba(205, 239, 225, 0.25)',
      }}
    >
      <div className="size-2 rounded-full bg-[#36B57A] shadow-[0_0_8px_1px_#36B57A]"></div>
      <span className="text-xs font-semibold tracking-wide uppercase text-black/70">
        Why Sally
      </span>
    </motion.div>
  );
  

const SectionHeader = () => (
  <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
    <SectionTag />
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-6 font-headline text-4xl md:text-5xl font-semibold text-[#111111] tracking-tighter"
      style={{ letterSpacing: "-0.02em" }}
    >
      Conversations that feel natural, at scale
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-4 text-lg text-black/60"
    >
      Sally turns WhatsApp into a compounding engine your competitors simply
      don’t have.
    </motion.p>
  </div>
);

const TextCard = ({
  feature,
}: {
  feature: (typeof features)[0];
}) => (
    <div
      className={cn(
        'relative rounded-3xl bg-white p-8 md:p-10 border border-[#E7ECEA] shadow-[0_12px_30px_rgba(0,0,0,0.04)] h-full flex flex-col justify-center'
      )}
    >
      <div className="absolute top-6 left-6 h-1 w-10 rounded-full bg-primary/20" />
      <h3 className="font-headline text-2xl md:text-3xl font-semibold tracking-tight text-foreground mt-4">
        {feature.heading}
      </h3>
      <p className="mt-4 text-base md:text-lg text-black/70 max-w-lg">
        {feature.text}
      </p>
    </div>
  );
  
  const VisualCard = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div
      className={cn(
        'relative rounded-[32px] overflow-hidden p-8',
        'bg-gradient-to-br from-[#E8FAF3] to-[#D8F4F4]',
        'shadow-[0_24px_80px_rgba(7,80,55,0.1)]',
        'h-full',
        className
      )}
    >
       <div className="absolute inset-0 bg-white/20 backdrop-blur-xl"></div>
       <div className="absolute inset-0 opacity-[0.02] bg-[url(\'data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%3E%3Cg%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23000000%22%20fill-opacity=%221%22%3E%3Cpath%20d=%22M0%2038.59l2.83-2.83%201.41%201.41L1.41%2040H0v-1.41zM0%201.4l2.83%202.83%201.41-1.41L1.41%200H0v1.41zM38.59%2040l-2.83-2.83%201.41-1.41L40%2038.59V40h-1.41zM40%201.41l-2.83%202.83-1.41-1.41L38.59%200H40v1.41zM20%2018.6l2.83-2.83%201.41%201.41L21.41%2020l2.83%202.83-1.41%201.41L20%2021.41l-2.83%202.83-1.41-1.41L18.59%2020l-2.83-2.83%201.41-1.41L20%2018.59z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')]"></div>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );

const Feature1Visual = () => {
    const contacts = [
        { name: 'Ananya S.', group: 'GrowthX group', selected: true },
        { name: 'Ben Carter', group: 'GrowthX group', selected: false },
        { name: 'Chloe Davis', group: 'GrowthX group', selected: true },
        { name: 'David Chen', group: 'GrowthX group', selected: false },
        { name: 'Eva Rodriguez', group: 'GrowthX group', selected: true },
    ];

    return (
        <div className="relative flex items-center justify-center h-full">
            <motion.div 
              className="absolute size-16 bg-primary/20 rounded-full flex items-center justify-center"
              initial={{opacity: 0, scale: 0.5}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{delay: 0.4, duration: 0.4, ease: 'easeOut'}}
              viewport={{once: true}}
            >
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg animate-pulse"></div>
                <Bot className="size-8 text-primary" />
            </motion.div>
            
            {/* Contact List */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 space-y-2">
                {contacts.map((c,i) => (
                     <motion.div 
                        key={i} 
                        variants={{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } }}
                        initial="initial"
                        whileInView="animate"
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                        viewport={{once: true}}
                        className={cn(
                            "flex items-center gap-2 p-2 rounded-lg transition-colors duration-300 bg-white/50 backdrop-blur-sm border border-black/5",
                            c.selected ? "shadow-md" : ""
                        )}
                    >
                        <div className="size-6 rounded-full bg-gray-200"></div>
                        <div>
                            <p className="text-xs font-medium text-foreground">{c.name}</p>
                            <p className="text-[10px] text-muted-foreground">{c.group}</p>
                        </div>
                        {c.selected && <CheckCircle2 className="size-4 text-primary ml-auto flex-shrink-0" />}
                    </motion.div>
                ))}
            </div>

             {/* Chat Snippets */}
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 space-y-3">
                    {[1,2,3].map((i) => (
                         <motion.div 
                            key={i}
                            initial={{opacity: 0, x: 20}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{delay: 0.7 + i * 0.15, duration: 0.5, ease: 'easeOut'}}
                            viewport={{once: true}}
                            className="p-2 rounded-lg bg-white/50 border border-black/5 shadow-sm space-y-1.5"
                         >
                            <div className="w-10/12 h-2 rounded-full bg-gray-200/80"></div>
                            <div className={cn("h-2 rounded-full", i % 2 === 0 ? 'bg-primary/30 w-full' : 'bg-gray-200/80 w-8/12 ml-auto' )}></div>
                         </motion.div>
                    ))}
                </div>
        </div>
    );
};

const Feature2Visual = () => {
    return(
         <div className="relative flex flex-col items-center justify-center h-full p-4">
            <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
                viewport={{once: true}}
                className="p-3 bg-white rounded-xl shadow-md border border-gray-100"
            >
                <p className="text-sm text-foreground">Can you send over pricing for the team plan?</p>
            </motion.div>

            <div className="relative w-full h-24 mt-4">
                <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none" className="absolute inset-0">
                    <defs>
                        <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="hsl(var(--primary) / 0)" />
                            <stop offset="100%" stopColor="hsl(var(--primary))" />
                        </linearGradient>
                    </defs>
                    <motion.path d="M 100 0 Q 30 50, 10 90" stroke="hsl(var(--border))" fill="none" strokeWidth="1.5" strokeDasharray="3 3" 
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                     viewport={{ once: true }}/>
                    <motion.path d="M 100 0 Q 170 50, 190 90" stroke="hsl(var(--border))" fill="none" strokeWidth="1.5" strokeDasharray="3 3" 
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                     viewport={{ once: true }}/>
                    <motion.path
                        d="M 100 0 Q 100 50, 100 90"
                        stroke="url(#line-gradient-2)"
                        fill="none"
                        strokeWidth="2.5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    />
                </svg>
            </div>
            
            <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: 1 }}
                viewport={{once: true}}
                className="flex items-start gap-2 max-w-md"
            >
                <div className="size-8 flex-shrink-0 flex items-center justify-center rounded-full bg-primary shadow-lg"><Bot className="size-4 text-white"/></div>
                <div className="mt-1 p-3 bg-white/80 rounded-t-xl rounded-bl-xl shadow-md border border-gray-100">
                    <p className="text-sm text-foreground">Of course. Are you looking to pay annually for a discount?</p>
                </div>
            </motion.div>
        </div>
    )
};

const Feature3Visual = () => {
    const BenefitCard = ({ icon: Icon, text, delay }: { icon: React.ElementType, text: string, delay: number }) => (
        <motion.div
            className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border-white/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay }}
            viewport={{ once: true }}
        >
            <div className="flex size-9 items-center justify-center rounded-full bg-primary/10">
                <Icon className="size-5 text-primary" />
            </div>
            <p className="font-medium text-foreground text-base">{text}</p>
        </motion.div>
    );

    return(
        <div className="relative flex items-center justify-center h-full overflow-hidden">
            <motion.div 
                className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-gradient-to-t from-primary/20 to-primary/5 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            >
                 <div className="absolute inset-0 rounded-full opacity-5" style={{
                     backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
                 }}></div>
            </motion.div>
            
            <div className="relative z-10 w-full h-full max-w-sm mx-auto flex flex-col justify-center">
                <div className="space-y-4">
                    <BenefitCard icon={TrendingUp} text="Higher conversions" delay={0.4} />
                    <BenefitCard icon={MessageCircle} text="Honest conversations" delay={0.6} />
                    <BenefitCard icon={Zap} text="Faster replies" delay={0.8} />
                </div>
            </div>
        </div>
    )
};


export function WhySallySection() {
    return (
      <section className="py-24 sm:py-32 bg-[#F9FAF8] relative overflow-hidden">
         <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
         }} />
         <div className="absolute top-0 right-0 w-1/2 h-full -z-10">
            <div className="absolute -right-1/4 top-0 w-[800px] h-[800px] bg-primary/5 blur-3xl rounded-full opacity-30"></div>
         </div>
         <div className="absolute bottom-0 left-0 w-1/2 h-1/2 -z-10">
            <div className="absolute -left-1/4 bottom-0 w-[600px] h-[600px] bg-accent/5 blur-3xl rounded-full opacity-30"></div>
         </div>
  
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader />
          
          <div className="mt-20 grid grid-cols-1 gap-8">

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
                <motion.div 
                    className="lg:col-span-3"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }}
                >
                    <TextCard feature={features[0]} />
                </motion.div>
                <motion.div
                     className="lg:col-span-2"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }}
                >
                     <VisualCard>
                        <Feature1Visual />
                     </VisualCard>
                </motion.div>
            </div>
  
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
                <motion.div
                     className="lg:col-span-2 lg:order-2"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }}
                >
                    <TextCard feature={features[1]} />
                </motion.div>
                <motion.div 
                    className="lg:col-span-3 lg:order-1"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }}
                >
                     <VisualCard>
                        <Feature2Visual />
                     </VisualCard>
                </motion.div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }}
                >
                    <TextCard feature={features[2]} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }}
                >
                    <VisualCard>
                        <Feature3Visual />
                    </VisualCard>
                 </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  