'use client';
import React from "react";
import NavigationBar from "@/components/common/NavigationBar";
import WriteBody from "./WriteBody";


export default function WriteReview({id}) {
    console.log(id)
    return (
        <div>
        <NavigationBar />
        <WriteBody restaurantId={id}/>
        </div>
    );
}