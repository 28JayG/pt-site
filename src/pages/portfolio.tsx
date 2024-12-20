import ContactForm from "components/shared/ContactForm";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import PortfolioList from "components/layouts/PortfolioList";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import React from "react";
import { FaSkype } from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";
import { COMPANY_PHONE_1 } from "constants/company.constants";
import { PageProps } from "types/page.types";

const Portfolio: React.FC<PageProps> = ({footer}) => {
  return (
    <PageLayout footer={footer} >
      <Hero
        title="Our (Beautiful) Work"
        subTitle="Dive into our blog for industry insights, tips, and news. Stay informed and inspired with our latest articles and updates."
      />
      <RoundedCard
        children={
          <div className="flex gap-8 items-center justify-center font-semibold text-3xl">
            <p className="flex gap-2 items-center">
              <LuPhone />
              {COMPANY_PHONE_1}
            </p>
            <p className="flex gap-2 items-center">
              <LuMail />
              info@propelius.tech
            </p>
            <p className="flex gap-2 items-center">
              <FaSkype />
              tech.propelius
            </p>
          </div>
        }
      />
      <PortfolioList />
      <ContactForm />
    </PageLayout>
  );
};

export default Portfolio;
