import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Circle } from 'lucide-react';

const navItems = ['Product', 'Playbooks', 'Pricing', 'Resources'];

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
            variant="ghost"
            asChild
            className="text-base font-medium text-muted-foreground hover:text-foreground"
          >
            <Link href="#">Log in</Link>
          </Button>
          <Button
            asChild
            className="font-semibold text-base rounded-full bg-foreground text-background hover:bg-foreground/80 shadow-lg shadow-gray-300/40 transition-all duration-300"
          >
            <Link href="#">Get early access</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
