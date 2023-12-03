'use client';

import { BrowserRouter } from "react-router-dom";
import AnalyticsSearch from "@/components/serena/search_analytics";
import { Provider } from "react-redux";
import store from '../../components/store';
import CurrentUser from "../../components/common/currentUser";

export default function Page () {
    return (
    <Provider store={store}>
      <CurrentUser>
        <BrowserRouter>
            <AnalyticsSearch />
        </BrowserRouter>
      </CurrentUser>
    </Provider>
    );

}