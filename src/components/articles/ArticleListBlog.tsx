import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
  IoChevronDown,
} from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { articleListArray } from "data/articleList.data";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import { BlogPost } from "types/models";
import { Pagination as PaginationI } from "types/ui.types";
import BlogCard from "components/shared/explore/BlogCard";
import Pagination from "components/shared/Pagination";

interface Props {
  blogs: BlogPost[];
}

const AllBlogs: React.FC<Props> = ({ blogs }) => {
  const [pagination, setPagination] = useState<PaginationI>({
    page: 0,
    size: 4,
  });

  const handlePageSelect = (page: number) => {
    setPagination((prev) => ({ ...prev, page }));
  };

  return (
    <MaxWidthWrapper className="py-14 flex flex-col items-center text-center">
      <p className="font-semibold text-green-900 text-2xl lg:text-4xl py-2 ">
        Read, Discover And Improve
      </p>
      <p className="max-w-[644px] text-sm lg:text-base text-gray-600 pt-3 pb-10">
        Explore latest business development tips & marketing trends to develop a
        better business/brand strategy.
      </p>
      <div className="w-full max-w-[646px] flex py-2 px-5 justify-between rounded-lg mb-20 border-2 border-gray-200">
        <div className="flex gap-2 items-center">
          <HiMagnifyingGlass className="text-gray-500" />
          <input placeholder="Search Blog" className="p-2" />
        </div>
        <div className="rounded-lg bg-gray-200 p-2 flex gap-2 items-center cursor-pointer">
          <p>All</p>
          <IoChevronDown />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-10">
        {blogs.slice(0, pagination.size).map((item) => (
          <BlogCard className="!bg-grey-100" blog={item} key={item.id} />
        ))}
      </div>

      <Pagination
        count={blogs.length}
        rowPerPage={pagination.size}
        onPageChange={handlePageSelect}
      />

      <div className=" w-full px-4 py-8 lg:py-14 bg-primary flex flex-col gap-5 text-center items-center rounded-2xl justify-center">
        <p className="font-semibold text-2xl lg:text-4xl text-white">
          Get More To Your Email
        </p>
        <p className="w-full text-sm lg:text-base max-w-[689px] text-white opacity-50">
          Subscribe to our newsletter and access exclusive content and offers
          available only to Propelius Technologies subscribers
        </p>
        <div className="w-full max-w-[758px] p-2 border bg-white lg:bg-transparent border-white rounded-lg flex justify-between ">
          <input
            type="text"
            placeholder="Enter your e-mail address"
            className="bg-transparent w-auto lg:text-white placeholder:text-xs lg:placeholder:text-white"
          />
          <div className="bg-black px-3 lg:px-7 py-2 text-sm text-white rounded-lg lg:rounded-full">
            Subscribe
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default AllBlogs;
