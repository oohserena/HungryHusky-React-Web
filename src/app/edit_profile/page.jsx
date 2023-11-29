"use client";
import EditProfile from "@/components/mia/edit_profile";
import { useSearchParams } from "next/navigation";
import { BrowserRouter } from "react-router-dom";

export default function Page() {
  // return <BrowserRouter></BrowserRouter>;
  return <BrowserRouter><EditProfile /></BrowserRouter>;
}
