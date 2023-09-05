import React from "react";

const Tentang: React.FC = () => {
  return (
    <section id="Tentang">
      <div className="flex justify-center my-8">
        <div className="flex flex-row gap-8 md:gap-20 items-center w-3/4">
          <div>
            <img
              src="/icons/HallawIcon.png"
              alt="Hallaw"
              className="md:w-[722px]"
            />
          </div>
          <div className="space-y-1.5 md:space-y-[12px]">
            <div className="space-y-0.5 md:space-y-1">
              <h4 className="capitalize text-[#1B2C62] font-bold text-md md:text-xl">
                tentang hallaw
              </h4>
              <h1 className="capitalize font-black text-xl md:text-4xl text-[#BE9E6D] font-['Martel']">
                aplikasi bantuan hukum
              </h1>
            </div>

            <p className="text-xs md:text-lg">
              Aplikasi Hallaw ada untuk memudahkan masyarakat mendapatkan
              bantuan hukum dengan kualitas terbaik dan harga yang sangat
              terjangkau. Kami membantu menghubungkan Praktisi Hukum dengan
              Masyarakat yang membutuhkan bantuan hukum dan sejenisnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
