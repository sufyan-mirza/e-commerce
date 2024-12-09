import React from 'react';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function Member() {
  return (
    <div className="bg-[#fafafa] py-12">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center flex flex-col gap-6">
          <h1
            className={`${montserrat.className} text-[#252B42] text-3xl sm:text-4xl lg:text-5xl font-bold`}
          >
            Pricing
          </h1>
          <p
            className={`${montserrat.className} text-[#737373] text-sm sm:text-base lg:text-lg`}
          >
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Pricing Options */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center mt-6">
          <div className="flex gap-2 items-center">
            <h3
              className={`${montserrat.className} text-[#252B42] text-sm sm:text-base lg:text-lg font-medium`}
            >
              Monthly
            </h3>
            <p
              className={`${montserrat.className} text-[#23A6F0] text-xs sm:text-sm lg:text-base font-normal bg-[#B2E3FF] py-1 px-3 rounded-full`}
            >
              Save 15%
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h4
              className={`${montserrat.className} text-[#252B42] text-sm sm:text-base lg:text-lg font-medium`}
            >
              Yearly
            </h4>
            <p
              className={`${montserrat.className} text-[#23A6F0] text-xs sm:text-sm lg:text-base font-normal bg-[#B2E3FF] py-1 px-3 rounded-full`}
            >
              Save 25%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
