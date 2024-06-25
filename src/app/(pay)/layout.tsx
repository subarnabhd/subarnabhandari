import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/style/pay.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SubarnaPay",
  description: "Here to pay - Quick and easy.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-center h-screen m-auto ">{children}</div>
      </body>
    </html>
  );
}
