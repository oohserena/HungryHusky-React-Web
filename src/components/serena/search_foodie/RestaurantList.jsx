"use client";
import React from "react";
import RestaurantItem from "./RestaurantItem";

export default function RestaurantList({ restaurants }) {
  return (
    <section className="flex flex-col relative shrink-0 box-border min-h-[2000px] bg-white">
      <h1 className="relative shrink-0 box-border h-auto text-2xl font-semibold ml-12 mr-auto mt-5">
        All Restaurant Search Results
      </h1>
      {restaurants.map((restaurant, index) => (
        <RestaurantItem
          key={index}
          id={restaurant.id}
          name={restaurant.name}
          rating={`${restaurant.rating} stars`}
          imageSrc={restaurant.image_url}
        />
      ))}
    </section>
  );
}
