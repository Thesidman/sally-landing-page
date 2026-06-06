import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Loop OS',
  description: 'Open-loop management. Every thread stays open until it hits a win condition or gets killed as a loss.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'Loop OS',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#080808',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{ minHeight: '100%' }}>{children}</body>
    </html>
  );
}
