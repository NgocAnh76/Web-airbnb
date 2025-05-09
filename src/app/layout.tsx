import MainLayout from "@/layouts/main/MainLayout";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${roboto.variable} antialiased`}>
      <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
