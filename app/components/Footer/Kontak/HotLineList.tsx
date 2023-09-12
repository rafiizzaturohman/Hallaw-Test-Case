import React from "react";

interface HLListProps {
  phone: string;
}

const HotLineList: React.FC<HLListProps> = ({ phone }) => {
  return (
    <div className="flex flex-row space-x-2 md:space-x-4 items-center">
      <img src="/icons/footerIcons/phone.png" alt="phone" />
      <h4 className="text-sm md:text-lg">{phone}</h4>
    </div>
  );
};

export default HotLineList;
