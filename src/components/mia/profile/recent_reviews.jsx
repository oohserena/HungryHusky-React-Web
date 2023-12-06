import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { IoIosRestaurant } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

export default function ReviewComponent(props) {
  const [reviews, setReviews] = useState([]);
  const { currentUser } = useSelector((state) => state.userReducer);
  console.log("currentUser", currentUser);
  const currentUserId = currentUser?._id;
  const params = useParams();
  const userId = params.id;

  const fetchReviews = async () => {
    try {
      let response;
      if (currentUserId === undefined) {
        response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/${userId}/review`
        );
      } else {
        response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/${currentUserId}/review`
        );
      }

      const data = await response.json();
      const reviews = data.map((review) => {
        return {
          id: review._id,
          restaurant_id: review.restaurant_id,
          review: review.content,
          date: review.createdAt,
          restaurantName: fetchRestaurantName(review.restaurant_id),
        };
      });

      setReviews(reviews);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRestaurantName = async (restaurantId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/businesses/${restaurantId}`
      );
      if (response.status !== 200) {
        return "Restaruant AAA";
      } else {
        const data = await response.json();
        return data.name;
      }
    } catch (error) {
      console.error(error);
      return "Restaruant AAA";
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDeleteReview = async (index) => {
    try {
      // Make API call to delete the review
      const reviewId = reviews[index].id;
      if (!reviewId) {
        console.error("Review ID not found");
        return;
      }
      console.log("reviewId", reviewId);

      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/reviews/${reviewId}`,
        {
          method: "DELETE",
        }
      );
      console.log("Review deleted");
      // Update the state
      const newReviews = [...reviews];
      newReviews.splice(index, 1);
      setReviews(newReviews);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article className="flex flex-col relative shrink-0 box-border h-auto bg-white pb-8">
      <header className="relative shrink-0 box-border h-auto ml-10 mt-5">
        <h2 className="text-2xl text-center">
          <font color="#d0021b">
            <strong>
              <span className="text-2xl text-center">Recent Reviews</span>
            </strong>
          </font>
        </h2>
      </header>
      {reviews.map((review, index) => (
        <section
          key={index}
          className="flex flex-col relative shrink-0 box-border ml-5 mt-5"
        >
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
              <div className="flex items-center box-border h-auto">
                <IoIosRestaurant className="text-3xl text-green-700 mr-2" />
                <span
                  className="text-xl font-semibold text-green-700"
                  style={{ lineHeight: "2.5rem" }}
                >
                  {review.restaurantName}
                </span>
              </div>

              <div className="relative shrink-0 box-border h-auto ml-5 mt-5">
                <p
                  style={{
                    color: "rgb(51, 51, 51)",
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  {review.review}
                </p>
              </div>

              {currentUserId && userId === undefined && (
                <button
                  className="relative shrink-0 box-border appearance-none bg-red-700 text-[white] rounded text-center cursor-pointer text-xl mt-5 mx-auto px-6 py-4 flex items-center justify-center"
                  onClick={() => handleDeleteReview(index)}
                >
                  <FaTrash color="white" className="mr-2" />
                  Delete
                </button>
              )}
            </div>
          </div>
        </section>
      ))}
    </article>
  );
}
