"use client";

import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Stanley Screwdriver Set Philips 6pcs",
    image: "/products/screwdriver.svg",
    price: 29.99,
    rating: 4,
    unit: "set",
    cart: false,
  },
  {
    id: 2,
    name: "Dewalt 20V Cordless Super Drill Kit",
    image: "/products/drill-kit.svg",
    price: 2139.99,
    rating: 4,
    unit: "set",
    cart: false,
  },
  {
    id: 3,
    name: "Ryobi Lithium-Ion Cordless Drill + Charger",
    image: "/products/drill.svg",
    price: 49.99,
    rating: 4,
    unit: "set",
    cart: false,
  },
  {
    id: 4,
    name: "Ryobi Lithium-Ion Cordless Drill + Charger",
    image: "/products/drill.svg",
    price: 49.99,
    rating: 4,
    unit: "set",
    cart: false,
  },
  {
    id: 5,
    name: "Stanley Screwdriver Set Philips 6pcs",
    image: "/products/screwdriver.svg",
    price: 29.99,
    rating: 4,
    unit: "set",
    cart: true,
  },
  {
    id: 6,
    name: "Dewalt 20V Cordless Super Drill Kit",
    image: "/products/drill-kit.svg",
    price: 2139.99,
    rating: 4,
    unit: "set",
    cart: false,
  },
  {
    id: 7,
    name: "Glidden Fur Interior Antique Matte Finish",
    image: "/products/paint.svg",
    price: 29.99,
    rating: 4,
    unit: "gal",
    cart: false,
  },
  {
    id: 8,
    name: "Stanley Screwdriver Set Philips 6pcs",
    image: "/products/screwdriver.svg",
    price: 29.99,
    rating: 4,
    unit: "set",
    cart: false,
  },
  {
    id: 9,
    name: "Dewalt 20V Cordless Super Drill Kit",
    image: "/products/drill-kit.svg",
    price: 2139.99,
    rating: 4,
    unit: "set",
    cart: false,
  },
  {
    id: 10,
    name: "Ryobi Lithium-Ion Cordless Drill + Charger",
    image: "/products/drill.svg",
    price: 49.99,
    rating: 4,
    unit: "set",
    cart: false,
  },
  {
    id: 11,
    name: "Ryobi Lithium-Ion Cordless Drill + Charger",
    image: "/products/drill.svg",
    price: 49.99,
    rating: 4,
    unit: "set",
    cart: false,
  },
  {
    id: 12,
    name: "Stanley Screwdriver Set Philips 6pcs",
    image: "/products/screwdriver.svg",
    price: 29.99,
    rating: 4,
    unit: "set",
    cart: false,
  },
  {
    id: 13,
    name: "Dewalt 20V Cordless Super Drill Kit",
    image: "/products/drill-kit.svg",
    price: 2139.99,
    rating: 4,
    unit: "set",
    cart: false,
  },
  {
    id: 14,
    name: "Glidden Fur Interior Antique Matte Finish",
    image: "/products/paint.svg",
    price: 29.99,
    rating: 4,
    unit: "gal",
    cart: false,
  },
];

export default function PopularProducts() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-10 ps-12">
          Popular Products
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {products.map((p, idx) => {
            const isWide = (idx - 2) % 7 === 0;
            return (
              <div
                key={p.id}
                className={`${isWide ? "col-span-2" : ""}`}
              >
                <ProductCard {...p} isWide={isWide} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
