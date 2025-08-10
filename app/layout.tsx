import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Primul Tău Short - Învață investițiile',
  description: 'Platforma educațională pentru investițiile pe termen scurt în România',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={plusJakarta.variable}>
      <body className="font-sans antialiased">
        <div className="bg-secondary/90 backdrop-blur-sm border-b border-white/10 overflow-hidden">
          <div className="h-12 flex items-center">
            <div className="flex items-center gap-8 whitespace-nowrap text-sm font-medium ticker-content">
              <span className="text-green-400">BRD +2.3%</span>
              <span className="text-red-400">SNG -1.1%</span>
              <span className="text-green-400">TLV +0.8%</span>
              <span className="text-green-400">EL +3.2%</span>
              <span className="text-red-400">SNP -0.5%</span>
              <span className="text-green-400">BVB +1.7%</span>
              <span className="text-green-400">TGN +2.1%</span>
              <span className="text-red-400">DIGI -0.3%</span>
            </div>
          </div>
        </div>
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
