'use client';
import { BrowserRouter } from "react-router-dom";
import FoodieSearch from "@/components/serena/search_foodie";
import { Provider } from "react-redux";
import store from '../../components/store';
import CurrentUser from "../../components/common/currentUser";

export default function Page () {
    return (
        <Provider store={store}>
            <CurrentUser>
                <BrowserRouter>
                    <FoodieSearch />
                </BrowserRouter>
            </CurrentUser>
        </Provider>
    );
}