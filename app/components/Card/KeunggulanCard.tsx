import React from "react";

interface KeunggulanCardProps {
  title: string;
  descriptions: string;
}

const KeunggulanCard: React.FC<KeunggulanCardProps> = ({
  title,
  descriptions,
}) => {
  return (
    <div className="flex flex-row gap-x-4 md:gap-x-8 items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="38"
          viewBox="0 0 44 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="20" fill="#1B2C62" />
          <path
            d="M18.3201 27.5159L10.8461 18.8222C10.3603 18.2572 10.363 17.4212 10.8523 16.8593L11.5788 16.025C12.1048 15.421 13.0126 15.3368 13.6407 15.8337L18.8649 19.9667C19.2767 20.2924 19.8699 20.244 20.2264 19.8586C27.0497 12.4833 34.7831 5.81424 41.7473 3.57165C42.2599 3.40656 42.5399 4.03134 42.1068 4.35155C33.67 10.5898 26.8774 18.536 20.7063 27.3881C20.1419 28.1977 18.9635 28.2644 18.3201 27.5159Z"
            fill="#BE9E6D"
          />
        </svg>
      </div>

      <div>
        <h3 className="md:text-xl font-semibold">{title}</h3>

        <p className="text-[#636772] text-sm md:text-lg">{descriptions}</p>
      </div>
    </div>
  );
};

export default KeunggulanCard;
