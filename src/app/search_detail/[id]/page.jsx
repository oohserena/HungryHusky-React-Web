"use client";
import SearchDetail from "@/components/serena/search_detail";
import { BrowserRouter } from "react-router-dom";

export default function Page(params) {
  console.log(params)
  return (  
    <BrowserRouter>
      <SearchDetail id={params.params.id}/>
    </BrowserRouter>
  ) 
}
