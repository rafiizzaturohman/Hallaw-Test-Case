"use client";

import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import TestimoniCard from "./Card/TestimoniCard";

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
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const SlickNextArrow = () => {
    return (
      <div>
        <div
          className="bg-white shadow-md hover:bg-gray-100 text-black rounded-full p-3 w-10 cursor-pointer"
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
          className="bg-white shadow-md hover:bg-gray-100 text-black rounded-full p-3 w-10 cursor-pointer"
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <FaAngleLeft />
        </div>
      </div>
    );
  };

  return (
    <section id="testimoni">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-6 my-6 md:ml-10 md:mr-20">
          <div className="base:flex base:flex-row base:items-center base:gap-2 base:justify-between">
            <div className="md:space-y-3">
              <h4 className="font-bold text-[#1B2C62] text-md md:text-xl">
                Testimoni
              </h4>

              <h1 className="capitalize font-black text-[#BE9E6D] text-xl md:text-4xl font-['Martel'] md:w-[179px]">
                apa kata mereka tentang hallaw
              </h1>
            </div>

            <div className="container base:w-3/4">
              <div className="relative flex flex-row items-center base:space-x-1.5 max-w-7xl">
                <div className="absolute z-10 -left-3 base:-left-0">
                  <SlickPrevArrow />
                </div>
                <div className="container">
                  <Slider ref={sliderRef} {...settings}>
                    {dataTestimoni.map((item, index) => (
                      <div key={index}>
                        <TestimoniCard {...item} />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="absolute -right-3 md:-right-5">
                  <SlickNextArrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
