import About from "components/shared/About";
import ContactForm from "components/shared/ContactForm";
import Explore from "components/shared/Explore";
import ImpactServices from "components/services/ImpactServices";
import PageLayout from "components/layouts/PageLayout";
import Hero from "components/shared/Hero";
import React from "react";
import { questionsArray1 } from "data/FAQ.data";
import RoundedCard from "components/shared/RoundedCard";
import { LuMail, LuPhone } from "react-icons/lu";
import { FaSkype } from "react-icons/fa";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import TechStack from "components/shared/TechStack";
import {
  serviceAboutDescription,
  serviceAboutTitle,
  serviceHeroSubtitle,
  serviceHeroTitle,
  serviceHighLights,
} from "constants/service.constants";
import { COMPANY_PHONE_1 } from "constants/company.constants";

const Service: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        headerClassName="w-full"
        title={serviceHeroTitle}
        subTitle={serviceHeroSubtitle}
      />
      <RoundedCard
        children={
          <div className="flex gap-8 items-center justify-center text-green-dark font-semibold text-2xl">
            <p className="flex gap-2 items-center">
              <LuPhone />
              {COMPANY_PHONE_1}
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
        highlights={serviceHighLights}
        title={serviceAboutTitle}
        description={serviceAboutDescription}
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

export default Service;
