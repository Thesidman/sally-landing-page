import React from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight, BrainCircuit, Check, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

const features = [
    {
      label: "Compounding conversations",
      headline: "Conversations start compounding automatically",
      explainer: "Every chat Sally touches becomes stored, understood, and reused. This turns daily messages into a compounding pipeline of insight and momentum.",
      visual: "Card1",
    },
    {
      label: "Intelligence layer",
      headline: "Your personal intelligence layer for WhatsApp",
      explainer: "Sally understands tone, intent, past context, objections, and preferences. She becomes smarter and more effective every day you use her.",
      visual: "Card2",
    },
    {
      label: "Agentic goals",
      headline: "Navigate goals with agentic reasoning, not scripts",
      explainer: "Give Sally a goal like “book a meeting” and she handles discovery, qualification, nurturing, and timing with human-level judgment.",
      visual: "Card3",
    },
    {
        label: "Leverage vs headcount",
        headline: "A sales advantage that compounds faster than headcount",
        explainer: "Instead of hiring more people to chase leads, Sally handles follow-ups, qualification, support, and re-engagement at scale without fatigue.",
        visual: "Card4",
    },
    {
        label: "Full-stack execution",
        headline: "Full stack execution across sales and support",
        explainer: "From demo booking to issue resolution, Sally answers questions, shares resources, and manages workflows across the entire customer journey end-to-end.",
        visual: "Card5",
    },
    {
        label: "Conversation builder",
        headline: "Sally builds conversations, not just replies",
        explainer: "She drives dialogues: asks questions, uncovers intent, probes needs, resolves blocks, and guides chats toward outcomes with natural pacing.",
        visual: "Card6",
    },
];

