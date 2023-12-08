"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as client from "../../client.js";
import { useSelector } from "react-redux";

export default function RestaurantItem({ id, name, rating, imageSrc }) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const { currentUser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favorites = await client.findFavoriteByUserId(currentUser._id);
        const currentFavorite = favorites.find((f) => f.restaurant_id === id);
        // console.log("currentFavorite:", currentFavorite._id)
        if (currentFavorite) {
          setIsFavorite(true);
          setFavoriteId(currentFavorite._id);
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    if (currentUser && currentUser._id) {
      fetchFavorites();
    }
  }, [id, currentUser]);

  const handleDetailsClick = () => {
    router.push(`/search_detail/${id}`);
  };

  const handleFavoriteClick = async () => {
    if (isFavorite) {
      try {
        await client.deleteFavorite(favoriteId);
        setIsFavorite(false);
        setFavoriteId(null); // Reset the favorite ID
      } catch (error) {
        console.error("Error deleting favorite:", error);
      }
    } else if (!currentUser) {
      alert("Please login first!");
    } else {
      try {
        const newFavorite = await client.createFavorite({
          user_id: currentUser._id,
          restaurant_id: id,
        });
        setIsFavorite(true);
        setFavoriteId(newFavorite._id); // Set the new favorite ID
      } catch (error) {
        console.error("Error creating favorite:", error);
      }
    }
  };

  return (
    <div className="flex flex-col relative shrink-0 box-border border ml-4 mt-5 pr-px border-solid border-neutral-400">
      <div className="flex flex-col relative shrink-0 box-border mt-4 mb-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div
            onClick={handleDetailsClick}
            style={{
              position: "relative",
              width: "400px",
              height: "400px",
              cursor: "pointer",
            }}
          >
            <Image
              src={imageSrc}
              alt={`Image of ${name}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
            <h3
              onClick={handleDetailsClick}
              className="relative shrink-0 box-border h-auto text-3xl font-semibold ml-6 mr-auto mt-2.5 max-sm:ml-8"
              style={{ cursor: "pointer" }}
            >
              <ol start="1">
                <li>{name}</li>
              </ol>
            </h3>
            <div
              onClick={handleDetailsClick}
              className="relative shrink-0 box-border h-auto text-xl font-semibold ml-6 mr-auto mt-2.5 max-sm:ml-8"
              style={{ cursor: "pointer" }}
            >
              <div>Overall Rating: {rating}</div>
            </div>
            <div className="relative shrink-0 box-border h-auto text-xl font-semibold ml-6 mr-auto mt-5 max-sm:ml-8">
              <div>
                Rating Distribution:{" "}
                <span style={{ color: "#d0021b" }}>pay to unlock</span>
              </div>
            </div>
            <div className="relative shrink-0 box-border h-auto text-xl font-semibold ml-6 mr-auto mt-2.5 max-sm:ml-8">
              <div>
                Views: <span style={{ color: "#d0021b" }}>pay to unlock</span>
              </div>
            </div>
            <div className="relative shrink-0 box-border h-auto text-xl font-semibold ml-6 mr-auto mt-2.5 max-sm:ml-8">
              <div>
                Favorites:{" "}
                <span style={{ color: "#d0021b" }}>pay to unlock</span>
              </div>
            </div>
            <div className="flex flex-col relative shrink-0 box-border mt-3.5 pl-36 max-sm:mt-8">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col">
                  <button
                    className={`relative shrink-0 box-border appearance-none font-semibold text-lg mt-20 px-6 py-4 ${
                      isFavorite
                        ? "bg-white text-neutral-600 border-solid border-neutral-200"
                        : "bg-red-700 text-white"
                    }`}
                    style={{ width: "204px" }}
                    onClick={handleFavoriteClick}
                  >
                    {isFavorite ? "Unfavorite" : "Favorite"}
                  </button>
                </div>
                <div className="flex flex-col">
                  <button
                    className="relative shrink-0 box-border appearance-none bg-white text-neutral-600 rounded text-center cursor-pointer border font-semibold text-lg ml-16 mr-auto mt-20 px-6 py-4 border-solid border-neutral-400 max-sm:ml-1 max-sm:mt-5"
                    style={{ width: "204px" }}
                    onClick={handleDetailsClick}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
