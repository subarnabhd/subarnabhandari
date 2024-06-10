import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";





const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vhandar | Everything delivered in minutes",
  description: "Grocery App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
