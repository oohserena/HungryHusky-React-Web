"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import * as client from "../../client.js";
import { setCurrentUser } from "@/components/common/reducer";
import { useDispatch, useSelector } from "react-redux";

export default function RestaurantSearchBar() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  // const [isFoodie, setIsFoodie] = useState(false);
  // const [isAnalytics, setIsAnalytics] = useState(true);
  const { currentUser } = useSelector((state) => state.userReducer);
  // console.log("currentUser:", currentUser);
  const currentUserRole = currentUser?.role;
  // console.log("currentUserRole:", currentUserRole);

  // useEffect(() => {
  //   setIsFoodie(false);
  //   setIsAnalytics(true);
  // }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      if (!term || !location) {
        alert("Please enter both a keyword and a location before searching.");
        return;
      }

      if (currentUserRole === "FOODIE") {
        router.push(
          `/foodie_search?term=${encodeURIComponent(
            term
          )}&location=${encodeURIComponent(location)}`
        );
      } else if (currentUserRole === "BUSINESS ANALYST") {
        router.push(
          `/analytics_search?term=${encodeURIComponent(
            term
          )}&location=${encodeURIComponent(location)}`
        );
      } else {
        router.push(
          `/foodie_search?term=${encodeURIComponent(
            term
          )}&location=${encodeURIComponent(location)}`
        );
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setError(error);
    }
  };

  return (
    <div className="flex flex-col relative shrink-0 box-border bg-white font-semibold">
      <div className="flex flex-col relative shrink-0 box-border mt-8 mb-20">
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-full mx-auto"
        >
          <input
            type="text"
            id="restaurant-input"
            placeholder="Restaurant Name"
            className="text-xl min-h-[50px] p-2.5 rounded border border-solid border-stone-300 flex-1"
            onChange={(e) => setTerm(e.target.value)}
            required={true}
          />
          <input
            type="text"
            id="restaurant-zip-code"
            placeholder="98104"
            className="text-xl min-h-[50px] p-2.5 rounded border border-solid border-stone-300 flex-1"
            onChange={(e) => setLocation(e.target.value)}
            required={true}
          />
          <button
            className="bg-red-700 text-white rounded text-xl min-h-[50px] px-6 py-4 flex-shrink-0 mt-4 md:mt-0 md:px-6"
            // openLinkInNewTab={false}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
