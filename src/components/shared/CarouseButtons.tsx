import { FC } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface ButtonProps {
  onClick?: () => void;
}

export const PrevButton: FC<ButtonProps> = ({ onClick }) => (
  <div
    onClick={onClick}
    className="bg-grey-700 bg-opacity-5 rounded-full w-12 h-12 flex items-center justify-center"
  >
    <IoChevronBack size={24} />
  </div>
);

export const NextButton: FC<ButtonProps> = ({ onClick }) => (
  <div
    onClick={onClick}
    className="bg-grey-700 bg-opacity-5 rounded-full w-12 h-12 flex items-center justify-center"
  >
    <IoChevronForward size={24} />
  </div>
);
