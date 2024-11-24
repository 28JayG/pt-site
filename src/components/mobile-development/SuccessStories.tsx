import FeaturedWork from "components/home/featured-works/FeaturedWork";
import { NextButton, PrevButton } from "components/shared/CarouseButtons";
import workData from "data/work.data";
import useItemSelector from "hooks/useItemSelector";
import React from "react";
import { Work } from "types/models";

const works = workData.filter((work) => work.type === "mobile");

const SuccessStories: React.FC = () => {
  const { selectedItem, handleNext, handlePrev } = useItemSelector<Work>(works);

  return (
    <>
      <div className="hidden lg:flex flex-col gap-10 md:gap-20">
        {works.map((work) => (
          <FeaturedWork key={work.id} work={work} />
        ))}
      </div>
      <div className="flex flex-col lg:hidden gap-7">
        <FeaturedWork work={selectedItem} />
        <div className="flex gap-3 justify-end">
          <PrevButton onClick={handlePrev} />
          <NextButton onClick={handleNext} />
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
