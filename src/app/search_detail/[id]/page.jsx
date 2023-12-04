"use client";
import SearchDetail from "@/components/serena/search_detail";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../../../components/store';
import CurrentUser from "../../../components/common/currentUser";


export default function Page({ params }) {
  console.log(params)
  return (
    <Provider store={store}>
      <CurrentUser>
        <BrowserRouter>
          <SearchDetail id={params.id}/>
        </BrowserRouter>
      </CurrentUser>
    </Provider>
  );
}
