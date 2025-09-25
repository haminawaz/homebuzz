import React from "react";
import { Button } from "./ui/button";

const InfoBanner = () => {
  return (
    <div className="bg-yellow-400 py-6 xs:py-8">
      <div className="max-w-7xl mx-auto text-center flex items-center flex-col md:flex-row px-4 sm:px-8 md:px-10 min-lg:px-12">
        <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-2xl font-black text-black text-center md:text-left leading-tight">
            More Than 2 Million Items <br className="hidden xs:block" /> 
            <span className="xs:hidden"> </span>Available in Store
          </h2>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800 px-6 xs:px-8 py-3 xs:py-4 font-semibold rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm xs:text-base"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;