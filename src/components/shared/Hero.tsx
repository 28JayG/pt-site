import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import { blurredBg } from "constants/assets.constants";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Button from "./Button";
import classNames from "classnames";

interface Props {
  title: string;
  subTitle?: string;
  headerClassName?: string;
  featuredContent?: React.ReactNode;
}

const Hero: React.FC<Props> = ({ title, subTitle, featuredContent, headerClassName }) => {
  return (
    <section className="w-full relative pt-28 lg:pt-36">
      <img src={blurredBg} alt="" className="-translate-y-1/2 top-1/2 h-full w-full absolute" />
      <MaxWidthWrapper className="relative">
        <div className="flex flex-col justify-center items-center text-center gap-12 lg:gap-6 pb-12 lg:pb-24">
          <div className={classNames('w-full max-w-[940px] flex flex-col gap-6', headerClassName)}>
            <h2 className="text-green-900 md:text-6xl font-semibold text-2xl leading-8 lg:leading-18">
              {title}
            </h2>
            <p className="text-xs lg:text-lg text-textSecondary leading-4 lg:leading-7">{subTitle}</p>
          </div>
          {featuredContent ? (
            featuredContent
          ) : (
            <div className="flex-col flex md:flex-row gap-6">
              <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                Consult Our Experts
              </Button>
              <Button
                variant="outlined"
                color="green-900"
                endIcon={<IoArrowForwardCircleOutline size={25} />}
              >
                See Our Work
              </Button>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
