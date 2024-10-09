import React, { FC } from "react";
import Button from "../shared/Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import { Service } from "types/models";
import { services } from "data/services.data";
import classNames from "classnames";
import TitleSummary from "components/shared/TitleSummary";

interface ServiceCardProps {
  service: Service;
  illustrationPosition: "top" | "bottom";
}

const ServiceCardWithIllustration: FC<ServiceCardProps> = ({
  service,
  illustrationPosition,
}) => {
  const { color, description, illustrationUri, title } = service;

  const getIllustrationClasses = () => {
    switch (illustrationPosition) {
      case "top":
        return {
          illustrationBgClass: "top-0 rounded-b-xl",
          cardClass: "flex-col-reverse",
        };
      case "bottom":
      default:
        return {
          cardClass: "flex-col",
          illustrationBgClass: "bottom-0 rounded-t-xl",
        };
    }
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className={classNames(
        "flex items-center justify-between w-full h-full rounded-xl p-5 relative",
        getIllustrationClasses().cardClass
      )}
    >
      <div className="flex flex-col text-left gap-2">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-sm leading-6">{description}</p>
      </div>
      <div
        className={classNames(
          "bg-white bg-opacity-30 absolute bottom-0 w-64 md:w-80 h-32 -translate-x-1/2 left-1/2",
          getIllustrationClasses()?.illustrationBgClass
        )}
      />
      <img
        src={illustrationUri}
        alt={title}
        className="z-10 w-44 md:w-60 h-32 md:h-48 -m-5"
      />
    </div>
  );
};

const ServicesRange = () => {
  return (
    <MaxWidthWrapper>
      <div className="relative py-10">
        <TitleSummary
          title="Our Range of Services"
          summary="Explore our range of end to end digital solutions for business that
            are truly made to enhance user experience and elevate your digital
            presence
          "
          action={
            <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
              View All Services
            </Button>
          }
        />

        <div className="grid grid-cols-3 grid-rows-2 h-[420px] gap-4 pt-14">
          {/* mobile app development */}
          <div className="col-start-1 col-end-2 row-start-1 row-end-3">
            <ServiceCardWithIllustration
              service={services.mobileDev}
              illustrationPosition="bottom"
            />
          </div>
          {/* saas solution */}
          <div className="col-start-2 col-end-3 row-start-1 row-end-2">
            <div
              style={{ backgroundColor: services.saas.color }}
              className="h-full rounded-xl relative flex justify-center items-center"
            >
              <img
                src="/images/saas_solution_service_img1.png"
                alt=""
                className="w-20 h-28 absolute left-0 -translate-y-1/2 top-1/2"
              />
              <p className="font-bold text-center text-xl">
                {services.saas.title}
              </p>
              <img
                src="/images/saas_solution_service_img2.png"
                alt=""
                className="w-20 h-28 absolute -translate-y-1/2 right-0 top-1/2"
              />
            </div>
          </div>

          {/* custom e-commerce */}
          <div className="col-start-2 col-end-3 row-start-2 row-end-3">
            <div
              className="h-full rounded-xl relative flex justify-center"
              style={{ backgroundColor: services.eCommerce.color }}
            >
              <p className="text-center font-bold text-xl pt-5">
                {services.eCommerce.title}
              </p>
              <img
                src="/images/custome_ecom_service_img.png"
                alt=""
                className="w-32 h-20 absolute -translate-x-1/2 left-1/2 bottom-0"
              />
            </div>
          </div>

          <div className="col-start-3 col-end-4 row-start-1 row-end-3">
            <ServiceCardWithIllustration
              service={services.webDev}
              illustrationPosition="top"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ServicesRange;
