"use client";
import SearchDetail from "@/components/serena/search_detail";
import SearchNoResults from "@/components/serena/search_no_results";
import { BrowserRouter } from "react-router-dom";

export default function Page({ params, searchParams }) {
  return <BrowserRouter><div><h1>User Profile: {params.id}</h1></div><SearchDetail /></BrowserRouter>;
}
