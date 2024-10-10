import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
  IoChevronDown,
} from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { articleListArray } from "data/articleList.data";

const ArticleListBlog: React.FC = () => {
  const [selected, setSelected] = useState<number>(1);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <MaxWidthWrapper className="py-14 flex flex-col items-center text-center">
      <p className="font-semibold text-4xl py-2 ">Read, Discover And Improve</p>
      <p className="max-w-[644px] text-gray-600 pt-3 pb-10">
        Explore latest business development tips & marketing trends to develop a
        better business/brand strategy.
      </p>
      <div className="w-[646px] flex py-2 px-5 justify-between rounded-lg mb-20 border-2 border-gray-200">
        <div className="flex gap-2 items-center">
          <HiMagnifyingGlass className="text-gray-500" />
          <input placeholder="Search Blog" className="p-2" />
        </div>
        <div className="rounded-lg bg-gray-200 p-2 flex gap-2 items-center cursor-pointer">
          <p>All</p>
          <IoChevronDown />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 mb-10">
        {articleListArray.map((item) => (
          <div className="bg-gray-100 h-fit rounded-3xl flex flex-col md:flex-row py-5 md:py-4 px-6 gap-10 items-center">
            <img src={item.image} alt="" className="w-56 h-52 rounded-3xl" />
            <div className="flex flex-col gap-3 w-[344px] text-left">
              <p className="text-gray-600">{item.date}</p>
              <p className="font-bold text-lg">{item.title}</p>
              <p className="text-gray-600">{item.description}</p>
              <div className="flex gap-10 items-center text-primary">
                <p className="font-bold">{item.buttonText}</p>
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center mb-20">
        <IoArrowBackCircleOutline size={25} className="text-primary cursor-pointer" />
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
        <IoArrowForwardCircleOutline size={25} className="text-primary cursor-pointer" />
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

export default ArticleListBlog;
