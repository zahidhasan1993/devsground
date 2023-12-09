import React from "react";
import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex justify-between mt-5">
      <h1 className="h1-bold">This is Home</h1>
      <div className="">
      <UserButton></UserButton>
      </div>
    </div>
  );
};

export default page;
