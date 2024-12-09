import React from 'react';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function AboutNo() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-5 sm:gap-8 md:gap-2">
          {/* Card 1 */}
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-[21%]">
            <h1 className={`${montserrat.className} text-4xl sm:text-5xl font-bold text-[#252B42] mb-2`}>
              15K
            </h1>
            <p className={`${montserrat.className} text-[#737373] text-base font-medium`}>
              Happy Customers
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-[19%]">
            <h1 className={`${montserrat.className} text-4xl sm:text-5xl font-bold text-[#252B42] mb-2`}>
              150K
            </h1>
            <p className={`${montserrat.className} text-[#737373] text-base font-medium`}>
              Monthly Visitors
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-[25%]">
            <h1 className={`${montserrat.className} text-4xl sm:text-5xl font-bold text-[#252B42] mb-2`}>
              15
            </h1>
            <p className={`${montserrat.className} text-[#737373] text-base font-medium`}>
              Countries Worldwide
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-[18%]">
            <h1 className={`${montserrat.className} text-4xl sm:text-5xl font-bold text-[#252B42] mb-2`}>
              100+
            </h1>
            <p className={`${montserrat.className} text-[#737373] text-base font-medium`}>
              Top Partners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
