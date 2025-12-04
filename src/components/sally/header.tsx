import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const navItems = ['Why Sally?', 'How it works?'];

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <path
              d="M10 14.5C10.5379 15.1111 11.2391 15.5 12 15.5C12.7609 15.5 13.4621 15.1111 14 14.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="9" cy="10" r="1" fill="white" />
            <circle cx="15" cy="10" r="1" fill="white" />
          </svg>
          <span className="font-headline text-3xl font-medium tracking-tight text-foreground">
            SALLY
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              href="#"
              key={item}
              className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="relative text-sm font-semibold rounded-full group transition-all duration-300 overflow-hidden px-5 py-2.5"
            style={{
              background: 'linear-gradient(to right, #25D366, #0FBF80)',
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2), inset 0 1px 2px rgba(255,255,255,0.25)',
              border: '1px solid rgba(0,0,0,0.08)'
            }}
          >
            <Link href="#">
              <span className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></span>
              <span className="relative z-10 text-black flex items-center">
                Get early access
                <span className="ml-2 size-5 flex items-center justify-center rounded-full bg-white/70">
                  <ArrowRight className="size-3 text-black transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </span>
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
