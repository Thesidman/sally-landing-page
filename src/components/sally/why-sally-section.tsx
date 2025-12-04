'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Check,
  MessageCircle,
  TrendingUp,
  Zap,
  Sparkles,
  BrainCircuit,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Zap,
    title: 'Get personalised conversations started on WhatsApp instantly',
    description:
      'Celly finds the right people in your groups and opens natural, human-sounding chats with them. No effort, no prep, no manual typing.',
    visual: 'constellation',
  },
  {
    icon: BrainCircuit,
    title: 'It understands every reply and drives the conversation for you',
    description:
      'Celly reads context, picks up intent, asks the right questions, qualifies people, and keeps the chat moving. No workflows. No templates. Just smart, adaptive conversations.',
    visual: 'tree',
  },
  {
    icon: Sparkles,
    title: 'Built on the channel people trust the most',
    description:
      'WhatsApp gets faster, more honest replies than LinkedIn or email. Celly turns this trust into a real advantage — more responses, better conversations, higher conversions.',
    visual: 'sphere',
  },
];

const SectionTag = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true }}
    className="relative inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold"
    style={{
      background: 'linear-gradient(to bottom, #F3FBF7, #FFFFFF)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
      border: '1px solid rgba(205, 239, 225, 0.25)',
    }}
  >
    <span
      className="size-1.5 rounded-full bg-[#36B57A]"
      style={{
        boxShadow: '0 0 4px 1px rgba(54, 181, 122, 0.5)',
      }}
    />
    <span
      className="font-medium tracking-widest text-black/80"
      style={{ fontVariant: 'small-caps' }}
    >
      WHY SALLY
    </span>
  </motion.div>
);

const WhatsAppBubble = ({
  className,
  text,
  isSally,
}: {
  className?: string;
  text: string;
  isSally?: boolean;
}) => (
  <div
    className={cn(
      'rounded-2xl p-3 text-sm shadow-md',
      isSally
        ? 'bg-gradient-to-br from-green-100 to-white text-green-900'
        : 'bg-white/80 text-gray-700',
      'backdrop-blur-sm border border-white/50',
      className
    )}
  >
    <p className="blur-[1px] opacity-70 select-none">{text}</p>
  </div>
);

const ConstellationVisual = () => {
  const [points, setPoints] = useState<Array<{ top: string; left: string }>>([]);

  useEffect(() => {
    setPoints(
      [...Array(15)].map(() => ({
        top: `${10 + Math.random() * 80}%`,
        left: `${10 + Math.random() * 80}%`,
      }))
    );
  }, []);

  return (
    <motion.div
      className="relative flex h-[400px] w-full items-center justify-center"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(227, 247, 238, 0.5), transparent 70%)',
        }}
      ></motion.div>

      {points.map((point, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-mint-400/50"
          style={{
            top: point.top,
            left: point.left,
          }}
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: [0, 1, 0],
              transition: {
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              },
            },
          }}
        ></motion.div>
      ))}

      <motion.div
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          animate: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.3, duration: 0.7, ease: 'easeOut' },
          },
        }}
        className="absolute"
      >
        <WhatsAppBubble
          className="w-48"
          text="Hey! Saw you were checking out..."
          isSally
        />
      </motion.div>
      <motion.div
        variants={{
          initial: { opacity: 0, x: -20 },
          animate: {
            opacity: 1,
            x: 0,
            transition: { delay: 0.6, duration: 0.7, ease: 'easeOut' },
          },
        }}
        className="absolute top-1/4 left-0"
      >
        <WhatsAppBubble className="w-40" text="Great to connect! I wanted to..." />
      </motion.div>
      <motion.div
        variants={{
          initial: { opacity: 0, x: 20 },
          animate: {
            opacity: 1,
            x: 0,
            transition: { delay: 0.8, duration: 0.7, ease: 'easeOut' },
          },
        }}
        className="absolute top-1/3 right-0"
      >
        <WhatsAppBubble
          className="w-36"
          text="Following up on our last chat..."
        />
      </motion.div>
      <motion.div
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: {
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 0.7, ease: 'easeOut' },
          },
        }}
        className="absolute bottom-1/4 left-1/4"
      >
        <WhatsAppBubble className="w-32" text="Any questions about the trial?" />
      </motion.div>
    </motion.div>
  );
};

