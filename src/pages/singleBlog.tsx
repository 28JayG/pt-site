import ContactForm from "components/ContactForm";
import PageLayout from "components/layouts/PageLayout";
import SingleBlogFullArticle from "components/layouts/SingleBlogFullArticle";
import SingleBlogHero from "components/layouts/SingleBlogHero";
import Explore from "components/shared/Explore";
import React from "react";

const singleBlog: React.FC = () => {
  return (
    <PageLayout>
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

export default singleBlog;
