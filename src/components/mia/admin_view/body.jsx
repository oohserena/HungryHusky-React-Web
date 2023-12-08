"use client";
import React, { useState, useEffect } from "react";
import * as client from "../../client.js";
import { FaTrash } from "react-icons/fa";

export default function Body() {
  const columns = ["UserId", "First Name", "Last Name", "Email"];

  // const [role, setRole] = useState("USER"); // ["Foodie", "Admin", "Business Analyst"]
  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  //   role: "Foodie",
  // });

  const [rows, setRows] = useState([]);
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    const formattedRows = users.map((user) => {
      return [user._id, user.firstName, user.lastName, user.email];
    });
    setRows(formattedRows);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRowClick = (userId) => {
    // Handle row click event
    console.log("Clicked on UserId:", userId);
  };

  const handleDeleteClick = async (userId) => {
    try {
      const response = await client.deleteUser(userId);

      if (response.status === 200) {
        const updatedRows = rows.filter((row) => row[0] !== userId);
        setRows(updatedRows);
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  // const handleEditClick = (index) => {
  //   const updatedRows = [...rows];
  //   updatedRows[index][1] = "Edited";
  //   setRows(updatedRows);
  // };

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
                  <th
                    key={columns.length}
                    className="border border p-2 border-solid border-stone-300 border-b border-l border-t text-left"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="mr-auto">
                {rows.map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-stone-50" : "bg-white"
                    } text-zinc-800`}
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
                    <td className="border border p-2 border-solid border-stone-300 border-b border-l border border-t">
                      <button
                        onClick={() => handleDeleteClick(row[0])}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>

                      {/* <button
                        onClick={() => handleEditClick(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaEdit />
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
