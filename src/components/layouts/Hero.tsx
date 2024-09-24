import React from "react";
import Button from "../shared/Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import RoundedCard from "../shared/RoundedCard";
import ServicesRange from "./ServicesRange";

const Hero: React.FC = () => {
  return (
    <div className="grid relative h-full w-full">
      <img src="/image 84.png" alt="" className="w-full h-full object-cover" />
      <div className="flex flex-col gap-20 absolute top-0 left-0 w-full h-full justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center gap-10">
          <h2 className="text-6xl font-bold">
            Digital Solution For Your
            <br />
            Business Compititive Edge
          </h2>
          <p className="text-xl">
            Propelius technologies delivers custom built mobile apps, web apps,
            e-commerce and SaaS solutions for
            <br /> overall digital success. 
          </p>
          <div className="flex gap-20">
            <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
              Consult Our Experts
            </Button>
            <div className="px-9 py-3 border-2 border-black font-semibold flex gap-2 items-center rounded-full cursor-pointer">
              See Our Work
              <IoArrowForwardCircleOutline size={25} />
            </div>
          </div>
        </div>
        <RoundedCard />
        <ServicesRange />
      </div>
    </div>
  );
};

export default Hero;
