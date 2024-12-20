import Button from "components/shared/Button";
import ServiceCard from "components/shared/ServiceCard";
import TitleSummary from "components/shared/TitleSummary";
import React from "react";
import { Service } from "types/models";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";

interface Props {
  services: Service[];
  title: string;
  description: string;
}

const RelatedServices: React.FC<Props> = ({ services, title, description }) => {
  return (
    <div className="bg-gray-100 py-10 mt-10">
      <MaxWidthWrapper>
        <TitleSummary title={title} summary={description} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {services?.map((service) => (
            <ServiceCard
              key={service.id}
              illustration={service.illustration}
              title={service.title}
              description={service.description}
              cta={<Button color="black">Talk To Our Experts</Button>}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default RelatedServices;
