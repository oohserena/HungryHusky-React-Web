'use client';
import { BrowserRouter } from "react-router-dom";
import FoodieSearch from "@/components/serena/search_foodie";

export default function Page () {
    return (

        <BrowserRouter>
            <FoodieSearch />
        </BrowserRouter>


    );
}