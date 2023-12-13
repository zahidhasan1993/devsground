"use client";

import React, { useContext } from "react";
import sunImg from "../../public/assests/icons/sun.svg";
import moonImg from "../../public/assests/icons/moon.svg";
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
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
