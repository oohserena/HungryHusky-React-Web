"use client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeComponent from "@/components/feifei/home/home_content";
import HomeScreen from "@/components/feifei/home";
import { Provider } from "react-redux";
import store from '../components/store';
import CurrentUser from "../components/common/currentUser";

export default function Home() {
  return (
    <Provider store={store}>
      <CurrentUser>
        <BrowserRouter>
          <HomeScreen />
        </BrowserRouter>
      </CurrentUser>
    </Provider>
  );
}
