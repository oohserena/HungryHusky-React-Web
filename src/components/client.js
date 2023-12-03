import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

export const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
export const RESTAURANT_API = `${BASE_API}/api/businesses`

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

export const login = async (credentials) => {
  const response = await request.post(`${USERS_API}/login`, credentials);
  return response.data;
};


export const searchRestaurants = async (term, location) => {
  const response = await request.get(`${RESTAURANT_API}/search`, {
    params: { term, location }
  });
  return response.data;
};

export const RestaurantDetail = async (id) => {
  console.log(`${RESTAURANT_API}/${id}`)
  const response = await request.get(`${RESTAURANT_API}/${id}`);
  return response.data;
};


export const register = async (credentials) => {
  const response = await request.post(`${USERS_API}/register`, credentials);
  return response.data;
};


export const logout = async () => {
  const response = await request.post(`${USERS_API}`);
  return response.data;
};

export const account = async () => {
  const response = await request.post(`${USERS_API}/profile`);
  return response.data;
};

export const findReviewsByUserId = async (id) => {
  const response = await request.get(`${USERS_API}/${id}/reviews`);
  return response.data;
}