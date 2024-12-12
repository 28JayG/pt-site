import Button from "components/shared/Button";
import RoundedCard from "components/shared/RoundedCard";
import TitleSummary from "components/shared/TitleSummary";
import React from "react";
import {
  FaArrowCircleUp,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import {
  IoArrowForwardCircleOutline,
  IoArrowForwardSharp,
} from "react-icons/io5";
import { BlogPost } from "types/models";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";
import classNames from "classnames";
import Markdown from "react-markdown";
import {
  bloggerIcon,
  blurredBg,
  googleNewsIcon,
  mediumIcon,
  qoraIcon,
} from "constants/assets.constants";

interface Props {
  content: BlogPost["content"];
}

const BlogContent: React.FC<Props> = ({ content }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <MaxWidthWrapper className="flex flex-col lg:flex-row gap-5 mb-10 lg:mb-16">
        {/* Table of Contents */}
        <div className="hidden self-start w-[312px] shrink-0 flex-col gap-5 sticky top-0 lg:flex">
          <p className="text-green-500 font-semibold text-xl">
            TABLE OF CONTENTS
          </p>
          <div className="flex flex-col p-5 gap-6 rounded-xl bg-gradient-to-b from-grey-100 to-transparent">
            {content.map(({ title }) => (
              <div
                className={classNames("flex gap-2", "text-grey-700")}
                key={title}
              >
                <IoArrowForwardSharp className="text-inherit shrink-0 w-5" />
                <p className="text-sm text-inherit">{title}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2 justify-center">
            <FaFacebook size={40} />
            <FaInstagramSquare size={40} />
            <FaLinkedin size={40} />
            <FaPinterest size={40} />
          </div>
          <div
            onClick={scrollToTop}
            className="cursor-pointer flex items-center justify-center rounded-xl gap-3 border border-solid text-grey-700 text-opacity-50 border-opacity-20 bg-grey-100 w-full py-3"
          >
            Return Back
            <FaArrowCircleUp className="text-green-500" size={20} />
          </div>
        </div>

        {/* Content */}
        <div className="grow">
          {content.map(({ title, description }) => (
            <div key={title} className="flex flex-col gap-2 mb-12">
              <h2 className="text-lg font-semibold text-green-900">{title}</h2>
              <Markdown className="text-sm font-light">{description}</Markdown>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div className="w-full lg:w-80 shrink-0 h-72 bg-primary flex flex-col rounded-2xl justify-evenly p-12">
            <p className="text-lg text-white">
              Need an expert team to provide digital solutions for your
              business?
            </p>
            <div className="bg-black rounded-full px-6 py-2 text-white w-fit">
              Book A Free Call
            </div>
          </div>

          <div className="flex flex-col gap-3 w-64 mx-auto">
            <p className="text-grey-700 text-xl">Follow us on</p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-grey-100 rounded-full">
                <img
                  className="w-full h-full object-contain"
                  src={mediumIcon}
                />
              </div>
              <div className="w-12 h-12 bg-grey-100 rounded-full">
                <img
                  className="w-full h-full object-contain"
                  src={googleNewsIcon}
                />
              </div>
              <div className="w-12 h-12 bg-grey-100 rounded-full">
                <img
                  className="w-full h-full object-contain"
                  src={bloggerIcon}
                />
              </div>
              <div className="w-12 h-12 bg-grey-100 rounded-full">
                <img className="w-full h-full object-contain" src={qoraIcon} />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="py-20 relative w-screen max-w-full">
        <img
          className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2"
          src={blurredBg}
        />
        <RoundedCard
          children={
            <TitleSummary
              title="Ready to Bring Your App Idea to Life?"
              summary="Innovation is just a conversation away. Reach out and let's
              discuss your app aspirations"
              action={
                <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                  Contact Us
                </Button>
              }
            />
          }
        />
      </div>
    </>
  );
};

export default BlogContent;
