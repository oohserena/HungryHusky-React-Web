import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomeComponent(props) {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("API_URL");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    // handle button click event here
  };

  const renderColumns = () => {
    return data.map((item, i) => (
      <div
        key={i}
        className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
      >
        <div className="flex flex-col relative shrink-0 box-border h-auto border m-5 pb-8 border-solid border-neutral-400">
          <div className="flex flex-col relative shrink-0 box-border my-2.5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="relative shrink-0 box-border h-auto ml-1.5 my-2.5">
                  <font color="#4a4a4a">
                    <b>{item.restaurantName}</b>
                  </font>
                </div>
                <img
                  loading="lazy"
                  srcSet={item.imageSrc}
                  className="aspect-[1.25] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden ml-1.5 mb-2.5"
                />
              </div>
              <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
                <div className="relative shrink-0 box-border h-auto mt-2.5">
                  <font color="#4a4a4a">{item.review}</font>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <main className="flex flex-col relative shrink-0 box-border bg-white min-h-[auto]">
      <section className="relative shrink-0 box-border flex flex-col items-stretch min-h-[472px] bg-[url(https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fe85b95ec3135499f97c84d225197ea35)] bg-cover bg-no-repeat bg-center mb-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
            <div className="flex flex-col relative shrink-0 box-border h-auto max-w-[695px] min-h-[170px] mt-36 mb-24 mx-auto pb-1.5">
              <div className="flex flex relative shrink-0 box-border min-[auto] mx-auto my-2.5 max-md:w-auto max-md:h-auto max-md:min-h-[auto] max-sm:w-auto max-sm:h-auto max-sm:min-h-[auto] max-sm:mx-auto">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
                  <form className="w-full max-w-xs mx-auto space-y-5"> 
                      <input
                        type="text"
                        placeholder="Restaurant Name"
                        name="search-input-restaurants"
                        className="text-xl p-2.5 rounded border border-solid border-stone-300 w-full"
                        required={false}
                      />
                      <input
                        type="text"
                        placeholder="Seattle, WA 98104"
                        name="search-input-zipcode"
                        className="text-xl p-2.5 rounded border border-solid border-stone-300 w-full" 
                        required={false}
                      />
                      <Link to="/search" className="w-full block">
                        <button
                          type="submit"
                          className="text-white bg-red-700 text-xl p-2.5 rounded border border-solid border-stone-300 w-full max-w-xs"
                          openLinkInNewTab={true}
                          onClick={handleButtonClick}
                        >
                          Search
                        </button>
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isLoggedIn && (
        <section className="flex flex-col relative shrink-0 box-border my-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
              <div className="relative shrink-0 box-border h-auto text-center text-3xl font-semibold tracking-wider mx-auto my-5 p-5">
                Your Recent Review
              </div>
              <div className="relative shrink-0 box-border flex-col flex mt-5 mx-6">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  {renderColumns()}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="relative shrink-0 box-border h-auto text-center text-3xl font-semibold tracking-wider mx-auto my-5 p-5">
        Recent Activity
      </section>
      {isLoggedIn && (
        <section className=" flex-col relative shrink-0 box-border mt-5 mx-16">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            {/* Render recent activity items */}
          </div>
        </section>
      )}
      <section className="relative shrink-0 box-border h-auto text-center text-3xl font-semibold tracking-wider mx-auto my-5 p-5">
        <p>Categories</p>
      </section>
      <section className="flex flex-col relative shrink-0 box-border mx-16 my-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          {/* Render categories */}
        </div>
      </section>
    </main>
  );
}

export default HomeComponent;
