import ContactForm from "components/shared/ContactForm";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import MobileAppDevelopmentServices from "components/layouts/MobileAppDevelopmentServices";
import PageLayout from "components/layouts/PageLayout";
import StartProjectToday from "components/layouts/StartProjectToday";
import SuccessStories from "components/layouts/SuccessStories";
import About from "components/shared/About";
import Button from "components/shared/Button";
import Explore from "components/shared/Explore";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TechStack from "components/shared/TechStack";
import TitleSummary from "components/shared/TitleSummary";
import { questionsArrayMobileApp } from "data/FAQ.data";
import React from "react";
import { FaLinkedin, FaReact, FaSkype } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";
import { homepageAboutDescription, homepageAboutTitle, homepageHighLights } from "constants/homepage.constants";

const mobileAppDevelopment: React.FC = () => {
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
      <MaxWidthWrapper>
        <div className="flex justify-between my-40">
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
      </MaxWidthWrapper>
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
        <MaxWidthWrapper>
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
      </div>

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
        <div className="flex items-center justify-between py-10">
          <div className="flex flex-col gap-5">
            <p className="text-4xl text-green-dark font-semibold">Why Choose us</p>
            <p className="max-w-[540px] font-light text-textSecondary">
              At Propelius Technologies, we don't just build apps; we craft
              digital experiences. Our client-centric approach, coupled with our
              technical excellence, ensures your app is tailored to your unique
              needs and user expectations. Choose us for a partnership that
              values your success as our own.
            </p>
          </div>
          <div className="w-[707px] h-[340px]">
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

export default mobileAppDevelopment;
