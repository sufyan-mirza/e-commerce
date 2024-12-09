import React from "react";
import { TbMathGreater } from "react-icons/tb";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Faq() {
  return (
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1
            className={`${montserrat.className} text-gray-800 text-4xl font-bold mb-4`}
          >
            Pricing FAQs
          </h1>
          <p className="text-gray-500 text-base">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics
          </p>
        </div>

        {/* FAQ Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-start gap-4">
              <i className="text-blue-500 text-2xl">
                <TbMathGreater />
              </i>
              <div>
                <h1
                  className={`${montserrat.className} text-gray-800 text-lg font-medium`}
                >
                  The quick fox jumps over the lazy dog
                </h1>
                <p
                  className={`${montserrat.className} text-gray-500 text-base mt-1`}
                >
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
