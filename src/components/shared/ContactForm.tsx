import Button from "components/shared/Button";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";
import MaxWidthWrapper from "../layouts/MaxWidthWrapper";
import { COMPANY_PHONE_1, COMPANY_PHONE_2 } from "constants/company.constants";

const ContactForm: React.FC = () => {
  return (
    <MaxWidthWrapper className="bg-white p-10  md:p-20 text-center flex flex-col gap-10">
      <p className="font-bold text-4xl text-green-dark">Get On Touch</p>
      <p className="text-textSecondary">
        Let's Innovate Together: Reach out now to discuss your digital
        transformation needs.
        <br />
        Fill the form below to get in touch for personalised digital guidance.
      </p>
      <div className="flex flex-col md:flex-row gap-16 md:gap-32 justify-center">
        <div>
          <div className="p-5 w-60">
            <div className="flex gap-6 text-primary items-center">
              <LuMail size={30} />
              <p className="font-semibold text-xl">Email Us</p>
            </div>
            <p className="text-gray-500 pl-10">info@propelius.tech</p>
          </div>
          <div className="border border-gray-300 w-60 ml-16"></div>
          <div className="p-5 w-60 mt-8">
            <div className="flex gap-6 text-primary items-center">
              <LuPhone size={30} />
              <p className="font-semibold text-xl">Phone no.</p>
            </div>
            <p className="text-gray-500 pl-7">{COMPANY_PHONE_1}</p>
            <p className="text-gray-500 pl-7">{COMPANY_PHONE_2}</p>
          </div>
          <div className="border border-gray-300 w-60 ml-16"></div>
          <div className="p-5 w-80 mt-8">
            <div className="flex gap-6 text-primary items-center">
              <IoLocationOutline size={30} />
              <p className="font-semibold text-xl">Headquaters</p>
            </div>
            <p className="text-gray-500 pl-12 text-left">
              205, Milestone Milagro
            </p>
            <p className="text-gray-500 pl-12 text-left">
              Nr. Vatsalya Bungalows, Surat,
            </p>
            <p className="text-gray-500 pl-12 text-left">Gujarat 395007</p>
          </div>
        </div>
        <form>
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full px-3 mb-6 flex">
              <div className="w-1/2 pr-2">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight "
                  id="first_name"
                  type="text"
                  placeholder="Your First Name"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight "
                  id="last_name"
                  type="text"
                  placeholder="Your Last Name"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full  px-3 mb-6 ">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                Email
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight"
                id="email"
                type="email"
                placeholder="Your mail"
              />
            </div>
            <div className="w-full px-3 ">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                Phone No
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight "
                id="phone_no"
                type="tel"
                placeholder="+00 000 000 0000"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 ">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
                Message
              </label>
              <textarea
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight "
                id="message"
                placeholder="Type Your Message"
              ></textarea>
            </div>
          </div>
          <div className="w-full bg-primary rounded-full p-3 text-white font-semibold">
            Send Message
          </div>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactForm;
