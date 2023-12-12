
import Image from "next/image";
import Link from "next/link";
import React from "react";
import siteLogo from "../../public/assests/images/site-logo.svg";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-2">
        <Image src={siteLogo} width={25} height={25} alt="devsground logo" />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          devs<span className="text-primary-500">ground</span>
        </p>
      </Link>
      SearchField
      <div className="flex-between gap-5">
        {/* theme change menubar */}
        <Theme></Theme>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          ></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
