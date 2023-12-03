import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as client from "../../client.js";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../common/reducer.js";

function RegisterForm(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    businessAnalyst: false,
    foodie: false,
  });

  const columns = [
    {
      label: "First Name",
      id: "firstName",
      placeholder: "First Name",
      name: "FirstName",
    },
    {
      label: "Last Name",
      id: "lastName",
      placeholder: "Last Name",
      name: "LastName",
    },
    {
      label: "Email",
      id: "email",
      placeholder: "Email",
      name: "email",
    },
    {
      label: "Password",
      id: "password",
      placeholder: "Password",
      name: "Password",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "FirstName") {
      setFormData((prevData) => ({
        ...prevData,
        firstName: value,
      }));
    } else if (name === "LastName") {
      setFormData((prevData) => ({
        ...prevData,
        lastName: value,
      }));
    } else if (name === "email") {
      setFormData((prevData) => ({
        ...prevData,
        email: value,
      }));
    } else if (name === "Password") {
      setFormData((prevData) => ({
        ...prevData,
        password: value,
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ 
      ...prevData,
      businessAnalyst: name === 'businessAnalyst' ? checked : false,
      foodie: name === 'foodie' ? checked : false
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { firstName, lastName, email, password, businessAnalyst, foodie } = formData;
      let role;
      if (businessAnalyst) {
        role = "Business Analyst";
      } else if (foodie) {
        role = "Foodie";
      } else {
        role = "DefaultRole"; 
      }
      const credentials = { firstName, lastName, email, password, role};
      const user = await client.register(credentials);
      dispatch(setCurrentUser(user));
      router.push('/'); 
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <section className="flex flex-row justify-center items-center min-h-screen bg-white p-10">
      <div className="w-1/2 p-10">
        <h1 className="text-4xl text-center text-red-700 mb-10 font-bold">
          Sign Up for XX
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {columns.map((column) => (
            <div key={column.id} className="flex flex-col">
              <label htmlFor={column.id} className="text-lg">
                {column.label}
              </label>
              <input
                type={column.id === "password" ? "password" : "text"}
                id={column.id}
                placeholder={column.placeholder}
                name={column.name}
                className="p-2 rounded border border-gray-300"
                required={true}
                value={formData[column.name]}
                onChange={handleInputChange}
              />
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg mb-2">Please select your user role:</p>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="businessAnalyst"
                name="businessAnalyst"
                className="mr-2"
                checked={formData.businessAnalyst}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="businessAnalyst" className="text-lg">
                Business Analyst
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="foodie"
                name="foodie"
                className="mr-2"
                checked={formData.foodie}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="foodie" className="text-lg">
                Foodie
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800 transition duration-300"
          >
            Sign Up
          </button>
          <p className="text-right mt-4">
            Already on XX? &nbsp;
            <button
              type="button"
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              onClick={handleLoginClick}
            > Log in</button>
          </p>
        </form>
      </div>
      <div className="w-1/2">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0"
          className="aspect-[0.68] object-contain object-center w-full shrink-0 box-border min-w-[20px] overflow-hidden ml-auto mt-5"
        />
      </div>
    </section>
  );
}

export default RegisterForm;
