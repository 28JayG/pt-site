import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import WebAppDevelopmentServices from "components/layouts/WebAppDevelopmentServices";
import SuccessStories from "components/mobile-development/SuccessStories";
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

const WebAppDevelopment: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        title="services for feature rich, no latency & speediest web apps."
        subTitle="At Propelius, we latest trends in web application development to develop web apps that are designed to provide interactive, dynamic experiences right in your browser without the need for downloading software. Our apps are ideal for businesses looking to offer services, manage data, or connect with users across any device."
      />
      <CompanyContactCard />
      <div className="my-20">
        <About
          title="Operate more efficiently and reach their audience wherever they are."
          description="
          With the vast majority of consumers spending significant time on
          their smartphones, a web app puts your business directly into their
          hands, offering convenience and accessibility like never before.
          We are  one of the best web application development companies in
          India. Our apps offer valuable data insights, helping you understand
          user behaviour and refine your offerings. They also create new
          revenue streams through in-app purchases or ads. 
          "
        />
      </div>
      <MaxWidthWrapper className="mb-20">
        <div className="my-20">
          <TopClientsCard color='grey-100' />
        </div>
        <TitleSummary
          title="Our Success Stories"
          summary="Explore unique client cases and check on the potential solutions that we can offer through our mobile app development success stories. "
          action={
            <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
              View All Work
            </Button>
          }
        />
      </MaxWidthWrapper>
      <SuccessStories />
      <WebAppDevelopmentServices />
      <TechStack />
      <MaxWidthWrapper className="mt-10 mb-20">
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
      </MaxWidthWrapper>
      <FrequentlyAskedQues questions={questionsArrayWebApp} />
      <ContactForm />
    </PageLayout>
  );
};

export default WebAppDevelopment;
