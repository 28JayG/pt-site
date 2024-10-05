import { brandLogoUri } from "constants/assets.constants";
import { appRoutes } from "constants/routes";
import Link from "next/link";
import React from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import Button from "../shared/Button";
import MaxWidthWrapper from "./MaxWidthWraper";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <nav className="relative z-appBar py-5">
      <MaxWidthWrapper className="flex justify-between font-onset items-center">
        <img src={brandLogoUri} alt="Logo" className="w-36 md:w-44 h-10" />
        <ul className="hidden md:flex gap-12 items-center text-gray-400">
          {Object.values(appRoutes).map((tab) => (
            <li
              key={tab.route}
              className={`flex gap-4 items-center cursor-pointer ${
                isActive(tab.route) ? "text-primary font-semibold" : ""
              }`}
            >
              <Link href={tab.route}>{tab.label}</Link>
              <FaArrowRight
                className={`${isActive(tab.route) ? "rotate-90" : ""}`}
              />
            </li>
          ))}
        </ul>
        <Button>Contact Us</Button>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
