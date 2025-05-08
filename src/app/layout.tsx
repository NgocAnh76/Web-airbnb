import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/sections/header";
import MainLayout from "@/layouts/main/MainLayout";
const Roboto = Roboto_Mono({
  variable: "--font-roboto",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Capstone Airbnb",
  description: "Capstone Airbnb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Roboto.variable} antialiased`}>
      <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
