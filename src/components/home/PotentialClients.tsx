import React, { useState } from "react";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";
import { potentialClient } from "data/potentialClients.data";

const PotentialClients: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="bg-gray-100">
      <MaxWidthWrapper>
        <div className="text-center flex flex-col gap-8 py-10 ">
          <p className="text-3xl md:text-titleSummaryTitle font-semibold text-green-dark">
            Who We Help
          </p>
          <p className="text-textSecondary font-light">
            Scaling Success: Helping businesses of all sizes achieve their
            digital potential.
          </p>
          <div className="md:px-20 flex flex-col md:flex-row gap-8 md:gap-20 justify-center">
            <div className="w-80 md:w-160 h-72 md:h-150 bg-skyblue relative rounded-3xl mx-auto md:mx-0">
              <img
                src="/images/potential_client.png"
                alt=""
                className="w-72 md:w-145 h-64 md:h-96 absolute right-0 bottom-0"
              />
            </div>
            <div className="flex flex-col gap-5 items-center">
              {potentialClient.map((item, index) => (
                <div
                  className="bg-white md:w-165 w-80 rounded-2xl flex gap-8 py-5 pl-4 md:pl-10"
                  style={{
                    height: activeIndex === index ? "auto" : "fit-content",
                  }}
                >
                  <img src={item.image} alt="" className="w-8 h-8" />
                  <div className="flex flex-col gap-4 text-left">
                    <p
                      className="font-medium text-green-dark text-xl cursor-pointer"
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? -1 : index)
                      }
                    >
                      {item.title}
                    </p>
                    {activeIndex === index && (
                      <p className="text-textSecondary font-light text-sm w-[412px]">
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
