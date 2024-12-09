import React from 'react';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function AboutWork() {
  return (
    <div className="bg-cover bg-[#2A7CC7] h-[636px]" id='about-w'>
      <div className="max-w-[900px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center h-full gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-[45%]">
            <div className="flex flex-col gap-8">
              <h4 className={`${montserrat.className} text-[#ffffff] text-base font-medium mt-20 sm:mt-[180px]`}>
                WORK WITH US
              </h4>
              <h1 className={`${montserrat.className} text-[#ffffff] text-[32px] sm:text-[40px] font-bold`}>
                Now Let’s grow Yours
              </h1>
              <p className={`${montserrat.className} text-[#ffffff] text-lg sm:text-xl`}>
                The gradual accumulation of information about atomic and <br />
                small-scale behavior during the first quarter of the 20th
              </p>
              <button
                className={`${montserrat.className} bg-[#2A7CC7] text-white text-sm sm:text-base font-medium py-2 px-4 rounded w-1/3 sm:w-1/2 border border-solid border-[#ffffff]`}
              >
                BUTTON
              </button>
            </div>
          </div>
          {/* Optional Right Content (if needed for desktop or larger screens) */}
          <div className="hidden lg:block w-[45%]">
            {/* You can place any additional content here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
