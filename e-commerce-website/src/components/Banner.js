
import React,{useRef} from 'react';

export default function Banner() {

  return (
    <div className="bg-gradient-to-r from-rose-400 to-orange-300 py-3 sm:py-1">
       <div className="mt-3 mb-3 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-gray-900">UP TO 50% OFF SELECTED ITEMS!</h2>
        <h3 className="text-xl text-center text-gray-900 mt-3">Limited time only. </h3>
      </div>
  </div>
  );
}