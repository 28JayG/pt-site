import React, { FC } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";
import { IoMdStar } from "react-icons/io";
import { Review } from "types/models";
import Button from "components/shared/Button";
import { getImageString } from "utils/strings.utils";
import classNames from "classnames";

interface Props {
  review: Review;
}

const TestimonialCard: FC<Props> = ({ review }) => {
  const { client, text: reviewText, rating } = review;

  return (
    <div className="flex flex-col gap-8 border-2 border-gray-300 p-5 rounded-xl w-full">
      <div className="flex gap-2 items-center">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <IoMdStar
              key={i}
              size={25}
              className={classNames("text-grey-700 text-opacity-30", {
                "!text-yellow-400": i < rating,
              })}
            />
          ))}
        <p className="font-semibold">{rating}</p>
      </div>
      <p className="text-lg text-grey-700">"{reviewText}"</p>
      <div className="flex gap-4 items-center">
        <img
          src={getImageString(client.avatar?.url)}
          alt=""
          className="w-10 h-10"
        />
        <div>
          <p className="font-medium text-darkBlue ">{client.name}</p>
          <p className="text-grey-700 text-sm">{client.role}</p>
        </div>
      </div>
    </div>
  );
};

interface TestimonialProps {
  reviews: Review[];
}

const Testimonial: React.FC<TestimonialProps> = ({ reviews }) => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-7 lg:gap-12 py-12 lg:py-16 relative">
        <div className="flex flex-col gap-3 lg:gap-2">
          <p className="text-3xl md:text-4xl font-semibold text-center text-green-900">
            Hear From our Clients
          </p>
          <p className="text-grey-700 text-base text-center font-light">
            Check on some unfiltered feedback of the clients who have
            collaborated with us - Explore what they have got
            <br /> to say for us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3 justify-between items-center">
          {reviews
            ?.filter((review) => review.featured)
            .slice(0, 3)
            .map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
        </div>

        <Button
          variant="outlined"
          color="green-dark"
          className="w-min mx-auto"
          endIcon={<IoArrowForwardCircleOutline size={25} />}
        >
          <p className="whitespace-nowrap">See All Reviews</p>
        </Button>
      </div>
    </MaxWidthWrapper>
  );
};

export default Testimonial;
