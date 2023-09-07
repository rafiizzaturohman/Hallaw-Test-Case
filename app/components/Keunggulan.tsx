import React from "react";
import KeunggulanCard from "./Card/KeunggulanCard";

const dataKeunggulan = [
  {
    title: "Tersedia Pro Bono",
    descriptions:
      "Layanan yang diberikan pada masyarakat yang tidak mampu secara finansial.",
  },
  {
    title: "Ditangani oleh Praktisi Hukum Handal & Professional",
    descriptions:
      "Anda bebas memilih praktisi hukum sesuai dengan permasalahan hukum yang sedang dialami.",
  },
  {
    title: "Konsultasi Dimana Saja dan Kapan Saja",
    descriptions:
      "Anda bisa melakukan konsultasi hukum melalui smartphone kapan saja dan dimana saja lewat aplikasi Hallaw.",
  },
  {
    title: "Stand By 24/7",
    descriptions:
      "Kami memberikan layanan non stop 24 jam penuh, dimana sigap ketika Anda membutuhkan bantuan hukum.",
  },
  {
    title: "Gratis Konsultasi",
    descriptions:
      "Gratis konsultasi di 15 menit pertama, sehingga biaya konsultasi bisa lebih hemat.",
  },
  {
    title: "Biaya Konsultasi yang Terjangkau",
    descriptions:
      "Hallaw memiliki berbagai Advokat konseling online yang sesuai dengan anggaran dan kebutuhan Anda.",
  },
];

const Keunggulan: React.FC = () => {
  return (
    <section id="keunggulan">
      <div className="mx-6 my-6 md:mx-10">
        <h4 className="capitalize text-[#1B2C62] text-md md:text-lg font-bold tracking-wide">
          fitur & keunggulan hallaw
        </h4>
        <div className="md:grid md:grid-cols-2 items-center">
          <div className="space-y-7">
            <div className="capitalize">
              <h1 className="font-black text-[#BE9E6D] text-xl md:text-4xl font-['Martel'] md:w-1/2">
                kenapa harus aplikasi hallaw
              </h1>
            </div>

            <img
              src="/icons/mascot/mascot.png"
              alt="Mascot"
              className="w-[237px] h-[279px] md:w-[417px] md:h-[479px]"
            />
          </div>

          <div className="space-y-2 md:space-y-5">
            {dataKeunggulan.map((item, index) => {
              return (
                <div key={index}>
                  <KeunggulanCard {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keunggulan;
