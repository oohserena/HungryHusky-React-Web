import React, { useState } from "react";
import "./index.css";

export default function WriteBody(props) {
  const [review, setReview] = useState("");

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    // Add your logic for submitting the review here
  };

  return (
    <main className="flex flex-col relative shrink-0 box-border bg-white min-h-[2000px]">
      <section className="flex flex-col relative shrink-0 box-border mt-8 pl-5 pr-12">
        <header className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 restaurant-title">
          <h1 className="relative shrink-0 box-border h-auto font-semibold text-4xl ml-36 mr-auto mt-5 max-sm:w-[500px] max-sm:ml-5 max-sm:mr-auto max-sm:pr-px sm:ml-2.5 sm:w-full">
            Din Tai Fung
          </h1>
        </header>
      </section>
      <div>
        <h4 className="relative restaurant-description max-sm:ml-2.5 max-sm:w-full">
          A few things to consider in your review: Food, Service, Ambiance
        </h4>
      </div>
      <section className="flex flex-col relative shrink-0 box-border mt-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
            <form>
              <textarea
                id="review-input"
                className="flex flex-col relative shrink-0 box-border border w-[800px] h-[250px] text-lg mt-5 mx-auto p-2.5 rounded border-solid border-stone-300 max-sm:w-[305px]"
                required={false}
                value={review}
                onChange={handleReviewChange}
              ></textarea>
            </form>
          </div>
        </div>
      </section>
      <section className="flex flex-col relative shrink-0 box-border mt-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
            <button
              className="relative shrink-0 box-border appearance-none bg-red-700 text-[white] rounded text-center cursor-pointer text-lg font-semibold ml-auto mr-52 mt-5 px-6 py-4 max-sm:mr-24"
              onClick={handleReviewSubmit}
            >
              Post Review
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
