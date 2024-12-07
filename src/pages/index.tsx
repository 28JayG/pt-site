import ContactForm from "components/shared/ContactForm";
import FeaturedWorks from "components/home/featured-works/FeaturedWorks";
import PotentialClients from "components/home/PotentialClients";
import ServicesRange from "components/home/ServicesRange";
import Testimonial from "components/home/Testimonial";
import PageLayout from "components/layouts/PageLayout";
import About from "components/shared/About";
import Button from "components/shared/Button";
import Explore from "components/shared/explore/Explore";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TitleSummary from "components/shared/TitleSummary";
import { blurredBg } from "constants/assets.constants";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import TopClientsCard from "components/shared/Cards/TopClientsCard";
import { PageProps } from "types/page.types";
import { fetchEnquiries, fetchFooterSections } from "services/footer.services";
import { fetchFeaturedWorks } from "services/works.services";
import { BlogPost, Company, Review, Work } from "types/models";
import { fetchTopCompanies } from "services/clients.services";
import { fetchTopReviews } from "services/reviews.services";
import { getKnowYourCompany } from "services/company.services";
import { KnowYourCompany } from "types/company.types";
import { fetchFeaturedBlogs } from "services/blog.services";

interface LocalProps extends PageProps {
  featuredWorks: Work[];
  topCompanies: Company[];
  reviews: Review[];
  knowYourCompany: KnowYourCompany | undefined;
  blogs: BlogPost[];
}

export default function Home({
  footer,
  featuredWorks,
  topCompanies,
  reviews,
  knowYourCompany,
  blogs,
}: LocalProps) {
  return (
    <PageLayout footer={footer}>
      <div className="relative">
        <img
          src={blurredBg}
          alt=""
          className="-translate-y-1/2 top-1/2 h-full w-full absolute"
        />
        <Hero
          title="Digital solution For Your Business Competitive Edge"
          subTitle="Propelius technologies delivers custom built mobile apps, web apps, e-commerce and SaaS solutions for overall digital success. "
          hideBackground
        />
        <TopClientsCard companies={topCompanies} />
      </div>

      <ServicesRange />
      <FeaturedWorks works={featuredWorks} />

      <section className="w-full relative">
        <img
          src={blurredBg}
          alt=""
          className=" w-full -top-0 -translate-y-1/2 absolute z-0"
        />
        <RoundedCard
          color="primary"
          variant="bordered"
          children={
            <TitleSummary
              summaryClassName="!max-w-[557px]"
              titleClassName="!text-primary"
              title="Forge Your Digital Future"
              summary="Implement Smart Digital Solutions with Propelius - Connect with is for a discovery call"
              action={
                <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                  Book A Free Call
                </Button>
              }
            />
          }
        />
      </section>

      <Testimonial reviews={reviews} />
      <PotentialClients />
      <About
        title={knowYourCompany?.title || ""}
        description={knowYourCompany?.about || ""}
        highlights={knowYourCompany?.highlights || []}
      />
      <Explore
        blogs={blogs}
        title="Explore our digital digest"
        subtitle="Scroll through our blog for expert views on web app development, mobile app, SaaS solutions and other digital transformation stuff."
      />
      <ContactForm />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const sections = await fetchFooterSections();
  const enquiries = await fetchEnquiries();
  const featuredWorks = await fetchFeaturedWorks();
  const topCompanies = await fetchTopCompanies();
  const reviews = await fetchTopReviews();
  const knowYourCompany = await getKnowYourCompany();
  const blogPosts = await fetchFeaturedBlogs();

  return {
    props: {
      footer: {
        sections: sections.data || [],
        enquiries: enquiries.data || [],
      },
      featuredWorks: featuredWorks.data || [],
      topCompanies: topCompanies.data || [],
      reviews: reviews.data || [],
      knowYourCompany: knowYourCompany.data,
      blogs: blogPosts.data || [],
    },
  };
}
