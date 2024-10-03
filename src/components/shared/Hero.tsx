import React from "react";
import Button from "./Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import RoundedCard from "./RoundedCard";
import ServicesRange from "../layouts/ServicesRange";
import ExplorePotential from "../layouts/FeaturedWork";
import Testimonial from "../layouts/Testimonial";
import PotentialClients from "../layouts/PotentialClients";
import About from "../layouts/About";
import Explore from "../layouts/Explore";
import ContactForm from "../layouts/ContactForm";
import Footer from "../layouts/Footer";
import MaxWidthWrapper from "components/layouts/MaxWidthWraper";
import { colors } from "components/theme/colors";
import { blurredBg } from "constants/assets.constants";

interface Props {
  title: string;
  subTitle?: string;
  featuredContent?: React.ReactNode;
}

const Hero: React.FC<Props> = ({ title, subTitle, featuredContent }) => {
  return (
      <section className="w-full relative py-36">
        <img
          src={blurredBg}
          alt=""
          className="-top-[200px] w-full absolute"
        />
        <MaxWidthWrapper className="relative">
          <div className="flex flex-col justify-center items-center text-center gap-6 pb-24">
            <div className="w-[940px] flex flex-col gap-6">
              <h2 className="text-green-dark md:text-6xl font-bold text-3xl">
                {title}
              </h2>
              <p className="text-xl text-textSecondary">{subTitle}</p>
            </div>
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
          </div>
          <RoundedCard />
        </MaxWidthWrapper>
      </section>
  );
};

export default Hero;
