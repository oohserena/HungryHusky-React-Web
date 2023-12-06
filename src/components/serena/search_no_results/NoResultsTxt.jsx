
'use client';
import React from "react";
import { TbMoodSearch } from "react-icons/tb";
const image404 = "/images/404.jpeg";

export default function NoResultsTxt(props) {
  return (
    <div className="flex flex-col relative shrink-0 box-border mt-8 max-sm:mt-36">
      <div className="flex flex-col relative shrink-0 box-border ml-10 mr-8 mt-2.5 mb-9 max-sm:mb-[800px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
            <div className="text-3xl font-semibold text-red-700 flex items-center" style={{ textShadow: `2px 2px 4px rgba(0, 0, 0, 0.1)` }}>
              <TbMoodSearch className="text-4xl ml-5 mr-5" />
              No results this time, please try again
            </div>
            <div className="relative shrink-0 box-border h-auto text-xl ml-11 mt-11 pl-14 max-sm:ml-0 max-sm:pl-7">
              Suggestions for improving your results: <br /> <br />
              <span className="text-[rgb(var(--foreground-rgb))]">
                · Try a larger search area <br />
              </span>
              <span className="text-[rgb(var(--foreground-rgb))]">
                <br /> · Try a different location <br />
              </span>
              <span className="text-[rgb(var(--foreground-rgb))]">
                <br /> · Check the spelling or try alternative spelling <br />
                <span className="text-[rgb(var(--foreground-rgb))]">
                  <br /> · Try a more general search
                </span>{" "}
                <br />
              </span>
              <br />
            </div>
            <div className="md:block ">
              <img 
                src={image404} 
                alt="Descriptive Alt Text" 
                className="w-full max-w-xs md:max-w-sm lg:max-w-md" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
