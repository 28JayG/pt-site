import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaPinterest } from 'react-icons/fa'

const SingleBlogHero: React.FC = () => {
  return (
    <MaxWidthWrapper>
        <div className="flex justify-between items-center py-10">
          <p className="text-4xl font-semibold">
            From Idea to Market Leader:
            <br /> A Startup's Journey to Success
          </p>
          <div className="flex flex-col gap-5 items-end">
            <p className="text-gray-700">Date: Aug 16, 2024</p>
            <div className="flex gap-2 justify-center">
              <FaFacebook size={40} />
              <FaInstagramSquare size={40} />
              <FaLinkedin size={40} />
              <FaPinterest size={40} />
            </div>
          </div>
        </div>
        <div className="w-full h-[650px]">
          <img src="/images/single_blog_hero_img.png" alt="" />
        </div>
      </MaxWidthWrapper>
  )
}

export default SingleBlogHero