"use client";
import React, { useEffect, useState } from "react";
import "./index.css";
import { useRouter } from "next/navigation";
import * as client from "../../client.js";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function RestaurantInfo({ restaurantId }) {
  const router = useRouter();
  const [restaurant, setRestaurant] = useState(null);
  const { currentUser } = useSelector((state) => state.userReducer || {});

  useEffect(() => {
    if (restaurantId) {
      fetchRestaurant(restaurantId);
    }
  }, [restaurantId]);

  const fetchRestaurant = async (restaurantId) => {
    try {
      const response = await client.RestaurantDetail(restaurantId);
      setRestaurant(response);
    } catch (error) {
      console.error("Error fetching restaurant detail:", error);
    }
  };

  const handleButtonClick = () => {
    if (currentUser) {
      router.push(`/write_review/${restaurantId}`);
    } else {
      alert("Please login first!");
    }
  };

  return (
    <section className="flex flex-col relative shrink-0 box-border bg-white">
      <header className="flex flex-col relative shrink-0 box-border mt-2.5 pl-5 pr-52">
        <div className="flex items-center">
          <h1 className="relative title-margin font-semibold text-4xl mt-5 max-sm:w-[500px] max-sm:mx-auto">
            {restaurant ? restaurant.name : "Loading..."}
          </h1>
        </div>
        <div className="flex flex-col relative shrink-0 box-border h-[30px] w-[600px] mt-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <p className="relative shrink-0 box-border text-lg font-semibold ml-36 max-sm:ml-2.5 max-sm:mr-auto">
              Overall Rating: {restaurant ? restaurant.rating : "Loading..."}
            </p>
          </div>
        </div>
        <div className="flex flex-col relative shrink-0 box-border w-[500px] mr-auto mt-2.5 pl-5 max-sm:w-[357px] max-sm:mr-9 max-sm:mt-9 max-sm:pr-36">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
              <button
                className="relative shrink-0 box-border appearance-none bg-red-700 text-[white] rounded text-center cursor-pointer text-lg font-semibold w-[204px] mt-5 mx-auto px-6 py-4 max-sm:w-[337px]"
                onClick={handleButtonClick}
              >
                Write a review
              </button>
            </div>
          </div>
        </div>
        {restaurant && restaurant.photos && (
          <div className="flex flex-row shrink-0 gap-2 mt-5 md:mt-0 image-margin">
            {restaurant.photos.slice(0, 3).map((photo, index) => (
              <div key={index} className="w-[300px] h-[200px] relative">
                <Image
                  src={photo}
                  alt={`Image ${index + 1} of ${restaurant.name}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        )}
      </header>
    </section>
  );
}
