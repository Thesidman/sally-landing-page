import { Header } from '@/components/sally/header';
import { HeroSection } from '@/components/sally/hero-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  );
}
