import Link from "next/link";
import React from "react";
import DownlaodGooglePlay from "./Download/GooglePlay";
import DownloadAppStore from "./Download/AppStore";

const DownloadUs: React.FC = () => {
  return (
    <div id="Download">
      <div className="capitalize space-y-3 md:space-y-6 w-32 md:w-40">
        <h4 className="text-md md:text-[22px] font-semibold">Download</h4>

        <p className="text-sm md:text-lg font-normal">
          download aplikasi hallaw
        </p>

        <DownlaodGooglePlay />
        <DownloadAppStore />
      </div>
    </div>
  );
};

export default DownloadUs;
