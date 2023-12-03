"use client";
import SearchNoResults from "@/components/serena/search_no_results";
import { BrowserRouter } from "react-router-dom";
import store from '../../components/store';
import CurrentUser from "../../components/common/currentUser";

export default function Page() {
  return (
    <Provider store={store}>
      <CurrentUser>
        <BrowserRouter>
          <SearchNoResults />
        </BrowserRouter>
      </CurrentUser>
    </Provider>
  );
}
