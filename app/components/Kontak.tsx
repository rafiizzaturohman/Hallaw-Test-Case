"use client";

import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

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

  const settings = {
    arrows: false,
    infinite: false,
    slidesToShow: 2,
    slidesPerRow: 2,
    speed: 500,
    rows: 1,
  };

  return (
    <section id="kontak">
      <div>
        <div className="mx-6 my-6 md:mx-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
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

            <div className="relative bg-white shadow-md rounded-3xl p-4 md:p-10 md:w-[698px] md:h-[310px]">
              <Slider ref={sliderRef} {...settings}>
                {dataKontak.map((item, index) => (
                  <div key={index}>
                    <div className="container md:my-4 md:mx-2 p-4 md:px-0.5 md:py-1">
                      <div className="flex flex-row justify-evenly">
                        <img
                          src="/icons/call.png"
                          alt="Call"
                          className="w-8 h-8 md:w-12 md:h-12"
                        />
                        <div>
                          <p className="font-semibold text-sm md:text-lg">
                            {item.phone}
                          </p>

                          <p className="capitalize text-[#636772] text-sm md:text-lg">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </div>
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

export default Kontak;
