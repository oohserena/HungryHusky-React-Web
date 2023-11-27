"use client";
import Profile from "@/components/mia/profile";
import { useRouter } from "next/navigation";


import { BrowserRouter } from "react-router-dom";

export default function Page({ params, searchParams }) {
  return <BrowserRouter><div><h1>User Profile: {params.id}</h1></div><Profile /></BrowserRouter>;
}
