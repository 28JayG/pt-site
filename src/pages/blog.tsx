import ContactForm from "components/ContactForm";
import ArticleListBlog from "components/layouts/ArticleListBlog";
import LatestArticleBlog from "components/layouts/LatestArticleBlog";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import Button from "components/shared/Button";
import { blurredBg } from "constants/assets.constants";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

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
