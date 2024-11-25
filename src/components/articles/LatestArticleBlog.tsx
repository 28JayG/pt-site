import { blurredBg } from 'constants/assets.constants'
import React from 'react'
import Button from 'components/shared/Button'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import MaxWidthWrapper from 'components/layouts/MaxWidthWrapper'

const LatestArticleBlog: React.FC = () => {
  return (
    <div className="w-full relative pt-16 pb-20">
        <img
          src={blurredBg}
          alt=""
          className="-top-[200px] w-full absolute -z-10"
        />
        <MaxWidthWrapper>
          <div className="flex justify-between py-20">
            <div className="max-w-[640px] flex flex-col gap-5 text-left">
              <p className="text-4xl font-semibold">Our Latest Articles</p>
              <p>
                Dive into our blog for industry insights, tips, and news. Stay
                informed and inspired with our latest articles and updates.
              </p>
              <div>
                <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
                  View All Articles
                </Button>
              </div>
            </div>
            <div className="w-165 h-[587px] p-7 flex flex-col gap-4 bg-white rounded-xl ">
              <img
                src="/images/latest_article_blog_img.png"
                alt=""
                className="w-[475px] h-80 rounded-xl"
              />
              <p className="text-gray-500">Date: Aug 16, 2024</p>
              <p className="text-lg font-semibold">
                From Idea to Market Leader: A Startup's Journey to Success
              </p>
              <p className="text-gray-600">
                Discover how strategic digital enhancements propelled revenue in
                online retail.
              </p>
              <div className="flex gap-5 items-center">
                <p className="text-primary font-semibold">View Articles</p>
                <IoArrowForwardCircleOutline
                  size={20}
                  className="text-primary"
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
  )
}

export default LatestArticleBlog