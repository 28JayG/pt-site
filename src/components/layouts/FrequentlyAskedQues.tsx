import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { FaMinus, FaPlus } from "react-icons/fa";

const FrequentlyAskedQues: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <MaxWidthWrapper>
        <div className="">
          <p className="md:mb-20 font-bold text-4xl text-secondary text-center">
            Frequently Asked Questions
          </p>
          <div className="flex flex-col gap-6 px-60">
            <div className="bg-white flex gap-10 rounded-2xl p-4">
              <div className="rounded-full border-2 border-primary p-2 w-10 h-10 flex items-center justify-center">
                01
              </div>
              <div className="">
                <p className="font-semibold text-lg">
                  Can you help with updating an existing website or application?
                </p>
                <p className="text-xs text-gray-400">
                  Absolutely. We offer website redesign and application
                  modernization services to improve functionality, user
                  experience, and performance of existing digital products.
                </p>
              </div>
              <FaMinus className="text-primary" />
            </div>
            <div className="bg-white flex gap-10 rounded-2xl p-4 justify-between items-center">
              <div className="rounded-full border-2 border-primary p-2 w-10 h-10 flex items-center justify-center">
                02
              </div>
              <p className="font-semibold text-lg ">
                How long does it typically take to develop a custom application?
              </p>
              <FaPlus />
            </div>
            <div className="bg-white flex gap-10 rounded-2xl p-4 justify-between">
              <div className="rounded-full border-2 border-primary p-2 w-10 h-10 flex items-center justify-center">
                03
              </div>
              <p className="font-semibold text-lg ">
                Do you offer ongoing support and maintenance after the project
                is completed?
              </p>
              <FaPlus />
            </div>
            <div className="bg-white flex gap-10 rounded-2xl p-4 justify-between">
              <div className="rounded-full border-2 border-primary p-2 w-10 h-10 flex items-center justify-center">
                04
              </div>
              <p className="font-semibold text-lg ">
                How do you handle project management and client communication?
              </p>
              <FaPlus />
            </div>
            <div className="bg-white flex gap-10 rounded-2xl p-4 justify-between">
              <div className="rounded-full border-2 border-primary p-2 w-10 h-10 flex items-center justify-center">
                05
              </div>
              <p className="font-semibold text-lg ">
                What testing methodologies do you employ?
              </p>
              <FaPlus />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FrequentlyAskedQues;
