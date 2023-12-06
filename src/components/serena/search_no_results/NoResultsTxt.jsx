
'use client';
import React from "react";

export default function NoResultsTxt(props) {
  return (
    <div className="flex flex-col relative shrink-0 box-border mt-8 max-sm:mt-36">
      <div className="flex flex-col relative shrink-0 box-border ml-10 mr-8 mt-2.5 mb-9 max-sm:mb-[800px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
            <h2 className="relative shrink-0 box-border h-auto text-3xl font-semibold ml-16 mr-auto mt-5 max-sm:ml-8">
                No results this time, please try again
            </h2>
            <div className="relative shrink-0 box-border h-auto text-xl ml-11 mt-11 pl-14 max-sm:ml-0 max-sm:pl-7">
              Suggestions for improving your results: <br /> <br />
              <span className="text-[rgb(var(--foreground-rgb))]">
                Try a larger search area <br />
              </span>
              <span className="text-[rgb(var(--foreground-rgb))]">
                <br /> Try a different location <br />
              </span>
              <span className="text-[rgb(var(--foreground-rgb))]">
                <br /> Check the spelling or try alternative spelling <br />
                <span className="text-[rgb(var(--foreground-rgb))]">
                  <br /> Try a more general search
                </span>{" "}
                <br />
              </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
