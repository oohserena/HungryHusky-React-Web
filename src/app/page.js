"use client";
import LogIn from "@/components/feifei/log_in";
import Register from "@/components/feifei/ register";
import HomeSrceen from "@/components/feifei/home";
import AdminView from "@/components/mia/admin_view";
import EditProfile from "@/components/mia/edit_profile";
import Profile from "@/components/mia/profile";
import FoodieSearch from "@/components/serena/search-foodie";
import SearchDetail from "@/components/serena/search-detail";
import AnalyticsSearch from "@/components/serena/search-analytics";
import WriteReview from "@/components/serena/write-review";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
      <HomeSrceen />
   </BrowserRouter>
  );
}
