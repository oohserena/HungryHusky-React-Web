"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import * as client from "../../client.js";
import { useDispatch, useSelector } from "react-redux";
const defaultImage1 = "/images/resimage.jpg";
const defaultImage2 = "/images/foodimage.jpeg";

function HomeComponent(props) {
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.userReducer);
  const currentUserRole = currentUser?.role;
  //console.log("currentUser:", currentUser);
  //const currentUserId = currentUser._id;
  const currentUserId = currentUser?._id;

  const [recentReviewData, setRecentReviewData] = useState([]);
  const [recentActivityData, setRecentActivityData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [error, setError] = useState(null);
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  // Login user recent reviews
  useEffect(() => {
    // fetch current user's reviews by user_id
    const fetchCurrUserReviews = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/${currentUserId}/review`
        );
        const data = await response.json();
        console.log("CurrUserReviews", data);
        const currUserReviews = await Promise.all(
          data.map(async (review) => {
            const { name, image } = await fetchRestaurantDetails(
              review.restaurant_id
            );
            return {
              id: review._id,
              restaurant_id: review.restaurant_id,
              review: review.content,
              date: review.createdAt,
              restaurantName: name,
              restaurantImage: image,
            };
          })
        );
        console.log("CurrUserReviews after parse", currUserReviews);
        setRecentReviewData(currUserReviews);
      } catch (error) {
        console.error("Error fetching user reviews:", error);
        setError(error);
      }
    };

    // fetch restaurant name and image by restaurant_id in review
    const fetchRestaurantDetails = async (restaurantId) => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/businesses/${restaurantId}`
        );
        if (response.status !== 200) {
          return { name: "Restaurant AAA", image: defaultImage2 };
        } else {
          const data = await response.json();
          return { name: data.name, image: data.photos[0] };
        }
      } catch (error) {
        console.error("Error fetching restaurants details:", error);
        return { name: "Restaurant AAA", image: defaultImage2 };
      }
    };

    if (currentUser) {
      fetchCurrUserReviews();
    }
  }, [currentUser]);

  // All users'(Visitor&Login) most recent six activity/reviews
  useEffect(() => {
    // fetch all reviews
    const fetchRecentActivityData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/reviews`
        );
        const data = await response.json();
        const sortedData = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        const recentDataPromises = sortedData
          .slice(0, 6)
          .map(async (activity) => {
            const { name, image } = await fetchRestaurantDetails(
              activity.restaurant_id
            );
            return {
              ...activity,
              username: await fetchUserName(activity.user_id),
              restaurantName: name,
              restaurantImage: image,
            };
          });
        const recentData = await Promise.all(recentDataPromises);
        setRecentActivityData(recentData);
        console.log("activity data", recentData);
      } catch (error) {
        setError(error);
      }
    };

    // fetch username by user_id in review
    const fetchUserName = async (userId) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/${userId}`
        );
        if (response.status !== 200) {
          console.log("User not found");
          return "Alice Wonderland";
        } else {
          const userData = await response.json();
          console.log("User data:", userData);
          console.log("Usernname data:", userData.username);
          return userData.username;
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        return "Alice Wonderland";
      }
    };

    // fetch restaurant name and image by restaurant_id in review
    const fetchRestaurantDetails = async (restaurantId) => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/businesses/${restaurantId}`
        );
        if (response.status !== 200) {
          return { name: "Restaurant AAA", image: defaultImage1 };
        } else {
          const data = await response.json();
          return { name: data.name, image: data.photos[0] };
        }
      } catch (error) {
        console.error("Error fetching restaurants details:", error);
        return { name: "Restaurant AAA", image: defaultImage1 };
      }
    };

    fetchRecentActivityData();
  }, []);

  // Categories
  // useEffect(() => {
  //   const fetchCategoriesData = async () => {
  //     try {
  //       const response = await fetch();
  //       const data = await response.json();
  //       setCategoriesData(data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };
  //   fetchCategoriesData();
  // }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
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
      }
      //   const response = await client.searchRestaurants(term, location);
      // Handle the search result. For example, you can redirect to a search results page.
      router.push(
        `/foodie_search?term=${encodeURIComponent(
          term
        )}&location=${encodeURIComponent(location)}`
      );
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setError(error);
    }
  };

  const renderRecentReviewColumns = () => {
    const handleReviewNav = (restaurantId) => {
      router.push(`/search_detail/${restaurantId}`);
    };

    return recentReviewData.slice(0, 3).map((review) => (
      <div key={review._id} className="flex flex-row items-stretch w-full">
        <div
          onClick={() => handleReviewNav(review.restaurant_id)}
          className="cursor-pointer flex flex-col relative shrink-0 box-border border m-5 border-solid border-neutral-400 w-full rounded-lg"
        >
          <div className="flex items-stretch">
            <div className="w-[40%] h-full">
              <img
                loading="lazy"
                srcSet={review.restaurantImage}
                className="object-cover w-full h-auto min-h-full"
                alt="Restaurant"
              />
            </div>

            <div className="flex flex-col w-[60%] ml-5">
              <div className="box-border h-auto">
                <font color="#4a4a4a">
                  <b className="text-lg">{review.restaurantName}</b>
                </font>
              </div>

              <div className="box-border h-auto flex-grow">
                <font color="#4a4a4a">{review.review}</font>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderRecentActivityItems = () => {
    const handleActNavProfile = (userId) => {
      router.push(`/profile/${userId}`);
    };
    const handleActNavRestaurant = (restaurantId) => {
      router.push(`/search_detail/${restaurantId}`);
    };
    return (
      <div className="flex justify-center flex-wrap -mx-2">
        {recentActivityData.map((activity) => (
          <div
            key={activity.id}
            className="flex flex-col items-stretch w-full md:w-1/3 px-2 mb-4"
          >
            <div className="flex flex-col relative shrink-0 box-border h-auto border m-5 border-solid border-neutral-400 rounded-lg">
              {/* link to user profile page */}
              <div
                onClick={() => handleActNavProfile(activity.user_id)}
                className="cursor-pointer relative shrink-0 box-border h-auto my-2.5 font-bold"
              >
                {activity.username}
              </div>
              <img
                loading="lazy"
                srcSet={activity.restaurantImage}
                className="aspect-[2] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden my-2.5"
              />
              <div
                onClick={() => handleActNavRestaurant(activity.restaurant_id)}
                className="cursor-pointer relative shrink-0 box-border h-auto my-2.5 font-bold"
              >
                {activity.restaurantName}
              </div>
              <div className="relative shrink-0 box-border h-auto my-5">
                {activity.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // const renderCategories = () => {
  //   return categoriesData.map((category) => (
  //     <div
  //       key={category.id}
  //       className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0"
  //     >
  //       <div className="flex flex-col relative shrink-0 box-border h-auto border ml-8 mr-5 my-5 border-solid border-neutral-400 font-bold">
  //         <img
  //           loading="lazy"
  //           srcSet={category.imageSrc}
  //           className="aspect-[1.1] object-cover object-top w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden mb-5"
  //         />
  //         <div className="relative shrink-0 box-border h-auto self-center mt-5">
  //           {category.name}
  //         </div>
  //       </div>
  //     </div>
  //   ));
  // };

  return (
    <main className="flex flex-col relative shrink-0 box-border bg-white min-h-[auto]">
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
                        placeholder="Seattle, WA 98104"
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
      {/* currentUser: {JSON.stringify(currentUser)} */}
      {currentUser && (
        <section className="flex flex-col relative shrink-0 box-border my-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
              <div className="relative shrink-0 box-border h-auto text-center text-3xl font-semibold tracking-wider mx-auto my-5 p-5">
                Your Recent Review
                <div className="total-reviews">
                  Total: {recentReviewData.length}
                </div>
              </div>

              <div className="relative shrink-0 box-border flex-col flex mt-5 mx-6">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  {renderRecentReviewColumns()}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="relative shrink-0 box-border h-auto text-center text-3xl font-semibold tracking-wider mx-auto my-5 p-5">
        Hungry Huskies Recent Activity
      </section>
      <section className="flex flex-col relative shrink-0 box-border mt-5 mx-16">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 justify-center">
          {renderRecentActivityItems()}
        </div>
      </section>
      {/* <section className="relative shrink-0 box-border h-auto text-center text-3xl font-semibold tracking-wider mx-auto my-5 p-5">
        Categories
      </section> */}
      {/* <section className="flex flex-col relative shrink-0 box-border mx-16 my-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          {renderCategories()}
        </div>
      </section> */}
    </main>
  );
}

export default HomeComponent;
