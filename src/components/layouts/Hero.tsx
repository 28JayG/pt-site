import React from "react";
import Button from "../shared/Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import RoundedCard from "../shared/RoundedCard";
import ServicesRange from "./ServicesRange";
import ExplorePotential from "./FeaturedWork";
import Testimonial from "./Testimonial";
import PotentialClients from "./PotentialClients";
import About from "./About";
import Explore from "./Explore";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Hero: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/image 84.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
      className="flex flex-col gap-20"
    >
      <div className="flex flex-col justify-center items-center text-center gap-10 pt-20">
        <h2 className="text-6xl font-bold">
          Digital Solution For Your
          <br />
          Business Compititive Edge
        </h2>
        <p className="text-xl">
          Propelius technologies delivers custom built mobile apps, web apps,
          e-commerce and SaaS solutions for
          <br /> overall digital success.
        </p>
        <div className="flex gap-20">
          <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
            Consult Our Experts
          </Button>
          <div className="px-9 py-3 border-2 border-black font-semibold flex gap-2 items-center rounded-full cursor-pointer">
            See Our Work
            <IoArrowForwardCircleOutline size={25} />
          </div>
        </div>
      </div>
      <RoundedCard />
      <ServicesRange />
      <ExplorePotential />
      <div className="rounded-2xl px-40 py-16 mx-20 text-center bg-white convex-curve mt-10 border border-primary flex flex-col gap-6">
        <p className="font-bold text-3xl text-primary text-start">
          Forge Your Digital Future
        </p>
        <div className="flex justify-between ">
          <p className="text-start">
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
