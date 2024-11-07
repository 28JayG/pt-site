import ContactForm from "components/shared/ContactForm";
import EcommerceDevelopmentServices from "components/layouts/EcommerceDevelopmentServices";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import StartProjectToday from "components/layouts/StartProjectToday";
import SuccessStoriesEcommerce from "components/layouts/SuccessStoriesEcommerce";
import SuccessStoriesSaaSApp from "components/layouts/SuccessStoriesSaaSApp";
import SupabaseDevelopmentServices from "components/layouts/SupabaseDevelopmentServices";
import About from "components/shared/About";
import Button from "components/shared/Button";
import Explore from "components/shared/Explore";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TechStack from "components/shared/TechStack";
import TitleSummary from "components/shared/TitleSummary";
import {
  questionsArrayEcommerce,
  questionsArrayMobileApp,
} from "data/FAQ.data";
import React from "react";
import { FaSkype } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";
import { COMPANY_PHONE_1 } from "constants/company.constants";

const supabaseDevelopment: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        title="Supabase development
 Your Digital Transformation"
        subTitle="Discover innovative solutions tailored to your business needs. 
At Propelius Technologies, we drive success through cutting-edge technology and expert development."
      />
      <RoundedCard
        children={
          <div className="flex gap-8 items-center justify-center font-semibold text-3xl">
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
      <MaxWidthWrapper>
        <div className="flex justify-between mt-20">
          <p className="w-[400px] font-semibold text-4xl">
            Operate more efficiently and reach their audience wherever they are.
          </p>
          <p className="leading-relaxed w-[620px]">
            With the vast majority of consumers spending significant time on
            their smartphones, a web app puts your business directly into their
            hands, offering convenience and accessibility like never before.
            <br /> We are  one of the best web application development companies
            in India. Our apps offer valuable data insights, helping you
            understand user behaviour and refine your offerings. They also
            create new revenue streams through in-app purchases or ads. 
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
      <SuccessStoriesSaaSApp />
      <SupabaseDevelopmentServices />
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
      <MaxWidthWrapper>
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
      </MaxWidthWrapper>
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
      <FrequentlyAskedQues questions={questionsArrayMobileApp} />
      <ContactForm />
    </PageLayout>
  );
};

export default supabaseDevelopment;
