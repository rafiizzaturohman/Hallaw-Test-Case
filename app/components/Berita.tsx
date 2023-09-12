"use client";

import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import BeritaCard from "./Card/BeritaCard";

const dataBerita = [
  {
    title: "Variable Demokrasi di Negara Indonesia Saat Ini",
    date: "18 November 2022",
    imageName: "1",
  },
  {
    title: "Hak Pasien Atas Isi Rekam Medis yang Terjadi Pada...",
    date: "18 November 2022",
    imageName: "2",
  },
  {
    title: "Variable Demokrasi di Negara Indonesia Saat Ini",
    date: "18 November 2022",
    imageName: "3",
  },
  {
    title: "Hak Pasien Atas Isi Rekam Medis yang Terjadi Pada...",
    date: "18 November 2022",
    imageName: "2",
  },
  {
    title: "Hak Pasien Atas Isi Rekam Medis yang Terjadi Pada...",
    date: "18 November 2022",
    imageName: "2",
  },
];

const Berita: React.FC = () => {
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
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <section id="berita">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-6 my-4 md:mx-10">
          <div className="space-y-3 md:space-y-6">
            <div className="flex flex-row justify-between">
              <div>
                <h4 className="capitalize font-bold tracking-wide text-[#1B2C62] text-md md:text-xl">
                  berita
                </h4>
                <h1 className="font-black text-[#BE9E6D] text-xl md:text-4xl font-['Martel']">
                  Berita Terbaru dari Hallaw
                </h1>
              </div>

              <div className="flex gap-3">
                <SlickPrevArrow />

                <SlickNextArrow />
              </div>
            </div>

            <div>
              <Slider ref={sliderRef} {...settings}>
                {dataBerita.map((item, index) => (
                  <div key={index}>
                    <BeritaCard {...item} no={index} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Berita;
