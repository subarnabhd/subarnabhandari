import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/style/slider.css";
import "/style/contact.css";
import "/style/blog.css";
import "/style/home.css";
import "/style/link.css";
import "/style/portfolio.css";
import "/style/cv.css";
import "/style/header.css";
import "/style/tools.css";
import "/style/globals.css";
import "/style/studio.css";
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
