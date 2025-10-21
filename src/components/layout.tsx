import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Inter, PT_Sans_Caption } from "next/font/google";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable:"--font-inter"
});

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.className} dark relative flex min-h-screen flex-col`}
    >
      <Header />
      <main className="mb-12 flex flex-1 flex-col pt-20">{children}</main>
      <Footer />
    </div>
  );
}
