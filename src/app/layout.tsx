import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { Navbar, Footer } from '../components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Saiteja Thadisetty",
  description: "Saiteja Thadisetty's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
