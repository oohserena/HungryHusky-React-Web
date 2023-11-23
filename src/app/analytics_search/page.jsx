'use client';

import { BrowserRouter } from "react-router-dom";
import AnalyticsSearch from "@/components/serena/search_analytics";

export default function Page () {
    return (
        <BrowserRouter>
            <AnalyticsSearch />
        </BrowserRouter>

    );

}