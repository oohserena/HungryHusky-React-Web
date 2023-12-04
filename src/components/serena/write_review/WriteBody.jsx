'use client';
import * as React from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import * as client from "../../client.js";
import { setCurrentUser } from "@/components/common/reducer";
import { useDispatch, useSelector } from "react-redux";

export default function WriteBody({restaurantId}) {
  const [review, setReview] = React.useState("");
  const router = useRouter();

  const { currentUser } = useSelector((state) => state.userReducer);
  const currentUserId = currentUser._id;

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handlePostReview = async () => {
    const actualRestaurantId = restaurantId.restaurantId;
    console.log("currentUser ID:", currentUser?._id);
    console.log(actualRestaurantId);
    console.log("Review content:", review);

    if (currentUser && currentUser._id && restaurantId && review) {
      try {
        const reviewData = {
          user_id: currentUserId,
          restaurant_id: actualRestaurantId,
          content: review,
        }
        await client.createReview(reviewData);
        router.push('/search_detail/' + actualRestaurantId);
      } catch (error) {
        console.error('Error posting review:', error);
      }
    } else {
      console.error('Missing information for review');
    }
  };

  const handleCancel = () => {
    router.push('/search_detail' + actualRestaurantId);
  };

  return (
    <main className="flex flex-col relative shrink-0 box-border bg-white min-h-[2000px]">
      <section className="flex flex-col relative shrink-0 box-border mt-8 pl-5 pr-12">
        <h1 className="relative shrink-0 box-border h-auto font-semibold text-4xl ml-44 mr-auto mt-5 max-sm:w-[500px] max-sm:ml-5 max-sm:mr-auto max-sm:pr-px">
          Din Tai Fung
        </h1>
      </section>
      <section className="flex flex-col relative shrink-0 box-border mt-5">
        <form className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
            <textarea
              placeholder="A few things to consider in your review: Food, Service, Ambiance"
              name="review-input"
              className="flex flex-col relative shrink-0 box-border border w-[800px] h-[250px] text-lg mt-5 mx-auto p-2.5 rounded border-solid border-stone-300 max-sm:w-[305px]"
              required={false}
              value={review}
              onChange={handleReviewChange}
            />
          </div>
        </form>
      </section>
      <section className="flex flex-col relative shrink-0 box-border mt-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[60%] max-md:w-full max-md:ml-0">
            <button
              className="relative shrink-0 box-border appearance-none bg-red-700 text-[white] rounded text-center cursor-pointer text-lg font-semibold max-w-[500px] ml-auto mt-5 px-8 py-4 max-sm:mr-24"
              onClick={handlePostReview}
            >
              Post Review
            </button>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <button
              className="relative shrink-0 box-border appearance-none bg-stone-200 text-black rounded text-center cursor-pointer text-lg max-w-[500px] ml-auto mr-52 mt-5 px-14 py-4 max-sm:mr-24"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}