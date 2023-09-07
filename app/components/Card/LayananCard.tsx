import React from "react";

interface LayananCardProps {
  title: string;
  imageName: string;
  descriptions: string;
}

const LayananCard: React.FC<LayananCardProps> = ({
  title,
  imageName,
  descriptions,
}) => {
  return (
    <div className="container md:my-4 md:mx-2 p-4 md:px-0.5 md:py-1">
      <div className="flex flex-col justify-center md:justify-normal bg-white shadow-lg shadow/50 h-[184px] w-auto md:h-[466px] md:w-[334px] p-5 md:py-12 rounded-2xl">
        <div className="flex flex-row md:flex-col justify-evenly gap-4 items-center md:items-start md:space-y-4">
          <div className="flex justify-center items-center bg-[#F1F3FA] w-40 h-16 md:w-24 md:h-24 p-2 md:p-4 rounded-2xl">
            <img
              src={`/icons/iconLayanan/${imageName}.png`}
              alt={imageName}
              className="w-auto"
            />
          </div>

          <div className="space-y-1 md:space-y-2">
            <h3 className="capitalize text-[#BE9E6D] font-semibold md:text-2xl">
              {title}
            </h3>
            <p className="text-xs md:text-lg">{descriptions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayananCard;
