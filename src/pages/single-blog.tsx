import ContactForm from "components/shared/ContactForm";
import PageLayout from "components/layouts/PageLayout";
import SingleBlogFullArticle from "components/layouts/SingleBlogFullArticle";
import SingleBlogHero from "components/layouts/SingleBlogHero";
import Explore from "components/shared/explore/Explore";
import React from "react";
import { PageProps } from "types/page.types";
import { fetchEnquiries, fetchFooterSections } from "services/footer.services";

const SingleBlog: React.FC<PageProps> = ({footer}) => {
  return (
    <PageLayout footer={footer} >
      <SingleBlogHero />
      <SingleBlogFullArticle />
      <Explore
        title="Related Articles & Resources"
        subtitle="Dive into a wealth of knowledge with our unique articles and resources. Stay informed about the latest trends and best practices in the tech industry."
      />
      <ContactForm />
    </PageLayout>
  );
};

export default SingleBlog;

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
