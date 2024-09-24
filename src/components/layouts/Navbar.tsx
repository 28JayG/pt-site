import React, { useState } from "react";
import Button from "../shared/Button";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import { Tab } from "@/types/ui.types";
import { brandLogoUri } from "@/constants/assets";

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const tabs: Tab[] = [
    { name: "who-we-are", label: "Who we are" },
    { name: "what-we-do", label: "What we do" },
    { name: "work-we-done", label: "Work we done" },
    { name: "technologies", label: "Technoligies" },
    { name: "resources", label: "Resources" },
  ];

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex justify-around font-onset items-center">
      <img
        src={brandLogoUri}
        alt="Logo"
        className="w-44 h-10"
      />
      <div className="flex gap-12 items-center text-gray-400">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`flex gap-4 items-center cursor-pointer ${
              activeTab === tab.name ? "text-primary font-semibold" : ""
            }`}
            onClick={() => handleTabClick(tab.name)}
          >
            <a>{tab.label}</a>
            {activeTab === tab.name ? <FaArrowDown  /> : <FaArrowRight />}
          </div>
        ))}
      </div>
      <Button>Contact Us</Button>
    </div>
  );
};

export default Navbar;
