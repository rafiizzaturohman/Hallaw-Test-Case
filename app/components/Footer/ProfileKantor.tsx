import React from "react";

const ProfileKantor: React.FC = () => {
  return (
    <div className="space-y-3 md:space-y-5">
      <div className="space-y-2 md:space-y-5">
        <img
          src="/icons/HallawIcon.png"
          alt="Hallaw"
          className="w-14 md:w-36"
        />
        <img
          src="/icons/HallawText.png"
          alt="Hallaw"
          className="w-16 h-2 md:w-36 md:h-4"
        />
      </div>

      <div>
        <h4 className="capitalize text-xs md:text-lg font-bold">
          alamat kantor pusat
        </h4>

        <p className="text-xs md:text-lg font-normal w-52 md:w-80">
          Jl Duta Niaga Raya No. 22, Blok TM II, Kav 10. RT 006/ RW 012, Kel.
          Pondok Pinang, Kec. Kebayoran Baru, Jakarta Selatan 12310
        </p>
      </div>
    </div>
  );
};

export default ProfileKantor;
