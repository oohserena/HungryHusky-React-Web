'use client';
import NavigationBar from "@/components/common/NavigationBar";
import RestaurantInfo from "./RestaurantInfo";
import Review from "./Review";
import { useRouter } from "next/router";


export default function SearchDetail() {
    return (
        <div>
        <NavigationBar />
        <RestaurantInfo />
        <Review />
     
        </div>
    );
}