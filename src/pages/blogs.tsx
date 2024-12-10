import LatestArticle from "components/articles/LatestArticleBlog";
import PageLayout from "components/layouts/PageLayout";
import ContactForm from "components/shared/ContactForm";
import React from "react";
import { fetchBlogs } from "services/blog.services";
import { fetchEnquiries, fetchFooterSections } from "services/footer.services";
import { BlogPost } from "types/models";
import { PageProps } from "types/page.types";

interface Props extends PageProps {
  blogs: BlogPost[];
}

const Blogs: React.FC<Props> = ({ footer, blogs }) => {
  return (
    <PageLayout footer={footer}>
      <LatestArticle blog={blogs?.[0]} />
      {/* <ArticleListBlog /> */}
      <ContactForm />
    </PageLayout>
  );
};

export default Blogs;

export async function getStaticProps() {
  const sections = await fetchFooterSections();
  const enquiries = await fetchEnquiries();
  const blogs = await fetchBlogs();

  return {
    props: {
      footer: {
        sections: sections.data || [],
        enquiries: enquiries.data || [],
      },
      blogs: blogs.data || [],
    },
  };
}
