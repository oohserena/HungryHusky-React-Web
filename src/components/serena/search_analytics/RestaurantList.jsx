import * as React from "react";
import RestaurantItem from "./RestaurantItem";

export default function RestaurantList(props) {
  return (
    <main className="flex flex-col relative shrink-0 box-border min-h-[2000px] bg-white">
      <h1 className="relative shrink-0 box-border h-auto text-2xl font-semibold ml-12 mr-auto mt-5">
        All ding thai fung results in Seattle, Washington 
      </h1>
      {/* ding thai fung should be user's search value */}
      <section className="flex flex-col relative shrink-0 box-border ml-10 mr-8 mt-2.5 mb-9 max-sm:mb-[800px]">
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </section>
    </main>
  );
}
