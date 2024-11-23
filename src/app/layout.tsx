import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soniya Malviya",
  description: "Created by Soniya Malviya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <div className="relative w-full flex items-center justify-center bg-black">
      <Navbar/>
    </div>
    <div className="bg-black">
    {children}
    </div>
    </body>
    </html>
  );
}
