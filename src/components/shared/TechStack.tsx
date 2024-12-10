import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import Button from "components/shared/Button";
import { blurredBg } from "constants/assets.constants";
import { FC } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { TechCategory as TechCategoryI } from "types/models";

interface TechCategoryProps {
  techCategory: TechCategoryI;
}

const TechCategory: FC<TechCategoryProps> = ({ techCategory }) => {
  return (
    <div className="relative">
      <div className="relative bg-white rounded-3xl p-10 gap-7 flex flex-col lg:flex-row items-center text-center">
        <p className="text-2xl text-green-900 font-medium flex-1 text-start relative">
          {techCategory.title}
        </p>
        <div className="relative flex gap-4 flex-1 justify-start flex-wrap">
          {techCategory.techFrameworks.map((category) => (
            <div
              key={category.frameworkId}
              className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1"
            >
              <SiTicktick className="text-green-500" />
              <p>{category.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface TechStackProps {
  techCategories: TechCategoryI[];
}

const TechStack: FC<TechStackProps> = ({ techCategories }) => {
  return (
    <div className="relative py-20">
      <img src={blurredBg} alt="" className=" w-full h-full absolute -z-10" />
      <MaxWidthWrapper>
        <div className="flex flex-col gap-8 lg:gap-3">
          <p className="text-grey-700 text-sm font-light text-center lg:text-left">
            Explore Our Techstack
          </p>
          <div className="pb-14 flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between">
            <p className="text-green-900 w-full max-w-[800px] text-2xl lg:text-5xl font-semibold text-center lg:text-left">
              Delve into our comprehensive techstack, supporting our full
              spectrum of digital consulting services.
            </p>
            <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
              Get Started Today
            </Button>
          </div>
          {techCategories?.map((category) => (
            <TechCategory key={category.id} techCategory={category} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default TechStack;
