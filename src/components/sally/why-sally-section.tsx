import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, BotMessageSquare, BrainCircuit, Calendar, Check, GitBranch, MessageSquare, Mic, Scale, Send, Sparkles, Workflow, Zap } from "lucide-react";

const features = [
  {
    label: "Compounding conversations",
    headline: "Conversations start compounding automatically.",
    explainer: "Every chat Sally touches becomes stored, understood, and reused. This turns daily messages into a compounding pipeline of insight and momentum.",
    visual: "Card1",
  },
  {
    label: "Intelligence layer",
    headline: "Your personal intelligence layer for WhatsApp.",
    explainer: "Sally understands tone, intent, past context, objections, and preferences. She becomes smarter and more effective every day you use her.",
    visual: "Card2",
  },
  {
    label: "Agentic goals",
    headline: "Navigate goals with agentic reasoning, not scripts.",
    explainer: "Give Sally a goal like “book a meeting” and she handles discovery, qualification, nurturing, and timing with human-level judgment.",
    visual: "Card3",
  },
  {
    label: "Leverage vs headcount",
    headline: "A sales advantage that compounds faster than headcount.",
    explainer: "Instead of hiring more people to chase leads, Sally handles follow-ups, qualification, support, and re-engagement at scale without fatigue.",
    visual: "Card4",
  },
  {
    label: "Full-stack execution",
    headline: "Full-stack execution across sales and support.",
    explainer: "From demo booking to issue resolution, Sally answers questions, shares resources, and manages workflows across the entire customer journey end-to-end.",
    visual: "Card5",
  },
  {
    label: "Conversation builder",
    headline: "Sally builds conversations, not just replies.",
    explainer: "She drives dialogues: asks questions, uncovers intent, probes needs, resolves blocks, and guides chats toward outcomes with natural pacing.",
    visual: "Card6",
  },
];


