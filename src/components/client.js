import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

export const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
export const RESTAURANT_API = `${BASE_API}/api/businesses`;

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

export const deleteUser = async (id) => {
  const response = await request.delete(`${USERS_API}/${id}`);
  return response;
};

export const login = async (credentials) => {
  const response = await request.post(`${USERS_API}/login`, credentials);
  return response.data;
};

export const searchRestaurants = async (term, location) => {
  const response = await request.get(`${RESTAURANT_API}/search`, {
    params: { term, location },
  });
  return response.data;
};

export const RestaurantDetail = async (id) => {
  console.log(`${RESTAURANT_API}/${id}`);
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
  const response = await request.get(`${USERS_API}/${id}/review`);
  return response.data;
};

export const findReviewsByRestaurantId = async (id) => {
  const response = await request.get(
    `${BASE_API}/api/restaurants/${id}/review`
  );
  return response.data;
};

export const createReview = async (reviewData) => {
  const response = await request.post(`${BASE_API}/api/reviews`, reviewData);
  return response.data;
};

export const createFavorite = async (favoriteData) => {
  const response = await request.post(
    `${BASE_API}/api/favorites`,
    favoriteData
  );
  return response.data;
};

export const deleteFavorite = async (id) => {
  const response = await request.delete(`${BASE_API}/api/favorites/${id}`, id);
  return response.data;
};

export const findFavoriteByUserId = async (userId) => {
  const response = await request.get(
    `${BASE_API}/api/users/${userId}/favorites`,
    userId
  );
  return response.data;
};

export const getRatings = async (restaurantId) => {
  const response = await request.get(
    `${BASE_API}/api/businesses/${restaurantId}/reviews`
  );
  return response.data;
};
