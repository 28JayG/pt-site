import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import Button from "components/shared/Button";
import TitleSummary from "components/shared/TitleSummary";
import workData from "data/work.data";
import React from "react";
import { FaLinkedin, FaReact } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import FeaturedWork from "./FeaturedWork";

const FeaturedWorks = () => {
  return (
    <div className="bg-darkGray w-full flex flex-col gap-10 py-20">
      <MaxWidthWrapper className="flex justify-between text-left">
        <TitleSummary
          title="Explore Our Potential In Our Work"
          summary=" Explore our diverse portfolio and see how we have developed unique
            business solutions with our innovative solutions and agile
            development process. "
          action={
            <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
              View All Work
            </Button>
          }
        />
      </MaxWidthWrapper>

      {workData.map((work) => (
        <FeaturedWork key={work.id} work={work} />
      ))}
    </div>
  );
};

export default FeaturedWorks;
