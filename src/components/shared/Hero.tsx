import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import { blurredBg } from "constants/assets.constants";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Button from "./Button";

interface Props {
  title: string;
  subTitle?: string;
  featuredContent?: React.ReactNode;
}

const Hero: React.FC<Props> = ({ title, subTitle, featuredContent }) => {
  return (
    <section className="w-full relative pt-36">
      <img src={blurredBg} alt="" className="-top-[200px] w-full absolute" />
      <MaxWidthWrapper className="relative">
        <div className="flex flex-col justify-center items-center text-center gap-6 pb-24">
          <div className="w-[940px] flex flex-col gap-6">
            <h2 className="text-green-dark md:text-6xl font-semibold text-3xl md:leading-6xl">
              {title}
            </h2>
            <p className="text-lg text-textSecondary leading-heroSubtitle">{subTitle}</p>
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
                color="green-dark"
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
