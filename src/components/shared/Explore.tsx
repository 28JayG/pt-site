import Button from "components/shared/Button";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";
import { homeExplore } from "data/explore.data";
import TitleSummary from "./TitleSummary";

interface Props {
  title: string;
  subtitle: string;
}

const Explore: React.FC<Props> = ({ title, subtitle }) => {

  return (
    <div className="bg-white">
      <MaxWidthWrapper>
        <div className=" py-20 px-4 ">
          <TitleSummary
            summary={subtitle}
            title={title}
            action={
              <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                View All Articles
              </Button>
            }
          />

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 mt-14">
            {homeExplore.map((item) => (
              <div className="bg-gray-100 md:w-185 h-fit md:h-68 rounded-3xl flex flex-col md:flex-row py-5 md:py-0 px-6 gap-10 items-center">
                <img
                  src={item.image}
                  alt=""
                  className="w-56 h-52 rounded-3xl"
                />
                <div className="flex flex-col gap-4">
                  <p className="font-semibold text-xl leading-7.5 text-green-dark">
                    {item.title}
                  </p>
                  <p className="text-textSecondary text-sm">{item.subTitle}</p>
                  <div className="flex gap-10 items-center text-primary">
                    <p className="font-semibold">{item.buttonText}</p>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Explore;
