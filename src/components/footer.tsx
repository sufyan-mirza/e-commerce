import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'], // Specify font weights
  subsets: ['latin'],    // Specify character subsets
});

export default function Footer() {
  return (
    <div>
      {/* Footer Top */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 sm:px-12">
          <h1 className={`${montserrat.className} text-2xl font-bold text-[#252B42]`}>Bandage</h1>
          <div className="flex gap-3 text-[#23A6F0] text-lg">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* Footer Middle */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-between gap-12 px-6 sm:px-12 lg:flex-nowrap">
          {[ 
            {
              title: "Company Info",
              links: ["About Us", "Carrier", "We are hiring", "Blog"],
            },
            {
              title: "Legal",
              links: ["About Us", "Carrier", "We are hiring", "Blogs"],
            },
            {
              title: "Features",
              links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"],
            },
            {
              title: "Resources",
              links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
            },
          ].map((section, index) => (
            <div key={index} className="space-y-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
              <h1 className={`${montserrat.className} text-lg font-semibold text-[#252B42]`}>
                {section.title}
              </h1>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li
                    key={idx}
                    className={`${montserrat.className} text-sm text-[#737373] font-normal`}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Get In Touch Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
            <h1 className={`${montserrat.className} text-lg font-semibold text-[#252B42]`}>
              Get In Touch
            </h1>
            <div className="flex flex-wrap mb-4 sm:w-10/12">
              <input
                type="text"
                placeholder="Your email"
                className="flex-1 bg-gray-100 px-4 py-2 text-sm text-gray-600 w-full"
              />
              <button
                className={`${montserrat.className} bg-[#23A6F0] text-white px-4 py-2 font-small w-full sm:w-auto`}
              >
                Subscribe
              </button>
            </div>
            <p className={`${montserrat.className} text-sm text-[#737373]`}>Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-5xl mx-auto text-center px-6 sm:px-12">
          <p className={`${montserrat.className} text-sm text-[#737373] font-semibold`}>
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
