// components/NotFoundPage.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <Image src="/image/404.jpg" alt="404 Image" width={300} height={200} />
      <h1 className="s-title">Whoops...!</h1>
      <p>
        The page you're searching for seems to have shuffled itself into another deck.
      </p>
      <div className="w3-center">
        <Link href="" onClick={goBack} className="yes-button">Go back</Link>
        <Link href="https://subarnabhandari.com/">
          <a className="yes-button">Go back</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
