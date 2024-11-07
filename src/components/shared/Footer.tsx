import { brandImgUri, footerImgUri } from "constants/assets.constants";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";
import { COMPANY_PHONE_1 } from "constants/company.constants";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="bg-footerBg px-10 pb-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center p-6">
          <img src={brandImgUri} alt="Brand Logo" className="w-52 h-12 " />
          <p className="text-sm">
            At Propelius Technologies, we are more than just a technology
            company. We are a team of passionate innovators, dedicated to
            helping businesses thrive
            <br /> in the digital age. Our mission is to provide cutting-edge
            solutions that drive growth, enhance efficiency, and transform
            industries.
          </p>
        </div>
        <div className="border-white border mb-10"></div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-start md:justify-evenly md:text-sm ">
          <div className="flex flex-col gap-4">
            <p className="text-gray-400 text-base font-bold md:font-normal">
              Company
            </p>
            <p>Home</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="text-gray-400 text-base font-bold md:font-normal">
              Services
            </p>
            <p>Mobile App Development</p>
            <p>Web App Development</p>
            <p>SAAS Solution</p>
            <p>Custome E-Commerce Solution</p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="text-gray-400 text-base font-bold md:font-normal">
              Technologies
            </p>
            <p>Tech Expertise</p>
            <p>AI Development</p>
            <p>Database Management</p>
            <p>Cloud Computing</p>
            <p>Digitl Marketing</p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="text-gray-400 text-base font-bold md:font-normal">
              Other Links
            </p>
            <p>Privacy Policy</p>
            <p>Terms And Conditions</p>
            <p>Security</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="flex items-center text-2xl font-semibold gap-4">
              <IoLocationOutline />
              Headquaters
            </p>
            <p>
              205, Milestone milagro Nr. vatsalya
              <br /> bungalows, surat, gujarat 395007
            </p>
            <div className="bg-primary text-white rounded-full px-9 py-3">
              Our Partner Network
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-evenly gap-5 md:gap-0 pl-5 md:pl-0 py-10">
        <div>
          <img src={footerImgUri} alt="" className="w-52 h-20" />
          <div className="flex gap-2 justify-center">
            <FaFacebook size={40} />
            <FaInstagramSquare size={40} />
            <FaLinkedin size={40} />
            <FaPinterest size={40} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-gray-400 text-base font-bold md:font-normal">
            Business Enquiries
          </p>
          <p className="flex gap-2 items-center">
            <LuPhone />
            {COMPANY_PHONE_1}
          </p>
          <p className="flex gap-2 items-center">
            <LuMail />
            info@propelius.tech
          </p>
          <p className="flex gap-2 items-center">
            <FaWhatsapp />
            +91 888 999 1234
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-gray-400 text-base font-bold md:font-normal">
            Career Enquiries
          </p>
          <p className="flex gap-2 items-center">
            <LuPhone />
            {COMPANY_PHONE_1}
          </p>
          <p className="flex gap-2 items-center">
            <LuMail />
            info@propelius.tech
          </p>
          <p className="flex gap-2 items-center">
            <FaWhatsapp />
            +91 888 999 1234
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">
            Intrested in discussion
            <br />
            about your project?
          </p>
          <div className="bg-black text-white rounded-full px-9 py-3 w-fit">
            Book Appointment
          </div>
        </div>
      </div>
      <div className="bg-primary text-center py-6">
        Copyright © 2024. All Rights Reserved by{" "}
        <span className="font-bold">Propelius Technologies.</span>
      </div>
    </div>
  );
};

export default Footer;
