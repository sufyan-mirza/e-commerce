import React from 'react';
import { CiPhone, CiMail } from "react-icons/ci";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Topbar2() {
  return (
    <div className="bg-[#23856D] py-2 hidden lg:block">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center space-x-2">
            <i className="text-white text-base flex items-center">
              <CiPhone />
            </i>
            <h1 className={`${montserrat.className} text-white text-sm`}>
              (225)-555-018
            </h1>
            <i className="text-white text-base flex items-center">
              <CiMail />
            </i>
            <p className={`${montserrat.className} text-white text-sm`}>
              michel.river@gmail.com
            </p>
          </div>

          {/* Promotion */}
          <div>
            <p className={`${montserrat.className} text-white text-sm`}>
              Follow Us and get a chance to win 80% off
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <h1 className={`${montserrat.className} text-white text-sm`}>
              Follow us:
            </h1>
            <i className="text-white text-sm p-1">
              <FaInstagram />
            </i>
            <i className="text-white text-sm p-1">
              <FaYoutube />
            </i>
            <i className="text-white text-sm p-1">
              <FaFacebook />
            </i>
            <i className="text-white text-sm p-1">
              <FaTwitter />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
