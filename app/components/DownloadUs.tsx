import Link from "next/link";

const Download = () => {
  return (
    <section id="download">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-6 my-4 md:mx-10">
          <div className="flex justify-center">
            <div className="relative">
              <img src="/back.png" alt="background" />

              <div className="absolute -top-9 px-6 md:-top-16 md:px-[70px] flex flex-row items-center space-x-6 md:space-x-24">
                <div className="text-white space-y-2 md:space-y-7">
                  <div className=" md:space-y-1">
                    <h4 className="font-black text-md md:text-3xl font-['Martel'] md:w-[441px]">
                      Awam masalah hukum? Download aplikasi Hallaw
                    </h4>
                    <p className="font-normal text-[10px] md:text-base md:w-[394px]">
                      Konsultasi hukum jadi lebih mudah dan murah! Download
                      sekarang!
                    </p>
                  </div>

                  <div className="flex flex-row gap-2 md:gap-4">
                    <Link
                      href={"#"}
                      className="flex flex-row rounded-lg gap-2 bg-black items-center px-2 py-1 md:px-2 md:py-1"
                    >
                      <img
                        src="/icons/google-play.png"
                        alt="Google Play"
                        className="w-3 h-3 md:w-7 md:h-7"
                      />

                      <div className="capitalize text-white -space-y-0.5">
                        <p className="text-[8px] md:text-xs whitespace-nowrap">
                          get it on
                        </p>
                        <h4 className="font-bold text-[10px] md:text-lg">
                          google play
                        </h4>
                      </div>
                    </Link>
                    <Link
                      href={"#"}
                      className="flex flex-row rounded-lg gap-2 bg-black items-center px-2 py-1 md:px-3 md:py-1.5"
                    >
                      <img
                        src="/icons/apple.png"
                        alt="Apple"
                        className="w-3 h-4 md:w-6 md:h-7"
                      />

                      <div className="text-white -space-y-0.5">
                        <p className="text-[6px] md:text-xs whitespace-nowrap">
                          Download on the
                        </p>

                        <h4 className="capitalize font-bold text-xs md:text-lg">
                          app store
                        </h4>
                      </div>
                    </Link>
                  </div>
                </div>

                <img
                  src="/images/phoness.png"
                  alt="Apps"
                  className="w-44 h-52 md:w-[386px] md:h-[466px]"
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