export function WhySallySection() {
  return (
    <section className="py-20 sm:py-32 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-3 text-primary/80 bg-primary/10 border-primary/20">Why Sally</Badge>
          <h2 className="font-headline text-4xl md:text-5xl font-medium text-foreground tracking-tighter">
            Why Sally gives you unfair leverage.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sally turns WhatsApp into a compounding engine your competitors simply don’t have.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature) => (
                <FeatureCard key={feature.label} feature={feature} />
            ))}
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.slice(3).map((feature) => (
                <FeatureCard key={feature.label} feature={feature} />
            ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => (
  <div className="p-8 rounded-3xl bg-gradient-to-br from-white to-secondary/40 border border-primary/10 shadow-[0_0_40px_rgba(37,211,102,0.05)] hover:shadow-[0_0_60px_rgba(37,211,102,0.1)] transition-shadow duration-300 flex flex-col">
    <Badge variant="outline" className="text-xs font-semibold self-start bg-white/50 border-primary/20 text-primary">{feature.label}</Badge>
    <h3 className="font-headline text-xl font-medium text-foreground mt-3 mb-2 tracking-tight">
      {feature.headline}
    </h3>
    <p className="text-sm text-muted-foreground/80 flex-grow">
      {feature.explainer}
    </p>
    <div className="mt-6">
      {feature.visual === "Card1" && <Card1Visual />}
      {feature.visual === "Card2" && <Card2Visual />}
      {feature.visual === "Card3" && <Card3Visual />}
      {feature.visual === "Card4" && <Card4Visual />}
      {feature.visual === "Card5" && <Card5Visual />}
      {feature.visual === "Card6" && <Card6Visual />}
    </div>
  </div>
);


const Card1Visual = () => {
    const convos = [
        { name: "Ankit", status: "Nurturing", color: "accent" as const, time: "2m ago" },
        { name: "Sarah L.", status: "Booked", color: "primary-ghost" as const, time: "1h ago" },
        { name: "Michael P.", status: "Waiting", color: "outline" as const, time: "3h ago" },
        { name: "Jessica B.", status: "High intent", color: "destructive" as const, time: "1d ago" },
    ];
    return (
        <Card className="bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-inner-white border-white/50">
            <p className="text-sm font-medium text-foreground px-1 mb-2">Conversations</p>
            <div className="space-y-2">
                {convos.map((c, i) => (
                    <div key={i} className="flex items-center bg-white/80 p-2 rounded-md shadow-sm">
                        <Avatar className="size-6 mr-2">
                            <AvatarImage src={`https://picsum.photos/seed/${10+i}/24/24`} alt={c.name} />
                            <AvatarFallback>{c.name[0]}</AvatarFallback>
                        </Avatar>
                        <p className="text-sm font-medium text-foreground/90 flex-grow">{c.name}</p>
                        <Badge variant={c.color} className="text-xs mr-2">{c.status}</Badge>
                        <p className="text-xs text-muted-foreground/70">{c.time}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
};

const Card2Visual = () => (
  <Card className="bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-inner-white border-white/50 relative overflow-hidden">
    <div className="absolute top-4 right-4 z-0">
        <BrainCircuit className="size-16 text-primary/5 opacity-50 -rotate-12" />
    </div>
    <div className="relative z-10">
      <div className="p-2 rounded-lg bg-white shadow-sm mb-2">
        <p className="text-xs text-muted-foreground">Hey, can we look at pricing next week?</p>
      </div>
      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shadow-sm">
        <p className="text-xs text-primary-foreground font-medium">Key points detected:</p>
        <ul className="list-disc list-inside text-xs text-primary-foreground/80 mt-1">
            <li>Pricing inquiry</li>
            <li>Timeline: next week</li>
        </ul>
      </div>
    </div>
  </Card>
);

const Card3Visual = () => {
    const steps = ["Qualify", "Understand", "Share proof", "Propose times"];
    return (
        <Card className="bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-inner-white border-white/50">
             <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-foreground px-1">Active Goal:</p>
                <Badge variant="primary-ghost" className="bg-primary/80 text-white">Book Meeting</Badge>
            </div>
            <div className="flex items-center justify-between space-x-1">
                {steps.map((step, i) => (
                    <React.Fragment key={step}>
                        <div className={cn(
                            "flex-1 p-1.5 rounded-md text-center",
                            i <= 1 ? "bg-primary/20 text-primary-foreground" : "bg-gray-100 text-muted-foreground/80"
                        )}>
                            <p className="text-[10px] font-bold tracking-wide leading-tight">{step}</p>
                        </div>
                        {i < steps.length - 1 && <ArrowRight className="size-3 text-gray-300" />}
                    </React.Fragment>
                ))}
            </div>
        </Card>
    );
}

const Card4Visual = () => (
    <Card className="bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-inner-white border-white/50 flex items-center gap-4">
        <div className="flex flex-col items-center gap-1">
            <div className="size-10 flex items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                <Sparkles className="size-5 text-primary" />
            </div>
            <p className="text-xs font-bold text-primary">SALLY</p>
        </div>
        <ArrowRight className="size-5 text-gray-300 flex-shrink-0" />
        <div className="flex-1 grid grid-cols-2 gap-1.5 text-center">
            <div className="bg-white/80 p-1.5 rounded-md shadow-sm"><p className="text-[10px] font-medium text-foreground">Replies Sent</p></div>
            <div className="bg-white/80 p-1.5 rounded-md shadow-sm"><p className="text-[10px] font-medium text-foreground">Meetings Booked</p></div>
            <div className="bg-white/80 p-1.5 rounded-md shadow-sm"><p className="text-[10px] font-medium text-foreground">Issues Resolved</p></div>
            <div className="bg-white/80 p-1.5 rounded-md shadow-sm"><p className="text-[10px] font-medium text-foreground">Follow-ups</p></div>
        </div>
    </Card>
);

const Card5Visual = () => {
    const items = [
        { icon: <Calendar className="size-3"/>, text: "Demo booking", status: "Done" },
        { icon: <MessageSquare className="size-3"/>, text: "FAQ answered", status: "Done" },
        { icon: <Zap className="size-3"/>, text: "Trial extended", status: "Running" },
    ];
    return (
        <Card className="bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-inner-white border-white/50">
            <div className="flex gap-1 mb-2">
                <Badge variant="default" className="shadow-sm">Sales</Badge>
                <Badge variant="secondary">Follow-ups</Badge>
                <Badge variant="secondary">Support</Badge>
            </div>
            <div className="space-y-1.5">
                {items.map(item => (
                    <div key={item.text} className="flex items-center bg-white/80 p-1.5 rounded-md shadow-sm text-xs">
                        <div className={cn("size-5 flex items-center justify-center rounded-sm mr-2", item.status === "Done" ? "bg-primary/20 text-primary" : "bg-accent/80 text-accent-foreground")}>
                          {item.status === 'Done' ? <Check className="size-3" /> : item.icon}
                        </div>
                        <p className="flex-grow font-medium text-foreground/90">{item.text}</p>
                        <p className={cn(item.status === "Done" ? "text-primary" : "text-accent-foreground")}>{item.status}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
};

const Card6Visual = () => (
    <Card className="bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-inner-white border-white/50">
        <div className="space-y-2">
            <div className="p-2 rounded-lg bg-white shadow-sm text-xs text-foreground max-w-[80%] self-start">What are you trying to accomplish?</div>
            <div className="flex justify-end">
                <p className="p-2 rounded-lg bg-white shadow-sm text-xs text-foreground max-w-[80%]">We need to scale our outbound sales.</p>
            </div>
            <div className="flex items-start gap-2">
                <div className="size-6 flex-shrink-0 flex items-center justify-center rounded-full bg-primary mt-1"><Sparkles className="size-3 text-white" /></div>
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-xs text-primary-foreground max-w-[80%]">Got it. Should I book a demo slot for you?</div>
            </div>
        </div>
    </Card>
);
