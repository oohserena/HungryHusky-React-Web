"use client";
import Profile from "@/components/mia/profile";


import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../components/store";
import CurrentUser from "../../../components/common/currentUser";

export default function Page({ params, searchParams }) {

  return (
    <Provider store={store}>
      <CurrentUser>
        <BrowserRouter>
          <div>
            <h1>User Profile: {params.id}</h1>
          </div>
          <Profile />
        </BrowserRouter>
      </CurrentUser>
    </Provider>
  );
}
