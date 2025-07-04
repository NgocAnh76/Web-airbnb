import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/layouts/client';
import LoadingProvider from '@/components/common/loading/loading-provider';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Capstone Airbnb',
  description: 'Capstone Airbnb',
  icons: {
    icon: '/logo.png',
  },
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
        <Suspense>
          <LoadingProvider>
            <ClientLayout>{children}</ClientLayout>
          </LoadingProvider>
        </Suspense>
      </body>
    </html>
  );
}
