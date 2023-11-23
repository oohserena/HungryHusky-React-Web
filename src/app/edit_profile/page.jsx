"use client";
import LogIn from "@/components/feifei/log_in";
import AdminView from "@/components/mia/admin_view";
import EditProfile from "@/components/mia/edit_profile";
import { BrowserRouter } from "react-router-dom";

export default function Page() {
  return <BrowserRouter><EditProfile /></BrowserRouter>;
}
