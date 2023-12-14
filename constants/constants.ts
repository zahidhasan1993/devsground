import sunImg from "@/public/assests/icons/sun.svg";
import moonImg from "@/public/assests/icons/moon.svg";
import systemImg from "@/public/assests/icons/computer.svg";
import { SidebarLink } from "@/types";
import homeImg from "@/public/assests/icons/home.svg";
import communityImg from "@/public/assests/icons/users.svg";
import collectionImg from "@/public/assests/icons/star.svg";
import jobImg from "@/public/assests/icons/suitcase.svg";
import tagImg from "@/public/assests/icons/tag.svg";
import profileImg from "@/public/assests/icons/user.svg";
import questionImg from "@/public/assests/icons/question.svg";

export const themes = [
  { value: "light", label: "Light", icon: sunImg },
  { value: "dark", label: "dark", icon: moonImg },
  {
    value: "system",
    label: "System",
    icon: systemImg,
  },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: homeImg,
    route: "/",
    label: "Home",
  },
  {
    imgURL: communityImg,
    route: "/community",
    label: "Community",
  },
  {
    imgURL: collectionImg,
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: jobImg,
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: tagImg,
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: profileImg,
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: questionImg,
    route: "/ask-question",
    label: "Ask a question",
  },
];
export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
