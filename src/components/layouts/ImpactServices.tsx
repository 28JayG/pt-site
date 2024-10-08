import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "components/shared/Button";
import TitleSummary from "components/shared/TitleSummary";

const array = [
  {
    image: "/SVG/hybrid_app.svg",
    title: "Hybrid App Development",
    description:
      "Hybrid app development services for applications that work seamlessly on both iOS and Android.",
  },
  {
    image: "/SVG/native_app.svg",
    title: "Native App Development",
    description:
      "Deliver optimal performance on each platform with our native app development expertise.",
  },
  {
    image: "/SVG/frontend.svg",
    title: "Frontend Development",
    description:
      "Frontend development services for responsive, interactive web experiences that engage your audience",
  },
  {
    image: "/SVG/backend.svg",
    title: "Backend Development",
    description:
      "Create scalable server-side systems that efficiently manage data and support your app’s  core functionality.",
  },
  {
    image: "/SVG/saas_app.svg",
    title: "SaaS Application Development",
    description:
      "Build scalable, cloud-based solutions and transition to a subscription-based model with our SaaS solutions",
  },
  {
    image: "/SVG/custome_ecom.svg",
    title: "Custome Ecommerce Solution",
    description:
      "Develop tailored online stores that reflect your brand, optimise the shopping experience, and drive conversions.",
  },
  {
    image: "/SVG/headless_cms.svg",
    title: "Headless CMS Development",
    description:
      "Streamline your content strategy with headless CMS for consistent content delivery across digital channels.",
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {array.map((item) => (
            <div className="flex flex-col gap-5 p-8 w-105 rounded-2xl bg-white">
              <div className="bg-gray-100 p-2 w-fit rounded-2xl">
                <img src={item.image} alt="" className="w-10 h-10" />
              </div>
              <p className="font-bold text-2xl">{item.title}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
          <div className="bg-primary col-span-2 rounded-2xl flex flex-col gap-5 justify-center pl-20 items-start">
            <p className="text-white text-3xl">Looking For Other Services?</p>
            <Button color="black">Contact Now</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ImpactServices;
