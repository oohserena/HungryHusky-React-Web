"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileComponent(props) {
  const [rows, setRows] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // Fetch data from external API
    // fetch("https://api.example.com/restaurants")
    //   .then((response) => response.json())
    //   .then((data) => setRows(data));

    const rows = [
        {
            id: 1,
            name: "Restaurant Name",
            image: "https://unsplash.com/photos/a-row-of-chairs-sitting-next-to-each-other-on-top-of-a-wooden-floor-rNsA91ci5fc",
        },
        {
            id: 2,
            name: "Restaurant Name",
            image: "https://unsplash.com/photos/a-row-of-chairs-sitting-next-to-each-other-on-top-of-a-wooden-floor-rNsA91ci5fc",
        },
    ];
    setRows(rows);

  }, []);

  useEffect(() => {
    // Check if user admin and logged in
    // Replace the condition with your own logic
    setIsAdmin(true);
    setIsLoggedIn(true);
  }, []);

  return (
    <section className="flex flex-col relative shrink-0 box-border bg-white pt-12 pb-24 px-8 border-solid border-neutral-400">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <header className="flex flex-col relative shrink-0 box-border h-auto border grow-0 min-h-[500px] border-solid border-neutral-400">
            <h1 className="shrink-0 box-border h-auto text-xl ml-5 mt-5">
              <strong>
                <span className="text-2xl">
                  <font color="#d0021b">
                    <span className="text-3xl">Profile</span>
                  </font>
                </span>
              </strong>
            </h1>
            {isAdmin && isLoggedIn && (
              <div className="flex flex-col relative shrink-0 box-border h-[200px] mt-5">
                <p className="relative shrink-0 box-border h-auto text-xl font-semibold ml-5 mt-5">
                  You are admin!&nbsp;
                </p>
                <Link
                  to="/admin-info"
                  className="relative shrink-0 box-border appearance-none bg-blue-500 text-[white] rounded text-center cursor-pointer text-xl ml-5 mr-auto mt-5 px-6 py-4"
                >
                  Admin Info
                </Link>
              </div>
            )}
            {isLoggedIn && (
              <>
                <h2 className="relative shrink-0 box-border h-auto text-3xl font-black mt-36 mb-auto mx-auto">
                  Elon Musk
                </h2>
                <p className="relative shrink-0 box-border h-auto text-xl font-semibold mt-8 mb-auto mx-auto">
                  email: elonmusk@gmail.com <br />
                </p>
                <Link
                  to="/edit-profile"
                  className="relative shrink-0 box-border appearance-none bg-red-700 text-[white] rounded text-center cursor-pointer text-xl border mt-12 mb-52 mx-auto px-6 py-4 border-solid border-white"
                >
                  Edit profile
                </Link>
              </>
            )}
          </header>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative shrink-0 box-border h-auto grow-0 max-sm:h-auto max-sm:grow-0">
            <h1 className="relative shrink-0 box-border h-auto text-xl text-black mt-5 mx-auto">
              <strong>
                <span className="text-2xl">Favorite Restaurants</span>
              </strong>
            </h1>
            {rows.map((row, index) => (
              <div className="flex flex-col relative shrink-0 box-border mt-5" key={index}>
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
                    <Link
                      to={`/restaurant/${row.id}`}
                      className="relative shrink-0 box-border h-auto text-xl mt-5"
                    >
                      {row.name} <br />
                    </Link>
                    <img
                      loading="lazy"
                      src={row.image}
                      className={`aspect-[${row.aspectRatio}] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden max-w-[600px] mt-5`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};