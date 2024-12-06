import React, { FC } from "react";
import Footer from "../shared/Footer";
import Navbar from "./Navbar";
import { PageProps } from "types/page.types";

interface Props {
  children: React.ReactNode;
  footer: PageProps["footer"];
}

const PageLayout: FC<Props> = ({ children, footer }) => {
  return (
    // App Wrapper
    <div
      className={`w-screen max-w-full min-h-screen relative pb-footerHeight`}
    >
      {/* <Navbar /> */}
      {/** Page Container */}
      <div> {children}</div> {/** Footer */}
      <footer className="absolute h-footerHeight bottom-0 w-full">
        <Footer {...footer} />
      </footer>
    </div>
  );
};

export default PageLayout;
