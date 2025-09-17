import React from "react";
import { Button } from "./ui/button";

const InfoBanner = () => {
  return (
    <div className="bg-yellow-400 py-8">
      <div className="max-w-7xl mx-auto text-center flex items-center flex-col lg:flex-row px-12">
        <div className="w-1/2 flex items-center justify-center">
          <h2 className="text-2xl md:text-2xl font-black text-black mb-4 text-left">
            More Than 2 Million Items <br /> Available in Store
          </h2>
        </div>
        <div className="w-1/2 flex items-center justify-start">
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800 px-8 py-4 font-semibold rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
