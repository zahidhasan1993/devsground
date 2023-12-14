"use client";

import React, { useContext } from "react";
import sunImg from "../../public/assests/icons/sun.svg";
import moonImg from "../../public/assests/icons/moon.svg";
import { themes } from "@/constants/constants";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";

const Theme = () => {
  const { mode, setMode } = useTheme();
  // console.log(themes);
  const handleTheme = (value: string) => {
    setMode(value);
    if (value !== "system") {
      localStorage.theme = value;
    } else {
      localStorage.removeItem("theme");
    }
    // console.log(mode);
  };
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger>
          {mode === "light" ? (
            <Image
              src={sunImg}
              height={25}
              width={25}
              alt="Light Mode Image"
            ></Image>
          ) : (
            <Image
              src={moonImg}
              height={25}
              width={25}
              alt="Light Mode Image"
            ></Image>
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((theme) => (
            <MenubarItem
              key={theme.label}
              className="dark:focus:bg-dark-400 flex items-center gap-4 px-2.5 py-2"
              onClick={() => handleTheme(theme.value)}
            >
              <Image
                src={theme.icon}
                alt="Theme Icons"
                width={16}
                height={16}
                className={`${mode === theme.value && "active-theme"}`}
              ></Image>
              <p
                className={`body-semibold text-light-500 ${
                  mode === theme.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {theme.value}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
