import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { FaMinus, FaPlus } from "react-icons/fa";

interface Question {
  question: string;
  answer: string;
}

interface Props {
  questions: Question[];
}

const FrequentlyAskedQues: React.FC<Props> = ({ questions }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const handleQuestionClick = (index: number) => {
    setActiveQuestion(index);
  };

  return (
    <div className="bg-gray-100 py-20">
      <MaxWidthWrapper>
        <div className="">
          <p className="md:mb-20 font-bold text-4xl text-secondary text-center">
            Frequently Asked Questions
          </p>
          <div className="flex flex-col gap-6 px-60">
            {questions.map((item, index) => (
              <div
                key={index}
                className="bg-white flex flex-col gap-4 rounded-2xl p-4 justify-between "
              >
                <div className="flex justify-between items-center">
                  <div className="rounded-full border-2 border-primary p-2 w-10 h-10 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-lg ">{item.question}</p>
                  <button onClick={() => handleQuestionClick(index)}>
                    {activeQuestion === index ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>
                {activeQuestion === index && (
                  <p className="pl-20 text-sm">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FrequentlyAskedQues;