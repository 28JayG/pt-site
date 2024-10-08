import ContactForm from "components/ContactForm";
import FrequentlyAskedQues from "components/layouts/FrequentlyAskedQues";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import MobileAppDevelopmentServices from "components/layouts/MobileAppDevelopmentServices";
import PageLayout from "components/layouts/PageLayout";
import StartProjectToday from "components/layouts/StartProjectToday";
import SuccessStories from "components/layouts/SuccessStories";
import TechStack from "components/layouts/TechStack";
import About from "components/shared/About";
import Button from "components/shared/Button";
import Explore from "components/shared/Explore";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TitleSummary from "components/shared/TitleSummary";
import { questionsArray1, questionsArray2 } from "data/FAQ.data";
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
      <MaxWidthWrapper>
        <div className="rounded-3xl px-28 py-20 mx-auto text-center bg-white convex-curve border-2 border-primary items-center justify-between flex">
          <div className="max-w-[640px] flex flex-col gap-5 text-left">
            <p className="text-primary text-4xl font-semibold ">
              Ready to Bring Your App Idea to Life?
            </p>
            <p>
              Innovation is just a conversation away. Reach out and let's
              discuss your app aspirations
            </p>
          </div>
          <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
            View All Work
          </Button>
        </div>
        <div className="flex items-center justify-between py-10">
          <div className="flex flex-col gap-5">
            <p className="text-4xl font-semibold">Why Choose us</p>
            <p className="max-w-[540px]">
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
        <About
          title="Know More About
   Propelius Technologies
   "
          description="At Propelius, we dive deeper into the world of tech and work on our approach on how we're reshaping the digital landscape. Our team of seasoned experts brings a wealth of experience across various industries, ensuring that we understand your unique challenges and opportunities.

   We believe in the power of technology to transform businesses, and our track record speaks for itself. From advanced mobile apps to robust SaaS solutions, we've helped countless organisations achieve their digital goals. Connect with us to explore more about our case studies, and learn about our innovative approach to tech development. Our holistic approach to digital transformation encompasses everything from initial strategy to ongoing support. We're committed to transparency, keeping you involved and informed throughout the development process. "
        />
        <StartProjectToday />
        <Explore
          title="Explore our digital digest"
          subtitle="Scroll through our blog for expert views on web app development, mobile app, SaaS solutions and other digital transformation stuff."
        />
        <FrequentlyAskedQues questions={questionsArray2}/>
        <ContactForm />
      </MaxWidthWrapper>
    </PageLayout>
  );
};

export default mobileAppDevelopment;
