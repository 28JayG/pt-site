import ContactForm from "components/shared/ContactForm";
import FintechAppSolution from "components/layouts/FintechAppSolution";
import FintechServices from "components/layouts/FintechServices";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import RealEstateBusinessSolution from "components/layouts/RealEstateBusinessSolution";
import RealEstateServices from "components/layouts/RealEstateServices";
import SuccessStoriesSaaSApp from "components/saas/SuccessStoriesSaaSApp";
import Button from "components/shared/Button";
import Explore from "components/shared/explore/Explore";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TitleSummary from "components/shared/TitleSummary";
import { questionsArrayMobileApp } from "data/FAQ.data";
import React from "react";
import { FaSkype } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";
import { COMPANY_PHONE_1 } from "constants/company.constants";
import { PageProps } from "types/page.types";
import { fetchEnquiries, fetchFooterSections } from "services/footer.services";

const financeAppDevelopment: React.FC<PageProps> = ({ footer }) => {
  return (
    <PageLayout footer={footer}>
      <Hero
        title="Finance App Development"
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
      <MaxWidthWrapper className="flex gap-6 ">
        <div className="flex flex-col gap-5 w-[644px] ">
          <p className="font-semibold text-4xl text-green-dark">
            Why Fintech Businesses Need Digital Transformation
          </p>
          <p className="text-textSecondary">
            At CMARIX, our vision is to engineer future-ready capabilities and
            business strategies for digital enterprise and startup solutions. We
            leverage design and development expertise that continues to meet
            user expectations.
            <br /> Having a track record of guiding countless companies to
            success, we know how to weave the latest technologies with business
            contexts for shaping the digital footprints of enterprises. Whether
            delivering a superb mainstream design for web and mobile apps or
            creating custom user experience over and above the standard
            practices, we can get the right wings for the enterprise solutions
            to fly over the competition.
          </p>
        </div>
        <div className="w-[646px] h-[429px]">
          <img src="/images/fintech_app_img.png" alt="" />
        </div>
      </MaxWidthWrapper>
      <FintechAppSolution />
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
      <FintechServices />
      <SuccessStoriesSaaSApp />
      <RoundedCard
        variant="bordered"
        children={
          <TitleSummary
            title="Planning a Digital Transformation in Healthcare, worried about the budget?"
            summary="Innovation is just a conversation away. Reach out and let's
              discuss your app aspirations"
            action={
              <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                Get Your App Cost Now
              </Button>
            }
          />
        }
      />
      <Explore
        title="Explore our digital digest"
        subtitle="Scroll through our blog for expert views on web app development, mobile app, SaaS solutions and other digital transformation stuff. "
      />
      <FrequentlyAskedQues questions={questionsArrayMobileApp} />
      <ContactForm />
    </PageLayout>
  );
};

export default financeAppDevelopment;

export async function getStaticProps() {
  const sections = await fetchFooterSections();
  const enquiries = await fetchEnquiries();

  return {
    props: {
      footer: {
        sections: sections.data || [],
        enquiries: enquiries.data || [],
      },
    },
  };
}
