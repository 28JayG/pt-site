import { FC } from "react";
import RoundedCard from "../RoundedCard";

interface Props {
  color?: string;
}

const TopClientsCard: FC<Props> = ({ color }) => (
  <RoundedCard
    color={color}
    children={
      <div>
        <p className="font-semibold text-green-900 text-base">
          Tailored Digital Solution For Leading Enterprises
        </p>
        <div className="flex justify-around items-center gap-5">
          <img
            src="/images/client_img1.png"
            alt="clientImg1"
            className="w-52 h-28"
          />
          <img
            src="/images/client_img2.png"
            alt="clientImg2"
            className="w-52 h-28"
          />
          <img
            src="/images/client_img3.png"
            alt="clientImg3"
            className="w-52 h-28"
          />
          <img
            src="/images/client_img4.png"
            alt="clientImg4"
            className="w-52 h-28"
          />
          <img
            src="/images/client_img5.png"
            alt="clientImg5"
            className="w-52 h-28"
          />
        </div>
      </div>
    }
  />
);

export default TopClientsCard;
