import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TitleSummary from "components/shared/TitleSummary";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const ProcessWeFollow: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <MaxWidthWrapper className="">
        <TitleSummary
          title="Process We Follow"
          summary="We recognize the transformative potential of insights derived from data. Connect with us to equip businesses to unearth valuable information, and unveil concealed opportunities through both ready-made and custom solutions."
        />
        <div className="flex gap-5 my-20">
          <div className="flex flex-col gap-8">
            <div className="bg-gray-100 w-[646px] h-[216px] flex flex-col justify-between rounded-2xl p-8">
              <div className="bg-primary rounded-full text-center w-8 h-8 flex items-center justify-center font-semibold text-white text-sm">
                01
              </div>
              <p className="font-semibold text-2xl">Briefing</p>
              <p className="w-[586px] text-textSecondary">
                During this session, we’ll discuss your data needs, specific
                goals, and the pain points you aim to address with our custom ai
                and analytics solutions.
              </p>
            </div>
            <div className="bg-gray-100 w-[646px] h-[216px] flex flex-col justify-between rounded-2xl p-8">
              <div className="bg-primary rounded-full text-center w-8 h-8 flex items-center justify-center font-semibold text-white text-sm">
                02
              </div>
              <p className="font-semibold text-2xl">Researching</p>
              <p className="w-[586px] text-textSecondary">
                During this session, we’ll discuss your data needs, specific
                goals, and the pain points you aim to address with our custom ai
                and analytics solutions.
              </p>
            </div>
            <div className="bg-gray-100 w-[646px] h-[216px] flex flex-col justify-between rounded-2xl p-8">
              <div className="bg-primary rounded-full text-center w-8 h-8 flex items-center justify-center font-semibold text-white text-sm">
                03
              </div>
              <p className="font-semibold text-2xl">Evolving</p>
              <p className="w-[586px] text-textSecondary">
                During this session, we’ll discuss your data needs, specific
                goals, and the pain points you aim to address with our custom ai
                and analytics solutions.
              </p>
            </div>
            <div className="bg-gray-100 w-[646px] h-[216px] flex flex-col justify-between rounded-2xl p-8">
              <div className="bg-primary rounded-full text-center w-8 h-8 flex items-center justify-center font-semibold text-white text-sm">
                04
              </div>
              <p className="font-semibold text-2xl">Wrapping</p>
              <p className="w-[586px] text-textSecondary">
                During this session, we’ll discuss your data needs, specific
                goals, and the pain points you aim to address with our custom ai
                and analytics solutions.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-14">
            <img src="/images/process_we_follow_img.png" alt="" className="" />
            <p className="w-[430px] font-semibold text-xl text-green-dark">
              Start by scheduling a consultation with our expert team.
            </p>
            <div className="flex gap-2 items-center text-white font-semibold w-fit rounded-full bg-primary py-3 px-5">
              Schedule A Data Strategy Meeting{" "}
              <IoArrowForwardCircleOutline size={25} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProcessWeFollow;
