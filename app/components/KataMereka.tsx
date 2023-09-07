"use client";

import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";

const dataTestimoni = [
  {
    imageName: "matt",
    name: "anthony jorge",
    job: "pengusaha",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames in dui et tortor ut. Euismod amet feugiat faucibus vulputate feugiat eget viverra. Sed volutpat, scelerisque turpis in fusce urna.",
  },
  {
    imageName: "milla",
    name: "milla carie",
    job: "pengusaha",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames in dui et tortor ut. Euismod amet feugiat faucibus vulputate feugiat eget viverra. Sed volutpat, scelerisque turpis in fusce urna.",
  },
  {
    imageName: "natallie",
    name: "natallie mark",
    job: "pengusaha",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames in dui et tortor ut. Euismod amet feugiat faucibus vulputate feugiat eget viverra. Sed volutpat, scelerisque turpis in fusce urna.",
  },
];

const Testimoni: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const SlickNextArrow = () => {
    return (
      <div>
        <div
          className="bg-white/50 text-black rounded-full p-3 w-10 cursor-pointer"
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <FaAngleRight />
        </div>
      </div>
    );
  };

  const SlickPrevArrow = () => {
    return (
      <div>
        <div
          className="bg-white/50 text-black rounded-full p-2 w-8 md:p-3 md:w-10 cursor-pointer"
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <FaAngleLeft />
        </div>
      </div>
    );
  };
  return (
    <section id="testimoni">
      <div className="mx-6 my-6 mb-20 md:mx-10">
        <div className="md:flex md:flex-row md:justify-evenly">
          <div>
            <h4 className="font-bold text-[#1B2C62] text-md md:text-xl">
              Testimoni
            </h4>

            <h1 className="capitalize font-black text-[#BE9E6D] text-xl md:text-4xl font-['Martel']">
              layanan hukum hallaw
            </h1>
          </div>

          <div className="">
            <div className="flex flex-row items-center">
              <div className="hidden arrow-show">
                <SlickPrevArrow />
              </div>
              <div className="container max-w-7xl">
                <Slider ref={sliderRef} {...settings}>
                  {dataTestimoni.map((item, index) => (
                    <div key={index}>
                      <div className="container">
                        <div className="bg-white shadow-xl w-3/4 p-4 rounded-xl">
                          <div>
                            <div className="flex flex-row gap-4 items-center">
                              <img
                                src={`/images/testimoni/${item.imageName}.png`}
                                alt={item.imageName}
                                className="w-6 h-6"
                              />

                              <div>
                                <h4 className="capitalize text-xs font-semibold">
                                  {item.name}
                                </h4>
                                <h6 className="text-[#636772] text-xs">
                                  {item.job}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="hidden arrow-show">
                <SlickNextArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
