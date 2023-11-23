"use client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeComponent from "@/components/feifei/home/home_content";
import HomeScreen from "@/components/feifei/home";

export default function Home() {
  return (
    <BrowserRouter>
      <HomeScreen />
    </BrowserRouter>
  );
}
