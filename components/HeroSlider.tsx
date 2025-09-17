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
      <div className="relative h-[500px] md:h-[600px]">
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
            <div className="max-w-7xl mx-auto px-12 h-full">
              <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                  <div className="relative">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="object-cover"
                      width={1200}
                      height={1200}
                      priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
                  </div>
                </div>

                <div className="order-1 lg:order-2 text-left space-y-6 py-12 relative">
                  <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      {slide.title.split(" ")[0]}
                    </h1>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      {slide.title.split(" ")[1] || ""}
                    </h1>
                  </div>
                  <p className="text-xl md:text-xl text-[#FFCE3A] font-semibold">
                    {slide.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-base rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute right-0 lg:right-44 top-1/2 -translate-y-1/2 flex flex-col space-y-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
