'use client';
import React from "react";
import RestaurantItem from "./RestaurantItem";

export default function RestaurantList(props) {
  return (

    <section className="flex flex-col relative shrink-0 box-border min-h-[2000px] bg-white">
      <h1 className="relative shrink-0 box-border h-auto text-2xl font-semibold ml-12 mr-auto mt-5">
        All ding thai fung results in Seattle, Washington 
      </h1>
      <RestaurantItem
        name="Ding Tai Fung"
        rating="4 stars"
        imagesrcSet="https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19"/>
      <RestaurantItem
        name="Dough Zone - Seattle Downtown Pine St."
        rating="4 stars"
        imagesrcSet="https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19"/>
      <RestaurantItem
        name="Harbor City Restaurant"
        rating="4 stars"
        imagesrcSet="https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19"/>
      <RestaurantItem
        name="Hong Kong Bistro"
        rating="4 stars"
        imagesrcSet="https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19"/>
    </section>
  );
}

