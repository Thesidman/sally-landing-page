import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { SallyUICard } from '@/components/sally/sally-ui-card';
import { RotatingHeadline } from './rotating-headline';

export function HeroSection() {
  return (
    <section className="relative w-full h-full pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-30 bg-[#F9FAF8]"></div>
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 30%, hsla(155, 60%, 95%, 0.4), transparent 70%)',
        }}
      ></div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230D1412\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -translate-x-1/2 -z-10 opacity-50"></div>
       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl translate-x-1/2 -z-10 opacity-50"></div>


      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 bg-gradient-to-r from-accent/50 to-secondary/50 rounded-full border border-primary/20">
          <Sparkles className="size-4 text-primary" />
          <span className="text-xs font-medium tracking-widest uppercase text-accent-foreground">
            NEW • WHATSAPP-NATIVE AI SALES AGENT
          </span>
        </div>

        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-medium text-foreground !leading-tight tracking-tighter max-w-4xl">
          <span className="font-normal">Sally</span>{' '}
          <span className="font-light text-foreground/80">gets you</span>{' '}
          <span
            className="font-semibold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent"
            style={{ fontSize: '1.05em' }}
          >
            more
          </span>
        </h1>

        <RotatingHeadline />

        <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
          You can’t be everywhere at once. Sally keeps your WhatsApp
          conversations moving and turns your time into outcomes.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <Button
            size="lg"
            className="relative h-14 px-6 text-base font-semibold rounded-full group transition-all duration-300 overflow-hidden"
            style={{
              background: 'linear-gradient(to right, #25D366, #0FBF80)',
              boxShadow:
                '0 6px 20px rgba(37, 211, 102, 0.25), inset 0 2px 4px rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></span>
            <span className="relative z-10 text-black flex items-center">
              Get early access
              <span className="ml-2 size-6 flex items-center justify-center rounded-full bg-white">
                <ArrowRight className="size-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base font-semibold rounded-full bg-white/50 border border-black/10 text-foreground/80 backdrop-blur-sm hover:bg-white/80 hover:border-primary/50 group transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Play className="mr-2 size-4 fill-foreground/80 text-foreground/80 transition-all duration-300 group-hover:text-primary group-hover:scale-110 group-hover:fill-primary" />
            How Sally works?
          </Button>
        </div>

        <div className="mt-4 text-sm text-muted-foreground/70">
          Trusted by fast-growing SaaS and B2B teams
        </div>
      </div>

      <div className="relative mt-16 flex justify-center">
        <SallyUICard />
      </div>
    </section>
  );
}
