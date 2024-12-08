import React from 'react';
import Image from 'next/image';
import hero3 from './assets/hero-cover-1.png';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'], // Specify font weights
  subsets: ['latin'], // Specify character subsets
});

export default function Neural() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Image Section */}
          <div className="w-full md:w-[45%]">
            <Image
              src={hero3}
              alt="Neural Cover"
              width={500}
              height={500}
              className="w-full object-cover rounded-lg"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-[45%] mt-6 md:mt-0">
            <h4 className={`text-[#BDBDBD] text-[16px] font-medium mb-6 ${montserrat.className}`}>
              SUMMER 2020
            </h4>
            <h1 className={`text-[#252B42] text-[32px] md:text-[40px] font-bold mb-6 ${montserrat.className}`}>
              Part of the Neural Universe
            </h1>
            <p className={`text-[#737373] text-[16px] md:text-[18px] mb-6 ${montserrat.className}`}>
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex gap-4">
              <button
                id="buy"
                className={`bg-[#2DC071] text-white text-[14px] md:text-[16px] px-4 py-2 rounded flex items-center ${montserrat.className}`}
              >
                BUY NOW
              </button>
              <button
                id="shop"
                className={`bg-white text-[#2DC071] text-[14px] md:text-[16px] px-4 py-2 rounded border border-[#2DC071] flex items-center ${montserrat.className}`}
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
