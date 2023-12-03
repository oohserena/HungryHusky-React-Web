'use client';
import React, { useEffect, useState }from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import * as client from "../../client.js";

export default function RestaurantSearchBar() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [isFoodie, setIsFoodie] = useState(false);
  const [isAnalytics, setIsAnalytics] = useState(true);

  useEffect(() => {
    setIsFoodie(false);
    setIsAnalytics(true);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      if (isFoodie) {
        router.push(`/foodie_search?term=${encodeURIComponent(term)}&location=${encodeURIComponent(location)}`);
      } else if (isAnalytics) {
        router.push(`/analytics_search?term=${encodeURIComponent(term)}&location=${encodeURIComponent(location)}`);
      }
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      setError(error);
    }
  };

  return (
    <div className="flex flex-col relative shrink-0 box-border bg-white font-semibold">
      <div className="flex flex-col relative shrink-0 box-border mt-8 mb-20">
        <form onSubmit={handleSearch} className="flex flex-row items-center justify-center gap-4 max-w-full mx-auto">
          <input
            type="text"
            id="restaurant-input"
            placeholder="Restaurant Name"
            className="text-xl min-h-[50px] p-2.5 rounded border border-solid border-stone-300 flex-1"
            onChange={(e) => setTerm(e.target.value)}
            required={false}
          />
          <input
            type="text"
            id="restaurant-zip-code"
            placeholder="98104"
            className="text-xl min-h-[50px] p-2.5 rounded border border-solid border-stone-300 flex-1"
            onChange={(e) => setLocation(e.target.value)}
            required={false}
          />
          <button
            className="bg-red-700 text-white rounded text-xl min-h-[50px] px-6 py-4 flex-shrink-0"
            // openLinkInNewTab={false}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}