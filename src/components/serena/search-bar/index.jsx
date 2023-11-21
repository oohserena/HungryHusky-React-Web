import React from "react";

export default function RestaurantSearchBar(props) {
  const handleSearch = () => {
    // Add your search logic here
  };

  return (
    <div className="flex flex-col relative shrink-0 box-border bg-white font-semibold">
      <div className="flex flex-col relative shrink-0 box-border mt-8 mb-20">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
            {/* <label htmlFor="restaurant-input">
              Restaurant Name */}
              <input
                type="text"
                id="restaurant-input"
                placeholder="Restaurant Name"
                className="flex flex-col relative shrink-0 box-border border text-xl min-h-[50px] ml-52 mt-5 p-2.5 rounded border-solid border-stone-300"
                required={false}
              />
            {/* </label> */}
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            {/* <label htmlFor="restaurant-zip-code">
              Zip Code */}
              <input
                type="text"
                id="restaurant-zip-code"
                placeholder="98104"
                className="flex flex-col relative shrink-0 box-border border text-xl min-h-[50px] mt-5 p-2.5 rounded border-solid border-stone-300"
                required={false}
              />
            {/* </label> */}
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <button
              className="relative shrink-0 box-border appearance-none bg-red-700 text-[white] rounded text-center cursor-pointer text-xl min-h-[50px] max-w-[300px] mr-52 mt-4 px-6 py-4 max-sm:ml-12"
              openLinkInNewTab={false}
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}