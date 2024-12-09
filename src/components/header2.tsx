import React from 'react';
import Link from 'next/link';
import { CiLogin, CiShoppingCart, CiSearch, CiHeart } from "react-icons/ci";
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function Header2() {
  return (
    <header className="bg-white py-3">
      <div className="max-w-[1250px] mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between">
          {/* Title Section */}
          <div className="flex-shrink-0">
            <Link href="/" className={`${montserrat.className} text-[#252B42] text-2xl font-bold cursor-pointer`}>
              Bandage
            </Link>
          </div>

          {/* Navigation for Small Screens */}
          <nav className="w-full lg:w-auto mt-3 lg:mt-0 flex flex-col lg:flex-row lg:gap-4">
            <Link href="/" className={`${montserrat.className} text-[#737373] text-sm font-medium text-center lg:text-left py-1`}>Home</Link>
            <Link href="/shop" className={`${montserrat.className} text-[#737373] text-sm font-medium text-center lg:text-left py-1`}>Product</Link>
            <Link href="/price" className={`${montserrat.className} text-[#737373] text-sm font-medium text-center lg:text-left py-1`}>Pricing</Link>
            <Link href="/contact" className={`${montserrat.className} text-[#737373] text-sm font-medium text-center lg:text-left py-1`}>Contact</Link>
            
          </nav>

          {/* Login and Icons */}
          <div className="flex justify-center items-center mt-3 lg:mt-0 space-x-3">
            <Link href="/login" className="flex items-center text-[#23A6F0] text-base p-1">
              <span className={`${montserrat.className} text-[#23A6F0] text-sm ml-1`}>Login/Register</span>
            </Link>
            <Link href="/login" className="flex items-center text-[#23A6F0] text-base p-1">
              <span className={`${montserrat.className} text-[#ffffff] text-[10px] ml-1 p-1 rounded-sm bg-[#23A6F0]`}>Become a member</span>
            </Link>
            
          </div>
        </div>
      </div>
    </header>
  );
}