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
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promos.map((p) => (
            <article
              key={p.id}
              className="flex flex-col md:flex-row items-stretch bg-white shadow-sm overflow-hidden"
              aria-labelledby={`promo-title-${p.id}`}
            >
              <div
                className={`flex-1 ${p.bgColor} px-6 md:px-8 flex flex-col justify-center`}
                style={{ minHeight: 120 }}
              >
                <h3
                  id={`promo-title-${p.id}`}
                  className="font-black text-black leading-tight whitespace-pre-line text-[20px] md:text-[26px] lg:text-[30px]"
                >
                  {p.title}
                </h3>

                {p.subtitle && (
                  <p className="mt-3 text-white font-medium text-sm md:text-base opacity-95">
                    {p.subtitle}
                  </p>
                )}
              </div>

              <div className="bg-white flex items-center justify-center md:w-2/5">
                <div className="w-full h-28 md:h-36 lg:h-40 relative">
                  <Image
                    src={p.imgSrc}
                    alt={p.imgAlt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
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
