import PageLayout from "components/layouts/PageLayout";
import ImpactServices from "components/services/ImpactServices";
import About from "components/shared/About";
import CompanyContactCard from "components/shared/Cards/CompanyContactCard";
import ContactForm from "components/shared/ContactForm";
import Explore from "components/shared/explore/Explore";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import Hero from "components/shared/Hero";
import TechStack from "components/shared/TechStack";
import { blurredBg } from "constants/assets.constants";
import {
  serviceAboutDescription,
  serviceAboutTitle,
  serviceHeroSubtitle,
  serviceHeroTitle,
} from "constants/service.constants";
import { questionsArray1 } from "data/FAQ.data";
import { techCategories } from "data/services.data";
import React from "react";
import { fetchFeaturedBlogs } from "services/blog.services";
import { getKnowYourCompany } from "services/company.services";
import { fetchEnquiries, fetchFooterSections } from "services/footer.services";
import { fetchServices, fetchTechCategories } from "services/services.services";
import { KnowYourCompany } from "types/company.types";
import { BlogPost, Service, TechCategory } from "types/models";
import { PageProps } from "types/page.types";

interface Props extends PageProps {
  knowYourCompany: KnowYourCompany | undefined;
  blogs: BlogPost[];
  services: Service[];
  techCategories: TechCategory[];
}

const ServicePage: React.FC<Props> = ({
  footer,
  knowYourCompany,
  blogs,
  services,
  techCategories
}) => {
  return (
    <PageLayout footer={footer}>
      <div>...</div>
      <div className="relative">
        <img
          src={blurredBg}
          alt=""
          className="-translate-y-1/2 top-1/2 h-full w-full absolute"
        />
        <Hero
          hideBackground
          headerClassName="w-full"
          title={serviceHeroTitle}
          subTitle={serviceHeroSubtitle}
        />
        <CompanyContactCard />
      </div>
      <About
        highlights={knowYourCompany?.highlights || []}
        title={serviceAboutTitle}
        description={serviceAboutDescription}
      />
      <ImpactServices services={services} />
      <TechStack techCategories={techCategories} />
      <Explore
        blogs={blogs}
        title="Explore our Techstack"
        subtitle="Delve into our comprehensive techstack, supporting our full spectrum of digital consulting services."
      />
      {/* <FrequentlyAskedQues questions={questionsArray1} /> */}
      {/* <ContactForm /> */}
    </PageLayout>
  );
};

export default ServicePage;

export async function getStaticProps() {
  const sections = await fetchFooterSections();
  const enquiries = await fetchEnquiries();
  const knowYourCompany = await getKnowYourCompany();
  const blogs = await fetchFeaturedBlogs();
  const services = await fetchServices();
  const techCategories = await fetchTechCategories();

  return {
    props: {
      footer: {
        sections: sections.data || [],
        enquiries: enquiries.data || [],
      },
      blogs: blogs.data || [],
      knowYourCompany: knowYourCompany.data,
      services: services.data || [],
      techCategories: techCategories.data || [],
    },
  };
}
