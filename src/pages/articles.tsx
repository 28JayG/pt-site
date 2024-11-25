import ContactForm from "components/shared/ContactForm";
import PageLayout from "components/layouts/PageLayout";
import React from "react";
import LatestArticleBlog from "components/articles/LatestArticleBlog";
import ArticleListBlog from "components/articles/ArticleListBlog";

const blog: React.FC = () => {
  return (
    <PageLayout>
      <LatestArticleBlog />
      <ArticleListBlog />
      <ContactForm />
    </PageLayout>
  );
};

export default blog;
