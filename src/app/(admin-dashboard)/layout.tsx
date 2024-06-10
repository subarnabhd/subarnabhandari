import Sidenav from "@/components/dashboard/Sidenav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/style/dashboard.css";


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
        <div className="flex">
        <Sidenav/>
        <div className="w-full h-screen bg-neutral-4 p-5 gap-5 text-black">
        {children}

        </div>
        </div>
      </body>
    </html>
  );
}
