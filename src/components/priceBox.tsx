import React from 'react';
import { Montserrat } from '@next/font/google';
import { TiTick } from 'react-icons/ti';
import { FiDollarSign } from 'react-icons/fi';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function PriceBox() {
  return (
    <div className="bg-gray-100 pt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-6">
          {/* Free Plan */}
          <div className="w-full lg:w-1/3 bg-white p-7 rounded-lg border border-blue-500 flex flex-col items-center text-center mb-6 lg:mb-0">
            <h1 className={`${montserrat.className} text-gray-800 text-xl font-semibold mb-2`}>FREE</h1>
            <p className={`${montserrat.className} text-gray-500 text-base`}>Organize across all apps by hand</p>
            <h3 className={`${montserrat.className} text-blue-500 text-4xl font-semibold flex items-center`}>
              0
              <span className="ml-1 text-lg font-semibold flex items-center">
                <FiDollarSign /> per month
              </span>
            </h3>
            <ul className={`${montserrat.className} list-none flex flex-col gap-2 mt-4`}>
              <li className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                <p className="text-gray-800 text-sm">Unlimited product updates</p>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                <p className="text-gray-800 text-sm">Manage up to 5 projects</p>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                <p className="text-gray-800 text-sm">Community support</p>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-gray-500" />
                <p className="text-gray-500 text-sm">Priority support</p>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-gray-500" />
                <p className="text-gray-500 text-sm">Access to premium features</p>
              </li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-6 rounded mt-4 hover:bg-blue-600 transition">
              Try for Free
            </button>
          </div>

          {/* Premium Plan */}
          <div className="w-full lg:w-1/3 bg-gray-800 p-7 rounded-lg flex flex-col items-center text-center mb-6 lg:mb-0">
            <h1 className={`${montserrat.className} text-white text-xl font-semibold mb-2`}>Premium</h1>
            <p className={`${montserrat.className} text-gray-400 text-base`}>Organize across all apps by hand</p>
            <h3 className={`${montserrat.className} text-white text-4xl font-semibold flex items-center`}>
              99
              <span className="ml-1 text-lg font-semibold flex items-center">
                <FiDollarSign /> per month
              </span>
            </h3>
            <ul className={`${montserrat.className} list-none flex flex-col gap-2 mt-4`}>
              <li className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                <p className="text-white text-sm">Unlimited product updates</p>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                <p className="text-white text-sm">Manage unlimited projects</p>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                <p className="text-white text-sm">Priority customer support</p>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                <p className="text-white text-sm">Access to all premium features</p>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                <p className="text-white text-sm">Advanced analytics</p>
              </li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-6 rounded mt-4 hover:bg-blue-600 transition">
              Try for Free
            </button>
          </div>

          {/* Standard Plan */}
          <div className="w-full lg:w-1/3 bg-white p-7 rounded-lg border border-blue-500 flex flex-col items-center text-center">
            <h1 className={`${montserrat.className} text-gray-800 text-xl font-semibold mb-2`}>Standard</h1>
            <p className={`${montserrat.className} text-gray-500 text-base`}>Organize across all apps by hand</p>
            <h3 className={`${montserrat.className} text-blue-500 text-4xl font-semibold flex items-center`}>
              9
              <span className="ml-1 text-lg font-semibold flex items-center">
                <FiDollarSign /> per month
              </span>
            </h3>
            <ul className={`${montserrat.className} list-none flex flex-col gap-2 mt-4`}>
              <li className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                <p className="text-gray-800 text-sm">Unlimited product updates</p>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                <p className="text-gray-800 text-sm">Manage up to 20 projects</p>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                <p className="text-gray-800 text-sm">Email support</p>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-gray-500" />
                <p className="text-gray-500 text-sm">Priority support</p>
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-gray-500" />
                <p className="text-gray-500 text-sm">Advanced analytics</p>
              </li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-6 rounded mt-4 hover:bg-blue-600 transition">
              Try for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
