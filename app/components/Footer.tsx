import React from "react";
import ProfileKantor from "./Footer/ProfileKantor";
import Menu from "./Footer/Menu/Menu";
import Kontak from "./Footer/Kontak";
import DownloadUs from "./Footer/DownloadUs";

const Footer: React.FC = () => {
  return (
    <section id="footer">
      <div className="bg-gradient-to-b from-[#FAFBFD] to-[#F1F3FA] shadow-2xl">
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row justify-evenly p-7 md:py-20">
          <div className="flex flex-row justify-evenly md:gap-28">
            <ProfileKantor />
            <Menu />
          </div>

          <div className="flex flex-row justify-evenly md:gap-28">
            <Kontak />
            <DownloadUs />
          </div>
        </div>

        <div className="bg-[#1B2C62] py-3 md:py-7">
          <h1 className="text-[#8F97B0] text-center text-xs md:text-base font-['Inter']">
            Copyright 2022. PT Halo Advokat Indonesia
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
