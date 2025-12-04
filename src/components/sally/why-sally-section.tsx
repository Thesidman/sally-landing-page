'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Check,
  MessageCircle,
  TrendingUp,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// --- Main Component ---
export function WhySallySection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-background">
      {/* Background elements */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0, hsl(160 50% 98% / 0.7), transparent 50%), radial-gradient(circle at 10% 20%, hsl(170 50% 96% / 0.6), transparent 40%), radial-gradient(circle at 90% 30%, hsl(155 55% 97% / 0.6), transparent 40%)',
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader />
        <div className="mt-16 grid grid-cols-1 gap-8">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <FeatureCard className="lg:col-span-3">
              <Feature1 />
            </FeatureCard>
            <FeatureCard className="lg:col-span-2">
              <Feature2 />
            </FeatureCard>
          </div>
          {/* Row 2 */}
          <FeatureCard>
            <Feature3 />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

// --- Sub-components ---

const SectionHeader = () => (
  <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
      style={{
        background: 'linear-gradient(to bottom, #F3FBF7, #FFFFFF)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.03), inset 0 1px 1px #fff',
        border: '1px solid hsl(150 50% 88% / 0.5)',
      }}
    >
      <div
        className="size-1.5 rounded-full bg-[#36B57A]"
        style={{ boxShadow: '0 0 4px 1px rgba(54, 181, 122, 0.5)' }}
      />
      <span className="text-xs font-semibold tracking-wide uppercase text-[#1A1A1A]/80">
        WHY SALLY
      </span>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="mt-6 font-headline text-4xl md:text-5xl font-bold tracking-tighter text-foreground"
    >
      Conversations that feel natural, at scale
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-4 max-w-xl text-lg text-foreground/70"
    >
      Sally turns WhatsApp into a compounding engine your competitors simply
      don’t have.
    </motion.p>
  </div>
);

const FeatureCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
    viewport={{ once: true }}
    className={cn(
      'relative rounded-3xl p-8 bg-white/50 shadow-soft border border-black/5 backdrop-blur-sm',
      className
    )}
  >
    {children}
  </motion.div>
);

const Feature1 = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-left">
                <h3 className="font-headline text-2xl font-semibold tracking-tight text-foreground">
                    Get personalised conversations started on WhatsApp instantly
                </h3>
                <p className="mt-3 text-base text-foreground/70 max-w-md">
                    Celly finds the right people in your groups and opens natural, human-sounding chats with them. No effort, no prep, no manual typing.
                </p>
            </div>
            <div className="relative flex items-center justify-center min-h-[250px]">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl"></div>
                <motion.div 
                    className="relative w-full h-full"
                    whileHover="hover"
                >
                    {/* Central Celly icon */}
                    <motion.div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        variants={{ hover: { scale: 1.1 } }}
                    >
                        <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center shadow-lg">
                            <div className="size-12 bg-primary/20 rounded-full flex items-center justify-center">
                                <Bot className="size-6 text-primary" />
                            </div>
                        </div>
                         <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg animate-pulse"></div>
                    </motion.div>

                    {/* Surrounding bubbles */}
                    {[...Array(7)].map((_, i) => {
                        const angle = (i / 7) * 2 * Math.PI;
                        const radius = 100 + (i % 2) * 20;
                        return (
                            <motion.div
                                key={i}
                                className="absolute top-1/2 left-1/2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1, x: `calc(-50% + ${radius * Math.cos(angle)}px)`, y: `calc(-50% + ${radius * Math.sin(angle)}px)` }}
                                transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.5 + i * 0.1 }}
                                variants={{ hover: { scale: 1.1, zIndex: 10 } }}
                            >
                                <div className="p-2.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-white/50 text-xs text-foreground/60 w-28">
                                    {i % 2 === 0 ? "Hey, saw you're in GrowthX..." : "Quick question about..."}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

const Feature2 = () => {
    return (
        <div className="flex flex-col text-center h-full">
            <h3 className="font-headline text-2xl font-semibold tracking-tight text-foreground">
                It understands every reply and drives the conversation for you
            </h3>
            <p className="mt-3 text-base text-foreground/70 max-w-md mx-auto">
                Celly reads context, picks up intent, asks the right questions, qualifies people, and keeps the chat moving. No workflows. No templates. Just smart, adaptive conversations.
            </p>
            <div className="flex-1 flex items-center justify-center mt-6">
                <div className="relative w-full max-w-xs h-48">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-2 bg-white rounded-xl shadow-md border border-gray-100">
                        <p className="text-xs text-foreground">Can you send pricing?</p>
                    </div>
                    <svg width="100%" height="100%" viewBox="0 0 200 100" className="absolute top-10 left-0">
                        {/* Ghosted Paths */}
                        <motion.path d="M 100 0 Q 30 50, 10 90" stroke="hsl(var(--border) / 0.3)" fill="none" strokeWidth="1.5" strokeDasharray="3 3" />
                        <motion.path d="M 100 0 Q 170 50, 190 90" stroke="hsl(var(--border) / 0.3)" fill="none" strokeWidth="1.5" strokeDasharray="3 3" />

                        {/* Highlighted Path */}
                        <motion.path
                            d="M 100 0 Q 100 50, 100 90"
                            stroke="url(#line-gradient-2)"
                            fill="none"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                        />
                         <defs>
                            <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#24D39A" />
                                <stop offset="100%" stopColor="#13B985" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-start gap-2">
                        <div className="size-7 flex-shrink-0 flex items-center justify-center rounded-full bg-primary"><Bot className="size-4 text-white"/></div>
                        <div className="px-4 py-2 bg-primary/10 rounded-xl">
                            <p className="text-xs text-primary-foreground font-medium">Annual or monthly?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Feature3 = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
                <h3 className="font-headline text-2xl font-semibold tracking-tight text-foreground">
                    Built on the channel people trust the most
                </h3>
                <p className="mt-3 text-base text-foreground/70 max-w-md">
                    WhatsApp gets faster, more honest replies than LinkedIn or email. Celly turns this trust into a real advantage — more responses, better conversations, higher conversions.
                </p>
            </div>
             <div className="relative flex items-center justify-center min-h-[250px] overflow-hidden">
                {/* Sphere */}
                <motion.div 
                    className="absolute w-[400px] h-[400px] -bottom-48 bg-gradient-to-t from-primary/30 to-primary/10 rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                >
                     <div className="absolute inset-0 rounded-full opacity-5" style={{
                         backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
                     }}></div>
                </motion.div>
                
                {/* Benefit Cards */}
                <div className="relative z-10 w-full h-full">
                    <BenefitCard icon={Zap} text="Faster replies" className="absolute top-0 left-8" delay={0.4} />
                    <BenefitCard icon={MessageCircle} text="Honest conversations" className="absolute top-16 right-0" delay={0.6} />
                    <BenefitCard icon={TrendingUp} text="Higher conversions" className="absolute top-32 left-20" delay={0.8} />
                </div>
            </div>
        </div>
    );
};


const BenefitCard = ({ icon: Icon, text, className, delay }: { icon: React.ElementType, text: string, className?: string, delay: number }) => (
    <motion.div
        className={cn("flex items-center gap-3 p-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border-white/20", className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay }}
        viewport={{ once: true }}
    >
        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
            <Icon className="size-4 text-primary" />
        </div>
        <p className="font-medium text-foreground text-sm">{text}</p>
    </motion.div>
);
