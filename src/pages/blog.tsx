import ContactForm from "components/ContactForm";
import ArticleListBlog from "components/layouts/ArticleListBlog";
import LatestArticleBlog from "components/layouts/LatestArticleBlog";
import PageLayout from "components/layouts/PageLayout";
import React from "react";

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
