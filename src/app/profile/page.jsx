"use client";
import Profile from "@/components/mia/profile";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../../components/store';
import CurrentUser from "../../components/common/currentUser";

export default function Page() {
  return (
    <Provider store={store}>
      <CurrentUser>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </CurrentUser>
    </Provider>
  );
}
