

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/style/contact.css";
import "/style/blog.css";
import "/style/home.css";
import "/style/link.css";
import "/style/portfolio.css";
import "/style/cv.css";
import "/style/header.css";
import "/style/globals.css";

const NotFoundPage = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <main className='flex flex-col text-center align-middle py-20 gap-5 justify-center items-center h-screen bg-black' >
      <div>
      <Image className='m-auto' src="/404.jpg" alt="404 Image" width={600} height={200} />
      <h1 className="text-4xl font-bold">Whoops...!</h1>
      <p className='color-white70 pt-4'>
        The page you're searching for seems to have shuffled itself into another deck.
      </p>
        <Link className='yes-button w-max m-auto block mt-6' href="/">subarnabhandari.com
        </Link>
        </div>
    </main>
  );
};

export default NotFoundPage;
