import ContactForm from "components/ContactForm";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import ModernHealthcareSoftwareSolution from "components/layouts/ModernHealthcareSoftwareSolution";
import PageLayout from "components/layouts/PageLayout";
import StartProjectToday from "components/layouts/StartProjectToday";
import Explore from "components/shared/Explore";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import { questionsArrayMobileApp } from "data/FAQ.data";
import React from "react";
import { FaSkype } from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";

const healthAppDevelopment: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        title="Healthcare App Development"
        subTitle="Go beyond the limitations of physical stores with ecommerce development services.
Taking your retail business online opens up a world of opportunities."
      />
      <RoundedCard
        children={
          <div className="flex gap-8 items-center justify-center font-semibold text-3xl">
            <p className="flex gap-2 items-center">
              <LuPhone />
              +91 93161 45852
            </p>
            <p className="flex gap-2 items-center">
              <LuMail />
              info@propelius.tech
            </p>
            <p className="flex gap-2 items-center">
              <FaSkype />
              tech.propelius
            </p>
          </div>
        }
      />
      <MaxWidthWrapper className="flex gap-6 ">
        <div className="flex flex-col gap-5 w-[644px] ">
          <p className="font-semibold text-4xl text-green-dark">
            Why Healthcare Businesses Need Digital Transformation
          </p>
          <p className="text-textSecondary">
            At CMARIX, our vision is to engineer future-ready capabilities and
            business strategies for digital enterprise and startup solutions. We
            leverage design and development expertise that continues to meet
            user expectations.
            <br /> Having a track record of guiding countless companies to
            success, we know how to weave the latest technologies with business
            contexts for shaping the digital footprints of enterprises. Whether
            delivering a superb mainstream design for web and mobile apps or
            creating custom user experience over and above the standard
            practices, we can get the right wings for the enterprise solutions
            to fly over the competition.
          </p>
        </div>
        <div className="w-[646px] h-[429px]">
          <img src="/images/health_app_img.png" alt="" />
        </div>
      </MaxWidthWrapper>
      <ModernHealthcareSoftwareSolution />
      <StartProjectToday />
      <Explore
        title="Explore our digital digest"
        subtitle="Scroll through our blog for expert views on web app development, mobile app, SaaS solutions and other digital transformation stuff. "
      />
      <FrequentlyAskedQues questions={questionsArrayMobileApp} />
      <ContactForm />
    </PageLayout>
  );
};

export default healthAppDevelopment;
