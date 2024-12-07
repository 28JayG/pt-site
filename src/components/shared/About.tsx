import React from "react";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";
import Markdown from "react-markdown";
import HighLightCard from "./HighlightCard";
import { CompanyHighlight } from "types/ui.types";

interface Props {
  title: string;
  description: string;
  highlights?: CompanyHighlight[];
}

const About: React.FC<Props> = ({ title, description, highlights }) => {
  return (
    <MaxWidthWrapper className="py-10 lg:py-20">
      <div className="flex flex-col gap-14 relative">
        <div className="flex md:flex-row flex-col gap-5 justify-around">
          <p className="font-semibold lg:text-3.5xl leading-15 text-2xl text-center md:text-left text-green-dark flex-1">
            {title}
          </p>
          <Markdown className="text-sm lg:text-base px-1 md:px-0 flex-1 text-grey-700 font-light all-revert [&>p]:my-3">
            {description}
          </Markdown>
        </div>

        {!!highlights?.length && (
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {highlights.map((card) => (
              <HighLightCard
                key={card.title}
                color={card.color}
                title={card.title}
                highlight={card.highlight}
              />
            ))}
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default About;
