'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Check, MessageCircle, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Dot = () => (
  <svg
    viewBox="0 0 8 8"
    fill="currentColor"
    className="size-2 text-primary/70"
  >
    <circle cx={4} cy={4} r={4} />
  </svg>
);

const FeatureCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <Card
    className={`relative rounded-3xl bg-white/50 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/80 backdrop-blur-lg ${className}`}
  >
    {children}
  </Card>
);

const SectionTag = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
    style={{
      background:
        'linear-gradient(to bottom, hsl(145 63% 49% / 0.05), hsl(145 63% 49% / 0.02))',
      boxShadow: '0 2px 8px rgba(0,0,0,0.03), inset 0 1px 1px #fff',
      border: '1px solid hsl(145 63% 49% / 0.1)',
    }}
  >
    <Dot />
    <span className="text-xs font-medium tracking-wide uppercase text-primary/80">
      Why Sally
    </span>
  </motion.div>
);

const Feature1 = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
    className="grid lg:grid-cols-2 gap-12 items-center"
  >
    <div className="text-left">
      <h3 className="font-headline text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
        Get personalised conversations started on WhatsApp instantly
      </h3>
      <p className="mt-4 text-lg text-muted-foreground/80 max-w-lg">
        Sally identifies the right moment to engage, starting warm, relevant
        conversations that feel human, not automated. It turns cold lists into
        active dialogues.
      </p>
    </div>
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative flex items-center justify-center min-h-[300px]"
    >
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="relative w-full max-w-sm">
        {/* Chat bubbles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute -top-12 -left-8 w-48 p-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white"
        >
          <p className="text-sm text-foreground/80">
            Hey! Saw you were checking out our new integration...
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute top-8 right-0 w-52 p-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white"
        >
          <p className="text-sm text-foreground/80">
            Great to connect. Wanted to pick up that thread from last week.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="absolute top-32 -left-16 w-44 p-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white"
        >
          <p className="text-sm text-foreground/80">
            Just following up on your trial, any questions?
          </p>
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
);

const Feature2 = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
    className="text-center flex flex-col items-center"
  >
    <h3 className="font-headline text-3xl md:text-4xl font-medium tracking-tighter text-foreground max-w-2xl">
      It understands every reply and drives the conversation for you
    </h3>
    <p className="mt-4 text-lg text-muted-foreground/80 max-w-xl">
      Sally doesn’t use scripts. It uses agentic reasoning to understand
      intent, handle objections, and navigate conversations toward a goal.
    </p>
    <div className="mt-12 w-full max-w-4xl relative min-h-[250px] flex justify-center">
      <div className="absolute inset-x-0 top-1/2 h-2/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>

      {/* User Bubble */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute top-0 p-3 bg-white rounded-t-xl rounded-br-xl shadow-md border border-gray-100 z-10"
      >
        <p className="text-sm text-foreground">
          Can you send over pricing for the Team plan?
        </p>
      </motion.div>

      {/* Branching paths */}
      <svg
        width="400"
        height="180"
        viewBox="0 0 400 180"
        className="absolute top-12 opacity-30"
      >
        {/* Ghosted paths */}
        <motion.path
          d="M 200 0 Q 80 50, 50 120"
          stroke="hsl(var(--border))"
          fill="none"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeInOut' }}
        />
        <motion.path
          d="M 200 0 Q 320 50, 350 120"
          stroke="hsl(var(--border))"
          fill="none"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeInOut' }}
        />

        {/* Highlighted path */}
        <motion.path
          d="M 200 0 Q 200 50, 200 120"
          stroke="hsl(var(--primary))"
          fill="none"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'circOut' }}
        />
      </svg>

      {/* Sally Reply Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-0 flex items-start gap-2 max-w-md"
      >
        <div className="size-8 flex-shrink-0 flex items-center justify-center rounded-full bg-primary">
          <Bot className="size-4 text-white" />
        </div>
        <div className="mt-1 p-3 bg-white rounded-t-xl rounded-bl-xl shadow-md border border-gray-100">
          <p className="text-sm text-foreground">
            Of course. Are you looking to pay annually for a discount?
          </p>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const Feature3 = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
    className="grid lg:grid-cols-2 gap-12 items-center"
  >
    <div className="relative order-2 lg:order-1 flex justify-center items-center min-h-[300px]">
      <div
        className="absolute w-[600px] h-[600px] -bottom-40 opacity-20"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--primary) / 0.2), transparent 60%)',
        }}
      ></div>
      <div className="absolute -bottom-48 w-full h-48 bg-gradient-to-t from-background to-transparent z-10"></div>
      <div className="relative z-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="absolute -top-12 left-0"
        >
          <FeatureCard className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="size-5 text-primary" />
            </div>
            <p className="font-medium text-foreground">Higher conversions</p>
          </FeatureCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="absolute top-12 -right-24"
        >
          <FeatureCard className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MessageCircle className="size-5 text-primary" />
            </div>
            <p className="font-medium text-foreground">Honest conversations</p>
          </FeatureCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="absolute top-36 -left-16"
        >
          <FeatureCard className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Check className="size-5 text-primary" />
            </div>
            <p className="font-medium text-foreground">Faster replies</p>
          </FeatureCard>
        </motion.div>
      </div>
    </div>
    <div className="text-left order-1 lg:order-2">
      <h3 className="font-headline text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
        Built on the channel people trust the most
      </h3>
      <p className="mt-4 text-lg text-muted-foreground/80 max-w-lg">
        Sally works inside WhatsApp, turning the world’s most popular messaging
        app into your most powerful sales channel. Meet customers where they
        are.
      </p>
    </div>
  </motion.div>
);

export function WhySallySection() {
  return (
    <section className="py-24 sm:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <SectionTag />
          <h2 className="mt-6 font-headline text-4xl md:text-5xl font-medium text-foreground tracking-tighter">
            Conversations that feel natural, at scale
          </h2>
          <p className="mt-4 text-lg text-muted-foreground/80">
            Sally turns WhatsApp into a compounding engine your competitors
            simply don’t have.
          </p>
        </div>

        <div className="mt-24 space-y-24 md:space-y-32">
          <Feature1 />
          <Feature2 />
          <Feature3 />
        </div>
      </div>
    </section>
  );
}
