import React from "react";

const RoundedCard: React.FC = () => {
  return (
    <div className="rounded-2xl p-16 mx-20 text-center bg-white convex-curve ">
      <p className="text-xl font-bold">
        Tailored Digital Solution For Leading Enterprises
      </p>
      <div className="flex justify-around items-center gap-10">
        <img src="/Group 20847.png" alt="clientImg1" className="w-52 h-28" />
        <img src="/Group 20848.png" alt="clientImg2" className="w-52 h-28" />
        <img src="/Group 20849.png" alt="clientImg3" className="w-52 h-28" />
        <img src="/Group 20850.png" alt="clientImg4" className="w-52 h-28" />
        <img src="/Group 20851.png" alt="clientImg5" className="w-52 h-28" />
      </div>
    </div>
  );
};

export default RoundedCard;
