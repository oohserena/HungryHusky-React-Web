'use client';
import * as React from "react";

export default function NavigationBar(props) {
  const handleButtonClick = (label) => {
    console.log(`Button clicked: ${label}`);
    // Add your logic here
  };

  // const isLoggedIn = props.isLoggedIn;
  const isLoggedIn = true;

  return (
    <nav className="items-center bg-red-700 text-white flex justify-between h-10 px-8 px-5 py-0 max-md:flex max-sm:flex max-sm:flex-col max-sm:self-stretch max-sm:grow-0 max-sm:min-h-[auto] max-sm:items-stretch max-sm:h-auto">
      <ul className="flex list-none ml-auto max-sm:flex max-sm:flex-col max-sm:grow-0 max-sm:items-st max-sm:h-auto max-sm:mx-auto">
        <li className="text-white font-semibold pr-2.5 max-sm:mx-auto max-sm:pl-2.5">
          <button onClick={() => handleButtonClick("Home")} aria-label="Home">
            Home
          </button>
        </li>
        {isLoggedIn ? (
          <>
            <li className="text-white font-semibold pr-2.5 max-sm:mx-auto max-sm:pl-2.5">
              <button
                onClick={() => handleButtonClick("My Account")}
                aria-label="My Account"
              >
                My Account
              </button>
            </li>
            <li className="-white font-semibold px-2.5 max-sm:mx-auto">
              <button
                onClick={() => handleButtonClick("Logout")}
                aria-label="Logout"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li className="text-white font-semibold pr-2.5 max-sm:mx-auto max-sm:pl-2.5">
            <button onClick={() => handleButtonClick("Login")} aria-label="Login">
              Login
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};