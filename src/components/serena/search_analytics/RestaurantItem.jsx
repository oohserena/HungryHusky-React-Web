
'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import * as client from "../../client.js";
import { setCurrentUser } from "@/components/common/reducer";
import { useDispatch, useSelector } from "react-redux";
import StarRating from "../star_rating/StarRating.jsx";


export default function RestaurantItem({id, name, rating, imageSrc}) {
    const router = useRouter();
    const [isFavorite, setIsFavorite] = useState(false);
    const [favoriteId, setFavoriteId] = useState(null);
    const { currentUser } = useSelector((state) => 
      state.userReducer
    );

    const [ratingFiveCount, setRatingFiveCount] = useState(0);
    const [ratingFourCount, setRatingFourCount] = useState(0);
    const [ratingThreeCount, setRatingThreeCount] = useState(0);
    const [ratingTwoCount, setRatingTwoCount] = useState(0);
    const [ratingOneCount, setRatingOneCount] = useState(0);

    const [foodieFavoriteCounts, setFoodieFavoriteCounts] = useState(0);
    const [analystFavoriteCounts, setAnalystFavoriteCounts] = useState(0);

    useEffect(() => {
      const fetchFavorites = async () => {
          try {
              const favorites = await client.findFavoriteByUserId(currentUser._id);
              const currentFavorite = favorites.find(f => f.restaurant_id === id);
              console.log("currentFavorite:", currentFavorite._id)
              if (currentFavorite) {
                  setIsFavorite(true);
                  setFavoriteId(currentFavorite._id);
              }
          } catch (error) {
              console.error('Error fetching favorites:', error);
          }
      };

      if (currentUser && currentUser._id) {
          fetchFavorites();
      }

      fetchRatings();
      fetchFavoriteCounts();
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
              console.error('Error deleting favorite:', error);
          }
      } else {
          try {
              const newFavorite = await client.createFavorite({
                  user_id: currentUser._id,
                  restaurant_id: id,
              });
              setIsFavorite(true);
              setFavoriteId(newFavorite._id); // Set the new favorite ID
          } catch (error) {
              console.error('Error creating favorite:', error);
          }
      }
  };

  // Get Rating Distribution for the restaurant
  const fetchRatings = async () => {
    try{
      const ratings = await client.getRatings(id);
      console.log('ratings:', ratings)
      setRatingFiveCount(ratings.ratingFiveCount);
      setRatingFourCount(ratings.ratingFourCount);
      setRatingThreeCount(ratings.ratingThreeCount);
      setRatingTwoCount(ratings.ratingTwoCount);
      setRatingOneCount(ratings.ratingOneCount);

    } catch (error) {
      console.error('Error creating favorite:', error);
    }
  };

  const fetchFavoriteCounts = async () => {
    try{
      const foodieCounts = await client.findFoodieFavoritesCount(id);
      const analystCounts = await client.findAnalyticsFavoritesCount(id);
      setFoodieFavoriteCounts(foodieCounts.foodieFavoritesCount);
      setAnalystFavoriteCounts(analystCounts.analyticsFavoritesCount);
    } catch (error) {
      console.error('Error creating favorite:', error);

    }
  }


  
    return (
      <div className="flex flex-col relative shrink-0 box-border border ml-4 mt-5 pr-px border-solid border-neutral-400">
        <div className="flex flex-col relative shrink-0 box-border mt-4 mb-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div onClick={handleDetailsClick} style={{ position: 'relative', width: '400px', height: '400px', cursor: 'pointer'}}>
              <Image src={imageSrc} alt={`Image of ${name}`} layout="fill" objectFit="cover" />
            </div>
            <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
              <h3 onClick={handleDetailsClick} className="relative shrink-0 box-border h-auto text-3xl font-semibold ml-6 mr-auto mt-2.5 max-sm:ml-8" style={{cursor: 'pointer'}}>
                <ol start="1">
                  <li>{name}</li>
                </ol>
              </h3>
              <div onClick={handleDetailsClick} className="relative shrink-0 box-border h-auto text-xl font-semibold ml-6 mr-auto mt-2.5 max-sm:ml-8" style={{cursor:'pointer'}}>
                <div>Overall Rating: {rating}</div>
                <div> <StarRating rating={rating} /></div>
              </div>
              <div className="flex flex-col relative shrink-0 box-border border mt-5 border-none">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                    <div className="relative shrink-0 box-border h-auto font-semibold text-xl text-center ml-8 mt-5">
                      Rating Distribution
                    </div>
                    <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-red-700 text-center ml-8 mt-5">
                      5 stars: {ratingFiveCount}
                    </div>
                    <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-orange-500 text-center ml-8 mt-5">
                      4 stars:{ratingFourCount}
                    </div>
                    <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-amber-500 text-center ml-8 mt-5">
                      3 stars:{ratingThreeCount}
                    </div>
                    <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-yellow-400 text-center ml-8 mt-5">
                      2 stars:{ratingTwoCount}
                    </div>
                    <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-lime-500 text-center ml-8 mt-5">
                      1 stars:{ratingOneCount}
                    </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-center mt-5">
                        Reviews
                      </div>
                      <div className="relative shrink-0 box-border h-auto text-center text-3xl text-red-700 font-semibold mt-5">
                        8,000
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0" >
                      <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-center mt-5">
                        Favorites
                      </div>
                      <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-center mt-5">
                        Foodies:{" "}
                        <font color="#9013fe">
                          <b>{foodieFavoriteCounts}</b>
                        </font>
                      </div>
                      <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-center mt-5">
                        Analytics:{" "}
                        <font color="#4a90e2">
                          <b>{analystFavoriteCounts}</b>
                        </font>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="flex flex-col relative shrink-0 box-border mt-3.5 pl-36 max-sm:mt-8">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col">
                  <button className={`relative shrink-0 box-border appearance-none font-semibold text-lg mt-20 px-6 py-4 ${
                        isFavorite
                          ? 'bg-white text-neutral-600 border-solid border-neutral-200'
                          : 'bg-red-700 text-white'
                      }`}
                      style={{ width: '204px' }}
                      onClick={handleFavoriteClick}
                     >
                        {isFavorite ? 'Unfavorite' : 'Favorite'}
                  </button>

                  </div>
                  <div className="flex flex-col">
                    <button
                      className="relative shrink-0 box-border appearance-none bg-white text-neutral-600 rounded text-center cursor-pointer border font-semibold text-lg ml-16 mr-auto mt-20 px-6 py-4 border-solid border-neutral-400 max-sm:ml-1 max-sm:mt-5" style={{ width: '204px' }}
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