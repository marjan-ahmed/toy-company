import type { Metadata } from "next";
import { Bubblegum_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bubblegum = Bubblegum_Sans({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  variable: '--font-bubblegum',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bubblegum.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
