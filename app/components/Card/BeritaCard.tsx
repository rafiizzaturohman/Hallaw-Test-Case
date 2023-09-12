import React from "react";

interface BeritaCardProps {
  title: string;
  imageName: string;
  date: string;
  no: number;
}

const BeritaCard: React.FC<BeritaCardProps> = ({
  title,
  imageName,
  date,
  no,
}) => {
  return (
    <div className="container md:my-4 md:mx-2 py-2 md:py-1">
      <div
        className={
          no % 2 === 1
            ? "bg-white shadow-md rounded-2xl md:rounded-3xl p-3 md:p-5 mr-3"
            : "bg-[#F1F3FA] shadow-md rounded-2xl md:rounded-3xl p-3 md:p-5 mr-3"
        }
      >
        <div className="space-y-4 md:space-y-7">
          <div className="flex justify-center">
            <img
              src={`/images/berita/${imageName}.png`}
              alt={imageName}
              className=""
            />
          </div>

          <div className="space-y-0.5 md:space-y-2 px-3">
            <p className="text-[#636772] font-normal text-sm md:text-lg">
              {date}
            </p>
            <p className="font-semibold text-sm md:text-xl">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeritaCard;
