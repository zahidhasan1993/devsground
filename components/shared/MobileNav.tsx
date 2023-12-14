"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import hamburgerIMG from "../../public/assests/icons/hamburger.svg";
import Image from "next/image";
import Link from "next/link";
import siteLogo from "../../public/assests/images/site-logo.svg";
import { SignedOut } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-full gap-6 pt-16">
      {sidebarLinks.map((sidebar) => {
        const isActive =
          (pathname.includes(sidebar.route) && sidebar.route.length > 1) ||
          pathname === sidebar.route;
        return (
          <SheetClose
            asChild
            key={sidebar.route}
            className="flex items-center gap-3 px-6 py-3"
          >
            <Link
              href={sidebar.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
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
          </SheetClose>
        );
      })}
    </div>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={hamburgerIMG}
          alt="mobile menubar"
          height={34}
          width={34}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-2">
          <Image src={siteLogo} width={25} height={25} alt="devsground logo" />
          <p className="h2-bold font-spaceGrotesk text-dark100_light900">
            devs<span className="text-primary-500">ground</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent></NavContent>
          </SheetClose>
          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild className="mt-1">
                <Link href="/sign-in">
                  <button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
                    <span className="primary-text-gradient">Log In</span>
                  </button>
                </Link>
              </SheetClose>
              <SheetClose asChild className="">
                <Link href="/sign-up">
                  <button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900">
                    Sign Up
                  </button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
