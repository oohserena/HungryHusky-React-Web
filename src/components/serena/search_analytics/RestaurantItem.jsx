
'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';


export default function RestaurantItem() {
  const [isFavorite, setIsFavorite] = useState(false);
    const router = useRouter();
    const handleFavoriteClick = () => {
      setIsFavorite(!isFavorite);
    };
  
    const handleDetails = () => {
      router.push('/search_detail');
    };
  
    return (
      <article className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative shrink-0 box-border mt-5 max-sm:h-auto max-sm:grow">
            <div className="flex flex-col relative shrink-0 box-border border ml-4 mt-5 pr-px border-solid border-neutral-400">
              <div className="flex flex-col relative shrink-0 box-border mt-4 mb-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2F25434946558e46c4abd1b38983c2af19"className="aspect-[0.9] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden max-w-[180px] mt-1.5 mx-auto max-sm:mr-auto"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
                    <h2 className="relative shrink-0 box-border h-auto text-3xl font-semibold ml-6 mr-auto mt-2.5 max-sm:ml-8">
                      <ol start="1">
                        <li>Ding Tai Fung</li>
                      </ol>
                    </h2>
                    <div className="flex flex-col relative shrink-0 box-border mt-2.5">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
                          <h3 className="relative shrink-0 box-border h-auto text-2xl font-semibold ml-6 mt-5">
                            Overall Rating: 4 stars
                          </h3>
                          <div className="flex flex-col relative shrink-0 box-border border mt-5 border-none">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                <div className="relative shrink-0 box-border h-auto font-semibold text-xl text-center ml-8 mt-5">
                                  Rating Distribution
                                </div>
                                <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-red-700 text-center ml-8 mt-5">
                                  5 stars:&nbsp; 3,000&nbsp;
                                </div>
                                <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-orange-500 text-center ml-8 mt-5">
                                  4 stars:&nbsp; 2000
                                </div>
                                <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-amber-500 text-center ml-8 mt-5">
                                  3 stars:&nbsp; 1000
                                </div>
                                <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-yellow-400 text-center ml-8 mt-5">
                                  2 stars:&nbsp; 500
                                </div>
                                <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-lime-500 text-center ml-8 mt-5">
                                  1 stars:&nbsp; 100
                                </div>
                              </div>
                              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-center mt-5">
                                  Views
                                </div>
                                <div className="relative shrink-0 box-border h-auto text-center text-3xl text-red-700 font-semibold mt-5">
                                  8,000
                                </div>
                              </div>
                              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0" >
                                <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-center mt-5">
                                  Favorites
                                </div>
                                <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-center mt-5">
                                  Foodies:{" "}
                                  <font color="#9013fe">
                                    <b>360</b>
                                  </font>
                                </div>
                                <div className="relative shrink-0 box-border h-auto text-xl font-semibold text-center mt-5">
                                  Analytics:{" "}
                                  <font color="#4a90e2">
                                    <b>590</b>
                                  </font>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col relative shrink-0 box-border mt-3.5 pl-36 max-sm:mt-8">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <button className={`relative shrink-0 box-border appearance-none font-semibold text-lg mt-20 px-6 py-4 max-sm:mr-14 ${
                        isFavorite
                          ? 'bg-white text-neutral-600 border-solid border-neutral-200'
                          : 'bg-red-700 text-white'
                      }`}
                      style={{ width: '204px' }}
                      onClick={handleFavoriteClick}
                     >
                        {isFavorite ? 'Unfavorite' : 'Favorite'}
                  </button>
                    </div>
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <button
                        className="relative shrink-0 box-border appearance-none bg-white text-neutral-600 rounded text-center cursor-pointer border font-semibold text-lg ml-16 mr-auto mt-20 px-6 py-4 border-solid border-neutral-400 max-sm:ml-1 max-sm:mt-5"
                        onClick={handleDetails}
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
      </article>
    );
  }