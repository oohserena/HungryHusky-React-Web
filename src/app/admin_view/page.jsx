"use client";
import AdminView from "@/components/mia/admin_view";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../../components/store';
import CurrentUser from "../../components/common/currentUser";

export default function Page() {
  return (
    <Provider store={store}>
      <CurrentUser>
        <BrowserRouter><AdminView /></BrowserRouter>
      </CurrentUser>
    </Provider>
  )
}
