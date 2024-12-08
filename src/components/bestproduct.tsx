import React from 'react';
import product1 from './assets/product1.png';
import product2 from './assets/product2.png';
import product3 from './assets/product3.png';
import product4 from './assets/product4.png';
import product5 from './assets/product5.png';
import product6 from './assets/product6.png';
import product7 from './assets/product7.png';
import product8 from './assets/product8.png';
import Image from 'next/image';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'], // Specify font weights
  subsets: ['latin'], // Specify character subsets
});

export default function Bestproduct() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-6">
          <h4 className={`text-gray-500 text-lg mb-2 ${montserrat.className}`}>Featured Products</h4>
          <h1 className={`text-[#252B42] text-2xl font-bold mb-2 ${montserrat.className}`}>
            BESTSELLER PRODUCTS
          </h1>
          <p className={`text-sm text-gray-500 ${montserrat.className}`}>
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {[product1, product2, product3, product4, product5, product6, product7, product8].map((product, index) => (
            <div key={index} className="w-full">
              <Image src={product} alt={`Product ${index + 1}`} className="w-full h-[250px] object-cover rounded-lg" />
              <div className="flex flex-col items-center justify-center gap-2 mt-4">
                <h1 className={`text-[#252B42] font-semibold text-base ${montserrat.className}`}>
                  Graphic Design
                </h1>
                <h4 className={`text-sm text-gray-500 font-medium ${montserrat.className}`}>
                  English Department
                </h4>
                <p className={`text-base font-medium text-gray-400 ${montserrat.className}`}>
                  $16.48<span className="text-[#23856D] ml-2">$6.48</span>
                </p>
                <div className="flex gap-1">
                  <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>
                  <div className="bg-[#23A6F0] w-4 h-4 rounded-full"></div>
                  <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>
                  <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
