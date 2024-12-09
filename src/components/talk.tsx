import React from 'react';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function Talk() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-[900px] mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Small Heading */}
          <h4
            className={`${montserrat.className} text-[#252B42] text-sm sm:text-base font-medium`}
          >
            WE Can't WAIT TO MEET YOU
          </h4>

          {/* Main Heading */}
          <h1
            className={`${montserrat.className} text-[#252B42] text-3xl sm:text-4xl md:text-5xl font-bold`}
          >
            Let's Talk
          </h1>

          {/* Call-to-Action Button */}
          <h3
            className={`${montserrat.className} py-3 px-6 bg-[#23A6F0] text-white flex items-center rounded text-sm sm:text-base cursor-pointer`}
          >
            Try it free now
          </h3>
        </div>
      </div>
    </div>
  );
}
