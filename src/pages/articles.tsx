import ContactForm from "components/shared/ContactForm";
import PageLayout from "components/layouts/PageLayout";
import React from "react";
import LatestArticleBlog from "components/articles/LatestArticleBlog";
import ArticleListBlog from "components/articles/ArticleListBlog";
import { PageProps } from "types/page.types";
import { fetchEnquiries, fetchFooterSections } from "services/footer.services";

const blog: React.FC<PageProps> = ({ footer }) => {
  return (
    <PageLayout footer={footer}>
      <LatestArticleBlog />
      <ArticleListBlog />
      <ContactForm />
    </PageLayout>
  );
};

export default blog;

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
