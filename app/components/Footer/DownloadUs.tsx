import Link from "next/link";
import React from "react";
import DownlaodGooglePlay from "./Download/GooglePlay";
import DownloadAppStore from "./Download/AppStore";

const DownloadUs: React.FC = () => {
  return (
    <div id="Download" className="relative ">
      <div className="capitalize space-y-3 md:space-y-6 w-32 md:w-40">
        <h4 className="text-md md:text-[22px] font-semibold">Download</h4>

        <p className="text-sm md:text-lg font-normal">
          download aplikasi hallaw
        </p>

        <DownlaodGooglePlay />
        <DownloadAppStore />
      </div>
      <div className="absolute flex flex-row justify-evenly bottom-0 space-x-2 md:space-x-4">
        <Link href={"#"}>
          <img src="/icons/iconsSosMed/instagram.png" alt="Instagram" />
        </Link>
        <Link href={"#"}>
          <img src="/icons/iconsSosMed/facebook.png" alt="Facebook" />
        </Link>
        <Link href={"#"}>
          <img src="/icons/iconsSosMed/tiktok.png" alt="TikTok" />
        </Link>
      </div>
    </div>
  );
};

export default DownloadUs;
