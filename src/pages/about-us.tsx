import ContactForm from "components/shared/ContactForm";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import Button from "components/shared/Button";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TitleSummary from "components/shared/TitleSummary";
import { divide } from "lodash";
import React, { useState } from "react";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaSkype,
} from "react-icons/fa";
import {
  IoArrowForwardCircleOutline,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";
import About from "components/shared/About";
import { aboutUsDescription, aboutUsTitle } from "constants/about.constants";
import { COMPANY_PHONE_1 } from "constants/company.constants";
import { NextButton, PrevButton } from "components/shared/CarouseButtons";
import { fetchEnquiries, fetchFooterSections } from "services/footer.services";
import { PageProps } from "types/page.types";

const cultureGlipmseImages = [
  "/images/our_culture_img1.png",
  "/images/our_culture_img2.png",
  "/images/our_culture_img3.png",
];

const AboutUs: React.FC<PageProps> = ({ footer }) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    cultureGlipmseImages[0]
  );

  const handleNext = () => {
    const currentIndex = cultureGlipmseImages.findIndex(
      (item) => item === selectedImage
    );
    const nextIndex = (currentIndex + 1) % cultureGlipmseImages.length; // Wrap around to the start
    setSelectedImage(cultureGlipmseImages[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = cultureGlipmseImages.findIndex(
      (item) => item === selectedImage
    );
    const prevIndex =
      (currentIndex - 1 + cultureGlipmseImages.length) %
      cultureGlipmseImages.length; // Wrap around to the end
    setSelectedImage(cultureGlipmseImages[prevIndex]);
  };

  return (
    <PageLayout footer={footer}>
      <Hero
        title="Your partner in digital solutions for business success"
        subTitle="Partnering with you to create robust digital ecosystems that adapt and thrive"
        featuredContent={
          <div className="flex-col flex md:flex-row gap-6">
            <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
              Schedule A Consultation
            </Button>
            <Button
              variant="outlined"
              color="green-dark"
              endIcon={<IoArrowForwardCircleOutline size={25} />}
            >
              Watch Portfolio
            </Button>
          </div>
        }
      />
      <RoundedCard
        children={
          <div className="flex gap-8 items-center justify-center text-green-900 font-semibold text-2xl">
            <p className="flex gap-2 items-center">
              <LuPhone />
              <p className="hidden lg:block">{COMPANY_PHONE_1}</p>
            </p>
            <p className="flex gap-2 items-center">
              <LuMail />
              <p className="hidden lg:block">info@propelius.tech</p>
            </p>
            <p className="flex gap-2 items-center">
              <FaSkype />
              <p className="hidden lg:block">tech.propelius</p>
            </p>
          </div>
        }
      />

      <MaxWidthWrapper>
        <About title={aboutUsTitle} description={aboutUsDescription} />

        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center">
          <p className="text-[212px] lg:text-[260px] outline-text">We</p>
          <ul className="font-semibold text-2xl lg:text-4xl p-2 space-y-3 text-green-900">
            <li>Drive Innovation.</li>
            <li>Deliver Results.</li>
            <li>Transform Ideas.</li>
            <li>Create Solutions.</li>
          </ul>
        </div>
        <div className="py-24 flex flex-col lg:flex-row justify-center gap-32">
          <div className="flex flex-col max-w-[530px] gap-3">
            <p className="font-light text-grey-700">
              Propelius: Propelling you into the digital age{" "}
            </p>
            <p className="font-semibold text-4xl text-green-dark">
              Explore our brand story
            </p>
            <p className="leading-relaxed font-light text-textSecondary">
              In the ever-evolving world of technology, Propelius Technologies
              was born to bridge the gap between tech and real-world business
              needs. Our journey began when passionate tech enthusiasts and
              seasoned professionals united, frustrated by the disconnect they
              saw in the industry.
              <br />
              <br />
              At the heart of this group was Yash, our esteemed founder and CEO.
              A Software Engineer and Technical Lead with degrees from BITS and
              Santa Clara University, Yash brought invaluable expertise in
              FinTech and SaaS. His experience, gained from over 6 years of
              building web and mobile applications with Silicon Valley startups,
              shaped our problem-solving approach.
              <br />
              <br />
              Yash's deep understanding of business challenges in evolving tech
              landscapes became the cornerstone of Propelius. Today, we stand as
              innovators, committed to transforming businesses through tailored,
              practical digital solutions. At Propelius, we're not just adapting
              to the future of technology – we're helping to shape it.
            </p>
          </div>
          <div className=" ">
            <img
              src="/images/brand_story_img.png"
              alt=""
              className="w-full lg:max-w-[650px] h-80 lg:h-[760px]"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="relative w-full pb-20">
        <div className="bg-green-500 w-full h-3/4 top-0 absolute" />
        <MaxWidthWrapper className="relative overflow-hidden">
          <div className="flex flex-col gap-3 pt-20 pb-10 lg:pb-20">
            <p className="text-white font-light">Our Culture</p>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <p className="font-semibold text-4xl text-white leading-relaxed">
                A Glimpse into Our Culture
              </p>
              <div className="flex gap-4 lg:hidden">
                <PrevButton className="text-white" />
                <NextButton className="text-white" />
              </div>
            </div>
            <p className="text-white font-light max-w-[640px]">
              At Propelius, our team thrives on creativity, embraces diversity,
              and celebrates each other's successes. We're not just colleagues;
              we're a family of tech enthusiasts working together to shape the
              digital future.
            </p>
          </div>
          <div className="hidden lg:flex gap-5">
            {cultureGlipmseImages.map((img) => (
              <img
                key={img}
                src={img}
                alt="our_culture_img1"
                className="w-[646px] h-[404px]"
              />
            ))}
          </div>
          <div className="flex flex-col lg:hidden gap-7">
            <img
              src={selectedImage}
              alt="our_culture_img1"
              className="w-full h-[404px]"
            />
            <div className="flex gap-3">
              <PrevButton onClick={handlePrev} />
              <NextButton onClick={handleNext} />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <RoundedCard
        variant="bordered"
        children={
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 px-3">
            <div className="flex flex-col gap-3 justify-between">
              <p className="w-full lg:max-w-[635px] text-center lg:text-left text-green-500 text-2xl lg:text-3xl font-semibold">
                Fuel Your Business with Propelius' Tech Expertise - Book a free
                30 mins discovery call
              </p>
              <p className="lg:max-w-[600px] text-center lg:text-left text-green-900">
                Mould the perfect digital solution for your business with our
                expert team - start shaping your online identity
              </p>
            </div>
            <div className="w-64 mx-auto">
              <Button
                className="w-full"
                endIcon={<IoArrowForwardCircleOutline size={25} />}
              >
                Book A Free Call
              </Button>
            </div>
          </div>
        }
      />
      <ContactForm />
    </PageLayout>
  );
};

export default AboutUs;

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
