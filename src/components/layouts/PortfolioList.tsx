import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { FaArrowRight } from "react-icons/fa";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { portfolioList } from "data/articleList.data";

const PortfolioList: React.FC = () => {
  const [selected, setSelected] = useState<number>(1);

  const handleSelect = (index: number) => {
    setSelected(index);
  };
  return (
    <MaxWidthWrapper className="py-14 flex flex-col items-center text-center ">
      <p className="font-semibold text-titleSummaryTitle leading-15 py-2 text-green-dark z-10">
        Portfolio tag line
      </p>
      <p className="max-w-[644px] text-textSecondary font-light pt-3 pb-10">
        Explore latest business development tips & marketing trends to develop a
        better business/brand strategy.
      </p>
      <div className="grid grid-cols-2 gap-10 mb-10">
        {portfolioList.map((item) => (
          <div className="bg-gray-100 h-fit rounded-3xl flex flex-col md:flex-row py-5 md:py-4 px-6 gap-10 items-center">
            <img src={item.image} alt="" className="w-56 h-52 rounded-3xl" />
            <div className="flex flex-col gap-3 w-[344px] text-left">
              <p className="text-textSecondary text-sm">{item.preTitle}</p>
              <p className="font-bold text-xl leading-7.5 text-green-dark">
                {item.title}
              </p>
              <p className="text-textSecondary text-sm">{item.description}</p>
              <div className="flex gap-10 items-center text-primary">
                <p className="font-semibold">{item.buttonText}</p>
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center mb-20">
        <IoArrowBackCircleOutline
          size={25}
          className="text-primary cursor-pointer"
        />
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className={`p-2 text-center rounded-full w-10 font-semibold cursor-pointer ${
              selected === item
                ? "bg-primary text-white"
                : "bg-gray-100 text-primary"
            }`}
            onClick={() => handleSelect(item)}
          >
            {item.toString().padStart(2, "0")}
          </div>
        ))}
        <IoArrowForwardCircleOutline
          size={25}
          className="text-primary cursor-pointer"
        />
      </div>
      <div className="h-96 w-full bg-primary flex flex-col gap-5 text-center items-center rounded-2xl justify-center">
        <p className="font-semibold text-4xl text-white">
          Get More To Your Email
        </p>
        <p className="w-[689px] text-white opacity-50">
          Subscribe to our newsletter and access exclusive content and offers
          available only to Propelius Technologies subscribers
        </p>
        <div className="w-[758px] p-2 border border-white rounded-2xl flex justify-between ">
          <input
            type="text"
            placeholder="Enter your e-mail address"
            className="bg-transparent text-white pl-5 placeholder:text-white"
          />
          <div className="bg-black px-7 py-2 text-white rounded-full">
            Subscribe
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PortfolioList;
