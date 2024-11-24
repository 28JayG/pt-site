import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const StartProjectToday: React.FC = () => {
  return (
    <MaxWidthWrapper className="hidden lg:block my-20 ">
      <div className="relative bg-green-900 text-center text-white rounded-3xl h-[690px]">
        <p className="text-4xl font-semibold mb-5">
          Let's Start Your Project Today!
        </p>
        <p>
          Swipe right on success. Schedule a meeting with us to match with your
          perfect mobile app solution.
        </p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-green-200 opacity-10 w-[950px] h-[408px] rounded-t-3xl z-10"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-green-200 opacity-20 w-[890px] h-[370px] rounded-t-3xl z-20"></div>
      </div>
    </MaxWidthWrapper>
  );
};

export default StartProjectToday;
