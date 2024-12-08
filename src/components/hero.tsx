import React from 'react';
import { Montserrat } from '@next/font/google';
import './assets/shop-hero-1-product-slide-1.jpg'
const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'], // Specify font weights
  subsets: ['latin'], // Specify character subsets
});

export default function Hero() {
  return (
    <div 
      className="h-[700px] bg-cover bg-center sm:bg-[center]]" 
      id="header"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="flex items-center h-full">
          <div className="grid space-y-4 sm:space-y-6 mt-[100px] sm:mt-[180px] text-center sm:text-left">
            <h4 className={`${montserrat.className} text-white text-sm sm:text-base font-semibold`}>
              SUMMER 2020
            </h4>
            <h1 className={`${montserrat.className} text-white text-3xl sm:text-[48px] lg:text-[58px] font-bold`}>
              NEW COLLECTION
            </h1>
            <p className={`${montserrat.className} text-[#FAFAFA] text-sm sm:text-lg font-light`}>
              We know how large objects will act, <br /> but things on a small scale.
            </p>
            <div className="flex justify-center sm:justify-start">
              <button 
                className={`${montserrat.className} bg-[#2DC071] text-white text-sm sm:text-lg px-6 sm:w-1/3 h-[48px] sm:h-[62px]`}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
