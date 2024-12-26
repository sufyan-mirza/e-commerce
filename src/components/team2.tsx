import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import team1 from './assets/team1.jpg';
import team2 from './assets/team2.jpg';
import team3 from './assets/team3.jpg';

import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function AboutTeam() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-[900px] mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className={`${montserrat.className} text-[40px] font-bold text-[#252B42] mb-4`}>
            Meet Our Team
          </h1>
          <p className={`${montserrat.className} text-sm text-[#737373]`}>
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        {/* Team Section */}
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[23%]">
            <div className="w-[70%] mb-5">
              <Image
                src={team1}
                alt="Team Member 1"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1 className={`${montserrat.className} text-[16px] font-medium text-[#252B42]`}>
                Username
              </h1>
              <p className={`${montserrat.className} text-sm text-[#737373]`}>
                Profession
              </p>
              <div className="flex gap-3 text-[#23A6F0] text-lg">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[23%]">
            <div className="w-[70%] mb-5">
              <Image
                src={team2}
                alt="Team Member 2"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1 className={`${montserrat.className} text-[16px] font-medium text-[#252B42]`}>
                Username
              </h1>
              <p className={`${montserrat.className} text-sm text-[#737373]`}>
                Profession
              </p>
              <div className="flex gap-3 text-[#23A6F0] text-lg">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[23%]">
            <div className="w-[70%] mb-5">
              <Image
                src={team3}
                alt="Team Member 3"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1 className={`${montserrat.className} text-[16px] font-medium text-[#252B42]`}>
                Username
              </h1>
              <p className={`${montserrat.className} text-sm text-[#737373]`}>
                Profession
              </p>
              <div className="flex gap-3 text-[#23A6F0] text-lg">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[23%]">
            <div className="w-[70%] mb-5">
              <Image
                src={team1}
                alt="Team Member 3"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1 className={`${montserrat.className} text-[16px] font-medium text-[#252B42]`}>
                Username
              </h1>
              <p className={`${montserrat.className} text-sm text-[#737373]`}>
                Profession
              </p>
              <div className="flex gap-3 text-[#23A6F0] text-lg">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[23%]">
            <div className="w-[70%] mb-5">
              <Image
                src={team3}
                alt="Team Member 3"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1 className={`${montserrat.className} text-[16px] font-medium text-[#252B42]`}>
                Username
              </h1>
              <p className={`${montserrat.className} text-sm text-[#737373]`}>
                Profession
              </p>
              <div className="flex gap-3 text-[#23A6F0] text-lg">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[23%]">
            <div className="w-[70%] mb-5">
              <Image
                src={team2}
                alt="Team Member 3"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1 className={`${montserrat.className} text-[16px] font-medium text-[#252B42]`}>
                Username
              </h1>
              <p className={`${montserrat.className} text-sm text-[#737373]`}>
                Profession
              </p>
              <div className="flex gap-3 text-[#23A6F0] text-lg">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[23%]">
            <div className="w-[70%] mb-5">
              <Image
                src={team3}
                alt="Team Member 3"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1 className={`${montserrat.className} text-[16px] font-medium text-[#252B42]`}>
                Username
              </h1>
              <p className={`${montserrat.className} text-sm text-[#737373]`}>
                Profession
              </p>
              <div className="flex gap-3 text-[#23A6F0] text-lg">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[23%]">
            <div className="w-[70%] mb-5">
              <Image
                src={team2}
                alt="Team Member 3"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1 className={`${montserrat.className} text-[16px] font-medium text-[#252B42]`}>
                Username
              </h1>
              <p className={`${montserrat.className} text-sm text-[#737373]`}>
                Profession
              </p>
              <div className="flex gap-3 text-[#23A6F0] text-lg">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[23%]">
            <div className="w-[70%] mb-5">
              <Image
                src={team1}
                alt="Team Member 3"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h1 className={`${montserrat.className} text-[16px] font-medium text-[#252B42]`}>
                Username
              </h1>
              <p className={`${montserrat.className} text-sm text-[#737373]`}>
                Profession
              </p>
              <div className="flex gap-3 text-[#23A6F0] text-lg">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
