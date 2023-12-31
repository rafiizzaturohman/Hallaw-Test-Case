import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  place: string;
  about: string;
  imageName: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  about,
  date,
  imageName,
  place,
}) => {
  return (
    <div className="p-2">
      <div className="space-y-1 md:space-y-6">
        <div className="relative">
          <img
            src={`/images/event/${imageName}.png`}
            alt={imageName}
            className=""
          />

          <div className="capitalize absolute bottom-2 left-2 md:bottom-4 md:left-4">
            <div className="bg-white px-2 py-0.5 md:px-6 md:py-2 rounded-full">
              <h4 className="text-[10px] md:text-sm text-[#BE9E6D] font-bold tracking-wide">
                {about}
              </h4>
            </div>
          </div>
        </div>

        <div className="space-y-1 md:space-y-2">
          <h4 className="h-20 md:truncate md:h-[60px] md:whitespace-pre-line font-semibold text-sm md:text-2xl">
            {title}
          </h4>

          <p className="capitalize text-[#636772] font-normal text-xs md:text-lg">
            {date} | {place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
