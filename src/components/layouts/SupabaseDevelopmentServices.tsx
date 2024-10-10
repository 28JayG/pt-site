import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TitleSummary from "components/shared/TitleSummary";
import Button from "components/shared/Button";

const SupabaseDevelopmentServices: React.FC = () => {
  return (
    <div className="bg-gray-100 mt-10">
      <MaxWidthWrapper className="py-20">
        <TitleSummary
          title="Our Supabase Development Services"
          summary="Explore our portfolio to see how we have transformed businesses with our innovative solutions 
and expert development."
        />
        <div className="flex gap-5 my-10">
          <div className="flex flex-col gap-5 p-8 w-[645px] rounded-2xl bg-white">
            <div className="bg-gray-100 p-2 w-fit rounded-2xl">
              <img src="/SVG/hybrid_app.svg" alt="" className="w-10 h-10" />
            </div>
            <p className="font-bold text-2xl">Custom Supabase solutions</p>
            <p className="text-gray-600">
              Unify your brand across platforms with our cross-app development
              expertise.
            </p>
            <div>
              <Button color="black">Talk To Our Experts</Button>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-8 w-[645px] rounded-2xl bg-white">
            <div className="bg-gray-100 p-2 w-fit rounded-2xl">
              <img src="/SVG/hybrid_app.svg" alt="" className="w-10 h-10" />
            </div>
            <p className="font-bold text-2xl">Low-Code Backend Development</p>
            <p className="text-gray-600">
              Bringing your business and seamless user experiences to life
              through native app development.
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

export default SupabaseDevelopmentServices;
