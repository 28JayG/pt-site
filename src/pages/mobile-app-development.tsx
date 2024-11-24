import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import StartProjectToday from "components/layouts/StartProjectToday";
import MobileAppDevelopmentServices from "components/mobile-development/MobileAppDevelopmentServices";
import SuccessStories from "components/mobile-development/SuccessStories";
import About from "components/shared/About";
import Button from "components/shared/Button";
import CompanyContactCard from "components/shared/Cards/CompanyContactCard";
import TopClientsCard from "components/shared/Cards/TopClientsCard";
import ContactForm from "components/shared/ContactForm";
import Explore from "components/shared/explore/Explore";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TechStack from "components/shared/TechStack";
import TitleSummary from "components/shared/TitleSummary";
import {
  homepageAboutDescription,
  homepageAboutTitle,
  homepageHighLights,
} from "constants/homepage.constants";
import { questionsArrayMobileApp } from "data/FAQ.data";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const MobileAppDevelopment: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        title="Crafting apps that are as dynamic as your business."
        subTitle="At Propelius we offer strategic mobile application development services that turn your business logic into intuitive app interfaces. We craft secure, efficient, and future-proof apps right from concept to deployment for immersive experiences. "
      />
      <CompanyContactCard />
      <About
        title="Turn Smartphone Screens into Your Business Frontier."
        description="
            The mobile revolution is changing business and how we communicate.
            Businesses need a robust mobile presence to increase visibility,
            reach, and customer engagement.
            Our mission is to help you succeed by providing
            transformative, secure, and state-of-the-art mobile solutions for
            effortless user experiences.
            We're recognized globally as a leading mobile application
            development company.
          "
      />
      <MaxWidthWrapper>
        <TopClientsCard />
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

      <RoundedCard
        variant="bordered"
        children={
          <TitleSummary
            title="Ready to Bring Your App Idea to Life?"
            summary="Innovation is just a conversation away. Reach out and let's
              discuss your app aspirations"
            action={
              <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                View All Work
              </Button>
            }
          />
        }
      />

      <MaxWidthWrapper>
        <div className="flex flex-col-reverse lg:flex-row gap-7 items-center justify-between py-10">
          <div className="flex flex-col gap-5">
            <p className="text-2xl lg:text-4xl text-green-900 font-semibold">
              Why Choose us
            </p>
            <p className="text-xs lg:text-base max-w-[540px] font-light text-grey-700">
              At Propelius Technologies, we don't just build apps; we craft
              digital experiences. Our client-centric approach, coupled with our
              technical excellence, ensures your app is tailored to your unique
              needs and user expectations. Choose us for a partnership that
              values your success as our own.
            </p>
          </div>
          <div className="w-full max-w-[707px] lg:h-[340px] object-cover">
            <img src="/images/why_choose_us_img.png" alt="" />
          </div>
        </div>
      </MaxWidthWrapper>
      <About
        title={homepageAboutTitle}
        description={homepageAboutDescription}
        highlights={homepageHighLights}
      />
      <StartProjectToday />
      <Explore
        title="Explore our digital digest"
        subtitle="Scroll through our blog for expert views on web app development, mobile app, SaaS solutions and other digital transformation stuff."
      />
      <FrequentlyAskedQues questions={questionsArrayMobileApp} />
      <ContactForm />
    </PageLayout>
  );
};

export default MobileAppDevelopment;
