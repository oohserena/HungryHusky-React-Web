"use client";
import AdminView from "@/components/mia/admin_view";
import EditProfile from "@/components/mia/edit_profile";
import Profile from "@/components/mia/profile";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
      {/* <AdminView /> */}
      {/* <Profile /> */}
      <EditProfile />
    </BrowserRouter>
  );
}
