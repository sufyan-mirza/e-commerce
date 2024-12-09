import React from 'react';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function AboutSec() {
  return (
    <div
      className="bg-cover bg-white h-[500px] sm:h-[600px] md:h-[729px]" 
      id="about"
    >
      <div className="max-w-[900px] mx-auto px-4 md:px-8">
        <div className="md:w-[45%] w-full">
          <div className="flex flex-col gap-6 sm:gap-8">
            <h4
              className={`${montserrat.className} text-[#252B42] text-base font-medium mt-12 sm:mt-[100px]`}
            >
              ABOUT COMPANY
            </h4>
            <h1
              className={`${montserrat.className} text-[#252B42] text-3xl sm:text-5xl font-bold`}
            >
              ABOUT US
            </h1>
            <p className={`${montserrat.className} text-[#737373] text-base sm:text-lg`}>
              We know how large objects will act,
              <br />
              but things on a small scale
            </p>
            <button
              className={`${montserrat.className} bg-[#23A6F0] text-white text-sm font-medium py-2 px-4 rounded w-1/2 sm:w-1/3`}
            >
              Get Quote Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
