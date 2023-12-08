"use client";
import NavigationBar from "@/components/common/NavigationBar";
import RestaurantSearchBar from "../search_bar";
import NoResultsTxt from "./NoResultsTxt";

export default function SearchNoResults() {
  return (
    <div>
      <NavigationBar />
      <RestaurantSearchBar />
      <NoResultsTxt />
    </div>
  );
}
