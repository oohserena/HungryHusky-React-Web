'use client';
import React, { useEffect, useState } from "react";
import NavigationBar from "@/components/common/NavigationBar";
import RestaurantList from "./RestaurantList";
import RestaurantSearchBar from "../search_bar";
import { useRouter, useSearchParams } from 'next/navigation';
import * as client from "../../client.js";

export default function FoodieSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        if (searchParams) {
            const term = searchParams.get('term');
            const location = searchParams.get('location');
            fetchRestaurants(term, location, router);
        }
    }, [searchParams]);

    const fetchRestaurants = async (term, location, router) => {
        try {
            const response = await client.searchRestaurants(term, location);
            if (!response || response.length === 0) {
                router.push('/no_result_search');
                return;
            }
            setRestaurants(response);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
            router.push('/no_result_search');
        }
    };

    if (restaurants === null) {
        return null; // Or a loading indicator
    }

    return (
        <div>
            <NavigationBar />
            <RestaurantSearchBar />
            <RestaurantList restaurants={restaurants}/>
        </div>
    );
}
