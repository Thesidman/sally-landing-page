import Link from 'next/link';
import { Button } from '@/components/ui/button';

const footerLinks = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Terms', href: '#' },
  { name: 'Privacy', href: '#' },
];

const SallyLogo = () => (
    <svg
      width="28"
      height="28"
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
  );
  

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <SallyLogo />
            <span className="font-headline text-2xl font-medium text-foreground">SALLY</span>
          </div>
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link href={link.href} key={link.name} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="text-center md:text-right">
             <p className="text-sm text-muted-foreground">
                Built by <a href="#" className="font-medium text-foreground hover:text-primary transition-colors">Siddharth Manjrekar</a>
             </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Sally. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
