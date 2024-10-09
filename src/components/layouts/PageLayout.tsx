import React, { FC } from "react";
import Footer from "../shared/Footer";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    // App Wrapper
    <div
      className={`w-screen max-w-full min-h-screen relative pb-footerHeight`}
    >
      <Navbar />
      {/** Page Container */}
      <div> {children}</div> {/** Footer */}
      <footer className="absolute h-footerHeight bottom-0 w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default PageLayout;
