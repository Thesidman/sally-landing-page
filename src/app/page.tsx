import { Header } from '@/components/sally/header';
import { HeroSection } from '@/components/sally/hero-section';
import { HowSallyWorksSection } from '@/components/sally/how-sally-works-section';
import { WhySallySection } from '@/components/sally/why-sally-section';
import { Footer } from '@/components/sally/footer';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#F9FAF8]">
       <div className="absolute inset-0 -z-20 opacity-70"
        style={{
          background: 'radial-gradient(circle at 50% 0, hsl(155 60% 95% / 0.5), transparent 40%), radial-gradient(circle at 20% 90%, hsl(170 50% 94% / 0.4), transparent 50%), radial-gradient(circle at 80% 80%, hsl(145 55% 96% / 0.4), transparent 50%)'
        }}>
      </div>
      <div className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundSize: 'cover',
          opacity: 0.05,
        }}
      />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhySallySection />
        <HowSallyWorksSection />
      </main>
      <Footer />
    </div>
  );
}
