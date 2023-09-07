import React from "react";

interface PraktisiCardProps {
  image: string;
  name: string;
  job: string;
  rating: string;
}

const PraktisiCard: React.FC<PraktisiCardProps> = ({
  image,
  name,
  job,
  rating,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-xl my-1.5 w-[167px] md:my-5 md:px-6 md:w-[334px] md:h-[140px]">
      <div className="flex flex-row gap-4 md:gap-6 items-center px-3 py-2 md:px-0 md:py-7">
        <img
          src={`/images/praktisi/${image}.png`}
          alt={image}
          className="w-6 h-6 md:w-20 md:h-20"
        />

        <div className="space-y-0.5 md:space-y-1">
          <div>
            <h4 className="capitalize font-semibold text-sm md:text-base">
              {name}
            </h4>

            <p className="text-[#636772] text-xs md:text-base">{job}</p>
          </div>

          <div className="flex flex-row gap-1 md:gap-2 items-center">
            <div id="star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </div>

            <p className="text-xs text-[#AEAFB5] font-normal md:text-base">
              {rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PraktisiCard;