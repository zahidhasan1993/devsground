"use client";
import React from "react";
import Image from "next/image";
import { sidebarLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <section className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((sidebar) => {
          const isActive =
            (pathname.includes(sidebar.route) && sidebar.route.length > 1) ||
            pathname === sidebar.route;
          return (
            <Link
              key={sidebar.route}
              href={sidebar.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900 flex items-center gap-3 p-4"
                  : "text-dark300_light900 flex items-center gap-3 p-4"
              }`}
            >
              <Image
                src={sidebar.imgURL}
                alt={sidebar.label}
                width={25}
                height={25}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {sidebar.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LeftSideBar;
