'use client';
 import * as React from "react";

 export default function Body(props) { 
   const renderTableRows = () => {
     const rows = [];
 
     for (let i = 1; i <= 10; i++) {
       const rowColor = i % 2 === 0 ? "bg-white" : "bg-stone-50";
       const rowData = [];
 
       for (let j = 1; j <= 4; j++) {
         rowData.push(
           <td
             key={`row-${i}-col-${j}`}
             className="border border p-2 border-solid border-stone-300 border-b border-l border-r border-t"
           >
             Row {i}, Col {j}
           </td>
         );
       }
 
       rows.push(
         <tr key={`row-${i}`} className={`text-zinc-800 ${rowColor}`}>
           {rowData}
         </tr>
       );
     }
 
     return rows;
   };
 
   return (
     <main className="flex flex-col relative shrink-0 box-border border pt-12 pb-24 px-8">
       <header className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
         <h1 className="text-3xl text-red-600">
           <strong>Admin View</strong>
         </h1>
         <p className="text-xl font-semibold italic my-1.5">You are admin!</p>
       </header>
       <section className="flex flex-col relative shrink-0 box-border m-5">
         <p className="text-base m-2.5">Here is the information for all users.</p>
         <table className="flex flex-col relative shrink-0 box-border w-auto items-stretch mr-auto my-auto border-collapse">
           <thead className="flex flex-col text-base items-stretch w-auto self-stretch">
             <tr className="bg-red-600 text-white flex flex-row justify-start overflow-auto">
               <th className="border border p-2 border-solid border-stone-300 border-b border-l border-r border-t">
                 UserId
               </th>
               <th className="border border p-2 border-solid border-stone-300 border-b border-l border-r border-t">
                 First Name
               </th>
               <th className="border border p-2 border-solid border-stone-300 border-b border-l border-r border-t">
                 Last Name
               </th>
               <th className="border border p-2 border-solid border-stone-300 border-b border-l border-r border-t">
                 Email
               </th>
             </tr>
           </thead>
           <tbody className="mr-auto">{renderTableRows()}</tbody>
         </table>
       </section>
       <aside className="flex flex-col relative shrink-0 box-border ml-5 max-md:w-full max-md:ml-0">
         <div className="relative shrink-0 box-border mt-5">
           <h2>Website Name here</h2>
         </div>
         <div className="relative shrink-0 box-border mt-5">
           <p>Or add other info/function for admin</p>
         </div>
       </aside>
     </main>
   );
 };