import React, { useState } from "react";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";
import { potentialClients } from "data/potentialClients.data";
import { blurredBg } from "constants/assets.constants";

const PotentialClients: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="bg-gray-100"
      style={{
        backgroundImage: `url(${blurredBg})`,
        backgroundSize: "cover",
        backgroundPosition: "30%",
      }}
    >
      <MaxWidthWrapper>
        <div className="text-center flex flex-col gap-8 lg:gap-20 py-12 lg:py-16">
          <p className="text-3xl lg:text-4xl md:text-titleSummaryTitle font-semibold text-green-900 pb-0">
            Who We Help
          </p>
          <p className="text-grey-700 font-light">
            Scaling Success: Helping businesses of all sizes achieve their
            digital potential.
          </p>
          <div className="md:px-20 flex flex-col md:flex-row gap-8 justify-center">
            <div className="w-full lg:w-160 pl-9 pt-7 overflow-hidden h-72 md:h-150 bg-blue-200 relative rounded-3xl mx-auto lg:mx-0">
              <img
                src="/images/potential_client.png"
                alt=""
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col gap-5 lg:justify-between items-center w-full lg:w-165">
              {potentialClients.map((item, index) => (
                <div
                  className="w-full bg-white rounded-2xl flex gap-2 lg:gap-8 py-4 px-5"
                  style={{
                    height: activeIndex === index ? "auto" : "fit-content",
                  }}
                >
                  <img src={item.image} alt="" className="w-8 h-8" />
                  <div className="flex flex-col gap-2 lg:gap-4 text-left">
                    <p
                      className="font-medium text-green-900 text-lg lg:text-xl cursor-pointer"
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? -1 : index)
                      }
                    >
                      {item.title}
                    </p>
                    {activeIndex === index && (
                      <p className="text-grey-700 font-light text-xs lg:text-sm">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default PotentialClients;
