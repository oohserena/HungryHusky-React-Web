"use client";
import SearchDetail from "@/components/serena/search_detail";
import { BrowserRouter } from "react-router-dom";
import { useRouter } from 'next/navigation';
import { Provider } from "react-redux";
import store from '../../components/store';
import CurrentUser from "../../components/common/currentUser";

export default function Page() {
  
  return (
    <Provider store={store}>
      <CurrentUser>
        <BrowserRouter>
          <SearchDetail />
        </BrowserRouter>
      </CurrentUser>
    </Provider>
  )
    
}