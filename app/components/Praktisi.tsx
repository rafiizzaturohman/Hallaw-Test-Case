import React from "react";

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
                    <div
                      className="bg-white rounded-xl shadow-xl my-1.5 w-[167px] md:my-5 md:px-6 md:w-[334px] md:h-[140px]"
                      key={index}
                    >
                      <div className="flex flex-row gap-6 items-center px-3 py-2 md:px-0 md:py-7">
                        <img
                          src={`/praktisi/${item.image}.png`}
                          alt={item.image}
                          className="w-6 h-6 md:w-20 md:h-20"
                        />

                        <div className="space-y-0.5 md:space-y-1">
                          <h4 className="capitalize font-semibold text-sm md:text-base">
                            {item.name}
                          </h4>
                          <p className="text-[#636772] text-xs md:text-base">
                            {item.job}
                          </p>

                          <div className="flex flex-row gap-1 md:gap-2 items-center">
                            <div id="star">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 576 512"
                              >
                                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                              </svg>
                            </div>

                            <p className="text-xs text-[#AEAFB5] font-normal md:text-base">
                              {item.rating}
                            </p>
                          </div>
                        </div>
                      </div>
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
