import PageLayout from "components/layouts/PageLayout";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import React from "react";
import { FaSkype } from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";

const webAppDevelopment: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        title="Crafting apps that are as dynamic as your business."
        subTitle="At Propelius we offer strategic mobile application development services that turn your business logic into intuitive app interfaces. We craft secure, efficient, and future-proof apps right from concept to deployment for immersive experiences. "
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
    </PageLayout>
  );
};

export default webAppDevelopment;
