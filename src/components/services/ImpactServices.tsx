import Button from "components/shared/Button";
import ServiceCard from "components/shared/ServiceCard";
import TitleSummary from "components/shared/TitleSummary";
import React from "react";
import { Service } from "types/models";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";

interface Props {
  services: Service[];
}

const ImpactServices: React.FC<Props> = ({ services }) => {
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
            <ServiceCard key={service.id} {...service} />
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
