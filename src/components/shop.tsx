import React from 'react';
import Image from 'next/image';
import carditem from './assets/carditem.png';
import carditem2 from './assets/carditem2.png';
import carditem3 from './assets/carditem3.png';
import carditem5 from './assets/carditem5.png';
import { FaGreaterThan } from "react-icons/fa6";
import { MdOutlineViewSidebar } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'], // Specify font weights
  subsets: ['latin'],    // Specify character subsets
});

export default function ShopCard() {
  return (
    <div>
      {/* Shop Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-12">
          {/* Shop Title */}
          <div className="flex justify-between mb-10">
            <h1 className={`${montserrat.className} text-[#252B42] text-2xl font-bold`}>
              SHOP
            </h1>
            <div className="flex items-center gap-3">
              <h1 className={`${montserrat.className} text-[#252B42] text-sm font-medium`}>
                Home
              </h1>
              <i className="text-sm text-gray-500">
                <FaGreaterThan />
              </i>
              <h3 className={`${montserrat.className} text-sm text-gray-500`}>
                Shop
              </h3>
            </div>
          </div>

          {/* Shop Content */}
          <div className="flex flex-wrap gap-4">
            {[carditem, carditem2, carditem3, carditem, carditem5].map((image, idx) => (
              <div key={idx} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
                <Image
                  src={image}
                  alt={`Card item ${idx + 1}`}
                  width={50}
                  height={50}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shop Bottom Section */}
      <div className="bg-white py-4">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className={`${montserrat.className} text-sm text-gray-500 font-medium`}>
              Showing all 12 results
            </p>
            <div className="flex items-center gap-4">
              <p className={`${montserrat.className} text-sm text-gray-500`}>
                Views
              </p>
              <i className="p-2 border border-gray-400 text-gray-500">
                <MdOutlineViewSidebar />
              </i>
              <i className="p-2 border border-gray-400 text-gray-500">
                <FaBars />
              </i>
            </div>
            <div className="flex gap-4">
              <button className={`${montserrat.className} bg-gray-200 px-4 py-2 text-sm text-gray-500 rounded`}>
                Popularity
              </button>
              <button className={`${montserrat.className} bg-blue-500 px-4 py-2 text-sm text-white rounded`}>
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
