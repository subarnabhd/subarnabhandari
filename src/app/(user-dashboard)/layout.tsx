import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/style/dashboard.css";
import Usersidebar from "@/components/user-dashboard/Usersidebar";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

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
        <Header />

        <main className="bg-neutral-5 py-5 ">
          <div className="flex container m-auto  overflow-hidden gap-5">
          <Usersidebar />
          <div className="h-max w-9/12 bg-white  border rounded-lg flex flex-col gap-5 overflow-hidden">
            {children}
          </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
