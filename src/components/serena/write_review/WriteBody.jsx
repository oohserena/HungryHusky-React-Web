"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as client from "../../client.js";
import { useSelector } from "react-redux";

export default function WriteBody({ restaurantId }) {
  const [review, setReview] = React.useState("");
  const router = useRouter();
  const [restaurant, setRestaurant] = useState(null);
  const actualRestaurantId = restaurantId.restaurantId;
  const { currentUser } = useSelector((state) => state.userReducer);
  const currentUserId = currentUser?._id;

  useEffect(() => {
    if (actualRestaurantId) {
      fetchRestaurant(actualRestaurantId);
    }
  }, [actualRestaurantId]);

  const fetchRestaurant = async (actualRestaurantId) => {
    try {
      const response = await client.RestaurantDetail(actualRestaurantId);
      // console.log('setting rest')
      setRestaurant(response);
    } catch (error) {
      console.error("Error fetching restaurant detail:", error);
    }
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handlePostReview = async () => {
    // console.log("currentUser ID:", currentUser?._id);
    // console.log(actualRestaurantId);
    // console.log("Review content:", review);

    if (currentUser && currentUser._id && actualRestaurantId && review) {
      try {
        const reviewData = {
          user_id: currentUserId,
          restaurant_id: actualRestaurantId,
          content: review,
        };
        await client.createReview(reviewData);
        router.push("/search_detail/" + actualRestaurantId);
      } catch (error) {
        console.error("Error posting review:", error);
      }
    } else {
      console.error("Missing information for review");
    }
  };

  const handleCancel = () => {
    router.push("/search_detail" + actualRestaurantId);
  };

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <section className="mt-8 px-5">
        <h1 className="font-semibold text-4xl text-center sm:text-left sm:ml-44 mt-5">
          {restaurant ? restaurant.name : "Loading..."}
        </h1>
      </section>
      <section className="mt-5 px-5">
        <form className="flex flex-col items-center">
          <textarea
            placeholder="Consider in your review: Food, Service, Ambiance"
            name="review-input"
            className="border w-full sm:w-[800px] h-64 text-lg mt-5 p-2.5 rounded border-stone-300"
            value={review}
            onChange={handleReviewChange}
          />
        </form>
      </section>
      <section className="mt-5 px-5 flex flex-col items-center sm:flex-row sm:justify-center gap-4">
        <button
          className="bg-red-700 text-white rounded text-lg font-semibold px-8 py-4 w-full sm:w-auto sm:max-w-xs mt-5"
          onClick={handlePostReview}
        >
          Post Review
        </button>
        <button
          className="bg-stone-200 text-black rounded text-lg px-14 py-4 w-full sm:w-auto sm:max-w-xs mt-5"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </section>
    </main>
  );
  
}
