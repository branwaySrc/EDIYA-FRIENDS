import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/globals/footer";
import { Gnb } from "@/components/globals/gnb";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ediya Ansan",
  description: "Ediya Ansan web experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Gnb />
        {children}
        <Footer />
      </body>
    </html>
  );
}
