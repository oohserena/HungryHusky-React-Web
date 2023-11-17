import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function EditForm(props) {
//   const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  const handleCancel = () => {
    // history.push("/new-page");
  };

  return (
    <form
      className="flex flex-col items-center justify-center relative shrink-0 box-border h-auto bg-white min-h-[311px] grow-0"
      onSubmit={handleSubmit}
    >
      <label htmlFor="firstName" className="mt-2.5">
        <span className="text-2xl pl-0">
          <b>First Name</b>
        </span>
        <br />
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Jane"
          className="border min-h-[40px] mt-2.5 border-solid border-neutral-400"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <label htmlFor="lastName" className="text-base mt-2.5">
        <span>
          <strong>
            <span className="text-2xl">Last Name</span>
          </strong>
        </span>
        <br />
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Doe"
          className="border min-h-[40px] mt-2.5 border-solid border-neutral-400"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <label htmlFor="address" className="text-base mt-2.5">
        <span>
          <strong>
            <span className="text-2xl">Address</span>
          </strong>
        </span>
        <br />
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Your new address"
          className="border min-h-[40px] mt-2.5 border-solid border-neutral-400"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <div className="flex flex-col relative shrink-0 box-border h-auto bg-white pb-8">
        <div className="flex flex-col relative shrink-0 box-border">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <button
                type="submit"
                className="relative shrink-0 box-border appearance-none bg-blue-500 text-[white] rounded text-center cursor-pointer text-xl font-semibold w-[200px] mt-5 mx-auto px-6 py-4"
              >
                Save
              </button>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <button
                type="button"
                className="relative shrink-0 box-border appearance-none bg-red-700 text-[white] rounded text-center cursor-pointer text-xl font-semibold w-[200px] mt-5 mx-auto px-6 py-4"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}