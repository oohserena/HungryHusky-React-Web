import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as client from "../../client.js";
import { useEffect } from "react";

export default function EditForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, setUser] = useState({});
  const router = useRouter();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const fetchUser = async () => {
    try {
      const user = await client.findUserById(id);
      // const currentUser = await client.findCurrentUser(id);
      // if (currentUser.id !== user.id) router.push('/profile');
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setUser(user);
    } catch (err) {
      router.push("/profile");
    }
  };

  const handleCancel = () => {
    router.push("/profile");
  };

  const handleSave = async () => {
    event.preventDefault();
    user.firstName = firstName;
    user.lastName = lastName;
    await client.updateUser(user);
    router.push("/profile");
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form className="flex flex-col items-center justify-center relative shrink-0 box-border h-auto bg-white min-h-[311px] grow-0">
      <label htmlFor="firstName" className="mt-2.5">
        <span className="text-2xl pl-0">
          <b>First Name</b>
        </span>
        <br />
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          className="border min-h-[40px] mt-2.5 border-solid border-neutral-400 text-center"
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
          placeholder="Last Name"
          className="border min-h-[40px] mt-2.5 border-solid border-neutral-400 text-center"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <div className="flex flex-col relative shrink-0 box-border h-auto bg-white pb-8">
        <div className="flex flex-col relative shrink-0 box-border">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <button
                type="submit"
                onClick={handleSave}
                className="relative shrink-0 box-border appearance-none bg-green-700 text-[white] rounded text-center cursor-pointer text-xl font-semibold w-[200px] mt-5 mx-auto px-6 py-4"
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
