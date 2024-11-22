import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";

interface Props {
  icon: string;
}

const Icons: FC<Props> = ({ icon }) => {
  switch (icon) {
    case "phone":
      return <LuPhone />;
    case "email":
      return <LuMail />;
    case "whatsapp":
      return <FaWhatsapp />;
  }
};

export default Icons;
