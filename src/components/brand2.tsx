import React from 'react';
import Image from 'next/image';
import brand1 from './assets/brand1.png';
import brand2 from './assets/brand2.png';
import brand3 from './assets/brand3.png';
import brand4 from './assets/brand4.png';
import brand5 from './assets/brand5.png';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function Brand2() {
  return (
    <div className="bg-[#fafafa] py-16">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-12">
        {/* Text Section */}
        <div className="text-center mb-12">
          <h1
            className={`${montserrat.className} text-[50px] font-bold text-[#252B42] mb-4`}
          >
            Big Companies Are Here
          </h1>
          <p
            className={`${montserrat.className} text-sm text-[#737373] leading-relaxed`}
          >
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics Newtonian mechanics
          </p>
        </div>
        {/* Brand Logos Section */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-6">
          <div className="flex justify-center items-center">
            <Image
              src={brand1}
              alt="Brand 1"
              className="w-16 sm:w-20 md:w-24 lg:w-32 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={brand2}
              alt="Brand 2"
              className="w-16 sm:w-20 md:w-24 lg:w-32 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={brand3}
              alt="Brand 3"
              className="w-16 sm:w-20 md:w-24 lg:w-32 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={brand4}
              alt="Brand 4"
              className="w-16 sm:w-20 md:w-24 lg:w-32 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={brand5}
              alt="Brand 5"
              className="w-16 sm:w-20 md:w-24 lg:w-32 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
