import React from "react";

const RoundedCard: React.FC = () => {
  return (
    <div className="rounded-3xl px-28 pt-16 pb-28 mx-auto text-center bg-white convex-curve">
      <p className="text-lg md:text-xl font-semibold md:font-bold">
        Tailored Digital Solution For Leading Enterprises
      </p>
      <div className="flex justify-around items-center gap-5">
        <img src="/client_img1.png" alt="clientImg1" className="w-20 md:w-52 h-12 md:h-28" />
        <img src="/client_img2.png" alt="clientImg2" className="w-20 md:w-52 h-12 md:h-28" />
        <img src="/client_img3.png" alt="clientImg3" className="w-20 md:w-52 h-12 md:h-28" />
        <img src="/client_img4.png" alt="clientImg4" className="w-20 md:w-52 h-12 md:h-28" />
        <img src="/client_img5.png" alt="clientImg5" className="w-20 md:w-52 h-12 md:h-28" />
      </div>
    </div>
  );
};

export default RoundedCard;
