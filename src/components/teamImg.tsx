import React from 'react';
import Image from 'next/image';
import team1 from '../components/assets/unsplash1.png';
import team2 from '../components/assets/unsplash2.png';
import team3 from '../components/assets/unsplash3.png';
import team4 from '../components/assets/unsplash4.png';
import team5 from '../components/assets/unsplash5.png';

export default function TeamImg() {
  return (
    <div className="bg-white p-4">
      <div className="flex flex-wrap lg:flex-nowrap w-full gap-2">
        {/* Main Image */}
        <div className="w-full lg:w-1/2">
          <div className="w-full">
            <Image src={team3} alt="1" className="w-full h-auto" />
          </div>
        </div>

        {/* Grid Images */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2">
          <div className="col-span-1 w-full/">
            <Image src={team2} alt="2" className="w-full h-100%" id='img1' />
          </div>
          <div className="col-span-1 w-full">
            <Image src={team1} alt="3" className="w-full h-100%" id='img1' />
          </div>
          <div className="col-span-1 w-full">
            <Image src={team4} alt="4" className="w-full h-100%" id='img1' />
          </div>
          <div className="col-span-1 w-full">
            <Image src={team5} alt="5" className="w-full h-100%" id='img1' />
          </div>
        </div>
      </div>
    </div>
  );
}
