import ContactForm from "components/shared/ContactForm";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import PageLayout from "components/layouts/PageLayout";
import Button from "components/shared/Button";
import Hero from "components/shared/Hero";
import RoundedCard from "components/shared/RoundedCard";
import TitleSummary from "components/shared/TitleSummary";
import { divide } from "lodash";
import React from "react";
import { FaChevronCircleLeft, FaChevronCircleRight, FaSkype } from "react-icons/fa";
import {
  IoArrowForwardCircleOutline,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";
import About from "components/shared/About";
import { aboutUsDescription, aboutUsTitle } from "constants/aboutus.constants";

const aboutUs: React.FC = () => {
  return (
    <PageLayout>
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
          <div className="flex gap-8 items-center justify-center font-semibold text-3xl">
            <p className="flex gap-2 items-center">
              <LuPhone />
              +91 93161 45852
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
      
      <MaxWidthWrapper>
        <About title={aboutUsTitle} description={aboutUsDescription} />
        <div className="flex justify-center items-center">
          <p className="text-[260px] outline-text">We</p>
          <ul className="font-semibold text-4xl p-2 space-y-3 text-green-dark">
            <li>Drive Innovation.</li>
            <li>Deliver Results.</li>
            <li>Transform Ideas.</li>
            <li>Create Solutions.</li>
          </ul>
        </div>
        <div className="py-24 flex justify-center gap-32">
          <div className="flex flex-col max-w-[530px] gap-3">
            <p className="font-light text-textSecondary">Propelius: Propelling you into the digital age </p>
            <p className="font-semibold text-4xl text-green-dark">Explore our brand story</p>
            <p className="leading-relaxed font-light text-textSecondary">
              In the ever-evolving world of technology, Propelius Technologies
              was born to bridge the gap between tech and real-world business
              needs. Our journey began when passionate tech enthusiasts and
              seasoned professionals united, frustrated by the disconnect they
              saw in the industry.
              <br />
              At the heart of this group was Yash, our esteemed founder and CEO.
              A Software Engineer and Technical Lead with degrees from BITS and
              Santa Clara University, Yash brought invaluable expertise in
              FinTech and SaaS. His experience, gained from over 6 years of
              building web and mobile applications with Silicon Valley startups,
              shaped our problem-solving approach.
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
              className="w-[650px] h-[760px]"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="bg-primary h-[612px] w-full relative mb-[305px] ">
        <MaxWidthWrapper className="">
          <div className="pt-24 flex flex-col gap-3 ">
            <p className="text-white font-light">Our Culture</p>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-4xl text-white leading-relaxed">
                A Glimpse into Our Culture
              </p>
              <div className="flex gap-4">
                <div className="bg-green-400 rounded-full p-2 text-white items-center">
                  <IoChevronBack size={20} />
                </div>
                <div className="bg-green-400 rounded-full p-2 text-white items-center">
                  <IoChevronForward size={20} />
                </div>
              </div>
            </div>
            <p className="text-white font-light">
              At Propelius, our team thrives on creativity, embraces diversity,
              and celebrates each other's successes. We're not just colleagues;
              we're a family of tech enthusiasts working together to shape the
              digital future.
            </p>
          </div>
          <div className="flex gap-5 absolute right-0 bottom-0 translate-y-1/2">
            <img
              src="/images/our_culture_img1.png"
              alt="our_culture_img1"
              className="w-[646px] h-[404px]"
            />
            <img
              src="/images/our_culture_img2.png"
              alt="our_culture_img2"
              className="w-[314px] h-[404px]"
            />
            <img
              src="/images/our_culture_img3.png"
              alt="our_culture_img3"
              className="w-[498px] h-[404px]"
            />
          </div>
        </MaxWidthWrapper>
      </div>
        <RoundedCard
          variant="bordered"
          children={
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <p className="max-w-[635px] text-primary text-4xl font-semibold text-left">
                  Fuel Your Business with Propelius' Tech Expertise - Book a
                  free 30 mins discovery call
                </p>
                <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                  Book A Free Call
                </Button>
              </div>
              <p className="max-w-[600px] text-left">
                Mould the perfect digital solution for your business with our
                expert team - start shaping your online identity
              </p>
            </div>
          }
        />
        <ContactForm />
    </PageLayout>
  );
};

export default aboutUs;
