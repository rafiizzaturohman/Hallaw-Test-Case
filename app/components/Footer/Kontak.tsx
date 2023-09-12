import React from "react";
import HotLineList from "./Kontak/HotLineList";
import KontakList from "./Kontak/KontakList";

const dataKontak = [
  {
    iconName: "phone",
    contact: "022-123456",
  },
  {
    iconName: "whatsapp",
    contact: "+6281234567890",
  },
  {
    iconName: "mail",
    contact: "hallaw@cs.com",
  },
];

const dataHotLine = [
  {
    phone: "0811798222",
  },
  {
    phone: "0811254222",
  },
  {
    phone: "0811684222",
  },
  {
    phone: "0811856333",
  },
  {
    phone: "0811748111",
  },
];

const Kontak: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      <div id="kontaklist" className="space-y-3 md:space-y-6">
        <h4 className="capitalize text-md md:text-[22px] font-semibold w-52 md:w-80">
          kontak
        </h4>

        <div className="space-y-1.5 md:space-y-4">
          {dataKontak.map((item, index) => (
            <div key={index}>
              <KontakList {...item} />
            </div>
          ))}
        </div>
      </div>

      <div id="HotLineList" className="space-y-3 md:space-y-6">
        <h4 className="capitalize text-md md:text-[22px] font-semibold w-52 md:w-80">
          hot line
        </h4>

        <div className="space-y-1.5 md:space-y-4">
          {dataHotLine.map((item, index) => (
            <div key={index}>
              <HotLineList {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kontak;
