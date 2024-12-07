import { FC } from "react";
import RoundedCard from "../RoundedCard";
import { Company } from "types/models";
import { API_BASE_URL } from "constants/environment.constants";

interface Props {
  color?: string;
  companies: Company[];
}

const TopClientsCard: FC<Props> = ({ color, companies }) => (
  <RoundedCard
    color={color}
    children={
      <div>
        <p className="font-semibold text-green-900 text-base">
          Tailored Digital Solution For Leading Enterprises
        </p>
        <div className="flex justify-around items-center gap-5 overflow-auto no-scrollbar">
          {companies?.map((company) => (
            <img
              key={company.id}
              //TODO: remove API BASE URL
              src={`${API_BASE_URL?.replace("api", "")}${company.logo.url}`}
              alt="clientImg1"
              className="w-52 h-28"
            />
          ))}
        </div>
      </div>
    }
  />
);

export default TopClientsCard;
