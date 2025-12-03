import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const features = [
  {
    tag: "Compounding conversations",
    headline: "Conversations start compounding automatically.",
    explainer: "Every chat Sally touches becomes stored, understood, and reused. This turns daily messages into a compounding pipeline of insight and momentum.",
    visual: "Card1",
  },
  {
    tag: "Intelligence layer",
    headline: "Your personal intelligence layer for WhatsApp.",
    explainer: "Sally understands tone, intent, past context, objections, and preferences. She becomes smarter and more effective every day you use her.",
    visual: "Card2",
  },
  {
    tag: "Agentic goals",
    headline: "Navigate goals with agentic reasoning, not scripts.",
    explainer: "Give Sally a goal like “book a meeting” and she handles discovery, qualification, nurturing, and timing with human-level judgment.",
    visual: "Card3",
  },
  {
    tag: "Leverage vs headcount",
    headline: "A sales advantage that compounds faster than headcount.",
    explainer: "Instead of hiring more people to chase leads, Sally handles follow-ups, qualification, support, and re-engagement at scale without fatigue.",
    visual: "Card4",
  },
  {
    tag: "Full-stack execution",
    headline: "Full-stack execution across sales and support.",
    explainer: "From demo booking to issue resolution, Sally answers questions, shares resources, and manages workflows across the entire customer journey end-to-end.",
    visual: "Card5",
  },
  {
    tag: "Conversation builder",
    headline: "Sally builds conversations, not just replies.",
    explainer: "She drives dialogues: asks questions, uncovers intent, probes needs, resolves blocks, and guides chats toward outcomes with natural pacing.",
    visual: "Card6",
  },
];


