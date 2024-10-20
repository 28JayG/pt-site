import React, { FC } from "react";
import Button from "components/shared/Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { blurredBg } from "constants/assets.constants";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import { TechCategory as TechCategoryI } from "types/models";
import { techCategories } from "data/services.data";

interface TechCategoryProps {
  techCategory: TechCategoryI;
}

const TechCategory: FC<TechCategoryProps> = ({ techCategory }) => {
  return (
    <div className="bg-white rounded-3xl p-10 flex items-center text-center">
      <p className="text-xl font-semibold flex-1 text-start">
        {techCategory.title}
      </p>
      <div className="flex gap-4 flex-1 justify-start flex-wrap">
        {techCategory.techFrameworks.map((category) => (
          <div
            key={category.id}
            className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1"
          >
            <SiTicktick className="text-primary" />
            <p>{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechStack: React.FC = () => {
  return (
    <div className="relative">
      <img src={blurredBg} alt="" className=" w-full absolute -z-10" />
      <MaxWidthWrapper className="py-20">
        <div className="flex flex-col gap-8">
          <p>Explore Our Techstack</p>
          <div className="pb-14 flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between">
            <p className="text-secondary w-full max-w-[800px] text-4xl font-bold">
              Delve into our comprehensive techstack, supporting our full
              spectrum of digital consulting services.
            </p>
            <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
              Get Started Today
            </Button>
          </div>
          {techCategories.map((category) => (
            <TechCategory key={category.id} techCategory={category} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default TechStack;
