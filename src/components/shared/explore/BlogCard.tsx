import classNames from "classnames";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { BlogPost } from "types/models";
import { getImageUrl } from "utils/strings.utils";

interface BlogCardProps {
  blog: BlogPost;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, className }) => {
  const { thumbnail, summary, title } = blog;

  return (
    <div
      className={classNames(
        "bg-white w-full lg:h-68 rounded-3xl flex flex-col lg:flex-row p-5 lg:p-7 gap-5 lg:gap-7 items-center",
        className
      )}
    >
      <img
        src={getImageUrl(thumbnail?.url)}
        alt={title}
        className="w-full h-52 object-cover lg:w-56 lg:h-52 rounded-3xl"
      />
      <div className="text-left flex flex-col w-full gap-4">
        <p className="font-semibold text-xl leading-7.5 text-green-dark">
          {title}
        </p>
        <p className="text-grey-700 text-sm">{summary}</p>
        <div className="flex gap-10 items-center text-green-500">
          <p className="font-semibold">View Resources</p>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
