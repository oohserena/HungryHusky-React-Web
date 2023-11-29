"use client";
import LogIn from "@/components/feifei/log_in";
import Register from "@/components/feifei/register";
import HomeSrceen from "@/components/feifei/home";
import AdminView from "@/components/mia/admin_view";
import EditProfile from "@/components/mia/edit_profile";
import Profile from "@/components/mia/profile";
import FoodieSearch from "@/components/serena/search_foodie";
import SearchDetail from "@/components/serena/search_detail";
import AnalyticsSearch from "@/components/serena/search_analytics";
import WriteReview from "@/components/serena/write_review";
import SearchNoResults from "@/components/serena/search_no_results";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import HomeComponent from "@/components/feifei/home/home_content";


export default function Home() {

  return (
   
      <BrowserRouter>
        <HomeSrceen />
      </BrowserRouter>
 
  );
}
