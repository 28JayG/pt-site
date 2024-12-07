import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { BlogPost } from "types/models";
import { getImageString } from "utils/strings.utils";

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { thumbnail, summary, title } = blog;

  return (
    <div className="bg-white w-full lg:h-68 rounded-3xl flex flex-col lg:flex-row p-5 lg:p-7 gap-5 lg:gap-7 items-center">
      <img
        src={getImageString(thumbnail?.url)}
        alt={title}
        className="w-full h-52 object-cover lg:w-56 lg:h-52 rounded-3xl"
      />
      <div className="flex flex-col w-full gap-4">
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
