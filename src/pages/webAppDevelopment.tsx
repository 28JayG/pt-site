import ContactForm from "components/ContactForm";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import SuccessStories from "components/layouts/SuccessStories";
import WebAppDevelopmentServices from "components/layouts/WebAppDevelopmentServices";
import Button from "components/shared/Button";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TechStack from "components/shared/TechStack";
import TitleSummary from "components/shared/TitleSummary";
import { questionsArray1, questionsArrayWebApp } from "data/FAQ.data";
import React from "react";
import { FaSkype } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";

const webAppDevelopment: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        title="services for feature rich, no latency & speediest web apps. "
        subTitle="At Propelius, we latest trends in web application development to develop web apps that are designed to provide interactive, dynamic experiences right in your browser without the need for downloading software. Our apps are ideal for businesses looking to offer services, manage data, or connect with users across any device."
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
        <div className="flex justify-between mt-20">
          <p className="w-[400px] font-semibold text-4xl">
            Operate more efficiently and reach their audience wherever they are.
          </p>
          <p className="leading-relaxed w-[620px]">
            With the vast majority of consumers spending significant time on
            their smartphones, a web app puts your business directly into their
            hands, offering convenience and accessibility like never before.
            <br />
            We are  one of the best web application development companies in
            India. Our apps offer valuable data insights, helping you understand
            user behaviour and refine your offerings. They also create new
            revenue streams through in-app purchases or ads. 
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
      <MaxWidthWrapper className="mb-20">
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

export default webAppDevelopment;
