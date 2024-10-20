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
    <MaxWidthWrapper>
      <div className="py-20 flex flex-col gap-14 relative">
        <div className="flex md:flex-row flex-col gap-5 justify-around">
          <p className="font-semibold md:text-3.5xl leading-15 text-2xl text-center md:text-left text-green-dark flex-1">
            {title}
          </p>
          <Markdown className="px-1 md:px-0 flex-1 text-textSecondary font-light">
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
