import React from "react";
import PraktisiCard from "./Card/PraktisiCard";

const dataPraktisi = [
  {
    image: "matt",
    name: "Matt Roberts",
    job: "Advocat",
    rating: "4.7",
  },
  {
    image: "natallie",
    name: "natalie pine",
    job: "Notaris & PPAT",
    rating: "4.7",
  },
  {
    image: "milla",
    name: "milla watson",
    job: "Kurator",
    rating: "4.7",
  },
];

const Praktisi: React.FC = () => {
  return (
    <section id="praktisi">
      <div className="mx-6 my-6 md:mx-10">
        <h4 className="capitalize font-bold text-right tracking-wide text-[#1B2C62] text-md md:text-xl">
          praktisi hallaw
        </h4>
        <div className="relative space-y-8">
          <h1 className="capitalize font-black text-[#BE9E6D] text-right text-xl md:text-4xl font-['Martel']">
            praktisi hukum professional
          </h1>

          <div>
            <div className="bg-[#1B2C62] w-full h-[166.5px] md:h-[331px] rounded-3xl flex justify-end items-center">
              <div className="relative">
                <img
                  src="/icons/indonesia.svg"
                  alt="indonesia"
                  className="w-72 md:w-full"
                />
              </div>

              <div className="absolute flex flex-row gap-4 md:gap-48 top-5 md:-top-4 items-center px-3 py-2 md:px-44">
                <div>
                  {dataPraktisi.map((item, index) => (
                    <div key={index}>
                      <PraktisiCard {...item} />
                    </div>
                  ))}
                </div>

                <div className="space-y-1 md:space-y-5 md:w-1/2">
                  <h4 className="text-[#A5ACBE] text-2xl md:text-6xl font-bold">
                    +324
                  </h4>

                  <p className="text-white text-xs md:text-lg">
                    Lebih dari 300+ Praktisi Hukum Profesional dari seluruh
                    Indonesia yang sudah bergabung menjadi bagian dari Hallaw
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// absolute z-10 top-4 right-0
export default Praktisi;
