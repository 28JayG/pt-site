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
import WhyChooseUs from "components/shared/WhyChooseUs";
import {
  homepageAboutDescription,
  homepageAboutTitle,
  homepageHighLights,
} from "constants/homepage.constants";
import { questionsArrayMobileApp } from "data/FAQ.data";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { fetchEnquiries, fetchFooterSections } from "services/footer.services";
import { PageProps } from "types/page.types";

const MobileAppDevelopment: React.FC<PageProps> = ({footer}) => {
  return (
    <PageLayout footer={footer} >
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

      <WhyChooseUs />
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
