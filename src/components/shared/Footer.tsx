import { brandImgUri, footerImgUri } from "constants/assets.constants";
import React, { FC } from "react";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";
import { COMPANY_PHONE_1, COMPANY_PHONE_2 } from "constants/company.constants";
import MaxWidthWrapper from "components/layouts/MaxWidthWrapper";
import Button from "./Button";
import { FooterLink } from "types/footer.types";
import Link from "next/link";
import Icons from "components/Icons";
import { fetchEnquiries, fetchFooterSections } from "services/footer.services";

interface FooterLinkGroupProps {
  title: string;
  links: FooterLink[];
}

const FooterLinkGroup: FC<FooterLinkGroupProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-grey-700 text-opacity-50 text-base">{title}</p>
      <ul className="flex flex-col gap-3 text-sm text-grey-700">
        {links.map((link) => (
          <li key={link.id} className="flex gap-2 items-center">
            {link.icon && <Icons icon={link.icon} />}
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface FooterProps {
  sections: { title: string; links: FooterLink[] }[];
  enquiries: { title: string; links: FooterLink[] }[];
}

const Footer: FC<FooterProps> = ({ sections, enquiries }) => {
  return (
    <div>
      <div className="bg-green-100 py-14">
        <MaxWidthWrapper>
          <div className="flex flex-col md:flex-row gap-7 justify-center mb-10">
            <img src={brandImgUri} alt="Brand Logo" className="w-52 h-12 " />
            <p className="text-sm">
              At Propelius Technologies, we are more than just a technology
              company. We are a team of passionate innovators, dedicated to
              helping businesses thrive in the digital age. Our mission is to
              provide cutting-edge solutions that drive growth, enhance
              efficiency, and transform industries.
            </p>
          </div>
          <div className="border-white border hidden lg:block"></div>
          <div className="mt-10 flex flex-col lg:flex-row gap-5 md:gap-0 justify-start lg:justify-evenly lg:text-sm ">
            {sections?.map((section) => (
              <FooterLinkGroup key={section.title} {...section} />
            ))}
            <div className="flex flex-col gap-4">
              <p className="flex items-center text-2xl font-medium gap-4">
                <IoLocationOutline />
                Headquaters
              </p>
              <p className="font-light">
                205, Milestone milagro Nr. vatsalya
                <br /> bungalows, surat, gujarat 395007
              </p>
              <Button>Our Partner Network</Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="flex flex-col lg:flex-row justify-start lg:justify-evenly gap-5 md:gap-0 pl-5 md:pl-0 py-10">
        <div>
          <img src={footerImgUri} alt="" className="w-52 h-20" />
          <div className="flex gap-2 justify-start lg:justify-center">
            <FaFacebook size={40} />
            <FaInstagramSquare size={40} />
            <FaLinkedin size={40} />
            <FaPinterest size={40} />
          </div>
        </div>
        {enquiries?.map((section) => (
          <FooterLinkGroup key={section.title} {...section} />
        ))}

        <div className="flex flex-col gap-4">
          <p className="text-2xl">
            Intrested in discussion
            <br />
            about your project?
          </p>
          <div className="bg-black text-white rounded-full px-9 py-3 w-fit">
            Book Appointment
          </div>
        </div>
      </div>
      <div className="bg-green-500 text-center py-6">
        Copyright © 2024. All Rights Reserved by <br />
        <span className="font-bold">Propelius Technologies.</span>
      </div>
    </div>
  );
};

export default Footer;
