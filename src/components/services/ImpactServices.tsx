import React from "react";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";
import Button from "components/shared/Button";
import TitleSummary from "components/shared/TitleSummary";
import { services } from "data/services.data";

const ImpactServices: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10">
      <MaxWidthWrapper>
        <TitleSummary
          title="Our High-Impact Services"
          summary="Think of us as your company's digital SWAT team. Our digital
            transformation agency swoops in, identifies critical pain points,
            and deploy targeted digital solutions with precision"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col gap-5 p-8 w-full rounded-2xl bg-white"
            >
              <div className="bg-gray-100 p-2 w-fit rounded-2xl">
                <img
                  src={service.illustrationUri}
                  alt=""
                  className="w-10 h-10"
                />
              </div>
              <p className="font-bold text-2xl">{service.title}</p>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}

          <div className="bg-green-500 lg:col-span-2 rounded-2xl flex flex-col gap-5 justify-center p-8 items-start">
            <p className="text-white text-3xl">Looking For Other Services?</p>
            <Button color="black">Contact Now</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ImpactServices;
