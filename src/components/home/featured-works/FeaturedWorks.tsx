import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import Button from "components/shared/Button";
import TitleSummary from "components/shared/TitleSummary";
import workData from "data/work.data";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import FeaturedWork from "./FeaturedWork";
import { Work } from "types/models";

interface Props {
  works: Work[];
}

const FeaturedWorks: React.FC<Props> = ({ works }) => {
  return (
    <div className="z-[2] relative bg-gradient-to-b from-[#F6F7F9] w-full flex flex-col gap-10 py-20">
      <MaxWidthWrapper className="flex justify-between text-left">
        <TitleSummary
          title="Explore Our Potential In Our Work"
          summary=" Explore our diverse portfolio and see how we have developed unique
            business solutions with our innovative solutions and agile
            development process. "
          action={
            <Button endIcon={<IoArrowForwardCircleOutline size={25} />}>
              View All Work
            </Button>
          }
        />
      </MaxWidthWrapper>

      <div className="flex flex-col gap-10 md:gap-20">
        {works?.filter((work) => work.featured)
          .map((work) => (
            <FeaturedWork key={work.id} work={work} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedWorks;
