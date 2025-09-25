"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Furniture Week",
    subtitle: "Up to 50% off select furniture",
    image: "/slider/one.svg",
    buttonText: "Browse in Store",
  },
  {
    id: 2,
    title: "Furniture Week",
    subtitle: "Up to 50% off select furniture",
    image: "/slider/one.svg",
    buttonText: "Browse in Store",
  },
  {
    id: 3,
    title: "Furniture Week",
    subtitle: "Up to 50% off select furniture",
    image: "/slider/one.svg",
    buttonText: "Browse in Store",
  },
  {
    id: 4,
    title: "Furniture Week",
    subtitle: "Up to 50% off select furniture",
    image: "/slider/one.svg",
    buttonText: "Browse in Store",
  },
  {
    id: 5,
    title: "Furniture Week",
    subtitle: "Up to 50% off select furniture",
    image: "/slider/one.svg",
    buttonText: "Browse in Store",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-[400px] xs:h-[450px] sm:h-[500px] md:h-[550px] min-lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide
                ? "translate-y-0"
                : index < currentSlide
                ? "-translate-y-full"
                : "translate-y-full"
            }`}
            style={{ backgroundImage: `url(/slider/background.png)` }}
          >
            <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 min-lg:px-12 h-full">
              <div className="flex flex-col min-lg:grid min-lg:grid-cols-2 gap-4 xs:gap-6 min-lg:gap-8 items-center justify-center h-full">
                <div className="w-4/6 min-lg:order-2 text-center min-lg:text-left space-y-3 xs:space-y-4 sm:space-y-6 py-4 xs:py-6 sm:py-8 min-lg:py-12 relative">
                  <div>
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl min-lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight break-words">
                      {slide.title}
                    </h1>
                  </div>
                  <p className="text-base xs:text-lg sm:text-xl md:text-xl text-[#FFCE3A] font-semibold">
                    {slide.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="bg-gray-900 text-white hover:bg-gray-800 px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {slide.buttonText}
                  </Button>
                </div>

                <div className="w-full min-lg:order-1 flex justify-center min-lg:justify-start">
                  <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[450px] min-lg:max-w-none">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="object-cover w-full h-auto"
                      width={1200}
                      height={1200}
                      priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute right-4 xl:right-44 top-1/2 -translate-y-1/2 flex flex-col space-y-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 xs:w-4 xs:h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-yellow-500 scale-125 shadow-lg"
                  : "bg-white bg-opacity-60 hover:bg-opacity-80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
