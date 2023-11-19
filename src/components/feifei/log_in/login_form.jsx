import React from "react";

export default function LoginForm(props) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // Submit the form to the backend API for verification
    // Example code:
    fetch("/api/login", {
      method: "POST",
      body: new FormData(event.target),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend API
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  const handleForgotPasswordClick = () => {
    // Add your logic for handling the "Forgot password?" link click here
  };

  const handleSignUpClick = () => {
    // Add your logic for handling the "Sign up" link click here
  };
  return (
    <div className="flex min-h-screen">
      {" "}
      {/* Full screen height and display flex */}
      <section className="w-1/2 flex flex-col justify-start items-center bg-white pt-100 p-24">
        {" "}
        {/* Align to the top and add padding to the top */}
        <div className="w-full max-w-md">
          {" "}
          {/* Limit the width of the form */}
          <h1 className="text-red-700 text-center text-4xl mb-6">
            Log in to XX
          </h1>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="p-2.5 rounded border border-solid border-stone-300 w-full"
              required={true}
            />
            <input
              type="password"
              placeholder="Password"
              name="Password"
              className="p-2.5 rounded border border-solid border-stone-300 w-full"
              required={true}
            />
            <a
              href="#"
              className="text-blue-500 text-right"
              onClick={handleForgotPasswordClick}
            >
              Forgot password?
            </a>
            <button
              type="submit"
              className="bg-red-700 text-white rounded h-12 font-semibold"
            >
              Log In
            </button>
            <p className="text-center mt-4">
              Don't have an account?&nbsp;
              <a href="#" className="text-blue-500" onClick={handleSignUpClick}>
                Sign up
              </a>
            </p>
          </form>
        </div>
      </section>
      <div className="w-1/2  p-20 bg-white">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=100 100w, 
          https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=200 200w, 
          https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=400 400w,
          https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=800 800w, 
          https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=1200 1200w, 
          https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=1600 1600w, 
          https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=2000 2000w,
          https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0"
          alt="Login Visual"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
