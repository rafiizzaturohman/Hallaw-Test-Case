import React from "react";

interface KontakCardProps {
  name: string;
  phone: string;
}

const KontakCard: React.FC<KontakCardProps> = ({ name, phone }) => {
  return (
    <div className="container md:my-1 p-1.5 base:px-5 base:py-2">
      <div className="border md:border-2 border-[#E5E9F6] rounded-2xl p-3 md:p-6">
        <div className="flex flex-row gap-3 items-center">
          <img
            src="/icons/call.png"
            alt="Call"
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <div>
            <p className="font-semibold text-[8px] xs:text-xs md:text-lg">
              {phone}
            </p>

            <p className="capitalize text-[#636772] text-[8px] xs:text-xs md:text-lg">
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontakCard;
