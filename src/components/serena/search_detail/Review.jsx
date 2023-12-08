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
    <main className="flex flex-col relative shrink-0 box-border mt-0 min-h-[800px] items-stretch bg-white">
      <section className="flex flex-col relative shrink-0 box-border mt-5">
        <header className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <h2 className="relative shrink-0 box-border h-auto text-xl font-semibold ml-44 mt-5 max-sm:ml-5 max-sm:mr-auto">
            Recommended Reviews
          </h2>
        </header>
      </section>

      {reviews.map((review, index) => (
        <section
          key={index}
          className="flex flex-col relative shrink-0 box-border mt-5"
        >
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
              <div className="flex flex-row items-center justify-between">
                <button className="bg-red-700 text-white px-4 py-2 rounded-full ml-52 mt-2.5">
                  <h3
                    onClick={() => handleClickOnUser(review.user_id)}
                    className="relative shrink-0 box-border h-auto text-xl max-sm:ml-7"
                    style={{ cursor: "pointer" }}
                  >
                    {users[review.user_id] || "Loading..."}
                  </h3>

                  <p
                    onClick={() => handleClickOnUser(review.user_id)}
                    className="relative shrink-0 box-border h-auto max-sm:ml-7"
                    style={{ cursor: "pointer" }}
                  >
                    {formatDate(review.createdAt)}{" "}
                    {/* Adjust formatting as needed */}
                  </p>
                </button>
              </div>
              <div
                onClick={() => handleClickOnUser(review.user_id)}
                className="flex text-area flex-col relative shrink-0 box-border border h-[250px] w-[700px] text-lg mt-5 mx-auto p-2.5 rounded border-solid border-stone-300 max-sm:w-[300px]"
                style={{ cursor: "pointer" }}
              >
                {review.content}
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
