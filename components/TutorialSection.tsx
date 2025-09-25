import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const TutorialSection = (): JSX.Element => {
  const tutorialCards = [
    {
      id: 1,
      title: "Top DIY Storage Ideas",
      className: "col-span-2 row-span-3",
      stats: { products: "6", readTime: "2" },
      image: "/tutorial/one.png",
      gradient: "bg-gradient-to-t from-[#FFD600] to-transparent",
    },
    {
      id: 2,
      title: "DIY furniture renovation",
      className: "col-span-1 row-span-6",
      image: "/tutorial/two.png",
      gradient: "bg-gradient-to-t from-[#F1DB8D] to-transparent",
    },
    {
      id: 3,
      title: "Gardening tips & tricks",
      className: "col-span-1 row-span-6",
      image: "/tutorial/three.png",
      gradient: "bg-gradient-to-t from-[#78FF00] to-transparent",
    },
    {
      id: 4,
      title: "Make Your Own DIY Lamp",
      className: "col-span-1 row-span-6",
      image: "/tutorial/four.png",
      gradient: "bg-gradient-to-t from-[#E5DCCA] to-transparent",
    },
    {
      id: 5,
      title: "21 Organize ideas for home",
      className: "col-span-1 row-span-6",
      image: "/tutorial/five.png",
      gradient: "bg-gradient-to-t from-[#E5DCCA] to-transparent",
    },
    {
      id: 6,
      title: "DIY Furniture Renovation",
      className: "col-span-2 row-span-3",
      stats: { products: "6", readTime: "2" },
      image: "/tutorial/six.png",
      gradient: "bg-gradient-to-t from-[#FF3D00] to-transparent",
      dataDirection: "justify-start",
    },
    {
      id: 7,
      title: "Picking perfect paint",
      className: "col-span-2 row-span-1",
      stats: { products: "6", readTime: "2" },
      textColor: "text-white",
      image: "/tutorial/seven.png",
      gradient: "bg-gradient-to-r from-[#0051FF] to-transparent",
      dataDirection: "justify-start",
      statsDirection: "flex-col item-start",
    },
    {
      id: 8,
      title: "Painting 101",
      className: "col-span-2 row-span-1",
      stats: { products: "6", readTime: "2" },
      image: "/tutorial/eight.png",
      gradient: "bg-gradient-to-r from-[#EB9DFF] to-transparent",
      dataDirection: "justify-start",
      statsDirection: "flex-col item-start",
    },
  ];

  return (
    <section className="py-16 bg-[#f5f7f8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 md:mb-10">
            Inspire Yourself with Tutorials
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-12">
          {tutorialCards.map((card) => (
            <Card
              key={card.id}
              className={`${card.className} relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300`}
            >
              <CardContent className="p-0 h-full">
                <div
                  className={`relative h-full min-h-[200px] flex flex-col ${
                    card.dataDirection ? card.dataDirection : "justify-end"
                  } bg-cover bg-center`}
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div
                    className={`absolute inset-0 ${card.gradient}`}
                  />

                  <div
                    className={`relative z-10 p-2 md:p-6 flex flex-col md:flex-row ${
                      card.statsDirection ? card.statsDirection : "md:items-center"
                    } justify-between ${
                      card.textColor ? card.textColor : "text-black"
                    }`}
                  >
                    <h3 className="text-base sm:text-md md:text-2xl lg:text-3xl font-black mb-2 md:mb-4">
                      {card.title}
                    </h3>
                    <div
                      className={`text-[10px] md:text-[10px] xl:text-sm ${
                        card.textColor ? card.textColor : "text-black"
                      }`}
                    >
                      {card.stats && (
                        <>
                          <span className="font-black">
                            {card.stats.products}{" "}
                          </span>
                          <span>promoted product</span>
                          <br />
                          <span className="font-black">
                            {card.stats.readTime}{" "}
                          </span>
                          <span>min read</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-[#1b1d1e] rounded-0 text-white px-12 py-3 h-auto hover:bg-[#1b1d1e]/90 transition-colors duration-300">
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TutorialSection;
