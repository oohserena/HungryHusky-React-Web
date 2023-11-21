// import React from "react";

// export default function LoginForm(props) {
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Add your form submission logic here
//     // Submit the form to the backend API for verification
//     // Example code:
//     fetch("/api/login", {
//       method: "POST",
//       body: new FormData(event.target),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response from the backend API
//         console.log(data);
//       })
//       .catch((error) => {
//         // Handle any errors that occurred during the request
//         console.error(error);
//       });
//   };

//   const handleForgotPasswordClick = () => {
//     // Add your logic for handling the "Forgot password?" link click here
//   };

//   const handleSignUpClick = () => {
//     // Add your logic for handling the "Sign up" link click here
//   };


//   return (
//     <div className="flex min-h-screen">
//       {" "}
//       {/* Full screen height and display flex */}
//       <section className="w-1/2 flex flex-col justify-start items-center bg-white pt-100 p-24">
//         {" "}
//         {/* Align to the top and add padding to the top */}
//         <div className="w-full max-w-md">
//           {" "}
//           {/* Limit the width of the form */}
//           <h1 className="text-red-700 text-center text-4xl mb-6">
//             Log in to XX
//           </h1>
//           <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               className="p-2.5 rounded border border-solid border-stone-300 w-full"
//               required={true}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="Password"
//               className="p-2.5 rounded border border-solid border-stone-300 w-full"
//               required={true}
//             />
//             <a
//               href="#"
//               className="text-blue-500 text-right"
//               onClick={handleForgotPasswordClick}
//             >
//               Forgot password?
//             </a>
//             <button
//               type="submit"
//               className="bg-red-700 text-white rounded h-12 font-semibold"
//             >
//               Log In
//             </button>
//             <p className="text-center mt-4">
//               Don't have an account?&nbsp;
//               <a href="#" className="text-blue-500" onClick={handleSignUpClick}>
//                 Sign up
//               </a>
//             </p>
//           </form>
//         </div>
//       </section>
//       <div className="w-1/2  p-20 bg-white">
//         <img
//           loading="lazy"
//           srcSet="https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=100 100w, 
//           https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=200 200w, 
//           https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=400 400w,
//           https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=800 800w, 
//           https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=1200 1200w, 
//           https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=1600 1600w, 
//           https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=2000 2000w,
//           https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0"
//           alt="Login Visual"
//           className="object-cover w-full h-full"
//         />
//       </div>
//     </div>
//   );
// }

//   return (
//     <section className="flex flex-col relative shrink-0 box-border bg-white min-h-[200px] pb-24 px-24 max-md:flex max-sm:flex">
//       <div className="flex flex-col relative shrink-0 box-border mt-5 mb-1.5">
//         <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//           <div className="flex flex-col items-stretch-6/12 max-md:w-full max-md:ml-0">
//             <header className="relative shrink-0 box-border h-auto text-red-700 mt-52 mx-auto max-md:mt-5 max-sm:w-auto max-sm:self-center max-sm:m-auto">
//               <h1>
//                 <span className="mx-auto">Log in to XX</span>
//               </h1>
//             </header>
//             <form onSubmit={handleFormSubmit}>
//               <label>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                   className="flex flex-col relative shrink-0 box-border border mt-5 p-2.5 rounded border-solid border-stone-300"
//                   required={true}
//                 />
//               </label>
//               <label>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="Password"
//                   className="flex flex-col relative shrink-0 box-border border mt-5 p-2.5 rounded border-solid border-stone-300"
//                   required={true}
//                 />
//               </label>
//               <a
//                 href=""
//                 className="relative shrink-0 box-border h-auto text-blue-500 ml-auto mt-5 max-sm:ml-auto"
//                 onClick={handleForgotPasswordClick}
//               >
//                 Forgot password?
//               </a>
//               <button
//                 type="submit"
//                 className="relative shrink-0 box-border appearance-none bg-red-700 text-[white] rounded text-center cursor-pointer h-[50px] font-semibold mt-5 px-6 py-4"
//                 openLinkInNewTab={true}
//               >
//                 Log In
//               </button>
//               <div className="relative shrink-0 box-border h-auto ml-auto mt-5 mb-auto max-sm:ml-auto">
//                 Don't have an account?&nbsp;{" "}
//                 <font color="#4a90e2" onClick={handleSignUpClick}>
//                   Sign up
//                 </font>
//               </div>
//             </form>
//           </div>{" "}
//           <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
//             <img
//               loading="lazy"
//               srcSet="https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F92012c9ce23446e48cb46842c120eec0%2Fd5ed74b25d1c4840a59d56b3ddc9eed0"className="aspect-[0.68] object-contain object-center w-full shrink-0 box-border min-w-[20px] overflow-hidden ml-auto mt-5"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

