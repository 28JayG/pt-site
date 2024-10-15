import About from "components/shared/About";
import ContactForm from "components/ContactForm";
import Explore from "components/shared/Explore";
import ImpactServices from "components/layouts/ImpactServices";
import PageLayout from "components/layouts/PageLayout";
import Hero from "components/shared/Hero";
import React from "react";
import { questionsArray1 } from "data/FAQ.data";
import RoundedCard from "components/shared/RoundedCard";
import { LuMail, LuPhone } from "react-icons/lu";
import { FaSkype } from "react-icons/fa";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import TechStack from "components/shared/TechStack";

const service: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        title="Expand your horizons with integrated digital solutions for business"
        subTitle="We provide a complete ecosystem of solutions designed to enhance efficiency, extend market reach, and sharpen your competitive edge."
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
      <About
        title="Digital solutions for business to help you capitalise on opportunities and unlock your business untapped potential with"
        description="At Propelius Technologies, we understand that true digital transformation goes beyond surface-level changes. That's why our business solutions are designed to penetrate every layer of your organisation, from customer-facing interfaces to back-end operations. Our expertise in mobile, web & software development solutions ensures that your business remains agile and accessible in an increasingly mobile-centric world.

We work with a mission to offer your organisation more than just implementation. We partner with you to craft a comprehensive digital transformation strategy that aligns seamlessly with your business objectives and market positioning. Our digital solutions for business are engineered to boost operational efficiency, enhance customer engagement, and fuel sustainable growth."
      />
      <ImpactServices />
      <TechStack />
      <Explore
        title="Explore our Techstack"
        subtitle="Delve into our comprehensive techstack, supporting our full spectrum of digital consulting services."
      />
      <FrequentlyAskedQues questions={questionsArray1} />
      <ContactForm />
    </PageLayout>
  );
};

export default service;
