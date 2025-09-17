import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "HomeBuzz - Furniture, Tools, Building Supplies & More",
  description: 'Your one-stop shop for furniture, tools, hardware, building supplies, and home improvement needs. Over 2 million items available with free delivery.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}