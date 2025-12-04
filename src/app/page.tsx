import { Header } from '@/components/sally/header';
import { HeroSection } from '@/components/sally/hero-section';
import { HowSallyWorksSection } from '@/components/sally/how-sally-works-section';
import { WhySallySection } from '@/components/sally/why-sally-section';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#F9FAF8]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhySallySection />
        <HowSallyWorksSection />
      </main>
    </div>
  );
}
