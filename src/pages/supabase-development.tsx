import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import StartProjectToday from "components/layouts/StartProjectToday";
import SupabaseDevelopmentServices from "components/supabase-development/SupabaseDevelopmentServices";
import SuccessStoriesSaaSApp from "components/saas/SuccessStoriesSaaSApp";
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
import { questionsArrayMobileApp } from "data/FAQ.data";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import WhyChooseUs from "components/shared/WhyChooseUs";
import { PageProps } from "types/page.types";
import { fetchEnquiries, fetchFooterSections } from "services/footer.services";

const SupabaseDevelopment: React.FC<PageProps> = ({footer}) => {
  return (
    <PageLayout footer={footer} >
      <Hero
        title="Supabase development
 Your Digital Transformation"
        subTitle="Discover innovative solutions tailored to your business needs. 
At Propelius Technologies, we drive success through cutting-edge technology and expert development."
      />
      <MaxWidthWrapper className="my-20">
        <CompanyContactCard />
      </MaxWidthWrapper>

      <div className="mt-20">
        <About
          title="Operate more efficiently and reach their audience wherever they are."
          description="
            With the vast majority of consumers spending significant time on
            their smartphones, a web app puts your business directly into their
            hands, offering convenience and accessibility like never before.
            We are  one of the best web application development companies
            in India. Our apps offer valuable data insights, helping you
            understand user behaviour and refine your offerings. They also
            create new revenue streams through in-app purchases or ads. 
          "
        />
      </div>
      <div className="my-20">
        <TopClientsCard color='grey-100' />
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
      <WhyChooseUs />
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

export default SupabaseDevelopment;

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
