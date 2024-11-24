import PageLayout from "components/layouts/PageLayout";
import ImpactServices from "components/services/ImpactServices";
import About from "components/shared/About";
import CompanyContactCard from "components/shared/Cards/CompanyContactCard";
import ContactForm from "components/shared/ContactForm";
import Explore from "components/shared/explore/Explore";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import Hero from "components/shared/Hero";
import TechStack from "components/shared/TechStack";
import {
  serviceAboutDescription,
  serviceAboutTitle,
  serviceHeroSubtitle,
  serviceHeroTitle,
  serviceHighLights,
} from "constants/service.constants";
import { questionsArray1 } from "data/FAQ.data";
import React from "react";

const Service: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        headerClassName="w-full"
        title={serviceHeroTitle}
        subTitle={serviceHeroSubtitle}
      />
      <CompanyContactCard />
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
