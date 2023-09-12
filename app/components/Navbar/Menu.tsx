"use client";

import MenuItem from "./MenuItem";

import { useCallback, useState } from "react";
import { BiMenu } from "react-icons/bi";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative md:hidden">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-0 flex flex-row items-center gap-3 rounded-md cursor-pointer hover:shadow-md transition"
        >
          <BiMenu size={30} color="white" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 rounded-xl shadow-md w-[60vw] sm:w-[50vw] md:w-3/4 bg-white overflow-hidden right-0 top-20 text-sm">
          <div className="flex flex-col cursor-pointer">
            <MenuItem label="Beranda" id={"#"} onClick={toggleOpen} />
            <MenuItem label="Layanan" id={"#layanan"} onClick={toggleOpen} />
            <MenuItem
              label="Fitur & Keunggulan"
              id={"#keunggulan"}
              onClick={toggleOpen}
            />
            <MenuItem
              label="Praktisi Hukum"
              id={"#praktisi"}
              onClick={toggleOpen}
            />
            <MenuItem
              label="Testimoni"
              id={"#testimoni"}
              onClick={toggleOpen}
            />
            <MenuItem label="Event" id={"#event"} onClick={toggleOpen} />
            <MenuItem label="Kontak" id={"#kontak"} onClick={toggleOpen} />
            <MenuItem label="Berita" id={"#berita"} onClick={toggleOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
