import { blurredBg } from "constants/assets.constants";
import { PropsWithChildren } from "react";

const BlurredBg: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative">
      <img
        src={blurredBg}
        alt=""
        className="-translate-y-1/2 top-1/2 h-full w-full absolute"
      />
      {children}
    </div>
  );
};

export default BlurredBg;
