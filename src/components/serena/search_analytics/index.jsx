'use client';
import React, { useEffect, useState } from "react";
import NavigationBar from "@/components/common/NavigationBar";
import RestaurantList from "./RestaurantList";
import RestaurantSearchBar from "../search_bar";
import * as client from '../../client.js';
import { useRouter, useSearchParams } from 'next/navigation';


export default function AnalyticsSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [restaurants, setRestaurants] = useState([]);

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
        }
    };

    if (restaurants === null) {
        return null;
    }

    return (
        <div>
        <NavigationBar />
        <RestaurantSearchBar />
        <RestaurantList restaurants={restaurants}/>

        
        </div>
    );
}