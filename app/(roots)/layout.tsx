import Navbar from "@/components/shared/Navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar></Navbar>
      <div className="flex">
        leftSidebar
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        rightSideBar
      </div>
      footer
    </main>
  );
};

export default RootLayout;
