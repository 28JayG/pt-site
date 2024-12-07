import Button from "components/shared/Button";
import { homeExplore } from "data/explore.data";
import useItemSelector from "hooks/useItemSelector";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { BlogPost } from "types/models";
import MaxWidthWrapper from "../../layouts/MaxWidthWrapper";
import { NextButton, PrevButton } from "../CarouseButtons";
import TitleSummary from "../TitleSummary";
import BlogCard from "./BlogCard";

interface Props {
  title: string;
  subtitle: string;
  blogs: BlogPost[];
}

const Explore: React.FC<Props> = ({ title, subtitle, blogs }) => {
  const { selectedItem, handleNext, handlePrev } =
    useItemSelector<BlogPost>(homeExplore);

  return (
    <div className="bg-grey-100">
      <MaxWidthWrapper>
        <div className=" py-20 px-4 ">
          <TitleSummary
            summary={subtitle}
            titleClassName="text-center lg:text-left"
            summaryClassName="text-center lg:text-left"
            title={title}
            action={
              <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                View All Articles
              </Button>
            }
          />

          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-7 mt-14">
            {blogs?.slice(0, 4).map((item) => (
              <BlogCard key={item.id} blog={item} />
            ))}
          </div>

          <div className="flex flex-col gap-7 lg:hidden mt-12">
            <BlogCard blog={selectedItem} />
            <div className="flex justify-end gap-3">
              <PrevButton onClick={handlePrev} />
              <NextButton onClick={handleNext} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Explore;
