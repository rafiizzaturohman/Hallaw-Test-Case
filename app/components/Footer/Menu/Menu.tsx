import React from "react";
import MenuList from "./MenuList";

const dataMenu = [
  {
    title: "beranda",
    link: "beranda",
  },
  {
    title: "layanan",
    link: "layanan",
  },
  {
    title: "fitur & keunggulan",
    link: "keunggulan",
  },
  {
    title: "praktisi hukum",
    link: "praktisi",
  },
  {
    title: "testimoni",
    link: "testimoni",
  },
  {
    title: "event",
    link: "event",
  },
  {
    title: "kontak",
    link: "kontak",
  },
  {
    title: "berita",
    link: "berita",
  },
];

const Menu: React.FC = () => {
  return (
    <div className="capitalize space-y-3 md:space-y-6">
      <h4 className="text-md md:text-[22px] font-semibold">menu</h4>

      <div className="space-y-1.5 md:space-y-4">
        {dataMenu.map((item, index) => (
          <div key={index}>
            <MenuList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
