"use client";
import WriteReview from "@/components/serena/write_review";
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
          <WriteReview id={params}/>
        </BrowserRouter>
      </CurrentUser>
    </Provider>
  );
}    