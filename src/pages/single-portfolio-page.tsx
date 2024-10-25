import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import { TechCategory } from "components/shared/TechStack";
import { techCategories } from "data/services.data";
import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { SiTicktick } from "react-icons/si";

const technologiesArray = [
  "React",
  "Next js",
  "HTML",
  "CSS,Bootstrap",
  "Hooks",
  "Redux-Saga",
  "Styled Component",
  "JQuery",
  "Bootstrap",
  "Material UI",
  "Socket.io",
  "Tailwind CSS",
  "Shadcn/UI",
];

const singlePortfolioPage: React.FC = () => {
  const [selected, setSelected] = useState<number>(1);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <PageLayout>
      <MaxWidthWrapper className="flex flex-col items-center text-center justify-center mt-20">
        <p className="font-semibold text-5xl text-green-dark">
          Eatvisor - Online Nutrition Counselling Platform
        </p>
        <div className="flex gap-4 items-center my-8">
          <p className="text-green-dark">Home</p>
          <IoMdArrowForward />
          <p className="text-green-dark">Portfolio</p>
          <IoMdArrowForward />
          <p className="text-gray-400">Eatvisor</p>
        </div>
        <div className="my-7 w-full h-[707px] rounded-xl">
          <img src="/images/eatvisor_img.png" alt="" />
        </div>
        <div className="flex flex-col text-left w-full">
          <p className="font-semibold text-4xl text-green-dark">Services</p>
          <div className="w-[678px] flex gap-5 flex-wrap my-10">
            <div className="flex gap-2 rounded-full w-fit bg-gray-100 items-center px-5 py-2.5">
              <SiTicktick className="text-primary" />
              <p className="text-textSecondary">Design Prototyped</p>
            </div>
            <div className="flex gap-2 rounded-full w-fit bg-gray-100 items-center px-5 py-2.5">
              <SiTicktick className="text-primary" />
              <p className="text-textSecondary">Frontend Development</p>
            </div>
            <div className="flex gap-2 rounded-full w-fit bg-gray-100 items-center px-5 py-2.5">
              <SiTicktick className="text-primary" />
              <p className="text-textSecondary">Beckend Development</p>
            </div>
            <div className="flex gap-2 rounded-full w-fit bg-gray-100 items-center px-5 py-2.5">
              <SiTicktick className="text-primary" />
              <p className="text-textSecondary">QA & Testing</p>
            </div>
          </div>
        </div>
        <div className="my-10 flex flex-col gap-5 text-left">
          <p className="text-4xl font-semibold text-green-dark">
            Navigate the Eatviosr
          </p>
          <p className="font-light text-xl text-textSecondary">
            Tap into the growing mobile market with responsive and intuitive
            m-commerce applications. We develop seamless mobile shopping
            experiences that keep your customers engaged on-the-go, boosting
            sales and brand loyalty.Tap into the growing mobile market with
            responsive and intuitive m-commerce applications. We develop
            seamless mobile shopping experiences that keep your customers
            engaged on-the-go, boosting sales and brand loyalty.
          </p>
          <img src="/images/eatvisor_img2.png" alt="" />
        </div>
        <div className="mt-20 mb-10 flex flex-col gap-5 text-left">
          <p className="text-4xl font-semibold text-green-dark">Challanges</p>
          <p className="font-light text-xl text-textSecondary">
            Tap into the growing mobile market with responsive and intuitive
            m-commerce applications. We develop seamless mobile shopping
            experiences that keep your customers engaged on-the-go, boosting
            sales and brand loyalty.Tap into the growing mobile market with
            responsive and intuitive m-commerce applications. We develop
            seamless mobile shopping experiences that keep your customers
            engaged on-the-go, boosting sales and brand loyalty.
          </p>
          <div className="flex gap-2">
            <img
              src="/images/explore_img3.png"
              alt=""
              className="w-105 h-96 rounded-2xl"
            />
            <img
              src="/images/explore_img2.png"
              alt=""
              className="w-105 h-96 rounded-2xl"
            />
            <img
              src="/images/explore_img3.png"
              alt=""
              className="w-105 h-96 rounded-2xl"
            />
          </div>
        </div>
        <div className="mt-20 mb-10 flex flex-col gap-5 text-left">
          <p className="text-4xl font-semibold text-green-dark">Solutions</p>
          <p className="font-light text-xl text-textSecondary">
            Tap into the growing mobile market with responsive and intuitive
            m-commerce applications. We develop seamless mobile shopping
            experiences that keep your customers engaged on-the-go, boosting
            sales and brand loyalty.Tap into the growing mobile market with
            responsive and intuitive m-commerce applications. We develop
            seamless mobile shopping experiences that keep your customers
            engaged on-the-go, boosting sales and brand loyalty.
          </p>
        </div>
        <div>
          <p className="text-4xl font-semibold text-green-dark">
            Technologies Used
          </p>
          <div className="w-full flex gap-5 flex-wrap my-10">
            {technologiesArray.map((technology) => (
              <div className="flex gap-2 rounded-full w-fit bg-gray-100 items-center px-5 py-2.5">
                <SiTicktick className="text-primary" />
                <p className="text-textSecondary">{technology}</p>
              </div>
            ))}
          </div>
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
      </MaxWidthWrapper>
    </PageLayout>
  );
};

export default singlePortfolioPage;
