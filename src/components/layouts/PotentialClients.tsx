import React from "react";

const PotentialClients: React.FC = () => {
  return (
    <div className="text-center flex flex-col gap-8">
      <p className="text-4xl font-bold">Who We Help</p>
      <p className="text-gray-500">
        Scaling Success: Helping businesses of all sizes achieve their digital
        potential.
      </p>
      <div className="px-20 flex gap-20 justify-center">
        <div className="w-160 h-150 bg-skyblue relative rounded-3xl">
          <img
            src="/5d5F6HlTijuCQDB4Q5uGAdloikw (1) 1.png"
            alt=""
            className="w-145 h-96 absolute right-0 bottom-0"
          />
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="bg-white w-165 h-16 rounded-2xl flex gap-8 items-center pl-10">
            <img
              src="/rqBvoXtL6FsdnNLl6oeY1v69KQw 2.png"
              alt=""
              className="w-8 h-8"
            />
            <p className="font-semibold text-xl">Startups & Entrepreneurs</p>
          </div>
          <div className="bg-white w-165 h-16 rounded-2xl flex gap-8 items-center pl-10">
            <img
              src="/xygVgdYalHXrAjEpGtZxWx5fsI 1.png"
              alt=""
              className="w-8 h-8"
            />
            <p className="font-semibold text-xl">SME Digital Transformation</p>
          </div>
          <div className="bg-white w-165 h-16 rounded-2xl flex gap-8 items-center pl-10">
            <img
              src="/blgDT3qsfGMoCPTrzmoSoOgNk 1.png"
              alt=""
              className="w-8 h-8"
            />
            <p className="font-semibold text-xl">Enterprise-Grade Innovation</p>
          </div>
          <div className="bg-white w-165 h-36 rounded-2xl flex gap-8 pt-5 pl-10">
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
  );
};

export default PotentialClients;
