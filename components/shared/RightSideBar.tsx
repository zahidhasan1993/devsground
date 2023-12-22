import Image from "next/image";
import React from "react";
import arrow from "../../public/assests/icons/chevron-right.svg";
import { Button } from "@/components/ui/button";

const questions = [
  {
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    link: "https://nextjs.org/docs/app/building-your-application/data-fetching/patterns",
  },
  {
    title: "Is it only me or the font is bolder than necessary?",
    link: "https://nextjs.org/docs/app/building-your-application/data-fetching/patterns",
  },
  {
    title: "Can I get the course for free?",
    link: "https://nextjs.org/docs/app/building-your-application/data-fetching/patterns",
  },
  {
    title: "Redux Toolkit Not Updating State as Expected",
    link: "https://nextjs.org/docs/app/building-your-application/data-fetching/patterns",
  },
  {
    title: "Async/Await Function Not Handling Errors Properly",
    link: "https://nextjs.org/docs/app/building-your-application/data-fetching/patterns",
  },
];
const tags = [
  {
    name: "reactJs",
    amount: 27,
  },
  {
    name: "Next",
    amount: 18,
  },
  {
    name: "HTML",
    amount: 45,
  },
  {
    name: "CSS",
    amount: 37,
  },
  {
    name: "javaScript",
    amount: 155,
  },
];
const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 custom-scrollbar shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h1 className="text-dark200_light900 h3-bold">Top Questions</h1>
        <div className="flex flex-col justify-center gap-5 mt-8 w-full">
          {questions.map((question) => (
            <div key={question.title} className="">
              <a
                className="flex cursor-pointer items-center justify-between gap-7"
                href={question.link}
              >
                <p className="body-medium text-dark500_light700">
                  {question.title}
                </p>
                <Image src={arrow} alt="arrow icon" className="invert-colors" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-dark200_light900 h3-bold">Popular Tags</h1>
        <div className="mt-8 space-y-5">
          {tags.map((tag) => (
            <div key={tag.amount} className="flex justify-between">
              <Button
                variant="outline"
                className="background-light900_dark200 text-dark400_light700"
              >
                {tag.name}
              </Button>
              <p className="text-dark400_light700">{tag.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
