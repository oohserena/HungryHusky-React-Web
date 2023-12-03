import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import * as client from "../../client.js";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../common/reducer.js";

function HomeComponent(props) {
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.userReducer);
  console.log("currentUser:", currentUser);

  const [recentReviewData, setRecentReviewData] = useState([]);
  const [recentActivityData, setRecentActivityData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [error, setError] = useState(null);
  const [term, setTerm] = useState('');
  const [ location, setLocation ] = useState('');
  
  useEffect(() => {
    const fetchUserReviews = async () => {
      if (currentUser && currentUser._id) {
        try {
          const userReviews = await client.findReviewsByUserId(currentUser._id);
          setRecentReviewData(userReviews);
        } catch (error) {
          console.error('Error fetching user reviews:', error);
          setError(error);
        }
      }
    };

    // const fetchRecentReviewData = async () => {
    //   try {
    //     const response = await fetch("API_URL");
    //     const data = await response.json();
    //     setRecentReviewData(data);
    //   } catch (error) {
    //     setError(error);
    //   }
    // };

    const fetchRecentActivityData = async () => {
      try {
        const response = await fetch("API_URL");
        const data = await response.json();
        setRecentActivityData(data);
      } catch (error) {
        setError(error);
      }
    };

    const fetchCategoriesData = async () => {
      try {
        const response = await fetch("API_URL");
        const data = await response.json();
        setCategoriesData(data);
      } catch (error) {
        setError(error);
      }
    };

    if (currentUser && currentUser._id) {
      fetchUserReviews();
    }

    fetchRecentActivityData();
    fetchCategoriesData();
  }, [currentUser]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    router.push(`/search_detail`);
  };

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

  const renderRecentReviewColumns = () => {
    const reviewId = currentUser.review_ids;
    console.log("reviewId:", reviewId);
    const handleReviewNav = (restaurantId) => {
      //router.push(`/restaurant_info/${restaurantId}`);
      router.push(`/search_detail/${restaurantId}`);
    };

    return recentReviewData.map((review) => (
      <div
        key={review.id}
        className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
      >
        <div className="flex flex-col relative shrink-0 box-border h-auto border m-5 pb-8 border-solid border-neutral-400">
          <div className="flex flex-col relative shrink-0 box-border my-2.5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="relative shrink-0 box-border h-auto ml-1.5 my-2.5">
                  {/* link to restaurant page by restaurantId*/}
                  <div
                    onClick={() => handleReviewNav(review.restaurantId)}
                    style={{ cursor: "pointer" }}
                  >
                    <font color="#4a4a4a">
                      <b>{review.restaurantName}</b>
                    </font>
                  </div>
                </div>
                <img
                  loading="lazy"
                  srcSet={review.imageSrc}
                  className="aspect-[1.25] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden ml-1.5 mb-2.5"
                />
              </div>
              <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
                <div className="relative shrink-0 box-border h-auto mt-2.5">
                  <font color="#4a4a4a">{review.reviewText}</font>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderRecentActivityItems = () => {
    const handleActNav = (userId) => {
      router.push(`/profile/${userId}`);
    };

    return recentActivityData.map((activity) => (
      <div
        key={activity.id}
        className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0"
      >
        <div className="flex flex-col relative shrink-0 box-border h-auto border m-5 border-solid border-neutral-400">
          {/* link to user profile page */}
          <div
            onClick={() => handleActNav(activity.userId)}
            className="cursor-pointer relative shrink-0 box-border h-auto my-2.5 font-bold"
          >
            {activity.foodieName}
          </div>
          <img
            loading="lazy"
            srcSet={activity.imageSrc}
            className="aspect-[2] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden my-2.5"
          />
          <div className="relative shrink-0 box-border h-auto my-5">
            {activity.reviewInfo}
          </div>
        </div>
      </div>
    ));
  };

  // no nav link here, need to discuss do we need this function
  const renderCategories = () => {
    return categoriesData.map((category) => (
      <div
        key={category.id}
        className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0"
      >
        <div className="flex flex-col relative shrink-0 box-border h-auto border ml-8 mr-5 my-5 border-solid border-neutral-400 font-bold">
          <img
            loading="lazy"
            srcSet={category.imageSrc}
            className="aspect-[1.1] object-cover object-top w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden mb-5"
          />
          <div className="relative shrink-0 box-border h-auto self-center mt-5">
            {category.name}
          </div>
        </div>
      </div>
    ));
  };

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
      
      currentUser: {JSON.stringify(currentUser)}
      <br />
      currentReview: {JSON.stringify(currentUser)}

      {currentUser && (
        <section className="flex flex-col relative shrink-0 box-border my-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
              <div className="relative shrink-0 box-border h-auto text-center text-3xl font-semibold tracking-wider mx-auto my-5 p-5">
                Your Recent Review
                <div className="total-reviews">Total: {recentReviewData.length}</div>
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
        Recent Activity
      </section>

      <section className="flex flex-col relative shrink-0 box-border mt-5 mx-16">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          {renderRecentActivityItems()}
        </div>
      </section>

      <section className="relative shrink-0 box-border h-auto text-center text-3xl font-semibold tracking-wider mx-auto my-5 p-5">
        Categories
      </section>

      <section className="flex flex-col relative shrink-0 box-border mx-16 my-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          {renderCategories()}
        </div>
      </section>
    </main>
  );
}

export default HomeComponent;
