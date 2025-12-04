
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { Badge } from '../ui/badge';
import { MessageCircle, Zap, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WhySallySection() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div 
            className="absolute inset-0 -z-10"
            style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(223, 243, 234, 0.4), transparent 40%), radial-gradient(circle at 20% 70%, rgba(223, 243, 234, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(215, 251, 233, 0.3), transparent 40%)',
                opacity: 0.8,
            }}
        />
        <div 
            className="absolute inset-0 -z-20 bg-[radial-gradient(white,white)] opacity-50"
            style={{
                maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0,0,0)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
                maskSize: '2rem',
                maskRepeat: 'repeat',
            }}
        />

      <div className="container mx-auto px-6 text-center">
        <Badge variant="secondary" className="mb-4 text-primary/80 bg-primary/10 border-primary/20">
            Why Sally
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl font-medium text-foreground tracking-tighter">
            Conversations that feel natural, at scale.
        </h2>
      </div>

      <div className="container mx-auto px-6 mt-24 space-y-32">
        <Block1 />
        <Block2 />
        <Block3 />
      </div>
    </section>
  );
}

const Block1 = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0.5, 1]);
    const y = useTransform(scrollYProgress, [0.1, 0.4], ["20px", "0px"]);
    
    return (
        <motion.div ref={targetRef} style={{ scale, opacity, y }} className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
                <h3 className="font-headline text-3xl font-medium text-foreground tracking-tight">Get personalised conversations started — instantly.</h3>
                <p className="mt-4 text-lg text-muted-foreground/80 leading-relaxed">Sally identifies the right moment and the right message to engage leads, turning cold lists into warm dialogues without you lifting a finger.</p>
            </div>
            <div className="relative h-80 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-2xl"></div>
                <motion.div className="relative">
                    {/* Floating Bubbles */}
                    <Bubble text="Hey! Saw you at..." style={{ top: '-20%', left: '10%', animationDelay: '0s' }} />
                    <Bubble text="Great to connect!" style={{ top: '50%', left: '-10%', animationDelay: '0.5s' }} />
                    <Bubble text="Wanted to pick up that thread again…" style={{ top: '20%', left: '60%', animationDelay: '1s', maxWidth: '180px' }} />
                    <Bubble text="Following up on our chat..." style={{ top: '70%', left: '30%', animationDelay: '1.5s' }} />
                </motion.div>
            </div>
        </motion.div>
    )
}

const Bubble = ({ text, style }: { text: string; style: React.CSSProperties }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="absolute p-3 bg-white/60 rounded-xl shadow-soft-glow border border-white/50 backdrop-blur-sm"
        style={style}
    >
        <p className="text-sm text-foreground/80">{text}</p>
    </motion.div>
);


const Block2 = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });
    
    const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0.6, 1]);

    return (
        <motion.div ref={targetRef} style={{ scale, opacity }} className="text-center max-w-3xl mx-auto">
            <h3 className="font-headline text-3xl font-medium text-foreground tracking-tight">It understands every reply and drives the conversation for you.</h3>
            <p className="mt-4 text-lg text-muted-foreground/80 leading-relaxed">Sally doesn’t follow a script. She listens, understands intent, and navigates conversations with adaptive intelligence to guide them toward your goals.</p>

            <div className="relative mt-12 h-[300px] flex justify-center items-center">
                <div 
                    className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white to-transparent"
                    style={{
                        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
                    }}
                />

                <div className="w-full">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white rounded-lg shadow-md border"><p className="text-sm text-foreground">Hey! Quick question—do you still...</p></div>
                    </div>
                    <div className="relative h-24 w-full">
                        {/* Branching Paths */}
                        <BranchingLine delay={0} highlight={false} rotation={-40} />
                        <BranchingLine delay={0.2} highlight={false} rotation={-15} />
                        <BranchingLine delay={0.4} highlight={true} rotation={10} />
                        <BranchingLine delay={0.6} highlight={false} rotation={35} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const BranchingLine = ({ delay, highlight, rotation }: { delay: number, highlight: boolean, rotation: number }) => (
    <motion.div 
        className="absolute bottom-0 left-1/2 w-px h-24 origin-top"
        style={{ rotate: `${rotation}deg`}}
        initial={{ height: 0 }}
        whileInView={{ height: '96px' }}
        transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
        <div className={cn("w-full h-full", highlight ? 'bg-primary' : 'bg-gray-200')} />
        <motion.div
            className="absolute -top-1 left-1/2 -translate-x-1/2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: delay + 0.8 }}
        >
            <div className={cn("size-2 rounded-full", highlight ? 'bg-primary' : 'bg-gray-300')} />
        </motion.div>
    </motion.div>
)

const Block3 = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0.5, 1]);
    const y = useTransform(scrollYProgress, [0.1, 0.4], ["-20px", "0px"]);

    return (
        <motion.div ref={targetRef} style={{ scale, opacity, y }} className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative h-80 flex items-center justify-center order-last lg:order-first">
                <div className="absolute w-[400px] h-[400px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full -bottom-1/2 blur-2xl"></div>
                
                <div className="relative space-y-4">
                    <StatCard icon={<Zap className="size-5 text-primary" />} text="Faster replies" delay={0} />
                    <StatCard icon={<MessageCircle className="size-5 text-primary" />} text="More honest conversations" delay={0.2} />
                    <StatCard icon={<CheckCircle2 className="size-5 text-primary" />} text="Higher conversions" delay={0.4} />
                </div>
            </div>
            <div className="text-left">
                <h3 className="font-headline text-3xl font-medium text-foreground tracking-tight">Built on the channel people trust the most.</h3>
                <p className="mt-4 text-lg text-muted-foreground/80 leading-relaxed">Sally lives inside WhatsApp, turning the world's most-used messaging app into your most powerful sales channel. No new apps, no friction.</p>
            </div>
        </motion.div>
    )
}

const StatCard = ({ icon, text, delay }: { icon: React.ReactNode, text: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay }}
        className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl shadow-soft-glow border border-white/50 backdrop-blur-md w-64"
    >
        {icon}
        <p className="text-base font-medium text-foreground">{text}</p>
    </motion.div>
)
