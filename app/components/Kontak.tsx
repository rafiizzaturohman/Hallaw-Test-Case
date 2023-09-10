"use client";

import Link from "next/link";
import React, { useRef } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import Slider from "react-slick";
import KontakCard from "./Card/KontakCard";

const dataKontak = [
  {
    phone: "022-12345611",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345622",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345633",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345644",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345655",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345666",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345677",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345688",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345711",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345722",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345733",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345744",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345755",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-123457266",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345777",
    name: "Kantor Badan Hukum",
  },
  {
    phone: "022-12345788",
    name: "Kantor Badan Hukum",
  },
];

const Kontak: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

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

  const settings = {
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesPerRow: 2,
    speed: 500,
    variableWidth: false,
    rows: 2,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <section id="kontak">
      <div>
        <div className="mx-6 my-6 md:mx-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            <div className="">
              <div className="flex flex-row justify-between md:flex-col space-y-4 md:space-y-8 capitalize">
                <div className="">
                  <h4 className="font-bold text-[#1B2C62] text-md md:text-xl">
                    kontak
                  </h4>

                  <h1 className="font-black text-[#BE9E6D] text-xl md:text-[38px] md:leading-[52px] md:w-[284px] font-['Martel']">
                    kontak badan hukum lainnya
                  </h1>
                </div>

                <div>
                  <Link
                    href={"#"}
                    className="text-xs md:text-lg bg-[#1B2C62] text-white rounded-full px-3 py-2 md:px-9 md:py-4"
                  >
                    lihat selengkapnya
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex flex-row max-w-7xl bg-white shadow-md rounded-3xl p-3 md:w-[698px] md:h-[310px] items-center">
              <div className="absolute -left-5 md:-left-5">
                <SlickPrevArrow />
              </div>
              <div className="container">
                <Slider ref={sliderRef} {...settings}>
                  {dataKontak.map((item, index) => (
                    <div key={index}>
                      <KontakCard {...item} />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="absolute -right-5 md:-right-5">
                <SlickNextArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
