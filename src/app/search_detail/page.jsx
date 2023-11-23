"use client";
import SearchDetail from "@/components/serena/search_detail";
import SearchNoResults from "@/components/serena/search_no_results";
import { BrowserRouter } from "react-router-dom";

export default function Page() {
  return <BrowserRouter><SearchDetail /></BrowserRouter>;
}