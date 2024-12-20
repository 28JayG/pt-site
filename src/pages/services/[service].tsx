import BlurredBg from "components/hoc/BlurredBg";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import StartProjectToday from "components/layouts/StartProjectToday";
import RelatedServices from "components/mobile-development/MobileAppDevelopmentServices";
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
import { companyServiceSlugs } from "constants/service.constants";

import { questionsArrayMobileApp } from "data/FAQ.data";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { fetchFeaturedBlogs } from "services/blog.services";
import { fetchTopCompanies } from "services/clients.services";
import { getKnowYourCompany } from "services/company.services";
import { fetchEnquiries, fetchFooterSections } from "services/footer.services";
import { fetchTechCategories } from "services/services.services";
import { fetchServiceDetails } from "services/works.services";
import { KnowYourCompany } from "types/company.types";
import { BlogPost, Company, Service, TechCategory } from "types/models";
import { PageProps } from "types/page.types";
import { showCalender, showKnowYourCompany } from "utils/services.utils";

interface LocalProps extends PageProps {
  knowYourCompany: KnowYourCompany | undefined;
  topCompanies: Company[];
  techCategories: TechCategory[];
  blogs: BlogPost[];
  serviceDetails: Service;
}

const MobileAppDevelopment: React.FC<LocalProps> = ({
  footer,
  knowYourCompany,
  topCompanies,
  blogs,
  techCategories,
  serviceDetails,
}) => {
  const router = useRouter();

  return (
    <PageLayout footer={footer}>
      <BlurredBg>
        <Hero
          tag={serviceDetails?.title}
          hideBackground
          title={serviceDetails?.headline || ""}
          subTitle={serviceDetails?.subHeadline || ""}
        />
        <CompanyContactCard />
      </BlurredBg>
      <About
        title={serviceDetails?.tagline || ""}
        description={serviceDetails?.description || ""}
      />
      <MaxWidthWrapper>
        <TopClientsCard companies={topCompanies} />
        <div className="mb-20">
          <TitleSummary
            title="Our Success Stories"
            summary={serviceDetails?.successStoriesDescription}
            action={
              <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                View All Work
              </Button>
            }
          />
        </div>
      </MaxWidthWrapper>

      <SuccessStories works={serviceDetails?.works || []} />
      <RelatedServices
        services={serviceDetails.relatedServices}
        title={serviceDetails.relatedServicesDetails.title}
        description={serviceDetails.relatedServicesDetails.summary}
      />
      <TechStack techCategories={techCategories} />

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

      {showKnowYourCompany(router.query.service as string) && (
        <>
          <WhyChooseUs />
          <About
            title={knowYourCompany?.title || ""}
            description={knowYourCompany?.about || ""}
            highlights={knowYourCompany?.highlights || []}
          />
        </>
      )}
      {showCalender(router.query.service as string) && <StartProjectToday />}
      <Explore
        blogs={blogs}
        title="Explore our digital digest"
        subtitle="Scroll through our blog for expert views on web app development, mobile app, SaaS solutions and other digital transformation stuff."
      />
      <FrequentlyAskedQues questions={questionsArrayMobileApp} />
      <ContactForm />
    </PageLayout>
  );
};

export default MobileAppDevelopment;

export const getStaticPaths: GetStaticPaths = async () => {
  const servicePaths = companyServiceSlugs.map((slug) => ({
    params: { service: slug },
  }));

  return { paths: servicePaths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sections = await fetchFooterSections();
  const enquiries = await fetchEnquiries();
  const knowYourCompany = await getKnowYourCompany();
  const topCompanies = await fetchTopCompanies();
  const blogs = await fetchFeaturedBlogs();
  const techCategories = await fetchTechCategories();
  const serviceDetails = await fetchServiceDetails(params?.service as string);

  return {
    props: {
      footer: {
        sections: sections.data || [],
        enquiries: enquiries.data || [],
      },
      topCompanies: topCompanies.data || [],
      knowYourCompany: knowYourCompany.data,
      techCategories: techCategories.data || [],
      blogs: blogs.data || [],
      serviceDetails: serviceDetails.data,
    },
  };
};
