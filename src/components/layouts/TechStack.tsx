import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "components/shared/Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { blurredBg } from "constants/assets.constants";

const TechStack: React.FC = () => {
  return (
    <div className="relative">
      <img src={blurredBg} alt="" className=" w-full absolute -z-10" />
      <MaxWidthWrapper className="py-20">
        <div className="flex flex-col gap-8">
          <p>Explore Our Techstack</p>
          <div className="pb-14 flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between">
            <p className="text-secondary w-full max-w-[800px] text-4xl font-bold">
              Delve into our comprehensive techstack, supporting our full
              spectrum of digital consulting services.
            </p>
            <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
              Get Started Today
            </Button>
          </div>
          <div className="bg-white rounded-3xl p-10 flex items-center text-center">
            <p className="text-xl font-semibold flex-1 text-start">Frontend Development</p>
            <div className="flex gap-4 flex-1 justify-start flex-wrap">
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>React</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Next JS</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>HTML</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>CSS, Bootstrap</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Hooks</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Redux-Saga</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Styled Component</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>JQuery</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Bootstrap</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Material-UI</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Socket.io</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Tailwind CSS</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Shadcn/UI</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10 flex items-center text-center">
            <p className="text-xl font-semibold flex-1 text-start">Backend Development</p>
            <div className="flex gap-4 flex-1 justify-start flex-wrap">
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Node.js</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Nest</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Express</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>MVC</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>MVVM</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Supabase</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Mongo DB</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>MySQL</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Firebase</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10 flex items-center text-center">
            <p className="text-xl font-semibold flex-1 text-start">Database</p>
            <div className="flex gap-4 flex-1 justify-start flex-wrap">
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Mongo DB</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>PostgreSQL - CMS: Strapi</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10 flex items-center text-center">
            <p className="text-xl font-semibold flex-1 text-start">CMS</p>
            <div className="flex gap-4 flex-1 justify-start flex-wrap">
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Strapi</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Webiny</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default TechStack;
