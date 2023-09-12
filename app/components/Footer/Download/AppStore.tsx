import Link from "next/link";
import React from "react";

const DownloadAppStore: React.FC = () => {
  return (
    <Link
      href={"#"}
      className="flex flex-row rounded-lg gap-2 bg-black items-center px-2 py-1.5 md:px-3 md:py-1.5"
    >
      <img
        src="/icons/apple.png"
        alt="Apple"
        className="w-5 h-6 md:w-6 md:h-7"
      />

      <div className="text-white md:-space-y-1">
        <p className="text-[8px] md:text-xs whitespace-nowrap">
          Download on the
        </p>
        <h4 className="capitalize font-bold text-sm md:text-xl">app store</h4>
      </div>
    </Link>
  );
};

export default DownloadAppStore;
