import React from 'react';
import { Montserrat } from '@next/font/google';
import filter from './assets/filter.png';
import man2 from './assets/man2.png';
import woman from './assets/women.png';
import woman2 from './assets/women2.png';
import Image from 'next/image';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'], // Specify font weights
  subsets: ['latin'], // Specify character subsets
});

export default function Editor() {
  return (
    <div className="py-16 bg-[#fafafa]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className={`text-2xl lg:text-4xl text-[#252B42] font-bold mb-4 ${montserrat.className}`}>
            EDITOR&#39;S PICK
          </h1>
          <p className={`text-sm lg:text-base text-[#737373] ${montserrat.className}`}>
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {/* Content 1 */}
          <div className="relative w-full h-[300px]">
            <Image
              src={filter}
              alt="Filter"
              className="w-full h-full object-cover rounded-lg '"
            />
            <p
              className={`absolute bottom-4 left-4 text-sm lg:text-base text-[#252B42] bg-white py-1 px-6 ${montserrat.className}`}
            >
              MEN
            </p>
          </div>

          {/* Content 2 */}
          <div className="relative w-full h-[300px]">
            <Image
              src={woman}
              alt="Woman"
              className="w-full h-full object-cover rounded-lg"
            />
            <p
              className={`absolute bottom-4 left-4 text-sm lg:text-base text-[#252B42] bg-white py-1 px-6 ${montserrat.className}`}
            >
              WOMEN
            </p>
          </div>

          {/* Content 3 (Grid within the third column) */}
          <div className="lg:col-span-1 grid grid-cols-1 gap-6">
            {/* Nested grid for Content 3 and Content 4 */}
            <div className="relative w-full h-[140px]">
              <Image
                src={woman2}
                alt="Woman2"
                className="w-full h-full object-cover rounded-lg"
              />
              <p
                className={`absolute bottom-4 left-4 text-sm lg:text-base text-[#252B42] bg-white py-1 px-6 ${montserrat.className}`}
              >
                WOMEN
              </p>
            </div>
            <div className="relative w-full h-[140px] ">
              <Image
                src={man2}
                alt="Man2"
                className="w-full h-full object-cover rounded-lg"
              />
              <p
                className={`absolute bottom-4 left-4 text-sm lg:text-base text-[#252B42] bg-white py-1 px-6 ${montserrat.className} `}
              >
                MEN
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
