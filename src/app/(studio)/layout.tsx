import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Copywrite from "@/components/footer/Copywrite";
import Studiofooter from "@/components/footer/Studiofooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subarna Bhandari",
  description: "Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Studiofooter />
        <Copywrite />
      </body>
    </html>
  );
}
