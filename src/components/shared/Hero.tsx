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

interface Props {
  title: string;
  subTitle?: string;
  featuredContent?: React.ReactNode;
}

const Hero: React.FC<Props> = ({ title, subTitle, featuredContent }) => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/blurred_bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
      className="flex flex-col gap-20"
    >
      <MaxWidthWrapper>
        <div className="flex flex-col justify-center items-center text-center md:gap-10 md:pt-20 pt-5 gap-5">
          <h2 className="text-green-dark md:text-6xl font-bold text-3xl">
            {title}
          </h2>
          <p className="text-xl">{subTitle}</p>
          <div className="flex-col flex md:flex-row md:gap-20 gap-8">
            <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
              Consult Our Experts
            </Button>
            <Button
              variant="outlined"
              htmlColor={colors['green-dark']}
              endIcon={<IoArrowForwardCircleOutline size={25} />}
            >
              See Our Work
            </Button>
          </div>
        </div>
        <RoundedCard />
      </MaxWidthWrapper>
      {/* TODO: move rest to index */}
      <ServicesRange />
      <ExplorePotential />
      <div className="rounded-2xl px-4 md:px-40 py-16 mx-1 md:mx-20 text-center bg-white convex-curve mt-10 border border-primary flex flex-col gap-6">
        <p className="font-semibold md:font-bold text-xl md:text-3xl text-primary text-center md:text-start">
          Forge Your Digital Future
        </p>
        <div className="flex flex-col md:flex-row justify-between ">
          <p className="text-center md:text-start text-sm md:text-base">
            Implement Smart Digital Solutions with Propelius - Connect with is
            for
            <br /> a discovery call
          </p>
          <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
            Book A Free Call
          </Button>
        </div>
      </div>
      <Testimonial />
      <PotentialClients />
      <About />
      <Explore />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Hero;
