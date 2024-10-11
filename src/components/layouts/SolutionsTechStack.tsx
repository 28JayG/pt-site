import { blurredBg } from 'constants/assets.constants'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import Button from 'components/shared/Button'
import { SiTicktick } from 'react-icons/si'

const SolutionsTechStack: React.FC = () => {
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
          <div className="bg-white rounded-3xl p-10 flex items-center text-center">
            <p className="text-xl font-semibold flex-1 text-start">Hybrid Mobile App</p>
            <div className="flex gap-4 flex-1 justify-start flex-wrap">
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>React Native</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Flutter</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Dart</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Flutter - Dart</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10 flex items-center text-center">
            <p className="text-xl font-semibold flex-1 text-start">Native Android</p>
            <div className="flex gap-4 flex-1 justify-start flex-wrap">
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Java</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Kotlin</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10 flex items-center text-center">
            <p className="text-xl font-semibold flex-1 text-start">Database</p>
            <div className="flex gap-4 flex-1 justify-start flex-wrap">
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Mongo DB</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>MySQL</p>
              </div>
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Firabase</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10 flex items-center text-center">
            <p className="text-xl font-semibold flex-1 text-start">CMS</p>
            <div className="flex gap-4 flex-1 justify-start flex-wrap">
              <div className="flex gap-2 rounded-full bg-gray-100 items-center px-3 py-1">
                <SiTicktick />
                <p>Strapi</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default SolutionsTechStack