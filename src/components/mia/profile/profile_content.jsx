"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { findUserById } from "@/components/client";
import { IoIosRestaurant } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default function ProfileComponent(props) {
  const [rows, setRows] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const params = useParams();
  const { currentUser } = useSelector((state) => state.userReducer);
  const userId = params.id;
  const currentUserId = currentUser?._id;
  const currenUserRole = currentUser?.role;
  const loggedIn = currentUserId !== undefined;
  const hasProfileUserId = userId !== undefined;
  const same_user = currentUserId === userId;
  const defaultImage = "/images/resimage.jpg";

  const handleAdminInfo = () => {
    router.push("/admin_view");
  };

  const handleEditProfile = () => {
    router.push(`/edit_profile?id=${currentUserId}`);
  };

  const fetchUser = async () => {
    try {
      const user = await findUserById(userId);
      // const currentUser = await client.findCurrentUser(id);
      // if (currentUser.id !== user.id) router.push('/profile');
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
    } catch (err) {
      console.log("error", err);
    }
  };

  const fetchFavorites = async () => {
    try {
      let response;
      if (currentUserId === undefined) {
        response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/${userId}/favorites`
        );
      } else {
        response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users/${currentUserId}/favorites`
        );
      }

      const data = await response.json();
      const firstThreeFavorites = data.slice(0, 3);

      const favorites = await Promise.all(
        firstThreeFavorites.map(async (favorite) => {
          const { name, image } = await fetchRestaurantDetails(
            favorite.restaurant_id
          );
          return {
            id: favorite._id,
            restaurant_id: favorite.restaurant_id,
            restaurantName: name,
            restaurantImage: image,
          };
        })
      );

      setRows(favorites);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRestaurantDetails = async (restaurantId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/businesses/${restaurantId}`
      );
      if (response.status !== 200) {
        return { name: "Restaurant AAA", image: defaultImage };
      } else {
        const data = await response.json();
        return { name: data.name, image: data.photos[0] };
      }
    } catch (error) {
      console.error(error);
      return { name: "Restaurant AAA", image: defaultImage };
    }
  };

  const initIsAdmin = () => {
    if (currenUserRole === "ADMIN") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  const initProfileInfo = () => {
    if (loggedIn) {
      setIsEditable(true);
      setFirstName(currentUser.firstName);
      setLastName(currentUser.lastName);
      setEmail(currentUser.email);
    } else {
      router.push("/login");
    }
  };

  const initProfileIdInfo = () => {
    setIsAdmin(false);
    setIsEditable(false);
    if (loggedIn && same_user) {
      router.push("/profile");
    } else {
      const user = fetchUser(userId);
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  };

  const initUserInfo = () => {
    if (hasProfileUserId) {
      initProfileIdInfo();
    } else {
      initProfileInfo();
    }
  };

  const handleRestaurant = (restaurant_id) => {
    router.push(`/search_detail/${restaurant_id}`);
  };

  useEffect(() => {
    initIsAdmin();
    initUserInfo();
    fetchFavorites();
  }, []);

  return (
    <section className="flex flex-col relative shrink-0 box-border bg-white pt-12 pb-24 px-8 border-solid border-neutral-400">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <header className="flex flex-col relative shrink-0 box-border h-auto border grow-0 min-h-[900px] border-solid border-neutral-400">
            <h1 className="shrink-0 box-border h-auto text-xl ml-5 mt-5">
              <strong>
                <span className="text-2xl">
                  <font color="#d0021b">
                    <strong>
                      <span className="text-2xl">Profile</span>
                    </strong>
                  </font>
                </span>
              </strong>
            </h1>
            {isAdmin && isEditable && (
              <div className="flex flex-col relative shrink-0 box-border h-[200px] mt-5">
                <p className="relative shrink-0 box-border h-auto text-xl font-semibold ml-5 mt-5">
                  You are admin!&nbsp;
                </p>
                <button
                  onClick={handleAdminInfo}
                  className="relative shrink-0 box-border appearance-none bg-red-700 text-[white] rounded text-center cursor-pointer text-xl ml-5 mr-auto mt-5 px-6 py-4"
                >
                  Admin Info
                </button>
              </div>
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2 className="relative shrink-0 box-border h-auto text-3xl font-black mt-36 mb-auto mx-auto">
                  <FaUser
                    size="2em"
                    color="grey"
                    style={{ marginBottom: "0.5em" }}
                  />{" "}
                </h2>
                <br />
                <h2 style={{ fontSize: "2em", fontWeight: "bold", margin: 0 }}>
                  {`${firstName} ${lastName}`}{" "}
                </h2>
              </div>
            </div>
            {isEditable && (
              <>
                <p className="relative shrink-0 box-border h-auto text-xl font-semibold mt-8 mb-auto mx-auto">
                  {email} <br />
                </p>
                <button
                  onClick={handleEditProfile}
                  className="relative shrink-0 box-border appearance-none bg-red-700 text-[white] rounded text-center cursor-pointer text-xl border mt-12 mb-52 mx-auto px-6 py-4 border-solid border-white flex items-center justify-center"
                >
                  <FaEdit color="white" className="mr-2" />
                  Edit profile
                </button>
              </>
            )}
          </header>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative shrink-0 box-border h-auto grow-0 max-sm:h-auto max-sm:grow-0">
            <h1 className="relative shrink-0 box-border h-auto text-xl text-black mt-5 mx-auto">
              <font color="#d0021b">
                <strong>
                  <span className="text-2xl ">Favorite Restaurants</span>
                </strong>
              </font>
            </h1>
            {rows.map((row, index) => (
              <div
                className="flex flex-col relative shrink-0 box-border mt-5"
                key={index}
              >
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
                    <button
                      onClick={() => {
                        handleRestaurant(row.restaurant_id);
                      }}
                      className="relative shrink-0 box-border h-auto text-xl mt-5"
                    >
                      <div className="flex items-center box-border h-auto">
                        <IoIosRestaurant className="text-3xl text-green-700 mr-2" />
                        <span
                          className="text-xl font-semibold text-green-700"
                          style={{ lineHeight: "2.5rem" }}
                        >
                          {row.restaurantName}
                        </span>
                      </div>

                      <img
                        loading="lazy"
                        src={row.restaurantImage}
                        className={`object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden max-w-[600px] mt-5`}
                        style={{ height: "200px" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
