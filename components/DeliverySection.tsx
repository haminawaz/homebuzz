import { Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const DeliverySection = () => {
  return (
    <section className="py-16 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="relative">
          <h2
            className="w-full text-center text-white font-bold 
          text-[14vw] leading-none uppercase tracking-tight"
          >
            WE DELIVER
          </h2>
          <div className="absolute inset-0 top-36 flex items-center justify-center">
            <Image
              src="/delivery/bus.svg"
              alt="bus-image"
              width={900}
              height={900}
              className="mb-4"
            />
            <span className="absolute inset-0 -top-10 flex items-center justify-center text-black font-bold text-4xl md:text-6xl">
              Fast. Efficient. Free.
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center mt-20">
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800 rounded-none px-8 py-3 text-lg"
          >
            Find out More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
