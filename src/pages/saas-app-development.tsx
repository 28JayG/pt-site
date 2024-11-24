import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import SaaSAppDevelopmentServices from "components/saas/SaaSAppDevelopmentServices";
import SuccessStoriesSaaSApp from "components/saas/SuccessStoriesSaaSApp";
import About from "components/shared/About";
import Button from "components/shared/Button";
import CompanyContactCard from "components/shared/Cards/CompanyContactCard";
import TopClientsCard from "components/shared/Cards/TopClientsCard";
import ContactForm from "components/shared/ContactForm";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TechStack from "components/shared/TechStack";
import TitleSummary from "components/shared/TitleSummary";
import { questionsArrayWebApp } from "data/FAQ.data";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const saasAppDevelopment: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        title="Your Digital Transformation"
        subTitle="Discover innovative solutions tailored to your business needs. 
At Propelius Technologies, we drive success through cutting-edge technology and expert development."
      />
      <MaxWidthWrapper className="mt-10">
        <CompanyContactCard />
      </MaxWidthWrapper>
      <div className="my-20">
        <About
          title=" Operate more efficiently and reach their audience wherever they are."
          description=" With the vast majority of consumers spending significant time on
        their smartphones, a web app puts your business directly into their
        hands, offering convenience and accessibility like never before.
        We are  one of the best web application development companies in
        India. Our apps offer valuable data insights, helping you understand
        user behaviour and refine your offerings. They also create new
        revenue streams through in-app purchases or ads."
        />
      </div>
      <MaxWidthWrapper className="my-20">
        <TopClientsCard color='grey-100' />
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
      <SuccessStoriesSaaSApp />
      <SaaSAppDevelopmentServices />
      <TechStack />
      <RoundedCard
        variant="bordered"
        children={
          <TitleSummary
            title="Ready to Bring Your App Idea to Life?"
            summary="Innovation is just a conversation away. Reach out and let's
              discuss your app aspirations"
            action={
              <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                Contact Us
              </Button>
            }
          />
        }
      />
      <FrequentlyAskedQues questions={questionsArrayWebApp} />
      <ContactForm />
    </PageLayout>
  );
};

export default saasAppDevelopment;
