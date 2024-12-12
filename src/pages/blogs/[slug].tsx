import ContactForm from "components/shared/ContactForm";
import PageLayout from "components/layouts/PageLayout";
import Explore from "components/shared/explore/Explore";
import React from "react";
import { PageProps } from "types/page.types";
import { fetchEnquiries, fetchFooterSections } from "services/footer.services";
import { fetchBlogs, fetchBlogSlugs } from "services/blog.services";
import { BlogPost } from "types/models";
import { GetStaticProps } from "next";
import BlogHero from "components/blogs/BlogHero";
import BlogContent from "components/blogs/BlogContent";

interface Props extends PageProps {
  blogs: BlogPost[];
  blog: BlogPost;
}

const BlogDetails: React.FC<Props> = ({ footer, blogs, blog }) => {
  return (
    <PageLayout footer={footer}>
      <BlogHero
        title={blog.title}
        bannerImage={blog.bannerImage}
        publishedAt={blog.publishedAt}
      />
      <BlogContent content={blog.content} />
      <Explore
        blogs={blogs}
        title="Related Articles & Resources"
        subtitle="Dive into a wealth of knowledge with our unique articles and resources. Stay informed about the latest trends and best practices in the tech industry."
      />
      <ContactForm />
    </PageLayout>
  );
};

export default BlogDetails;

export async function getStaticPaths() {
  // Fetch the list of blog slugs or IDs
  const slugs = await fetchBlogSlugs();

  // Map the slugs to the format required by Next.js
  const paths = slugs.data?.map((slug) => ({
    params: { slug }, // Assuming the dynamic route is [slug].tsx
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sections = await fetchFooterSections();
  const enquiries = await fetchEnquiries();
  const blogs = await fetchBlogs();

  const blog = blogs.data?.find((blog) => blog.slug === params?.slug);

  return {
    props: {
      footer: {
        sections: sections.data || [],
        enquiries: enquiries.data || [],
      },
      blogs: blogs.data || [],
      blog,
    },
  };
};
