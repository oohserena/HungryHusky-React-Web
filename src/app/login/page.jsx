"use client";
import LogIn from "@/components/feifei/log_in";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../../components/store';
import CurrentUser from "../../components/common/currentUser";

export default function Page() {
  return (
    <Provider store={store}>
      <CurrentUser>
        <BrowserRouter>
          <LogIn />
        </BrowserRouter>
      </CurrentUser >
    </Provider>
  )
}
