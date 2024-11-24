import EcommerceDevelopmentServices from "components/ecommerce/EcommerceDevelopmentServices";
import SuccessStoriesEcommerce from "components/ecommerce/SuccessStoriesEcommerce";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import About from "components/shared/About";
import Button from "components/shared/Button";
import CompanyContactCard from "components/shared/Cards/CompanyContactCard";
import TopClientsCard from "components/shared/Cards/TopClientsCard";
import ContactForm from "components/shared/ContactForm";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TitleSummary from "components/shared/TitleSummary";
import { blurredBg } from "constants/assets.constants";
import { questionsArrayEcommerce } from "data/FAQ.data";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const ecommerce: React.FC = () => {
  return (
    <PageLayout>
      <Hero
        title="Custom ecommerce development services"
        subTitle="Go beyond the limitations of physical stores with ecommerce development services. Taking your retail business online opens up a world of opportunities."
      />

      <MaxWidthWrapper className="mt-20">
        <CompanyContactCard />
      </MaxWidthWrapper>

      <About
        title="Operate more efficiently and reach their audience wherever they are."
        description="Collaborating with an e-commerce development company you can reach a
            global customer base 24/7, significantly increasing your sales
            potential. About 81% of consumers research products online before
            visiting physical stores, indicating a strong reliance on digital
            platforms for information gathering.
           You can reach a global customer base 24/7, significantly
            increasing your sales potential. Online operations offer
            cost-effective scalability without the limitations of physical
            stores. 
          "
      />
      <MaxWidthWrapper className="my-20">
        <TopClientsCard color="grey-700" />
      </MaxWidthWrapper>
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
      <div className="py-10 relative overflow-hidden">
        <img
          src={blurredBg}
          alt=""
          className="w-full -top-0 -translate-y-1/2 absolute z-0"
        />
        <MaxWidthWrapper>
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
      </div>
      <FrequentlyAskedQues questions={questionsArrayEcommerce} />
      <ContactForm />
    </PageLayout>
  );
};

export default ecommerce;
