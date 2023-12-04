import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ReviewComponent(props) {
  const [reviews, setReviews] = useState([]);
  const { currentUser } = useSelector((state) => state.userReducer);
  console.log("currentUser", currentUser);
  const currentUserId = currentUser._id;

  const fetchReviews = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/${currentUserId}/review`);
      const data = await response.json();
      console.log("data", data);
      const reviews = data.map(review => {
        return {
          id: review._id,
          restaurant_id: review.restaurant_id,
          review: review.content,
          date: review.createdAt,
          }
      });
      console.log("reviews", reviews);
      setReviews(reviews);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("in useEffect fetchReviews");
    fetchReviews();
  }, []);

  const handleDeleteReview = async (index) => {
    try {
      const updatedReviews = [...reviews];
      updatedReviews.splice(index, 1);
      setReviews(updatedReviews);
      // Make API call to delete the review
      // await fetch(`https://api.example.com/reviews/${review.id}`, {
      //   method: "DELETE",
      // });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article className="flex flex-col relative shrink-0 box-border h-auto bg-white pb-8">
      <header className="relative shrink-0 box-border h-auto ml-10 mt-5">
        <h2>
          <span className="text-2xl">
            <font color="#d0021b">
              <span className="text-3xl">Recent Reviews&nbsp;</span>
            </font>
          </span>
        </h2>
      </header>
      {reviews.map((review, index) => (
        <section key={index} className="flex flex-col relative shrink-0 box-border ml-5 mt-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
              <header className="relative shrink-0 box-border h-auto ml-5 mt-5">
                <h3>{review.restaurantName}</h3>
              </header>
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
           
              <button
                className="relative shrink-0 box-border appearance-none bg-red-700 text-[white] rounded text-center cursor-pointer text-xl mt-5 mx-auto px-6 py-4"
                onClick={() => handleDeleteReview(index)}
              >
                Delete
              </button>
            </div>
          </div>
        </section>
      ))}
    </article>
  );
}