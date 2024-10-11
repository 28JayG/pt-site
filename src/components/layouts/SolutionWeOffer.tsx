import { blurredBg } from "constants/assets.constants";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { SiTicktick } from "react-icons/si";

const SolutionWeOffer: React.FC = () => {
  return (
    <div className="relative">
      <img src={blurredBg} alt="" className=" w-full absolute -z-10" />
      <MaxWidthWrapper className="py-20">
        <div className="flex flex-col gap-8">
          <p>Solution We Offer</p>
          <p className="text-secondary w-full max-w-[800px] text-4xl font-bold">
            Description : Explore our portfolio to see how we have transformed
            businesses with our innovative solutions and expert development.
          </p>
          <div className="bg-white rounded-3xl p-10 flex items-center text-center">
            <p className="text-xl font-semibold flex-1 text-start">
              Industries Expertise
            </p>
            <div className="flex gap-4 flex-1 justify-start flex-wrap">
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>HealthCare</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>FinTech</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Real Estate</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Retial</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Tour & Travel</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Education</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Logistics</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10 flex items-center text-center">
            <p className="text-xl font-semibold flex-1 text-start">
              On-Demand App Solutions
            </p>
            <div className="flex gap-4 flex-1 justify-start flex-wrap">
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Laundary Services</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Taxi Booking App</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Food Delivery</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Pharmacy Delivery</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Grocery Delivery</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>On Demand delivery app</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Workforce Management Software</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10 flex items-center text-center">
            <p className="text-xl font-semibold flex-1 text-start">
              By Business Scale
            </p>
            <div className="flex gap-4 flex-1 justify-start flex-wrap">
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Startup Solutions</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Enterprise Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default SolutionWeOffer;
