import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import { blurredBg } from "constants/assets.constants";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Button from "./Button";
import RoundedCard from "./RoundedCard";
import { divide } from "lodash";

interface Props {
  title: string;
  subTitle?: string;
  featuredContent?: React.ReactNode;
}

const Hero: React.FC<Props> = ({ title, subTitle, featuredContent }) => {
  return (
    <section className="w-full relative py-36">
      <img src={blurredBg} alt="" className="-top-[200px] w-full absolute" />
      <MaxWidthWrapper className="relative">
        <div className="flex flex-col justify-center items-center text-center gap-6 pb-24">
          <div className="w-[940px] flex flex-col gap-6">
            <h2 className="text-green-dark md:text-6xl font-bold text-3xl">
              {title}
            </h2>
            <p className="text-xl text-textSecondary">{subTitle}</p>
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
        <RoundedCard
          children={
            <div>
              <p className="text-lg md:text-xl font-semibold md:font-bold">
                Tailored Digital Solution For Leading Enterprises
              </p>
              <div className="flex justify-around items-center gap-5">
                <img
                  src="/images/client_img1.png"
                  alt="clientImg1"
                  className="w-20 md:w-52 h-12 md:h-28"
                />
                <img
                  src="/images/client_img2.png"
                  alt="clientImg2"
                  className="w-20 md:w-52 h-12 md:h-28"
                />
                <img
                  src="/images/client_img3.png"
                  alt="clientImg3"
                  className="w-20 md:w-52 h-12 md:h-28"
                />
                <img
                  src="/images/client_img4.png"
                  alt="clientImg4"
                  className="w-20 md:w-52 h-12 md:h-28"
                />
                <img
                  src="/images/client_img5.png"
                  alt="clientImg5"
                  className="w-20 md:w-52 h-12 md:h-28"
                />
              </div>
            </div>
          }
        />
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
