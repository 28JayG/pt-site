import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const PotentialClients: React.FC = () => {
  return (
    <div className="bg-gray-100">
    <MaxWidthWrapper>
    <div className="text-center flex flex-col gap-8 py-10 ">
      <p className="text-3xl md:text-4xl font-bold text-secondary">Who We Help</p>
      <p className="text-gray-500">
        Scaling Success: Helping businesses of all sizes achieve their digital
        potential.
      </p>
      <div className="md:px-20 flex flex-col md:flex-row gap-8 md:gap-20 justify-center">
        <div className="w-80 md:w-160 h-72 md:h-150 bg-skyblue relative rounded-3xl mx-auto md:mx-0">
          <img
            src="/5d5F6HlTijuCQDB4Q5uGAdloikw (1) 1.png"
            alt=""
            className="w-72 md:w-145 h-64 md:h-96 absolute right-0 bottom-0"
          />
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div className="bg-white md:w-165 w-80 h-16 rounded-2xl flex gap-4 md:gap-8 items-center pl-4 md:pl-10">
            <img
              src="/rqBvoXtL6FsdnNLl6oeY1v69KQw 2.png"
              alt=""
              className="w-8 h-8"
            />
            <p className="font-semibold text-xl">Startups & Entrepreneurs</p>
          </div>
          <div className="bg-white md:w-165 w-80 h-16 rounded-2xl flex gap-4 md:gap-8 items-center pl-4 md:pl-10">
            <img
              src="/xygVgdYalHXrAjEpGtZxWx5fsI 1.png"
              alt=""
              className="w-8 h-8"
            />
            <p className="font-semibold text-xl">SME Digital Transformation</p>
          </div>
          <div className="bg-white md:w-165 w-80 h-16 rounded-2xl flex gap-4 md:gap-8 items-center pl-4 md:pl-10">
            <img
              src="/blgDT3qsfGMoCPTrzmoSoOgNk 1.png"
              alt=""
              className="w-8 h-8"
            />
            <p className="font-semibold text-xl">Enterprise-Grade Innovation</p>
          </div>
          <div className="bg-white md:w-165 w-80 h-56 md:h-36 rounded-2xl flex gap-8 pt-5 pl-4 md:pl-10">
            <img
              src="/ZM0JgLAmJKLTp6ysKW2HDy9rIoE 2.png"
              alt=""
              className="w-8 h-8"
            />
            <div className="flex flex-col gap-4 text-left">
              <p className="font-semibold text-xl">
                Industry-specific Solution
              </p>
              <p>
                From healthcare to finance and beyond, our specialized
                <br /> solutions cater to diverse industries, addressing unique
                <br /> challenges and driving digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
    </div>
  );
};

export default PotentialClients;
