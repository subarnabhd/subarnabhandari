import React from 'react'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa6";
import Link from 'next/link';

const Copywrite = () => {
  return (
    <div className="text-xs border-t border-gray-900 color-white90">
      <div className="container py-5 flex text-center align-center m-auto items-center">
        <div className="flex items-center align-middle w-full">
          <p>
            Copyright © {new Date().getFullYear()},
            <a
              className="hover-color-white100"
              target="_blank"
              rel="noopener noreferrer"
              href="https://subarnabhandari.com/"
              aria-label="Subarna Bhandari Website"
            >
              &nbsp;Subarnabhandari.com.
            </a>
            &nbsp;All Rights Reserved.
          </p>
        </div>

        <Link href="/" className="flex text-center justify-content" aria-label="Subarna Bhandari Home">
          <Image src="/logo.svg" width={38} height={30} alt="Subarna Bhandari Logo" />
        </Link>

        <div className="flex items-center w-full justify-end">
          <p className="flex items-center">
            Made with&nbsp;<b><FaHeart aria-label="love" /></b>&nbsp;by&nbsp;<span>Subarna</span><strong>.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Copywrite
