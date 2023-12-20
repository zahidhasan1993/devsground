"use client";
import React from "react";
import Image from "next/image";
import { sidebarLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import signInImg from "../../public/assests/icons/account.svg";
import signUpImg from "../../public/assests/icons/sign-up.svg";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <section className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-32 custom-scrollbar shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
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
              <p
                className={`${
                  isActive
                    ? "base-bold max-lg:hidden"
                    : "base-medium max-lg:hidden"
                }`}
              >
                {sidebar.label}
              </p>
            </Link>
          );
        })}
        <SignedOut>
          <div className="flex flex-col gap-3 mt-52">
            <Link href="/sign-in">
              <button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
                <Image
                  src={signInImg}
                  alt="sign in icon"
                  height={20}
                  width={20}
                  className="invert-colors lg:hidden"
                />
                <span className="primary-text-gradient max-lg:hidden">
                  Log In
                </span>
              </button>
            </Link>

            <Link href="/sign-up">
              <button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900">
                <Image
                  src={signUpImg}
                  alt="sign up icon"
                  height={20}
                  width={20}
                  className="invert-colors lg:hidden"
                />
                <span className="max-lg:hidden">Sign Up</span>
              </button>
            </Link>
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSideBar;
