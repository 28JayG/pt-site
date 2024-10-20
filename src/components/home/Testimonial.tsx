import React, { FC } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";
import { IoMdStar } from "react-icons/io";
import { Review } from "types/models";
import { reviews } from "data/reviews.data";
import Button from "components/shared/Button";

interface Props {
  review: Review;
}

const TestimonialCard: FC<Props> = ({ review }) => {
  const { client, review: reviewText, rating } = review;
  return (
    <div className="flex flex-col gap-8 border-2 border-gray-300 p-5 rounded-xl w-80 md:w-96">
      <div className="flex gap-2 items-center">
        <IoMdStar size={25} className="text-yellow-400" />
        <IoMdStar size={25} className="text-yellow-400" />
        <IoMdStar size={25} className="text-yellow-400" />
        <IoMdStar size={25} className="text-yellow-400" />
        <IoMdStar size={25} className="text-yellow-400" />
        <p className="font-semibold">{rating}</p>
      </div>
      <p className="text-lg text-textSecondary">{reviewText}</p>
      <div className="flex gap-4 items-center">
        <img src="/images/client_avatar_1.png" alt="" className="w-10 h-10" />
        <div>
          <p className="font-medium text-darkBlue ">{client.name}</p>
          <p className="text-textSecondary text-sm">{client.title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonial: React.FC = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-10 py-10 relative">
        <div className="flex flex-col gap-6">
          <p className="text-2xl md:text-5xl font-semibold text-center text-green-dark">
            Hear From our Clients
          </p>
          <p className="text-textSecondary text-base text-center font-light">
            Check on some unfiltered feedback of the clients who have
            collaborated with us - Explore what they have got
            <br /> to say for us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 px-3 justify-between items-center">
          {reviews
            .filter((review) => review.featured)
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
          <p className="whitespace-nowrap" >See All Reviews</p>
        </Button>
      </div>
    </MaxWidthWrapper>
  );
};

export default Testimonial;
