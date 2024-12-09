import React from 'react';
import container1 from './assets/container.png';
import Image from 'next/image';

export default function AboutVideo() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-[900px] mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[100%]">
            <Image
              src={container1}
              alt="About Video Container"
              className="w-full h-auto rounded-lg"
              priority={true} // Optional: Prioritize image loading
            />
          </div>
        </div>
      </div>
    </div>
  );
}
