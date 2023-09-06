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
    <div className="container my-4 md:mx-2">
      <div className="bg-white shadow-xl shadow/50 h-44 md:h-[466px] md:w-[334px] px-6 py-10 rounded-lg">
        <div className="flex flex-row md:flex-col justify-evenly gap-4 items-center md:items-start md:space-y-4">
          <div className="flex justify-center items-center bg-[#F1F3FA] w-40 h-16 md:w-24 md:h-24 p-2 md:p-4 rounded-lg">
            <img
              src={`/icons/iconLayanan/${imageName}.png`}
              alt={imageName}
              className="w-auto"
            />
          </div>

          <div className="space-y-2">
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
