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
    <div className="bg-grey-100">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-7 mt-14">
            {homeExplore.map((item) => (
              <div className="bg-white w-full h-fit md:h-68 rounded-3xl flex flex-col lg:flex-row p-5 lg:p-7 gap-5 lg:gap-7 items-center">
                <img
                  src={item.image}
                  alt=""
                  className="w-full lg:w-56 lg:h-52 rounded-3xl"
                />
                <div className="flex flex-col gap-4">
                  <p className="font-semibold text-xl leading-7.5 text-green-dark">
                    {item.title}
                  </p>
                  <p className="text-grey-700 text-sm">{item.subTitle}</p>
                  <div className="flex gap-10 items-center text-green-500">
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
