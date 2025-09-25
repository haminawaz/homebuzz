"use client";

import Image from "next/image";
import { useState } from "react";
import { CircleCheck } from "lucide-react";

interface Props {
  id?: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  unit: string;
  cart: boolean;
  isWide?: boolean;
  onSelect?: () => void;
}

const StarSvg = ({ filled }: { filled: boolean }) => (
  <svg
    className="h-3 w-3 sm:h-4 sm:w-4"
    viewBox="0 0 20 20"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    aria-hidden
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.363 1.118l1.287 3.965c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.377 2.455c-.784.57-1.84-.197-1.54-1.118l1.287-3.965a1 1 0 00-.363-1.118L2.63 9.392c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.05 2.927z" />
  </svg>
);

export default function ProductCard({
  id,
  name,
  image,
  price,
  rating,
  unit,
  cart,
  isWide,
  onSelect,
}: Props) {
  const [added, setAdded] = useState(false);

  const fullStars = Math.floor(rating);
  
  return (
    <div
      onClick={onSelect}
      className={`bg-white rounded-none border-none duration-200 cursor-pointer flex ${
        isWide ? "flex-row-reverse" : "flex-col"
      } h-64 sm:h-72 md:h-80 items-stretch`}
    >
      <div
        className={`flex items-center justify-center p-2 sm:p-3 md:p-4 ${
          isWide ? "h-full w-1/2 lg:w-2/3 md:pb-4" : "h-1/2 w-full"
        }`}
      >
        <Image
          src={image}
          alt={name}
          width={600}
          height={600}
          className="object-contain max-h-full max-w-full"
          priority={false}
        />
      </div>

      <div
        className={`p-2 sm:p-3 md:p-4 space-y-1 sm:space-y-2 flex-1 flex flex-col ${
          isWide ? "w-1/2 lg:w-1/3 justify-end" : "w-full"
        }`}
      >
        {isWide && (
          <h3 className="text-center lg:text-start text-lg sm:text-xl md:text-2xl text-gray-900 line-clamp-2 block">
            {name}
          </h3>
        )}

        <div className="flex items-center justify-center gap-1 sm:gap-2">
          <div className="flex items-center gap-[1px] sm:gap-[2px] text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={i < fullStars ? "text-yellow-400" : "text-[#DADADA]"}
              >
                <StarSvg filled={i < fullStars} />
              </span>
            ))}
          </div>
        </div>

        {(!isWide) && (
          <h3 className="text-xs sm:text-[13px] text-center text-gray-900 line-clamp-2 my-1 sm:my-2 md:my-4">
            {name}
          </h3>
        )}

        <div className="flex items-end justify-between mt-auto w-full">
          <div className="flex items-center justify-center w-full gap-1">
            <div className="flex items-baseline gap-1 sm:gap-2">
              <span
                className={`${
                  isWide ? "text-xl sm:text-2xl md:text-3xl" : "text-sm sm:text-base md:text-lg"
                } font-black text-gray-900`}
              >
                ${price.toFixed(2)}
              </span>
            </div>
            <div className={`${
              isWide ? "text-xs sm:text-sm" : "text-xs"
            } text-gray-500`}>
              / {unit}
            </div>
          </div>
        </div>

        <div className="mt-1 sm:mt-2">
          {!cart ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setAdded(true);
              }}
              className="w-full px-2 py-1.5 sm:px-3 sm:py-2 rounded-none text-xs sm:text-sm font-semibold bg-[#FFCE3A] hover:bg-[#E6B833] text-black transition"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                Add to Cart
              </div>
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setAdded(false);
              }}
              className="w-full px-2 py-1.5 sm:px-3 sm:py-2 rounded-none text-xs sm:text-sm font-semibold bg-black text-white transition"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2">
                Added
                <CircleCheck className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
