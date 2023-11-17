'use client';
import * as React from "react";

export default function Body(props) {
  const columns = ["UserId", "First Name", "Last Name", "Email"];
  const rows = [
    ["Row 1, Col 1", "Row 1, Col 2", "Row 1, Col 3", "Row 1, Col 4"],
    ["Row 2, Col 1", "Row 2, Col 2", "Row 2, Col 3", "Row 2, Col 4"],
    ["Row 3, Col 1", "Row 3, Col 2", "Row 3, Col 3", "Row 3, Col 4"],
    ["Row 4, Col 1", "Row 4, Col 2", "Row 4, Col 3", "Row 4, Col 4"],
    ["Row 5, Col 1", "Row 5, Col 2", "Row 5, Col 3", "Row 5, Col 4"],
    ["Row 6, Col 1", "Row 6, Col 2", "Row 6, Col 3", "Row 6, Col 4"],
    ["Row 7, Col 1", "Row 7, Col 2", "Row 7, Col 3", "Row 7, Col 4"],
    ["Row 8, Col 1", "Row 8, Col 2", "Row 8, Col 3", "Row 8, Col 4"],
  ];

  const handleCellClick = (rowIndex, columnIndex) => {
    console.log(`Clicked on cell at row ${rowIndex}, column ${columnIndex}`);
    // Add your logic here for handling the cell click
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
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="border border p-2 border-solid border-stone-300 border-b border-l border-r border-t"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="mr-auto">
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-stone-50 text-zinc-800" : "bg-white text-zinc-800"}
              >
                {row.map((cell, columnIndex) => (
                  <td
                    key={columnIndex}
                    className="border border p-2 border-solid border-stone-300 border-b border-l border-r-t"
                    onClick={() => handleCellClick(rowIndex, columnIndex)}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};