export function WhySallySection() {
  return (
    <section className="py-20 sm:py-32 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-3 text-sm font-medium text-green-700 bg-green-100/70 border border-green-200/80 rounded-full px-4 py-1.5">
            Why Sally
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl font-medium text-foreground tracking-tighter mt-4">
            Why Sally gives you unfair leverage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sally turns WhatsApp into a compounding engine your competitors simply don’t have.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
                <FeatureCard key={feature.label} feature={feature} />
            ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => (
  <div 
    key={feature.label}
    className="p-8 rounded-3xl bg-white border border-green-200/50 shadow-[0_8px_24px_rgba(0,180,90,0.06)] flex flex-col"
  >
    <Badge 
      variant="outline"
      className="text-xs font-semibold self-start bg-green-100/50 border-green-200/70 text-green-700 rounded-full px-3 py-1"
    >
      {feature.label}
    </Badge>
    <h3 className="font-headline text-xl font-semibold text-gray-900 mt-4 mb-2 tracking-tight">
      {feature.headline}
    </h3>
    <p className="text-base text-gray-500/90 flex-grow leading-relaxed">
      {feature.explainer}
    </p>
    <div className="mt-6 -mx-2">
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
        { name: "Ankit", status: "Nurturing", color: "accent" as const, avatarSeed: "10", hint: "man" },
        { name: "Sarah L.", status: "Booked", color: "primary-ghost" as const, avatarSeed: "11", hint: "woman" },
        { name: "Michael P.", status: "Waiting", color: "outline" as const, avatarSeed: "12", hint: "man" },
        { name: "Jessica B.", status: "High intent", color: "destructive" as const, avatarSeed: "13", hint: "woman" },
    ];
    return (
        <div className="bg-gray-50/70 p-3 rounded-xl border border-gray-200/80">
            <div className="space-y-2">
                {convos.map((c) => (
                    <div key={c.name} className="flex items-center bg-white p-2 rounded-lg shadow-sm">
                        <Image width={24} height={24} src={`https://picsum.photos/seed/${c.avatarSeed}/24/24`} alt={c.name} className="rounded-full mr-2" data-ai-hint={c.hint} />
                        <p className="text-sm font-medium text-gray-800 flex-grow">{c.name}</p>
                        <Badge variant={c.color} className="text-xs">{c.status}</Badge>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Card2Visual = () => (
    <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-200/80 relative overflow-hidden">
        <div className="p-2 rounded-lg bg-white shadow-sm mb-2 border border-gray-200/80">
            <p className="text-sm text-gray-600">Hey, can we look at pricing next week?</p>
        </div>
        <div className="p-3 rounded-lg bg-green-50 border border-green-200/80 shadow-sm">
            <p className="text-sm text-green-800 font-medium">Key points detected:</p>
            <ul className="list-disc list-inside text-sm text-green-700/90 mt-1 pl-1">
                <li>Pricing inquiry</li>
                <li>Timeline: next week</li>
            </ul>
        </div>
    </div>
);

const Card3Visual = () => {
    const steps = ["Qualify", "Understand", "Share proof", "Propose times"];
    return (
        <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-200/80">
             <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-gray-800">Active Goal:</p>
                <Badge variant="primary" className="bg-primary/90 text-white">Book Meeting</Badge>
            </div>
            <div className="flex items-center justify-between space-x-1.5">
                {steps.map((step, i) => (
                    <React.Fragment key={step}>
                        <div className={cn(
                            "flex-1 py-1.5 px-1 rounded-md text-center",
                            i <= 1 ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-500"
                        )}>
                            <p className="text-xs font-bold tracking-wide leading-tight">{step}</p>
                        </div>
                        {i < steps.length - 1 && <ArrowRight className="size-4 text-gray-300" />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

const Card4Visual = () => (
    <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-200/80 flex items-center gap-4">
        <div className="flex flex-col items-center gap-1.5">
            <div className="size-12 flex items-center justify-center rounded-full bg-green-100 border border-green-200/80">
                <Sparkles className="size-6 text-green-600" />
            </div>
            <p className="text-sm font-bold text-green-700">SALLY</p>
        </div>
        <ArrowRight className="size-5 text-gray-300 flex-shrink-0" />
        <div className="flex-1 grid grid-cols-2 gap-2 text-center">
            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200/50"><p className="text-xs font-medium text-gray-700">Replies Sent</p></div>
            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200/50"><p className="text-xs font-medium text-gray-700">Meetings Booked</p></div>
            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200/50"><p className="text-xs font-medium text-gray-700">Issues Resolved</p></div>
            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200/50"><p className="text-xs font-medium text-gray-700">Follow-ups</p></div>
        </div>
    </div>
);

const Card5Visual = () => {
    const items = [
        { text: "Demo booking", status: "Done", icon: <Check className="size-4" /> },
        { text: "FAQ answered", status: "Done", icon: <Check className="size-4" /> },
        { text: "Trial extended", status: "Running", icon: <Zap className="size-4" /> },
    ];
    return (
        <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-200/80">
            <div className="flex gap-2 mb-3">
                <Badge variant="default" className="shadow-sm">Sales</Badge>
                <Badge variant="secondary">Follow-ups</Badge>
                <Badge variant="secondary">Support</Badge>
            </div>
            <div className="space-y-2">
                {items.map(item => (
                    <div key={item.text} className="flex items-center bg-white p-2 rounded-lg shadow-sm text-sm border border-gray-200/60">
                        <div className={cn("size-6 flex items-center justify-center rounded-md mr-3",
                          item.status === 'Done' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-700'
                        )}>
                          {item.icon}
                        </div>
                        <p className="flex-grow font-medium text-gray-800">{item.text}</p>
                        <p className={cn("font-medium", item.status === 'Done' ? 'text-green-600' : 'text-amber-700')}>{item.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Card6Visual = () => (
    <div className="bg-gray-50/70 p-4 rounded-xl border border-gray-200/80">
        <div className="space-y-2.5">
            <div className="p-2.5 rounded-lg bg-white shadow-sm text-sm text-gray-800 max-w-[85%] self-start border border-gray-200/60">What are you trying to accomplish?</div>
            <div className="flex justify-end">
                <p className="p-2.5 rounded-lg bg-white shadow-sm text-sm text-gray-800 max-w-[85%] border border-gray-200/60">We need to scale our outbound sales.</p>
            </div>
            <div className="flex items-start gap-3">
                <div className="size-8 flex-shrink-0 flex items-center justify-center rounded-full bg-primary mt-1 shadow-sm">
                    <Sparkles className="size-4 text-white" />
                </div>
                <div className="p-2.5 rounded-lg bg-green-100/70 border border-green-200/80 text-sm text-green-900 max-w-[85%]">Got it. Should I book a demo slot for you?</div>
            </div>
        </div>
    </div>
);
