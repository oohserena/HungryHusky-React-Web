"use client";
import SearchDetail from "@/components/serena/search_detail";
import { BrowserRouter } from "react-router-dom";
import { useRouter } from 'next/navigation';

export default function Page() {
  
  return (
      <BrowserRouter>
        <SearchDetail />
      </BrowserRouter>
  )
    
}