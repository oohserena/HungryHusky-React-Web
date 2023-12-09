import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as client from "../../client.js";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../common/reducer.js";

function LoginForm(props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (currentUser) {
      router.push("/");
      return;
    }
  }, [currentUser, router]);

  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      const credentials = { email: email, password: password };
      const user = await client.login(credentials);
      dispatch(setCurrentUser(user));
      router.push("/");
      console.log(user);
    } catch (error) {
      let errorMessage = "Something went wrong. Please try again later";
      if (error.response && error.response.status === 401) {
        errorMessage = "Wrong email or password. Please try again";
      }
      alert(errorMessage);
      setError(errorMessage);
      console.error(error);
    }
  };

  const handleForgotPasswordClick = () => {
    // Add logic
  };

  const handleSignUpClick = () => {
    router.push("/register");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {" "}
      <section className="w-full md:w-1/2 flex flex-col justify-start items-center bg-white pt-100 p-24">
        {" "}
        <div className="w-full max-w-md">
          {" "}
          <h1 className="text-red-700 text-center text-4xl mb-6 font-bold">
            Log in to Hungry Huskies
          </h1>
          <br />
          {error && (
            <div className="alert alert-danger mb-2 mt-2 font-italic text-center">
              {error}
            </div>
          )}
          <br />
          <form onSubmit={handleLogIn} className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="p-2.5 rounded border border-solid border-stone-300 w-full rounded-lg"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="Password"
              className="p-2.5 rounded border border-solid border-stone-300 w-full rounded-lg"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="text-blue-500 hover:text-blue-700 transition duration-300 text-right rounded-lg"
              onClick={handleForgotPasswordClick}
            >
              {" "}
              Forgot password?
            </button>

            <button
              type="submit"
              className="bg-red-700 text-white rounded h-12 font-semibold"
              // onClick={handleLogIn}
            >
              {" "}
              Log in
            </button>

            <p className="text-center mt-4 text-right">
              Don&apos;t have an account?&nbsp;
              <a href="#" className="text-blue-500" onClick={handleSignUpClick}>
                Sign up
              </a>
            </p>
          </form>
        </div>
      </section>
      <div className="w-full md:w-1/2 p-20 bg-white">
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

export default LoginForm;
