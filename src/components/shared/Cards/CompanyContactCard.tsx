import { LuMail, LuPhone } from "react-icons/lu";
import RoundedCard from "../RoundedCard";
import {
  COMPANY_MAIL,
  COMPANY_PHONE_1,
  COMPANY_SKYPE,
} from "constants/company.constants";
import { FaSkype } from "react-icons/fa";

const CompanyContactCard = () => (
  <RoundedCard
    children={
      <div className="flex gap-8 items-center justify-center text-green-900 font-semibold text-2xl">
        <a href={`tel:${COMPANY_PHONE_1}`} className="flex gap-2 items-center">
          <LuPhone />
          <p className="hidden lg:block">{COMPANY_PHONE_1}</p>
        </a>
        <a href={`mailto:${COMPANY_MAIL}`} className="flex gap-2 items-center">
          <LuMail />
          <p className="hidden lg:block">{COMPANY_MAIL}</p>
        </a>
        <div className="flex gap-2 items-center">
          <FaSkype />
          <p className="hidden lg:block">{COMPANY_SKYPE}</p>
        </div>
      </div>
    }
  />
);

export default CompanyContactCard;
