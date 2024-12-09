import React from 'react';
import { TbMathGreater } from "react-icons/tb";
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function PriceSec() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col gap-4 sm:gap-6">
          {/* PRICING Title */}
          <h4 className={`${montserrat.className} text-[#737373] text-sm sm:text-base font-medium`}>
            PRICING
          </h4>
          {/* Main Title */}
          <h1 className={`${montserrat.className} text-[#252B42] text-4xl sm:text-5xl lg:text-6xl font-bold`}>
            Simple Pricing
          </h1>
          {/* Breadcrumb Navigation */}
          <div className="flex gap-2 sm:gap-3 items-center justify-center">
            <h3 className={`${montserrat.className} text-[#252B42] text-sm sm:text-base font-medium`}>
              Home
            </h3>
            <i className="text-[#737373] text-sm sm:text-base">
              <TbMathGreater />
            </i>
            <h5 className={`${montserrat.className} text-[#737373] text-sm sm:text-base`}>
              Pricing
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