const IntelligenceTreeVisual = () => (
  <div className="relative w-full max-w-2xl mx-auto h-[350px]">
    <div className="absolute top-0 left-1/2 -translate-x-1/2">
      <WhatsAppBubble
        className="w-64 !text-gray-800 !bg-white"
        text="Can you send over pricing for the team plan?"
      />
    </div>

    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 250"
      className="absolute top-12"
      fill="none"
    >
      <motion.path
        d="M 200 20 Q 80 100, 50 200"
        stroke="hsl(var(--border) / 0.3)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <motion.path
        d="M 200 20 Q 150 120, 150 220"
        stroke="hsl(var(--border) / 0.3)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <motion.path
        d="M 200 20 Q 320 100, 350 200"
        stroke="hsl(var(--border) / 0.3)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <motion.path
        d="M 200 20 Q 250 120, 250 220"
        stroke="hsl(var(--border) / 0.3)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />

      {/* Highlighted Path */}
      <motion.path
        d="M 200 20 Q 200 120, 200 230"
        stroke="url(#line-gradient)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#36B57A" />
          <stop offset="100%" stopColor="#19D76B" />
        </linearGradient>
      </defs>
    </svg>

    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
      <WhatsAppBubble
        className="w-80"
        isSally
        text="Of course. Are you looking to pay annually, or do you prefer monthly flexibility?"
      />
    </div>
  </div>
);

const TrustSphereVisual = () => (
  <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
    <motion.div
      className="absolute -bottom-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full"
      style={{
        background:
          'radial-gradient(circle, hsl(145, 60%, 50%), hsl(155, 70%, 40%))',
        filter: 'blur(10px)',
      }}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
    />
    <div className="absolute inset-0 bg-black/5" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
    }}></div>
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.7 }}
      viewport={{ once: true }}
      className="absolute top-16 left-8"
    >
      <Card className="flex items-center gap-3 p-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border-white/20">
        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
          <Zap className="size-4 text-primary" />
        </div>
        <p className="font-medium text-foreground">Faster replies</p>
      </Card>
    </motion.div>
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      viewport={{ once: true }}
      className="absolute top-1/2 right-8"
    >
      <Card className="flex items-center gap-3 p-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border-white/20">
        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
          <MessageCircle className="size-4 text-primary" />
        </div>
        <p className="font-medium text-foreground">Honest conversations</p>
      </Card>
    </motion.div>
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.7 }}
      viewport={{ once: true }}
      className="absolute bottom-16 left-1/4"
    >
      <Card className="flex items-center gap-3 p-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border-white/20">
        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
          <TrendingUp className="size-4 text-primary" />
        </div>
        <p className="font-medium text-foreground">Higher conversions</p>
      </Card>
    </motion.div>
  </div>
);

const FeatureScene = ({
  feature,
  layout,
}: {
  feature: (typeof features)[0];
  layout: 'left' | 'center' | 'right';
}) => {
  const isCenter = layout === 'center';
  const textOrder = layout === 'right' ? 'order-2' : 'order-1';
  const visualOrder = layout === 'right' ? 'order-1' : 'order-2';

  const renderVisual = () => {
    switch (feature.visual) {
      case 'constellation':
        return <ConstellationVisual />;
      case 'tree':
        return <IntelligenceTreeVisual />;
      case 'sphere':
        return <TrustSphereVisual />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn('w-full', {
        'grid grid-cols-1 items-center gap-16 md:grid-cols-2': !isCenter,
        'flex flex-col items-center text-center': isCenter,
      })}
    >
      <motion.div
        className={cn('flex flex-col', textOrder, {
          'items-center': isCenter,
        })}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="font-headline text-3xl md:text-4xl font-semibold leading-tight tracking-tighter text-foreground max-w-lg">
          {feature.title}
        </h3>
        <p
          className={cn('mt-4 max-w-md text-base md:text-lg text-foreground/70', {
            'mx-auto': isCenter,
          })}
        >
          {feature.description}
        </p>
      </motion.div>
      <div className={cn('relative mt-8 md:mt-0', visualOrder, {'w-full': isCenter})}>
        <div
          className={cn(
            'relative rounded-3xl bg-white/40 p-4 shadow-[0_16px_48px_rgba(0,0,0,0.06)] backdrop-blur-xl border border-white/50',
            {
                'mt-10': isCenter
            }
          )}
        >
          {renderVisual()}
        </div>
      </div>
    </div>
  );
};

export function WhySallySection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(145deg, #E3F7EE 0%, #F9FAF8 50%, #D8F4F4 100%)',
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 800 800\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
      <div className="absolute top-0 left-1/4 size-96 rounded-full bg-mint-200/10 blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-teal-200/10 blur-3xl translate-x-1/2"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <SectionTag />
          <h2 className="mt-6 font-headline text-4xl font-semibold tracking-tighter text-foreground md:text-5xl">
            Conversations that feel natural, at scale
          </h2>
          <p className="mt-4 max-w-xl text-lg text-foreground/70">
            Sally turns WhatsApp into a compounding engine your competitors
            simply don’t have.
          </p>
        </div>

        <div className="mt-24 space-y-24 md:mt-32 md:space-y-32">
          <FeatureScene feature={features[0]} layout="left" />
          <FeatureScene feature={features[1]} layout="center" />
          <FeatureScene feature={features[2]} layout="left" />
        </div>
      </div>
    </section>
  );
}
