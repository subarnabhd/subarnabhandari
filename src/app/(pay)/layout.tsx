import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/style/pay.css";

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
        <div className="flex items-center h-screen">{children}</div>
      </body>
    </html>
  );
}
