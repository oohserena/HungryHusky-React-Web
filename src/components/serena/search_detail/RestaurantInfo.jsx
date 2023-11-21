

import React from "react";
import "./index.css";

export default function RestaurantInfo(props) {
  const handleButtonClick = () => {
    // handle button click event here
  };

  return (
    <section className="flex flex-col relative shrink-0 box-border bg-white">
      <header className="flex flex-col relative shrink-0 box-border mt-2.5 pl-5 pr-52">
      <div className="flex items-center">
        <h1 className="relative title-margin font-semibold text-4xl mt-5 max-sm:w-[500px] max-sm:mx-auto">
          Din Tai Fung
        </h1>
        <div className="flex-shrink-0 box-border image-margin h-[150px] w-[500px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F0341e66523c347e38d301d6bd0abaa51?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F0341e66523c347e38d301d6bd0abaa51?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F0341e66523c347e38d301d6bd0abaa51?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F0341e66523c347e38d301d6bd0abaa51?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F0341e66523c347e38d301d6bd0abaa51?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F0341e66523c347e38d301d6bd0abaa51?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F0341e66523c347e38d301d6bd0abaa51?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F0341e66523c347e38d301d6bd0abaa51"className="aspect-[1.51] object-cover object-center w-full shrink-0 box-border min-w-[20px] overflow-hidden mt-5"
              // className="object-cover w-500 h-50 shrink-0 box-border min-w-[20px] overflow-hidden mt-5"
            />
        </div>
      </div>
        <div className="flex flex-col relative shrink-0 box-border h-[30px] w-[600px] mt-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <p className="relative shrink-0 box-border text-lg font-semibold ml-36 max-sm:ml-2.5 max-sm:mr-auto">
                Rating: 4.2
              </p>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <p className="relative shrink-0 box-border h-auto text-lg font-semibold -ml-0.5 max-sm:ml-1.5 max-sm:mr-auto max-sm:mt-2.5">
                (2,169 reviews)
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative shrink-0 box-border w-[500px] mr-auto mt-2.5 pl-5 max-sm:w-[357px] max-sm:mr-9 max-sm:mt-9 max-sm:pr-36">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
              <button
                className="relative shrink-0 box-border appearance-none bg-red-700 text-[white] rounded text-center cursor-pointer text-lg font-semibold w-[204px] mt-5 mx-auto px-6 py-4 max-sm:w-[337px]"
                onClick={handleButtonClick}
              >
                Write a review
              </button>
            </div>
          </div>
        </div>
      </header>
     
    </section>
  );
}