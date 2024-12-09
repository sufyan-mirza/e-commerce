import React from 'react';
import { Montserrat } from '@next/font/google';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function ContactSec() {
  return (
    <div
      className="bg-white bg-cover h-auto py-12 px-6 md:h-[500px] md:py-0"
      id="contact"
    >
      <div className="max-w-[900px] mx-auto">
        <div className="w-full md:w-[60%] lg:w-[45%] mx-auto md:mx-0">
          <div className="flex flex-col gap-5">
            <h3
              className={`${montserrat.className} text-[#252B42] text-sm font-medium mt-8 md:mt-[155px]`}
            >
              CONTACT US
            </h3>
            <h1
              className={`${montserrat.className} text-[#252B42] text-2xl md:text-4xl lg:text-[58px] font-bold`}
            >
              Get in touch today!
            </h1>
            <p
              className={`${montserrat.className} text-[#737373] text-sm md:text-base`}
            >
              We know how large objects will act, but things on a small scale.
            </p>
            <h4
              className={`${montserrat.className} text-[#252B42] text-sm font-semibold`}
            >
              Phone: +451 215 215
            </h4>
            <h4
              className={`${montserrat.className} text-[#252B42] text-sm font-semibold`}
            >
              Fax: +451 215 215
            </h4>
            <div className="flex gap-3 text-[#252B42] text-lg">
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
