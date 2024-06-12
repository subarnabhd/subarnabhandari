import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/style/blog.css";
import "/style/tools.css";
import "/style/globals.css";
import "/style/studio.css";
import { Providers } from "./providers";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Copywrite from "@/components/footer/Copywrite";

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
        <Providers>
        <Header/>
        {children}
        <Footer/>
        <Copywrite/>
        </Providers>
      </body>
    </html>
  );
}
