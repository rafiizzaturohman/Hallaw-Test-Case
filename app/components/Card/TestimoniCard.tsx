import React from "react";

interface TestimoniCardProps {
  imageName: string;
  name: string;
  job: string;
  comment: string;
}

const TestimoniCard: React.FC<TestimoniCardProps> = ({
  imageName,
  name,
  job,
  comment,
}) => {
  return (
    <div className="md:my-6 md:mx-2 px-4 py-4 md:px-0.5 md:py-1">
      <div className="bg-white shadow-lg p-4 md:px-10 md:py-8 rounded-xl space-y-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-center">
            <img
              src={`/images/testimoni/${imageName}.png`}
              alt={imageName}
              className="w-12 h-12 md:w-16 md:h-16"
            />

            <div>
              <h4 className="capitalize text-sm md:text-lg font-semibold">
                {name}
              </h4>
              <h6 className="text-[#636772] text-sm md:text-lg">{job}</h6>
            </div>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="66"
              height="66"
              viewBox="0 0 86 86"
              fill="none"
            >
              <path
                d="M61.5439 60.9167C59.7522 60.9167 58.3786 60.1558 57.4231 58.6341C56.4675 57.11 56.4078 55.5417 57.2439 53.9292L60.9168 46.5833H53.7502C51.7793 46.5833 50.0928 45.881 48.6905 44.4763C47.2858 43.0741 46.5835 41.3875 46.5835 39.4167V28.6667C46.5835 26.6958 47.2858 25.0093 48.6905 23.607C50.0928 22.2023 51.7793 21.5 53.7502 21.5H64.5002C66.471 21.5 68.1587 22.2023 69.5634 23.607C70.9657 25.0093 71.6668 26.6958 71.6668 28.6667V44.8812C71.6668 45.4187 71.6214 45.9718 71.5307 46.5403C71.4423 47.1065 71.2488 47.6285 70.9502 48.1062L65.8439 58.2292C65.4259 59.0653 64.8286 59.7222 64.0522 60.2C63.2759 60.6778 62.4397 60.9167 61.5439 60.9167ZM29.2939 60.9167C27.5022 60.9167 26.1286 60.1558 25.1731 58.6341C24.2175 57.11 24.1578 55.5417 24.9939 53.9292L28.6668 46.5833H21.5002C19.5293 46.5833 17.8428 45.881 16.4405 44.4763C15.0358 43.0741 14.3335 41.3875 14.3335 39.4167V28.6667C14.3335 26.6958 15.0358 25.0093 16.4405 23.607C17.8428 22.2023 19.5293 21.5 21.5002 21.5H32.2502C34.221 21.5 35.9087 22.2023 37.3134 23.607C38.7157 25.0093 39.4168 26.6958 39.4168 28.6667V44.8812C39.4168 45.4187 39.3726 45.9718 39.2842 46.5403C39.1935 47.1065 38.9988 47.6285 38.7002 48.1062L33.5939 58.2292C33.1759 59.0653 32.5786 59.7222 31.8022 60.2C31.0259 60.6778 30.1897 60.9167 29.2939 60.9167Z"
                fill="#E7EAF2"
              />
            </svg>
          </div>
        </div>

        <div>
          <p className="text-sm md:text-lg">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimoniCard;
