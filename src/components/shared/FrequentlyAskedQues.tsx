import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface Question {
  question: string;
  answer: string;
}

interface Props {
  questions: Question[];
}

const FrequentlyAskedQues: React.FC<Props> = ({ questions }) => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

  const handleQuestionClick = (index: number) => {
    setActiveQuestion((prevActiveQuestion) =>
      prevActiveQuestion === index ? null : index
    );
  };

  return (
    <div className="bg-gray-100 py-20">
      <MaxWidthWrapper>
        <div className="">
          <p className="md:mb-20 font-semibold text-4xl text-green-dark text-center">
            Frequently Asked Questions
          </p>
          <div className="flex flex-col gap-6 w-full max-w-[600px] mx-auto">
            {questions.map((item, index) => (
              <div
                key={index}
                className="bg-white flex justify-between items-start gap-4 rounded-2xl p-4"
              >
                <div className="flex gap-4">
                  <div className="rounded-full border-2 border-green-500 p-2 w-10 h-10 flex shrink-0 items-center justify-center">
                    {index + 1}
                  </div>

                  <div
                    className="flex flex-col gap-2 cursor-pointer"
                    onClick={() => handleQuestionClick(index)}
                  >
                    <p className="font-medium text-sm lg:text-xl w-full text-green-dark">
                      {item.question}
                    </p>

                    {activeQuestion === index && (
                      <p className="text-xs lg:text-sm w-full text-grey-700 text-opacity-80">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
                <button className="pt-2 text-green-900">
                  {activeQuestion === index ? <FaMinus className="text-green-500" /> : <FaPlus />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FrequentlyAskedQues;
