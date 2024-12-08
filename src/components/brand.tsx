import React from 'react';
import Image from 'next/image';
import brand1 from './assets/brand1.png';
import brand2 from './assets/brand2.png';
import brand3 from './assets/brand3.png';
import brand4 from './assets/brand4.png';
import brand5 from './assets/brand5.png';

export default function Brand() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="flex justify-center items-center">
            <Image
              src={brand1}
              alt="Brand 1"
              width={50}
              height={50}
              className="w-16 sm:w-20 md:w-24 lg:w-32 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={brand2}
              alt="Brand 2"
              width={50}
              height={50}
              className="w-16 sm:w-20 md:w-24 lg:w-32 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={brand3}
              alt="Brand 3"
              width={50}
              height={50}
              className="w-16 sm:w-20 md:w-24 lg:w-32 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={brand4}
              alt="Brand 4"
              width={50}
              height={50}
              className="w-16 sm:w-20 md:w-24 lg:w-32 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={brand5}
              alt="Brand 5"
              width={50}
              height={50}
              className="w-16 sm:w-20 md:w-24 lg:w-32 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
