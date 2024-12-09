import React from 'react';
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function ContactBox() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-[900px] mx-auto px-4">
        {/* Title Section */}
        <div className="text-center flex flex-col items-center gap-2 mb-12">
          <h4 className={`${montserrat.className} text-[#252B42] text-sm font-medium`}>
            VISIT OUR OFFICE
          </h4>
          <h1 className={`${montserrat.className} text-[#252B42] text-2xl sm:text-3xl md:text-4xl font-bold`}>
            We help small businesses <br />
            with big ideas
          </h1>
        </div>
        {/* Contact Boxes */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Contact Box 1 */}
          <div className="bg-white p-8 text-center">
            <div className="flex flex-col gap-5 items-center">
              <CiLocationOn className="text-[#23A6F0] text-[40px]" />
              <p className={`${montserrat.className} text-[#737373] text-sm`}>
                georgia.young@example.com <br />
                georgia.young@ple.com
              </p>
              <h3 className={`${montserrat.className} text-[#252B42] text-base font-medium`}>
                Get Support
              </h3>
              <h4 className={`${montserrat.className} py-2 px-4 rounded-full border border-[#23A6F0] text-[#23A6F0] text-sm`}>
                Submit Request
              </h4>
            </div>
          </div>
          {/* Contact Box 2 */}
          <div className="bg-[#252B42] p-8 text-center">
            <div className="flex flex-col gap-5 items-center">
              <CiPhone className="text-[#23A6F0] text-[40px]" />
              <p className={`${montserrat.className} text-white text-sm`}>
                georgia.young@example.com <br />
                georgia.young@ple.com
              </p>
              <h3 className={`${montserrat.className} text-white text-base font-medium`}>
                Get Support
              </h3>
              <h4 className={`${montserrat.className} py-2 px-4 rounded-full border border-[#23A6F0] text-[#23A6F0] text-sm`}>
                Submit Request
              </h4>
            </div>
          </div>
          {/* Contact Box 3 */}
          <div className="bg-white p-8 text-center">
            <div className="flex flex-col gap-5 items-center">
              <CiMail className="text-[#23A6F0] text-[40px]" />
              <p className={`${montserrat.className} text-[#737373] text-sm`}>
                georgia.young@example.com <br />
                georgia.young@ple.com
              </p>
              <h3 className={`${montserrat.className} text-[#252B42] text-base font-medium`}>
                Get Support
              </h3>
              <h4 className={`${montserrat.className} py-2 px-4 rounded-full border border-[#23A6F0] text-[#23A6F0] text-sm`}>
                Submit Request
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
