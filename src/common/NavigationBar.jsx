'use client';
 import * as React from "react";

 export default function NavigationBar(props) {
  // props represents the component that render the call
   const handleHomeClick = () => {
     // handle home button click
   };
 
   const handleLogoutClick = () => {
     // handle logout button click
   };
 
   return (
     <nav className="items-center bg-red-700 text-white flex justify-between h-10 px-8 px-5 py-0 max-md:flex max-sm:flex max-sm:flex-col max-sm:self-stretch max-sm:grow-0 max-sm:min-h-[auto] max-sm:items-stretch max-sm:h-auto">
       <ul className="flex list-none ml-auto max-sm:flex max-sm:flex-col max-sm:grow-0 max-sm:items-stretch max-sm:h-auto max-sm:mx-auto">
         <li className="text-white font-semibold pr-2.5 max-sm:mx-auto max-sm:pl-2.5">
           <button onClick={handleHomeClick} aria-label="Home">
             Home
           </button>
         </li>
         <li className="text-white font-semibold px-2.5 max-sm:mx-auto">
           <button onClick={handleLogoutClick} aria-label="Logout">
             Logout
           </button>
         </li>
       </ul>
     </nav>
   );
 };