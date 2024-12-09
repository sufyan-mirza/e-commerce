import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Trial() {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center gap-6">
          {/* Heading */}
          <h1
            className={`${montserrat.className} text-gray-800 text-3xl sm:text-4xl lg:text-5xl font-bold`}
          >
            Start your 14 days free trial
          </h1>
          
          {/* Description */}
          <p
            className={`${montserrat.className} text-gray-500 text-sm sm:text-base lg:text-lg text-center`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor <br />
            do met sent. RELIT official consequent.
          </p>
          
          {/* Button */}
          <button
            className={`${montserrat.className} bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md text-sm sm:text-base lg:text-lg`}
          >
            Try For Free
          </button>
          
          {/* Social Media Icons */}
          <div className="flex gap-4 text-blue-500 text-lg sm:text-xl lg:text-2xl">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}
