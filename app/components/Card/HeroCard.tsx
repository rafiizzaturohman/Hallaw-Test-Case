import Link from "next/link";

interface HeroCardProps {
  title: string;
  text: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, text }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-evenly items-center mx-10 md:mx-28 text-white">
        <div className="space-y-4 md:space-y-8">
          <h4 className="capitalize font-['Martel'] font-black text-3xl md:text-5xl">
            {title}
          </h4>

          <p className="md:w-10/12">{text}</p>

          <div className="flex flex-row gap-2 md:gap-4">
            <Link
              href={"#"}
              className="flex flex-row rounded-lg gap-2 bg-black items-center px-3 py-1.5"
            >
              <img
                src="/icons/google-play.png"
                alt="Google Play"
                className="w-6 h-6"
              />

              <div className="text-white -space-y-1">
                <p className="uppercase text-xs">get it on</p>
                <h4 className="capitalize font-bold md:text-lg">google play</h4>
              </div>
            </Link>
            <Link
              href={"#"}
              className="flex flex-row rounded-lg gap-2 bg-black items-center px-3 py-1.5"
            >
              <img src="/icons/apple.png" alt="Apple" className="w-6 h-7" />

              <div className="text-white -space-y-1">
                <p className="text-[10px] md:text-xs whitespace-nowrap">
                  Download on the
                </p>
                <h4 className="capitalize font-bold md:text-lg">app store</h4>
              </div>
            </Link>
          </div>
        </div>

        <img src="/images/phoness.png" alt="Apps" />
      </div>
    </div>
  );
};

export default HeroCard;
