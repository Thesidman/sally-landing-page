import { BotMessageSquare, BrainCircuit, GitBranch, Repeat, Scaling, Workflow } from "lucide-react";

const features = [
  {
    icon: <Repeat className="size-8 text-primary" />,
    headline: "Conversations start compounding automatically.",
    explainer: "Every chat Sally touches becomes stored, understood, and reused — turning daily messages into a compounding pipeline of insight and momentum.",
  },
  {
    icon: <BrainCircuit className="size-8 text-primary" />,
    headline: "Your personal intelligence layer for WhatsApp.",
    explainer: "Sally understands tone, intent, past context, objections, and preferences — becoming smarter and more effective every day you use her.",
  },
  {
    icon: <GitBranch className="size-8 text-primary" />,
    headline: "Navigate goals with agentic reasoning, not scripts.",
    explainer: "Give Sally a goal like “book a meeting” and she handles discovery, qualification, nurturing, and timing with human-level judgment.",
  },
  {
    icon: <Scaling className="size-8 text-primary" />,
    headline: "A sales advantage that compounds faster than headcount.",
    explainer: "Instead of hiring more people to chase leads, Sally handles follow-ups, qualification, support, and re-engagement at scale without fatigue.",
  },
  {
    icon: <Workflow className="size-8 text-primary" />,
    headline: "Full-stack execution across sales and support.",
    explainer: "From demo booking to issue resolution, Sally answers questions, shares resources, and manages workflows across the entire customer journey end-to-end.",
  },
  {
    icon: <BotMessageSquare className="size-8 text-primary" />,
    headline: "Sally builds conversations, not just replies.",
    explainer: "She drives dialogues: asks questions, uncovers intent, probes needs, resolves blocks, and guides chats toward outcomes with natural pacing.",
  },
];

export function WhySallySection() {
  return (
    <section className="py-20 sm:py-32 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-medium text-foreground tracking-tighter">
            Why Sally gives you unfair leverage.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sally turns WhatsApp into a compounding engine your competitors simply don’t have.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FeatureCard feature={features[0]} />
            <FeatureCard feature={features[1]} />
            <FeatureCard feature={features[2]} />
          </div>
          
          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FeatureCard feature={features[3]} className="lg:col-span-1" />
            <FeatureCard feature={features[4]} className="lg:col-span-1" />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 gap-8">
            <FeatureCard feature={features[5]} className="lg:col-span-1" />
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ feature, className }: { feature: typeof features[0], className?: string }) => (
  <div className={`p-8 rounded-3xl bg-gradient-to-br from-white to-secondary/40 border border-primary/10 shadow-[0_0_40px_rgba(37,211,102,0.05)] hover:shadow-[0_0_60px_rgba(37,211,102,0.1)] transition-shadow duration-300 ${className}`}>
    <div className="flex flex-col items-start text-left">
      <div className="mb-3 flex items-center justify-center size-12 rounded-2xl bg-white border border-primary/20 shadow-sm">
        {feature.icon}
      </div>
      <h3 className="font-headline text-xl font-medium text-foreground mt-3 mb-2 tracking-tight">
        {feature.headline}
      </h3>
      <p className="text-base text-muted-foreground">
        {feature.explainer}
      </p>
    </div>
  </div>
);
