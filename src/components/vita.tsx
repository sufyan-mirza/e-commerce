import React from 'react';
import Image from 'next/image';
import hero2 from './assets/shop-hero-2-png-picture-1.png';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'], // Specify font weights
  subsets: ['latin'], // Specify character subsets
});

export default function Vita() {
  return (
    <div className="bg-[#23856D] pt-[90px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-5 w-full">
          {/* Text Section */}
          <div className="w-full md:w-[45%]">
            <h4 className={`text-white text-[20px] mb-6 ${montserrat.className}`}>
              SUMMER 2020
            </h4>
            <h1 className={`text-white text-[32px] md:text-[58px] font-extrabold mb-6 ${montserrat.className}`}>
              Vita Classic Product
            </h1>
            <p className={`text-white text-sm mb-6 ${montserrat.className}`}>
              We know how large objects will act, We know how are objects will act, We know
            </p>
            <div className="flex gap-5 items-baseline">
              <p className={`text-white text-[24px] font-semibold flex items-center ${montserrat.className}`}>
                $16.48
              </p>
              <button
                className={`bg-[#2DC071] text-white text-[15px] font-semibold py-1 px-4 rounded ${montserrat.className}`}
              >
                ADD TO CART
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-[45%]">
            <Image
              src={hero2}
              alt="Product Image"
              width={400}
              height={400}
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
