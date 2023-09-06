import Link from "next/link";
import React from "react";

const LayananDarurat: React.FC = () => {
  return (
    <div className="fixed z-40 bottom-8 right-4 md:bottom-14 md:right-10">
      <Link href="https://www.whatsapp.com">
        <div className="bg-gradient-to-br from-[#28E776] to-[#01D160] rounded-full cursor-pointer">
          <div className="flex flex-row items-center gap-1 md:gap-2 px-3 py-2 md:px-8 md:py-3">
            <img
              src="/icons/iconsSosMed/whatsapp.png"
              alt="WhatsApp"
              className="w-5 md:w-8"
            />

            <h4 className="capitalize text-white font-normal text-sm md:text-lg">
              layanan darurat
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LayananDarurat;
