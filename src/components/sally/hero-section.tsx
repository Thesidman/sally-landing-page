import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { SallyUICard } from '@/components/sally/sally-ui-card';
import { RotatingHeadline } from './rotating-headline';

export function HeroSection() {
  return (
    <section className="relative w-full h-full pt-40 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-gradient-to-r from-accent/50 to-secondary/50 rounded-full border border-primary/20">
          <Sparkles className="size-4 text-primary" />
          <span className="text-xs font-medium tracking-widest uppercase text-accent-foreground">
            NEW • WHATSAPP-NATIVE AI SALES AGENT
          </span>
        </div>

        <RotatingHeadline />

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground">
          You can’t be everywhere at once. Sally keeps your WhatsApp conversations moving and turns your time into outcomes.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Button
            size="lg"
            className="h-14 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-white to-secondary/70 text-foreground border border-primary/20 shadow-[0_8px_30px_hsl(var(--primary)/0.15)] hover:shadow-[0_10px_35px_hsl(var(--primary)/0.25)] hover:scale-105 transition-all duration-300 ease-in-out group"
          >
            Get early access
            <ArrowRight className="ml-2 size-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base font-semibold rounded-full bg-white/50 border-primary/30 text-muted-foreground backdrop-blur-sm hover:bg-white/80 hover:border-primary/50 group transition-all duration-300"
          >
            <Play className="mr-2 size-4 fill-foreground text-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110 group-hover:fill-primary" />
            Watch 90-second demo
          </Button>
        </div>

        <div className="mt-8 text-sm text-muted-foreground/70">
          Trusted by fast-growing SaaS and B2B teams
        </div>
      </div>

      <div className="relative mt-16 flex justify-center">
        <div className="absolute bottom-0 -z-10 w-[800px] h-[600px] bg-gradient-radial from-secondary via-accent/30 to-transparent blur-3xl opacity-60" />
        <SallyUICard />
      </div>
    </section>
  );
}
