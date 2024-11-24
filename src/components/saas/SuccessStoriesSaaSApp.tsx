import React from "react";

import useItemSelector from "hooks/useItemSelector";
import { Work } from "types/models";
import workData from "data/work.data";
import FeaturedWork from "components/home/featured-works/FeaturedWork";
import { NextButton, PrevButton } from "components/shared/CarouseButtons";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";

const works = workData.filter((work) => work.type === "saas");

const SuccessStoriesSaaSApp: React.FC = () => {
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
        <MaxWidthWrapper className="flex gap-3 justify-end">
          <PrevButton onClick={handlePrev} />
          <NextButton onClick={handleNext} />
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default SuccessStoriesSaaSApp;
