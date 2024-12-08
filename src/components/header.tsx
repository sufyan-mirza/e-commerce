import React from 'react';
import Link from 'next/link';
import { CiLogin, CiShoppingCart, CiSearch, CiHeart } from "react-icons/ci";
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function Header() {
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
            {['Home', 'Shop', 'About', 'Blog', 'Contact', 'Pages'].map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase()}`} className={`${montserrat.className} text-[#737373] text-sm font-medium text-center lg:text-left py-1`}>
                {item}
              </Link>
            ))}
          </nav>

          {/* Login and Icons */}
          <div className="flex items-center mt-3 lg:mt-0 space-x-3">
            <Link href="/login" className="flex items-center text-[#23A6F0] text-base p-1">
              <CiLogin />
              <span className={`${montserrat.className} text-[#23A6F0] text-sm ml-1`}>Login/Register</span>
            </Link>
            {[CiSearch, CiShoppingCart, CiHeart].map((Icon, index) => (
              <Link key={index} href="/" className="text-[#23A6F0] text-base flex items-center p-1">
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}