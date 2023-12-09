"use client";
import React, { useEffect, useState } from "react";
import "./index.css";
import * as client from "../../client.js";
import { useRouter } from "next/navigation";

export default function Review({ restaurantId }) {
  const router = useRouter();
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    if (restaurantId) {
      fetchRestaurant(restaurantId);
    }
  }, [restaurantId]);

  const fetchRestaurant = async (restaurantId) => {
    try {
      const response = await client.findReviewsByRestaurantId(restaurantId);
      console.log("setting rest");
      console.log(response);
      setReviews(response);
    } catch (error) {
      console.error("Error fetching restaurant detail:", error);
    }
  };

  const fetchUsers = async (reviews) => {
    const usersData = {};

    for (const review of reviews) {
      try {
        const userData = await client.findUserById(review.user_id);
        usersData[review.user_id] = userData.username; // Assuming 'username' is the property you need
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    setUsers(usersData);
  };

  useEffect(() => {
    if (reviews.length > 0) {
      fetchUsers(reviews);
    }
  }, [reviews]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    const day = date.getDate();

    // Format the date as YYYY-MM-DD
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  };

  const handleClickOnUser = (userId) => {
    router.push(`/profile/${userId}`);
  };

  return (
    <main className="flex flex-col bg-white min-h-screen">
      <section className="mt-5 pr-5">
        <header className="flex justify-start pl-5 sm:pl-36 recommend-margin" >
          <h2 className="text-xl font-semibold">
            Recommend Reviews
          </h2>
        </header>
      </section>
  
      {reviews.map((review, index) => (
        <section key={index} className="mt-5 px-5">
          <div className="flex justify-start pl-5 sm:pl-36">
            <div className="text-center">
              <button 
                className="bg-red-700 text-white px-4 py-2 rounded-full my-2.5"
                onClick={() => handleClickOnUser(review.user_id)}
              >
                <h3 className="text-xl cursor-pointer">
                  {users[review.user_id] || "Loading..."}
                </h3>
                <p className="cursor-pointer">
                  {formatDate(review.createdAt)}
                </p>
              </button>
            </div>
          </div>
          <div
            onClick={() => handleClickOnUser(review.user_id)}
            className="text-area flex flex-col border h-1/4 md:h-1/3 lg:h-1/2 w-1/3 md:w-1/4 lg:w-1/5 text-lg mt-5 mx-auto p-2.5 rounded border-stone-300 cursor-pointer break-words overflow-y-auto"
          >
            {review.content}
          </div>
        </section>
      ))}
    </main>
  );
  
  
}
