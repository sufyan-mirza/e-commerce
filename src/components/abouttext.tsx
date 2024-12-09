import React from 'react';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function AboutText() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-6 text-center md:text-left">
          <h1 className={`${montserrat.className} text-[#E74040] text-sm sm:text-base font-medium`}>
            Problems trying
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left Column */}
          <div className={`${montserrat.className} text-[#252B42] text-lg sm:text-xl md:text-2xl font-bold w-full md:w-[42%]`}>
            <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
          </div>
          {/* Right Column */}
          <div className={`${montserrat.className} text-[#737373] text-sm sm:text-base w-full md:w-[42%]`}>
            <p>
              Problems trying to resolve the conflict between the two major realms of Classical
              physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
