"use client";
import SearchDetail from "@/components/serena/search_detail";
import SearchNoResults from "@/components/serena/search_no_results";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../../../components/store';
import CurrentUser from "../../../components/common/currentUser";

export default function Page({ params, searchParams }) {
  return (
    <Provider store={store}>
      <CurrentUser>
        <BrowserRouter><div><h1>User Profile: {params.id}</h1></div><SearchDetail /></BrowserRouter>
      </CurrentUser>
    </Provider>
  )
}
