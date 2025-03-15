import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CategoryProvider } from "@/contexts/CategoryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ETECH Gaming Platform",
  description: "Play exclusive games and win big prizes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-tech-dark-blue`}>
        <CategoryProvider>
          <Header />
          {children}
          <div className="bg-tech-darker-blue py-10 md:py-[60px]">
            <div className="container mx-auto ">
              <Footer />
            </div>
          </div>
        </CategoryProvider>
      </body>
    </html>
  );
}
