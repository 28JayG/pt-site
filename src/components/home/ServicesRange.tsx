import React from "react";
import Button from "../shared/Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";

const ServicesRange: React.FC = () => {
  return (
    <MaxWidthWrapper>
      <div className="relative py-10">
        <p className="pb-3 text-2xl md:text-4xl font-semibold md:font-bold text-secondary">
          Our Range of Services
        </p>
        <div className="pb-14 flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between">
          <p className="text-textSecondary w-full max-w-[800px] text-base">
            Explore our range of end to end digital solutions for business that
            are truly made to enhance user experience and elevate your digital
            presence
          </p>
          <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
            View All Services
          </Button>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 h-[420px] gap-10">
          <div className="col-span-1 row-span-2 flex flex-col gap-6 w-full h-full rounded-xl bg-skyblue p-5 relative">
            <p className="font-bold text-xl">Mobile App Development</p>
            <p className="text-sm leading-6">
              We deliver top-tier mobile applications for business. With our
              expertise in native app development we create apps that perform
              flawlessly across platforms in the mobile- first world.
            </p>
            <div className="bg-blue-100 absolute bottom-0 w-64 md:w-80 h-32 rounded-xl left-8"></div>
            <img
              src="/Prototyping process-cuate.png"
              alt=""
              className="z-10 w-44 md:w-60 h-32 md:h-48 absolute bottom-0 left-16"
            />
          </div>
          <div className="flex flex-col gap-8 col-span-1 row-span-2 ">
            <div className="w-full h-44 bg-leafGreen rounded-xl relative flex justify-center items-center">
              <img
                src="/Frame 20993.png"
                alt=""
                className="w-20 h-28 absolute left-0 top-8"
              />
              <p className="font-bold text-center text-xl">SaaS Solution</p>
              <img
                src="/Frame 20994.png"
                alt=""
                className="w-20 h-28 absolute right-0 top-8"
              />
            </div>
            <div className="w-full h-44 bg-mellowYellow rounded-xl relative flex justify-center ">
              <p className="text-center font-bold text-xl pt-5">
                Custome E-Commerce
                <br />
                Solution
              </p>
              <img
                src="/Frame 20992.png"
                alt=""
                className="w-32 h-20 absolute right-32 bottom-0"
              />
            </div>
          </div>
          <div className="col-span-1 row-span-2 flex flex-col gap-6 w-full h-full rounded-xl bg-purple p-5 relative">
            <div className="bg-violet-100 absolute top-0 w-64 md:w-80 h-32 rounded-xl left-8"></div>
            <img
              src="/User flow-cuate (1).png"
              alt=""
              className="w-44 md:w-60 h-32 md:h-56 absolute top-0 left-16"
            />
            <div className="flex flex-col absolute bottom-5 gap-5">
              <p className="font-bold text-xl">Web App Development</p>
              <p className="text-sm leading-6">
                As an expert web application development company we specialise
                in creating powerful, scalable web app solutions. We also offer
                custom web development services, to transform your digital game.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
          <div className="flex flex-col gap-6 w-80 md:w-96 h-80 md:h-96 rounded-xl bg-skyblue p-5 relative">
            <p className="font-bold text-xl">Mobile App Development</p>
            <p className="text-sm leading-6">
              We deliver top-tier mobile applications for business. With our
              expertise in native app development we create apps that perform
              flawlessly across platforms in the mobile- first world.
            </p>
            <div className="bg-blue-100 absolute bottom-0 w-64 md:w-80 h-32 rounded-xl left-8"></div>
            <img
              src="/Prototyping process-cuate.png"
              alt=""
              className="z-10 w-44 md:w-60 h-32 md:h-48 absolute bottom-0 left-16"
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="w-80 md:w-96 h-44 bg-leafGreen rounded-xl relative flex justify-center items-center">
              <img
                src="/Frame 20993.png"
                alt=""
                className="w-20 h-28 absolute left-0 top-8"
              />
              <p className="font-bold text-center text-xl">SaaS Solution</p>
              <img
                src="/Frame 20994.png"
                alt=""
                className="w-20 h-28 absolute right-0 top-8"
              />
            </div>
            <div className="w-80 md:w-96 h-44 bg-mellowYellow rounded-xl relative flex justify-center ">
              <p className="text-center font-bold text-xl pt-5">
                Custome E-Commerce
                <br />
                Solution
              </p>
              <img
                src="/Frame 20992.png"
                alt=""
                className="w-32 h-20 absolute right-32 bottom-0"
              />
            </div>
          </div>
          <div className="w-80 md:w-96 h-80 md:h-96 rounded-xl bg-purple flex flex-col gap-6 p-5 relative">
            <div className="bg-violet-100 absolute top-0 w-64 md:w-80 h-32 rounded-xl left-8"></div>
            <img
              src="/User flow-cuate (1).png"
              alt=""
              className="w-44 md:w-60 h-32 md:h-56 absolute top-0 left-16"
            />
            <div className="flex flex-col absolute bottom-5 gap-5">
              <p className="font-bold text-xl">Web App Development</p>
              <p className="text-sm leading-6">
                As an expert web application development company we specialise
                in creating powerful, scalable web app solutions. We also offer
                custom web development services, to transform your digital game.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </MaxWidthWrapper>
  );
};

export default ServicesRange;
