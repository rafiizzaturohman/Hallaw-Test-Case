import Link from "next/link";

const Download = () => {
  return (
    <section id="download">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-6 my-4 md:mx-10">
          <div className="flex justify-center">
            <div className="relative">
              <img src="/back.png" alt="background" />

              <div className="absolute -top-8 xs:-top-14 px-6 sm:-top-16 base:-top-8 md:-top-16 xs:px-12 base:px-[70px] flex flex-row items-center justify-evenly space-x-6 base:space-x-24">
                <div className="text-white space-y-1 xs:space-y-2 base:space-y-7">
                  <div className=" md:space-y-1">
                    <h4 className="font-black text-[9px] sm:text-[14px] xs:text-[14px] base:text-xl lg:text-3xl font-['Martel'] md:w-[441px]">
                      Awam masalah hukum? Download aplikasi Hallaw
                    </h4>
                    <p className="font-normal text-[8px] xs:text-[10px] sm:text-[12px] base:text-md lg:text-lg md:w-[394px]">
                      Konsultasi hukum jadi lebih mudah dan murah! Download
                      sekarang!
                    </p>
                  </div>

                  <div className="flex flex-row gap-1 base:gap-2 md:gap-4">
                    <Link
                      href={"#"}
                      className="flex flex-row rounded-md base:rounded-lg gap-1 base:gap-2 bg-black items-center p-1 base:px-2 base:py-1"
                    >
                      <img
                        src="/icons/google-play.png"
                        alt="Google Play"
                        className="w-3 h-3 sm:w-4 sm:h-4 base:w-5 base:h-5 md:w-7 md:h-7"
                      />

                      <div className="capitalize text-white sm:-space-y-1 base:-space-y-0.5">
                        <p className="text-[5px] xs:text-[7px] base:text-xs md:text-sm whitespace-nowrapp">
                          get it on
                        </p>
                        <h4 className="font-bold text-[7px] xs:text-[10px] base:text-base md:text-lg whitespace-nowrap">
                          google play
                        </h4>
                      </div>
                    </Link>
                    <Link
                      href={"#"}
                      className="flex flex-row rounded-md base:rounded-lg gap-1 base:gap-2 bg-black items-center py-0.5 px-2 base:px-3 base:py-1.5"
                    >
                      <img
                        src="/icons/apple.png"
                        alt="Apple"
                        className="w-3 h-4 sm:w-4 sm:h-5 base:w-5 base:h-6 md:w-6 md:h-7"
                      />

                      <div className="text-white base:-space-y-0.5">
                        <p className="text-[5px] xs:text-[7px] sm:text-[9px] base:text-xs md:text-xs whitespace-nowrap">
                          Download on the
                        </p>

                        <h4 className="capitalize font-bold text-[7px] sm:text-[9px] xs:text-[10px] base:text-base md:text-xl whitespace-nowrap">
                          app store
                        </h4>
                      </div>
                    </Link>
                  </div>
                </div>

                <img
                  src="/images/phoness.png"
                  alt="Apps"
                  className="w-32 xs:w-56 sm:w-64 base:w-[20rem] base:h-[22rem] md:w-[386px] md:h-[466px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
