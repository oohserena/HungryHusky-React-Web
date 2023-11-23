'use client';
import React from "react";
import NavigationBar from "@/components/common/NavigationBar";
import RestaurantList from "./RestaurantList";
import RestaurantSearchBar from "../search_bar";


export default function AnalyticsSearch() {
    return (
        <div>
        <NavigationBar />
        <RestaurantSearchBar />
        <RestaurantList />

        
        </div>
    );
}