export function WhySallySection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge 
            className="mb-4 text-sm font-medium" 
            style={{
              backgroundColor: '#E9FDF0',
              color: '#2F9E5A',
              border: '1px solid rgba(47, 158, 90, 0.1)',
            }}
          >
            Why Sally
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl font-semibold text-foreground tracking-tighter" style={{color: '#0D1412'}}>
            Why Sally gives you unfair leverage.
          </h2>
          <p className="mt-3 text-lg text-muted-foreground" style={{color: '#6B6F72'}}>
            Sally turns WhatsApp into a compounding engine your competitors simply don’t have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
                <FeatureCard key={feature.tag} feature={feature} />
            ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => (
  <div 
    className="p-8 flex flex-col rounded-3xl"
    style={{
      backgroundColor: '#FFFFFF',
      border: '1px solid #D8F5DE',
      boxShadow: '0px 8px 24px rgba(0, 180, 90, 0.06)',
    }}
  >
    <Badge 
      className="text-xs font-medium self-start"
      style={{
        backgroundColor: '#E9FDF0',
        color: '#2F9E5A',
      }}
    >
      {feature.tag}
    </Badge>
    <h3 className="font-headline text-xl font-semibold text-foreground mt-3 mb-2 tracking-tight" style={{color: '#0D1412'}}>
      {feature.headline}
    </h3>
    <p className="text-base text-muted-foreground/80 flex-grow" style={{color: '#6B6F72', lineHeight: 1.5}}>
      {feature.explainer}
    </p>
    <div className="mt-5">
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
        { name: "Ankit", status: "Nurturing", color: "accent" as const, avatarSeed: "10" },
        { name: "Sarah L.", status: "Booked", color: "primary-ghost" as const, avatarSeed: "11" },
        { name: "Michael P.", status: "Waiting", color: "outline" as const, avatarSeed: "12" },
        { name: "Jessica B.", status: "High intent", color: "destructive" as const, avatarSeed: "13" },
    ];
    return (
        <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
            <div className="space-y-3">
                {convos.map((c) => (
                    <div key={c.name} className="flex items-center">
                        <Avatar className="size-8 mr-3">
                            <AvatarImage src={`https://picsum.photos/seed/${c.avatarSeed}/32/32`} alt={c.name} />
                            <AvatarFallback>{c.name[0]}</AvatarFallback>
                        </Avatar>
                        <p className="text-sm font-medium text-foreground/90 flex-grow">{c.name}</p>
                        <Badge variant={c.color} className={cn("text-xs", {
                          'bg-yellow-100 text-yellow-800 border-yellow-200': c.status === 'Nurturing',
                          'bg-green-100 text-green-800 border-green-200': c.status === 'Booked',
                          'bg-gray-100 text-gray-800 border-gray-200': c.status === 'Waiting',
                          'bg-red-100 text-red-800 border-red-200': c.status === 'High intent',
                        })}>{c.status}</Badge>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Card2Visual = () => (
  <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 space-y-3">
    <div className="p-3 rounded-lg bg-white shadow-sm">
      <p className="text-sm text-foreground">Hey, can we look at pricing next week?</p>
    </div>
    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
      <p className="text-sm font-semibold text-primary/90">Key points detected:</p>
      <ul className="list-disc list-inside text-sm text-primary/80 mt-1 pl-1">
          <li>Pricing inquiry</li>
          <li>Timeline: next week</li>
      </ul>
    </div>
  </div>
);

const Card3Visual = () => {
    const steps = ["Qualify", "Understand", "Share proof", "Propose times"];
    return (
        <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
             <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-foreground">Active Goal:</p>
                <Badge variant="primary" className="bg-primary/90">Book Meeting</Badge>
            </div>
            <div className="flex items-center justify-between space-x-1.5">
                {steps.map((step, i) => (
                    <React.Fragment key={step}>
                        <div className={cn(
                            "flex-1 py-1 px-1.5 rounded-md text-center",
                            i <= 1 ? "bg-primary/20 text-primary-foreground" : "bg-gray-100 text-muted-foreground"
                        )}>
                            <p className="text-[11px] font-bold tracking-wide leading-tight">{step}</p>
                        </div>
                        {i < steps.length - 1 && <ArrowRight className="size-4 text-gray-300" />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

const Card4Visual = () => (
    <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 flex items-center gap-4">
        <div className="flex flex-col items-center gap-1.5">
            <div className="size-12 flex items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                <Sparkles className="size-6 text-primary" />
            </div>
            <p className="text-sm font-bold text-primary">SALLY</p>
        </div>
        <ArrowRight className="size-5 text-gray-300 flex-shrink-0" />
        <div className="flex-1 grid grid-cols-1 gap-2 text-left">
            <div className="bg-white p-2 rounded-md shadow-sm"><p className="text-xs font-medium text-foreground">Replies Sent</p></div>
            <div className="bg-white p-2 rounded-md shadow-sm"><p className="text-xs font-medium text-foreground">Meetings Booked</p></div>
            <div className="bg-white p-2 rounded-md shadow-sm"><p className="text-xs font-medium text-foreground">Follow-ups</p></div>
        </div>
    </div>
);

const Card5Visual = () => {
    const items = [
        { text: "Demo booking" },
        { text: "FAQ answered" },
        { text: "Trial extended" },
    ];
    return (
        <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
            <div className="flex gap-2 mb-3">
                <Badge variant="default" className="shadow-sm">Sales</Badge>
                <Badge variant="secondary">Follow-ups</Badge>
                <Badge variant="secondary">Support</Badge>
            </div>
            <div className="space-y-2">
                {items.map(item => (
                    <div key={item.text} className="flex items-center bg-white p-2.5 rounded-md shadow-sm text-sm">
                        <div className="size-5 flex items-center justify-center rounded-sm mr-3 bg-primary/20 text-primary">
                          <Check className="size-3.5" />
                        </div>
                        <p className="flex-grow font-medium text-foreground/90">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Card6Visual = () => (
    <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
        <div className="space-y-2">
            <div className="p-3 rounded-lg bg-white shadow-sm text-sm text-foreground max-w-[90%] self-start">What are you trying to accomplish?</div>
            <div className="flex justify-end">
                <p className="p-3 rounded-lg bg-white shadow-sm text-sm text-foreground max-w-[90%]">We need to scale our outbound sales.</p>
            </div>
            <div className="flex items-start gap-2">
                <div className="size-8 flex-shrink-0 flex items-center justify-center rounded-full bg-primary mt-1"><Sparkles className="size-4 text-white" /></div>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-sm text-primary-foreground max-w-[85%]">Got it. Should I book a demo slot for you?</div>
            </div>
        </div>
    </div>
);
