'use client';
import React, { useEffect, useState } from "react";
import NavigationBar from "@/components/common/NavigationBar";
import RestaurantList from "./RestaurantList";
import RestaurantSearchBar from "../search_bar";
import * as client from '../../client.js';
import { usePathname, useSearchParams } from 'next/navigation';


export default function AnalyticsSearch() {
    const searchParams = useSearchParams();
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchRestaurants(
            searchParams.get('term'), 
            searchParams.get('location')
        );
    }, [searchParams]);

    const fetchRestaurants = async (term, location) => {
        try {
            console.log('in fetch restaurants')
            const response = await client.searchRestaurants(term, location);
            console.log(response)
            setRestaurants(response);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    };

    return (
        <div>
        <NavigationBar />
        <RestaurantSearchBar />
        <RestaurantList restaurants={restaurants}/>

        
        </div>
    );
}