import classNames from "classnames";
import { FC } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
}

export const PrevButton: FC<ButtonProps> = ({ onClick, className }) => (
  <div
    onClick={onClick}
    className={classNames(
      "bg-grey-700 bg-opacity-5 rounded-full w-12 h-12 flex items-center justify-center",
      className
    )}
  >
    <IoChevronBack size={24} />
  </div>
);

export const NextButton: FC<ButtonProps> = ({ onClick, className }) => (
  <div
    onClick={onClick}
    className={classNames(
      "bg-grey-700 bg-opacity-5 rounded-full w-12 h-12 flex items-center justify-center",
      className
    )}
  >
    <IoChevronForward size={24} />
  </div>
);
