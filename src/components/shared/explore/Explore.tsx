import Button from "components/shared/Button";
import { homeExplore } from "data/explore.data";
import React, { useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import MaxWidthWrapper from "../../layouts/MaxWidthWrapper";
import TitleSummary from "../TitleSummary";
import BlogCard from "./BlogCard";
import { BlogPreview } from "types/models";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { NextButton, PrevButton } from "../CarouseButtons";

interface Props {
  title: string;
  subtitle: string;
}

const Explore: React.FC<Props> = ({ title, subtitle }) => {
  const [selectedItem, setSelectedItem] = useState<BlogPreview>(homeExplore[0]);

  const handleNext = () => {
    const currentIndex = homeExplore.findIndex(
      (item) => item.id === selectedItem.id
    );
    const nextIndex = (currentIndex + 1) % homeExplore.length; // Wrap around to the start
    setSelectedItem(homeExplore[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = homeExplore.findIndex(
      (item) => item.id === selectedItem.id
    );
    const prevIndex =
      (currentIndex - 1 + homeExplore.length) % homeExplore.length; // Wrap around to the end
    setSelectedItem(homeExplore[prevIndex]);
  };

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
            {homeExplore.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>

          <div className="flex flex-col gap-7 lg:hidden mt-12">
            <BlogCard {...selectedItem} />
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
