'use client';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import * as client from "../../client.js";



export default function SearchPage() {
    const router = useRouter();
    const [error, setError] = useState(null);

    const [term, setTerm] = useState('');
    const [ location, setLocation ] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
        //   const response = await client.searchRestaurants(term, location);
          // Handle the search result. For example, you can redirect to a search results page.
          router.push(`/foodie_search?term=${encodeURIComponent(term)}&location=${encodeURIComponent(location)}`);
        } catch (error) {
          console.error('Error fetching restaurants:', error);
          setError(error);
        }
      };

    return (
        <section className="relative shrink-0 box-border flex flex-col items-stretch min-h-[472px] bg-[url(https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fe85b95ec3135499f97c84d225197ea35)] bg-no-repeat bg-center bg-cover mb-5 max-md:min-h-[auto] max-sm:font-thin max-sm:min-h-[auto]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
            <div className="flex flex-col relative shrink-0 box-border h-auto max-w-[695px] min-h-[170px] mt-36 mb-24 mx-auto pb-1.5">
              <div className="flex flex-col relative shrink-0 box-border min-h-[auto] mx-auto my-2.5 max-md:w-auto max-md:h-auto max-md:min-h-[auto] max-sm:w-auto max-sm:h-auto max-sm:min-h-[auto] max-sm:mx-auto">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
                    <form
                      onSubmit={handleSearch}
                      className="w-full max-w-xs mx-auto space-y-5"
                    >
                      <input
                        type="text"
                        placeholder="Restaurant Name"
                        name="search-input-restaurants"
                        onChange={(e) => setTerm(e.target.value)}
                        className="text-xl p-2.5 rounded border border-solid border-stone-300 w-full"
                        required={false}
                      />
                      <input
                        type="text"
                        placeholder="98104"
                        name="search-input-zipcode"
                        onChange={(e) => setLocation(e.target.value)}
                        className="text-xl p-2.5 rounded border border-solid border-stone-300 w-full"
                        required={false}
                      />
                      <button
                        type="submit"
                        className="text-white bg-red-700 text-xl p-2.5 rounded border border-solid border-stone-300 w-full max-w-xs"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}