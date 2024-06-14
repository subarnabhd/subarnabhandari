

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <main className='flex flex-col text-center align-middle py-20 gap-5 justify-center items-center' >
      <Image className='m-auto' src="/404.jpg" alt="404 Image" width={400} height={200} />
      <h1 className="text-4xl font-bold">Whoops...!</h1>
      <p className='color-white70'>
        The page you're searching for seems to have shuffled itself into another deck.
      </p>
        <Link className='yes-button w-max m-auto' href="/">subarnabhandari.com
        </Link>
    </main>
  );
};

export default NotFoundPage;
