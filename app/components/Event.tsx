"use client";

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider from "react-slick";
import EventCard from "./Card/EventCard";

const dataEvent = [
  {
    title: "Fenomena Obat-Obatan Terlarang di Kalangan Milenial",
    date: "16 Sep 2022",
    place: "Bandung",
    imageName: "1",
    about: "Narkoba",
  },
  {
    title:
      "Kasus Cyber Crime yang Semakin Meningkat dengan Adanya Hacker Bjorka",
    date: "16 Sep 2022",
    place: "Bandung",
    imageName: "1",
    about: "Cyber Crime",
  },
  {
    title: "Pengaruh Teroris Dalam Dunia Politik Indonesia dan Amerika",
    date: "16 Sep 2022",
    place: "Bandung",
    imageName: "1",
    about: "Teroris",
  },
  {
    title: "Kasus Perceraian meningkat setelah post pandemi",
    date: "16 Sep 2022",
    place: "Bandung",
    imageName: "1",
    about: "Perceraian",
  },
];

const Event: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const SlickNextArrow = () => {
    return (
      <div
        className="bg-white shadow-xl hover:bg-slate-100 shadow-gray-300 rounded-full p-2 md:p-4 items-center cursor-pointer w-8 h-8 md:w-12 md:h-12"
        onClick={() => sliderRef?.current?.slickNext()}
      >
        <FaChevronRight width={50} />
      </div>
    );
  };

  const SlickPrevArrow = () => {
    return (
      <div
        className="bg-white shadow-xl hover:bg-slate-100 shadow-gray-300 rounded-full p-2 md:p-4 items-center cursor-pointer w-8 h-8 md:w-12 md:h-12"
        onClick={() => sliderRef?.current?.slickPrev()}
      >
        <FaChevronLeft width={10} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <section id="event">
      <div className="mx-6 my-4 md:mx-10">
        <div className="space-y-3 md:space-y-6">
          <div className="flex flex-row justify-between">
            <div className="capitalize">
              <h4 className="font-bold tracking-wide text-[#1B2C62] text-md md:text-xl">
                praktisi hallaw
              </h4>
              <h1 className="font-black text-[#BE9E6D] text-xl md:text-4xl font-['Martel']">
                praktisi hukum professional
              </h1>
            </div>

            <div className="flex gap-3">
              <SlickPrevArrow />

              <SlickNextArrow />
            </div>
          </div>

          <div>
            <Slider ref={sliderRef} {...settings}>
              {dataEvent.map((item, index) => (
                <div key={index}>
                  <EventCard {...item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
