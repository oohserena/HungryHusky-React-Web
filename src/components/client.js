import axios from "axios";
const request = axios.create({
  withCredentials: true,
});

export const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;

export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};
