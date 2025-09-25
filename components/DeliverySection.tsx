import { Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const DeliverySection = () => {
  return (
    <section className="py-12 md:py-16 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 min-lg:px-12 ">
        <div className="relative">
          <h2
            className="w-full text-center text-white font-bold 
          text-[14vw] leading-none uppercase tracking-tight"
          >
            WE DELIVER
          </h2>
          <div className="absolute inset-0 top-16 sm:top-20 md:top-28 min-lg:top-32 xl-top-36 flex items-center justify-center">
            <Image
              src="/delivery/bus.svg"
              alt="bus-image"
              width={900}
              height={900}
              className="mb-4 w-[80%] h-auto"
            />
            <span className="absolute inset-0 -top-6 sm:-top-8 md:-top-10 flex items-center justify-center text-black font-bold text-[20px] sm:text-[26px] md:text-[40px] min-lg:text-5xl xl:text-6xl">
              Fast. Efficient. Free.
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12 md:mt-20">
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
