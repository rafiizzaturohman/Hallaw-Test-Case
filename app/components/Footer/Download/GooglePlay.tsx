import Link from "next/link";
import React from "react";

const DownlaodGooglePlay: React.FC = () => {
  return (
    <Link
      href={"#"}
      className="flex flex-row rounded-lg gap-2 bg-black items-center px-3 py-1.5"
    >
      <img
        src="/icons/google-play.png"
        alt="Google Play"
        className="w-[17px] h-[17px] md:w-6 md:h-6"
      />

      <div className="text-white md:-space-y-1">
        <p className="uppercase text-[9px]">get it on</p>
        <h4 className="capitalize font-bold text-xs md:text-base">
          google play
        </h4>
      </div>
    </Link>
  );
};

export default DownlaodGooglePlay;
