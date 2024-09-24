import React from "react";
import Button from "../shared/Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const ServicesRange: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-10 ">
      <p className="text-4xl font-bold ml-28">Our Range of Services</p>
      <div className="flex items-center justify-around">
        <p>
          Explore our range of end to end digital solutions for business that
          are truly made to enhance user experience
          <br /> and elevate your digital presence
        </p>
        <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
          View All Services
        </Button>
      </div>
      <div className="flex justify-around px-10">
        <div className="flex flex-col gap-6 w-96 h-96 rounded-xl bg-skyblue p-5 relative">
          <p className="font-bold text-xl">Mobile App Development</p>
          <p className="text-sm leading-6">
            We deliver top-tier mobile applications for business. With our
            expertise in native app development we create apps that perform
            flawlessly across platforms in the mobile- first world.
          </p>
          <div className="bg-blue-100 absolute bottom-0 w-80 h-32 rounded-xl left-8"></div>
          <img
            src="/Prototyping process-cuate.png"
            alt=""
            className="z-10 w-60 h-48 absolute bottom-0 left-16"
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="w-96 h-44 bg-leafGreen rounded-xl"></div>
          <div className="w-96 h-44 bg-mellowYellow rounded-xl"></div>
        </div>
        <div className="w-96 h-96 rounded-xl bg-purple flex flex-col gap-6 p-5 relative">
          <div className="bg-violet-100 absolute top-0 w-80 h-32 rounded-xl left-8"></div>
          <img
            src="/User flow-cuate (1).png"
            alt=""
            className=" w-60 h-56 absolute top-0 left-16"
          />
          <div className="flex flex-col absolute bottom-5 gap-5">
            <p className="font-bold text-xl">Web App Development</p>
            <p className="text-sm leading-6">
              As an expert web application development company we specialise in
              creating powerful, scalable web app solutions. We also offer
              custom web development services, to transform your digital game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesRange;
