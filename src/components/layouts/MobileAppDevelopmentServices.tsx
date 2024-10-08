import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TitleSummary from "components/shared/TitleSummary";
import Button from "components/shared/Button";

const MobileAppDevelopmentServices: React.FC = () => {
  return (
    <div className="bg-gray-100 mt-10">
      <MaxWidthWrapper className="py-20">
        <TitleSummary
          title="Our Mobile App Development Services"
          summary="Explore our mobile application development services for the modern enterprise. Our app development expertise helps create apps that are both intuitive & revenue generating.  "
        />
        <div className="flex gap-5 my-10">
          <div className="flex flex-col gap-5 p-8 w-[645px] rounded-2xl bg-white">
            <div className="bg-gray-100 p-2 w-fit rounded-2xl">
              <img src="/SVG/hybrid_app.svg" alt="" className="w-10 h-10" />
            </div>
            <p className="font-bold text-2xl">
              Cross Platform mobile apps development
            </p>
            <p className="text-gray-600">
              Maximise your reach with a single codebase. Our cross-platform
              solutions ensure seamless performance across iOS and Android,
              reducing development time and costs. 
            </p>
            <div>
            <Button color="black">Talk To Our Experts</Button>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-8 w-[645px] rounded-2xl bg-white">
            <div className="bg-gray-100 p-2 w-fit rounded-2xl">
              <img src="/SVG/hybrid_app.svg" alt="" className="w-10 h-10" />
            </div>
            <p className="font-bold text-2xl">Native mobile apps development</p>
            <p className="text-gray-600">
              Unleash full power of device-specific features. Our native app
              development services for iOS and Android, ensures the highest
              level of app functionality and user satisfaction. 
            </p>
            <div>
            <Button color="black">Talk To Our Experts</Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default MobileAppDevelopmentServices;
