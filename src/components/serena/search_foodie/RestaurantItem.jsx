import React from "react";

export default function RestaurantItem({ name, rating, imageSrc }) {
    // const handleFavoriteClick = () => {
    //   // Handle favorite button click
    // };
  
    // const handleDetailsClick = () => {
    //   // Handle details button click
    // };
  
    return (
      <div className="flex flex-col relative shrink-0 box-border border ml-4 mt-5 pr-px border-solid border-neutral-400">
        <div className="flex flex-col relative shrink-0 box-border mt-4 mb-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet={imageSrc}
                className="aspect-[0.9] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden max-w-[180px] mt-1.5 mx-auto"
              />
            </div>
            <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
              <h3 className="relative shrink-0 box-border h-auto text-3xl font-semibold ml-6 mr-auto mt-2.5 max-sm:ml-8">
                <ol start="1">
                  <li>{name}</li>
                </ol>
              </h3>
              <div className="relative shrink-0 box-border h-auto text-xl font-semibold ml-6 mr-auto mt-2.5 max-sm:ml-8">
                <div>Overall Rating: {rating}</div>
              </div>
              <div className="relative shrink-0 box-border h-auto text-xl font-semibold ml-6 mr-auto mt-5 max-sm:ml-8">
                <div>
                  Rating Distribution:{" "}
                  <span style={{ color: "#d0021b" }}>pay to unlock</span>
                </div>
              </div>
              <div className="relative shrink-0 box-border h-auto text-xl font-semibold ml-6 mr-auto mt-2.5 max-sm:ml-8">
                <div>
                  Views: <span style={{ color: "#d0021b" }}>pay to unlock</span>
                </div>
              </div>
              <div className="relative shrink-0 box-border h-auto text-xl font-semibold ml-6 mr-auto mt-2.5 max-sm:ml-8">
                <div>
                  Favorites:{" "}
                  <span style={{ color: "#d0021b" }}>pay to unlock</span>
                </div>
              </div>
              <div className="flex flex-col relative shrink-0 box-border mt-3.5 pl-36 max-sm:mt-8">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <button
                      className="relative shrink-0 box-border appearance-none bg-red-700 text-[white] rounded text-center cursor-pointer font-semibold text-lg ml-auto mt-20 px-6 py-4 max-sm:mr-14"
                    //   onClick={handleFavoriteClick}
                    >
                      Favorite
                    </button>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <button
                      className="relative shrink-0 box-border appearance-none bg-white text-neutral-600 rounded text-center cursor-pointer border font-semibold text-lg ml-16 mr-auto mt-20 px-6 py-4 border-solid border-neutral-400 max-sm:ml-1 max-sm:mt-5"
                    //   onClick={handleDetailsClick}
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