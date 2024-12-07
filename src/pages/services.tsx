import PageLayout from "components/layouts/PageLayout";
import ImpactServices from "components/services/ImpactServices";
import About from "components/shared/About";
import CompanyContactCard from "components/shared/Cards/CompanyContactCard";
import ContactForm from "components/shared/ContactForm";
import Explore from "components/shared/explore/Explore";
import FrequentlyAskedQues from "components/shared/FrequentlyAskedQues";
import Hero from "components/shared/Hero";
import TechStack from "components/shared/TechStack";
import {
  serviceAboutDescription,
  serviceAboutTitle,
  serviceHeroSubtitle,
  serviceHeroTitle,
} from "constants/service.constants";
import { questionsArray1 } from "data/FAQ.data";
import React from "react";
import { fetchFeaturedBlogs } from "services/blog.services";
import { getKnowYourCompany } from "services/company.services";
import { fetchEnquiries, fetchFooterSections } from "services/footer.services";
import { KnowYourCompany } from "types/company.types";
import { BlogPost } from "types/models";
import { PageProps } from "types/page.types";

interface Props extends PageProps {
  knowYourCompany: KnowYourCompany | undefined;
  blogs: BlogPost[];
}

const Service: React.FC<Props> = ({ footer, knowYourCompany, blogs }) => {
  return (
    <PageLayout footer={footer}>
      <Hero
        headerClassName="w-full"
        title={serviceHeroTitle}
        subTitle={serviceHeroSubtitle}
      />
      <CompanyContactCard />
      <About
        highlights={knowYourCompany?.highlights || []}
        title={serviceAboutTitle}
        description={serviceAboutDescription}
      />
      <ImpactServices />
      <TechStack />
      <Explore
        blogs={blogs}
        title="Explore our Techstack"
        subtitle="Delve into our comprehensive techstack, supporting our full spectrum of digital consulting services."
      />
      <FrequentlyAskedQues questions={questionsArray1} />
      <ContactForm />
    </PageLayout>
  );
};

export default Service;

export async function getStaticProps() {
  const sections = await fetchFooterSections();
  const enquiries = await fetchEnquiries();
  const knowYourCompany = await getKnowYourCompany();
  const blogs = await fetchFeaturedBlogs();

  return {
    props: {
      footer: {
        sections: sections.data || [],
        enquiries: enquiries.data || [],
      },
      blogs: blogs.data || [],
      knowYourCompany: knowYourCompany.data,
    },
  };
}
