import React from 'react';

export default function PageNo() {
  return (
    <div className="py-5 bg-white">
      <div className="max-w-[900px] mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-gray-400 bg-gray-100 text-xs flex items-center px-4 py-2 border border-gray-400 rounded-l-md">
            PREV
          </h1>
          <p className="bg-white text-blue-500 text-xs flex items-center px-3 py-2 border border-gray-400">
            1
          </p>
          <p className="bg-white text-blue-500 text-xs flex items-center px-3 py-2 border border-gray-400">
            2
          </p>
          <p className="bg-white text-blue-500 text-xs flex items-center px-3 py-2 border border-gray-400">
            3
          </p>
          <h3 className="text-blue-500 bg-white text-xs flex items-center px-4 py-2 border border-gray-400 rounded-r-md">
            Next
          </h3>
        </div>
      </div>
    </div>
  );
}
