import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TitleSummary from "components/shared/TitleSummary";
import Button from "components/shared/Button";

const RealEstateServices: React.FC = () => {
  return (
    <div className="bg-gray-100 mt-10">
      <MaxWidthWrapper className="py-20">
        <TitleSummary
          title="Services We Offer"
          summary="Our cutting-edge e-commerce development services are designed to propel your business into the digital future, ensuring you stay ahead in the competitive online marketplace."
        />
        <div className="my-10 flex flex-col gap-5">
          <div className="flex gap-5 my-10">
            <div className="flex flex-col gap-5 p-8 w-[645px] rounded-2xl bg-white">
              <div className="bg-gray-100 p-2 w-fit rounded-2xl">
                <img src="/SVG/hybrid_app.svg" alt="" className="w-10 h-10" />
              </div>
              <p className="font-bold text-2xl">Real Estate App Development</p>
              <p className="text-gray-600">
                Tap into the growing mobile market with responsive and intuitive
                m-commerce applications. We develop seamless mobile shopping
                experiences that keep your customers engaged on-the-go, boosting
                sales and brand loyalty.
              </p>
              <div>
                <Button color="black">Talk To Our Experts</Button>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-8 w-[645px] rounded-2xl bg-white">
              <div className="bg-gray-100 p-2 w-fit rounded-2xl">
                <img src="/SVG/hybrid_app.svg" alt="" className="w-10 h-10" />
              </div>
              <p className="font-bold text-2xl">
                Real Estate Web Application Development
              </p>
              <p className="text-gray-600">
                Embrace the future of e-commerce with our headless architecture.
                This flexible approach separates the front-end presentation
                layer from the back-end functionality, allowing for unparalleled
                customization, faster performance, and seamless integration
                across multiple channels and devices.
              </p>
              <div>
                <Button color="black">Talk To Our Experts</Button>
              </div>
            </div>
          </div>
          <div className="flex gap-5 my-10">
            <div className="flex flex-col gap-5 p-8 w-[645px] rounded-2xl bg-white">
              <div className="bg-gray-100 p-2 w-fit rounded-2xl">
                <img src="/SVG/hybrid_app.svg" alt="" className="w-10 h-10" />
              </div>
              <p className="font-bold text-2xl">
                Enterprise Real Estate Development
              </p>
              <p className="text-gray-600">
                Your business is one-of-a-kind, and your e-commerce platform
                should be too. We create bespoke ecommerce solutions that align
                perfectly with your brand identity, business processes, and
                customer needs. From unique features to specialised
                integrations, we build it all to help you stand out in the
                digital marketplace
              </p>
              <div>
                <Button color="black">Talk To Our Experts</Button>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-8 w-[645px] rounded-2xl bg-white">
              <div className="bg-gray-100 p-2 w-fit rounded-2xl">
                <img src="/SVG/hybrid_app.svg" alt="" className="w-10 h-10" />
              </div>
              <p className="font-bold text-2xl">
                Need App Consultation for business?
              </p>
              <p className="text-gray-600">
                Your business is one-of-a-kind, and your e-commerce platform
                should be too. We create bespoke ecommerce solutions that align
                perfectly with your brand identity, business processes, and
                customer needs. From unique features to specialised
                integrations, we build it all to help you stand out in the
                digital marketplace
              </p>
              <div>
                <Button color="black">Talk To Our Experts</Button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default RealEstateServices;
