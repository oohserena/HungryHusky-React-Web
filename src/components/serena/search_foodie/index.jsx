
import React from "react";
import NavigationBar from "@/components/common/NavigationBar";
import RestaurantList from "./RestaurantList";
import RestaurantSearchBar from "../search-bar";

export default function FoodieSearch() {
    return (
        <div>
        <NavigationBar />
        <RestaurantSearchBar />
        <RestaurantList />
        
     
        </div>
    );
}