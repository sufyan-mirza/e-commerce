import React from 'react';
import Image from 'next/image';
import practice from './assets/practice.png';
import practice2 from './assets/practice2.png';
import practice3 from './assets/practice3.png';
import { CiClock1 } from "react-icons/ci";
import { FaComment } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";

import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'], // Specify font weights
  subsets: ['latin'],    // Specify character subsets
});

export default function Practice() {
  return (
    <div className="py-16 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className={`${montserrat.className} text-[#23A6F0] text-sm font-medium mb-4`}>Practice Advice</h4>
          <h1 className={`${montserrat.className} text-[#252B42] text-4xl font-bold mb-4`}>Featured Posts</h1>
          <p className={`${montserrat.className} text-sm text-[#737373]`}>
            Problems trying to resolve the conflict between <br/>the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {[practice, practice2, practice3].map((image, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg">
              <div className="relative mb-3">
                <Image src={image} alt={`Practice ${index}`} className="w-full h-56 object-cover rounded-t-lg" />
                <p className="absolute top-4 left-4 bg-[#E74040] text-white text-xs px-2 py-1 rounded">NEW</p>
              </div>
              <div className="p-4">
                <ul className="flex gap-3 mb-2 text-xs text-[#737373]">
                  <li className={`${montserrat.className} text-[#23A6F0]`}>google</li>
                  <li className={montserrat.className}>trending</li>
                  <li className={montserrat.className}>new</li>
                </ul>
                <h1 className={`${montserrat.className} text-[#252B42] text-lg mb-2`}>
                  Loudest à la Madison #1 (L'integral)
                </h1>
                <p className={`${montserrat.className} text-xs text-[#737373] mb-4`}>
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className="flex justify-between items-center mb-4 text-xs">
                  <div className="flex items-center gap-2">
                    <CiClock1 className="text-[#23A6F0]" />
                    <p className={montserrat.className}>12-APRIL-2024</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaComment className="text-[#23856D]" />
                    <p className={montserrat.className}>21 COMMENTS</p>
                  </div>
                </div>
                <div className="flex items-center text-sm font-medium ">
                  <h3 className={montserrat.className}>LEARN MORE</h3>
                  <FaGreaterThan className="ml-1 mt-0.5 text-[#23A6F0]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
