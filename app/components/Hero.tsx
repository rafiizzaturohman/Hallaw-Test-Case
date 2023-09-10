"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import HeroCard from "./Card/HeroCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const data = [
  {
    title: "konsultasi hukum menjadi lebih mudah",
    text: "Aplikasi bantuan hukum yang akan memudahkan Anda untuk melakukan konsultasi secara online kapan saja dan dimana saja. Segera download aplikasi Hallaw di Play Store dan App Store!",
    image: "phoness",
  },
  {
    title: "Kami Akan Memberikan Bantuan Hukum 24/7",
    text: "Layanan hukum di Hallaw tidak terbatas waktu. CS kami stand by untuk memudakan Anda mendapat bantuan dan informasi yang tepat dan cepat!",
    image: "phoness",
  },
];

const Hero: React.FC = () => {
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
    <section id="Hero">
      <div className="flex flex-row md:justify-center items-center">
        <div className="hidden show">
          <SlickPrevArrow />
        </div>
        <div className="container max-w-7xl">
          <Slider ref={sliderRef} {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <HeroCard {...item} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden show">
          <SlickNextArrow />
        </div>
      </div>
    </section>
  );
};

export default Hero;
