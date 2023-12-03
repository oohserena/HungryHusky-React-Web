"use client";
import EditProfile from "@/components/mia/edit_profile";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../../components/store';
import CurrentUser from "../../components/common/currentUser";

export default function Page() {
  // return <BrowserRouter></BrowserRouter>;
  return (
    <Provider store={store}>
      <CurrentUser>
        <BrowserRouter>
          <EditProfile />
        </BrowserRouter>
      </CurrentUser>
    </Provider>
  );
}
