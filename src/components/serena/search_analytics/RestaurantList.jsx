
'use client';
import * as React from "react";
import RestaurantItem from "./RestaurantItem";
import { TbMoodSearch } from "react-icons/tb";

export default function RestaurantList({ restaurants }) {
  return (
    <main className="flex flex-col relative shrink-0 box-border min-h-[2000px] bg-white">
      <div>
        <div className="flex items-center ml-12 mt-5 text-red-700">
          <TbMoodSearch className="text-4xl mr-2" />
          <h1 className="relative shrink-0 box-border h-auto text-2xl font-semibold ml-2 mr-auto mt-5">
            All Restaurant Search Results
          </h1>
        </div>
      </div>
      {restaurants.map((restaurant, index) => (
        <RestaurantItem 
          key={index}
          id={restaurant.id}
          name={restaurant.name}
          rating={`${restaurant.rating} stars`}
          imageSrc={restaurant.image_url}  
        />
      

      ))}
        

    </main>
  );
}
