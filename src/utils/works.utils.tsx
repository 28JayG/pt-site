import { ReactNode } from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { colors } from "styles/colors";
import { Work } from "types/models";

export const techStackIcons: Record<string, ReactNode> = {
  react: <FaReact size={30} color={colors.reactBlue} />,
  typescript: <SiTypescript size={30} color={colors.tsBlue} />,
  next: <RiNextjsFill size={30} />,
};

export const getTechStackIcons = (techStack: Work["techUsed"]) => {
  return techStack.map((tech) => techStackIcons[tech.toLowerCase()]);
};
