import { blurredBg } from "constants/assets.constants";
import React from "react";
import Button from "components/shared/Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import { FaArrowRight } from "react-icons/fa6";
import { BlogPost } from "types/models";
import { getImageUrl } from "utils/strings.utils";
import moment from "moment";

interface Props {
  blog: BlogPost;
}

const LatestBlog: React.FC<Props> = ({ blog }) => {
  return (
    <div className="w-full relative pt-28 lg:pt-52 pb-20">
      <img
        src={blurredBg}
        className="-translate-y-1/2 top-1/2 h-full w-full absolute"
      />
      <MaxWidthWrapper>
        <div className="flex flex-col gap-12 lg:flex-row items-center lg:items-start  justify-between relative">
          <div className="max-w-[640px] flex flex-col gap-5 text-center lg:text-left">
            <p className="text-2xl lg:text-4xl text-green-900 font-semibold">
              Our Latest Articles
            </p>
            <p className="text-xs lg:text-base">
              Dive into our blog for industry insights, tips, and news. Stay
              informed and inspired with our latest articles and updates.
            </p>
            <div className="w-full flex justify-center lg:justify-start">
              <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                View All Articles
              </Button>
            </div>
          </div>

          {blog && (
            <div className="lg:w-165 lg:h-[587px] p-5 lg:p-7 flex flex-col gap-4 bg-white rounded-xl ">
              <img
                src={getImageUrl(blog.thumbnail.url)}
                alt=""
                className="w-[475px] h-80 rounded-xl"
              />
              <p className="text-gray-500">
                Date: {moment(blog.publishedAt).format("MMM DD, YYYY")}
              </p>
              <p className="text-lg text-green-900 font-semibold">
                {blog.title}
              </p>
              <p className="text-gray-600">{blog.summary}</p>
              <div className="flex gap-5 items-center">
                <p className="text-green-500 font-semibold">View Articles</p>
                <FaArrowRight size={20} className="text-green-500" />
              </div>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LatestBlog;
