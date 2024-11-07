import ContactForm from "components/shared/ContactForm";
import EcommerceDevelopmentServices from "components/layouts/EcommerceDevelopmentServices";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import SuccessStoriesEcommerce from "components/layouts/SuccessStoriesEcommerce";
import Button from "components/shared/Button";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TitleSummary from "components/shared/TitleSummary";
import { questionsArrayEcommerce } from "data/FAQ.data";
import React from "react";
import { FaSkype } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";
import { COMPANY_PHONE_1 } from "constants/company.constants";

const ecommerce: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        title="Custom ecommerce development services"
        subTitle="Go beyond the limitations of physical stores with ecommerce development services.
Taking your retail business online opens up a world of opportunities."
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
            Collaborating with an e-commerce development company you can reach a
            global customer base 24/7, significantly increasing your sales
            potential. About 81% of consumers research products online before
            visiting physical stores, indicating a strong reliance on digital
            platforms for information gathering.
            <br /> You can reach a global customer base 24/7, significantly
            increasing your sales potential. Online operations offer
            cost-effective scalability without the limitations of physical
            stores. 
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
      <SuccessStoriesEcommerce />
      <EcommerceDevelopmentServices />
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
      <FrequentlyAskedQues questions={questionsArrayEcommerce} />
      <ContactForm />
    </PageLayout>
  );
};

export default ecommerce;
