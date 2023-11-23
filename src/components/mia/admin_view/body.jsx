'use client';
import React, { useState, useEffect } from 'react';

export default function Body() {
  const columns = ["UserId", "First Name", "Last Name", "Email"];
  const [rows, setRows] = useState([]);

  // useEffect(() => {
  //   // Fetch from API and update rows state
  //   fetch("YOUR_API_URL")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setRows(data))
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //       // Handle the error here. For example, set an error state to show an error message.
  //     });
  // }, []);

  // delete below when we have data available from APIa
  const t_rows = [
    ["Row 1, Col 1", "Row 1, Col 2", "Row 1, Col 3", "Row 1, Col 4"],
    ["Row 2, Col 1", "Row 2, Col 2", "Row 2, Col 3", "Row 2, Col 4"],
    ["Row 3, Col 1", "Row 3, Col 2", "Row 3, Col 3", "Row 3, Col 4"],
    ["Row 4, Col 1", "Row 4, Col 2", "Row 4, Col 3", "Row 4, Col 4"],
    ["Row 5, Col 1", "Row 5, Col 2", "Row 5, Col 3", "Row 5, Col 4"],
    ["Row 6, Col 1", "Row 6, Col 2", "Row 6, Col 3", "Row 6, Col 4"],
    ["Row 7, Col 1", "Row 7, Col 2", "Row 7, Col 3", "Row 7, Col 4"],
    ["Row 8, Col 1", "Row 8, Col 2", "Row 8, Col 3", "Row 8, Col 4"],
    ["Row 9, Col 1", "Row 9, Col 2", "Row 9, Col 3", "Row 9, Col 4"],
    ["Row 10, Col 1", "Row 10, Col 2", "Row 10, Col 3", "Row 10, Col 4"],
  ]
  useEffect(() => {
    setRows(t_rows);
  }, []);

  const handleRowClick = (userId) => {
    // Handle row click event
    console.log("Clicked on UserId:", userId);
  };

  return (
    <section className="flex flex-col relative shrink-0 box-border h-auto border grow-0 min-h-[auto] border-solid border-white">
      <header className="relative shrink-0 box-border h-auto text-xl mt-5 mx-5">
        <strong>
          <span className="text-2xl">
            <font color="#d0021b">
              <span className="text-3xl">Admin View</span>
            </font>
          </span>
        </strong>
      </header>
      <div className="relative shrink-0 box-border h-auto text-xl font-semibold italic mx-5 my-1.5">
        You are admin!&nbsp;
      </div>
      <div className="flex flex-col relative shrink-0 box-border m-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
            <div className="relative shrink-0 box-border h-auto m-2.5">
              <span
                style={{
                  color: "rgb(15, 15, 15)",
                  fontFamily:
                    'Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontSize: "16px",
                  whiteSpace: "preserve",
                }}
              >
                Here is the information for all users.
              </span>
            </div>
            <table>
              <thead>
                <tr className="bg-red-600 text-[white]">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="border border p-2 border-solid border-stone-300 border-b border-l border-t text-left"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="mr-auto">
                {rows.map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-stone-50" : "bg-white"} text-zinc-800`}
                    onClick={() => handleRowClick(row[0])}
                  >
                    {row.map((cell, index) => (
                      <td
                        key={index}
                        className="border border p-2 border-solid border-stone-300 border-b border-l border border-t"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};