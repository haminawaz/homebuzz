"use client";

import Image from "next/image";
import React from "react";

type Promo = {
  id: number;
  title: string;
  subtitle?: string;
  bgColor: string;
  imgSrc: string;
  imgAlt: string;
};

const promos: Promo[] = [
  {
    id: 1,
    title: "50% Off Select\nDyson Vacuums",
    subtitle: "Free delivery. Today Only",
    bgColor: "bg-[#bf90fb]",
    imgSrc: "/promo/one.png",
    imgAlt: "Dyson vacuum",
  },
  {
    id: 2,
    title: "Financing Available",
    subtitle: "Up to 24 month financing. Terms & conditions apply",
    bgColor: "bg-[#739aff]",
    imgSrc: "/promo/two.png",
    imgAlt: "Credit card",
  },
];

export default function PromoBanners() {
  return (
    <section className="py-4 sm:py-6 min-lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-lg:px-8 lg:px-12">
        <div className="grid grid-cols-1 min-lg:grid-cols-2 gap-4 sm:gap-6">
          {promos.map((p) => (
            <article
              key={p.id}
              className="flex flex-col sm:flex-row items-stretch bg-white shadow-sm overflow-hidden rounded-none"
              aria-labelledby={`promo-title-${p.id}`}
            >
              <div
                className={`flex-1 ${p.bgColor} px-4 py-6 sm:px-6 min-lg:px-8 flex flex-col justify-center`}
              >
                <h3
                  id={`promo-title-${p.id}`}
                  className="font-black text-black leading-tight whitespace-pre-line text-lg sm:text-xl min-lg:text-2xl lg:text-3xl"
                >
                  {p.title}
                </h3>

                {p.subtitle && (
                  <p className="mt-2 sm:mt-3 text-white font-medium text-xs sm:text-sm min-lg:text-base opacity-95 leading-relaxed">
                    {p.subtitle}
                  </p>
                )}
              </div>

              <div className="bg-white flex items-center justify-center sm:w-2/5 min-lg:w-2/5">
                <div className="relative w-full h-full min-h-[150px]">
                  <Image
                    src={p.imgSrc}
                    alt={p.imgAlt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
