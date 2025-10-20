import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Inter } from "next/font/google";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
});
export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.className} dark relative flex min-h-screen flex-col`}
    >
      <Header />
      <main className="mb-12 flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
