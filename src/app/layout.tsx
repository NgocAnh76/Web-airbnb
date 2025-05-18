import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/layouts/client';

export const metadata: Metadata = {
  title: 'Capstone Airbnb',
  description: 'Capstone Airbnb',
};

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
