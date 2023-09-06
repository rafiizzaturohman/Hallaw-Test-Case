"use client";

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider from "react-slick";
import LayananCard from "./Card/LayananCard";

const dataLayanan = [
  {
    title: "Konsultasi Online",
    descriptions:
      "Layanan yang diberikan oleh Hallaw untuk memudahkan Klien melakukan konsultasi hukum via Chat atau Video Call. Sehingga, lebih mudah dan cepat mendapatkan solusi hukum yang Klien butuhkan.",
    imageName: "onlineconsult",
  },
  {
    title: "Konsultasi tatap muka",
    descriptions:
      "Aplikasi akan secara otomatis merekomendasikan konsultan hukum terdekat dengan tempat Klien tinggal. Klien bisa membuat janji bertemu dengan konsultan hukum sesuai dengan masalah yang dialami saat ini.",
    imageName: "facetoface",
  },
  {
    title: "langkah hukum",
    descriptions:
      "Langkah lanjutan yang ditawarkan oleh konsultan hukum, setelah Klien melakukan konsultasi dengan praktisi hukum Hallaw.",
    imageName: "legalstep",
  },
  {
    title: "buka kasus",
    descriptions:
      "Bagikan/ceritakan kasus hukum di layanan buka kasus. Praktisi hukum yang ada di Hallaw akan membantu menjawab dan menawarkan solusi terbaik untuk kasus tersebut.",
    imageName: "opencase",
  },
  {
    title: "layanan darurat",
    descriptions:
      "Fitur layanan darurat dimana bisa dihubungi kapan saja dan dimana saja. Beroperasi 24/7 siap mekayani ketika Perorangan/Perusahaan terjerat kasus hukum.",
    imageName: "urgentservice",
  },
  {
    title: "pro bono",
    descriptions:
      "Jenis layanan hukum yang diberikan bagi masyarakat yang tidak mampu secara finansial dan wajib dibuktikan dengan dokumen-dokumen pendukung yang sah menurut Undang - Undang.",
    imageName: "probono",
  },
];

const Layanan: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
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
    <section id="Layanan">
      <div className="mx-6 my-6 md:mx-10">
        <div className="space-y-3 md:space-y-6">
          <div className="flex flex-row justify-between">
            <div className="capitalize">
              <h4 className="font-bold text-[#1B2C62] text-md md:text-xl">
                layanan
              </h4>

              <h1 className="font-black text-[#BE9E6D] text-xl md:text-4xl font-['Martel']">
                layanan hukum hallaw
              </h1>
            </div>

            <div className="flex gap-3">
              <div
                className="bg-white shadow-xl hover:bg-slate-100 shadow-gray-300 rounded-full p-3 md:p-4 items-center cursor-pointer w-10 h-10 md:w-12 md:h-12"
                onClick={() => sliderRef?.current?.slickPrev()}
              >
                <FaChevronLeft width={10} />
              </div>

              <div
                className="bg-white shadow-xl hover:bg-slate-100 shadow-gray-300 rounded-full p-3 md:p-4 items-center cursor-pointer w-10 h-10 md:w-12 md:h-12"
                onClick={() => sliderRef?.current?.slickNext()}
              >
                <FaChevronRight width={50} />
              </div>
            </div>
          </div>

          <div>
            <Slider ref={sliderRef} {...settings}>
              {dataLayanan.map((item, index) => (
                <div key={index}>
                  <LayananCard
                    title={item.title}
                    imageName={item.imageName}
                    descriptions={item.descriptions}
                  />
                </div>
              ))}
              <div></div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
