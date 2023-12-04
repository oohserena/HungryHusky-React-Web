'use client';
import { useRouter } from "next/navigation";
import * as React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "../client.js";

export default function NavigationBar(props) {
  const { currentUser } = useSelector((state) => state.userReducer);
  const router = useRouter();
  const dispatch = useDispatch();

  const signout = async() => {
    const status = await client.logout();
    dispatch(setCurrentUser(null));
    router.push('/');
  }

  const handleButtonClick = (label) => {
    if (label === "Home") {
      router.push('/');
    }

    if (label === "Sign Up") {
      router.push('/register');
    }

    if (label === "Logout") {
      signout();
    }

    if (label === "Login") {
      router.push('/login');
    }

    if (label === "My Account") {
      router.push('/profile');
    }
  };

  // const isLoggedIn = props.isLoggedIn;
  //const isLoggedIn = true;

  return (
    <nav className="items-center bg-red-700 text-white flex justify-between h-10 px-8 px-5 py-0 max-md:flex max-sm:flex max-sm:flex-col max-sm:self-stretch max-sm:grow-0 max-sm:min-h-[auto] max-sm:items-stretch max-sm:h-auto">
      <ul className="flex list-none ml-auto max-sm:flex max-sm:flex-col max-sm:grow-0 max-sm:items-st max-sm:h-auto max-sm:mx-auto">
        <li className="text-white font-semibold pr-2.5 max-sm:mx-auto max-sm:pl-2.5">
          <button onClick={() => handleButtonClick("Home")} aria-label="Home">
            Home
          </button>
        </li>
        {/* {JSON.stringify(currentUser)} */}
        { currentUser ? (
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
          <>
            <li className="text-white font-semibold pr-2.5 max-sm:mx-auto max-sm:pl-2.5">
              <button onClick={() => handleButtonClick("Login")} aria-label="Login">
                Login
              </button>
            </li>
            <li className="text-white font-semibold pr-2.5 max-sm:mx-auto max-sm:pl-2.5">
              <button onClick={() => handleButtonClick("Sign Up")} aria-label="Login">
                Sign Up
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};