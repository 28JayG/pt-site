import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import MobileAppDevelopmentServices from "components/layouts/MobileAppDevelopmentServices";
import PageLayout from "components/layouts/PageLayout";
import SuccessStories from "components/layouts/SuccessStories";
import TechStack from "components/layouts/TechStack";
import Button from "components/shared/Button";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TitleSummary from "components/shared/TitleSummary";
import React from "react";
import { FaLinkedin, FaReact } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const mobileAppDevelopment: React.FC = () => {
  return (
    <PageLayout>
      <MaxWidthWrapper>
        <Hero
          title="Crafting apps that are as dynamic as your business."
          subTitle="At Propelius we offer strategic mobile application development services that turn your business logic into intuitive app interfaces. We craft secure, efficient, and future-proof apps right from concept to deployment for immersive experiences. "
        />
        <div className="flex justify-between">
          <p className="w-[400px] font-semibold text-4xl">
            Turn Smartphone Screens into Your Business Frontier.
          </p>
          <p className="leading-relaxed w-[620px]">
            The mobile revolution is changing business and how we communicate.
            Businesses need a robust mobile presence to increase visibility,
            reach, and customer engagement.
            <br /> Our mission is to help you succeed by providing
            transformative, secure, and state-of-the-art mobile solutions for
            effortless user experiences.
            <br /> We're recognized globally as a leading mobile application
            development company.
          </p>
        </div>
        <div className="my-20">
          <RoundedCard
            variant="bordered"
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
        </div>
        <div className="mb-20">
          <TitleSummary
            title="Our Success Stories"
            summary="Explore unique client cases and check on the potential solutions that we can offer through our mobile app development success stories. "
            action={
              <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                View All Work
              </Button>
            }
          />
        </div>
      </MaxWidthWrapper>
      <SuccessStories />
      <MobileAppDevelopmentServices />
      <TechStack />
      
    </PageLayout>
  );
};

export default mobileAppDevelopment;
