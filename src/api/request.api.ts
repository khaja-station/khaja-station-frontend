import * as http from './http.api';

import { urls } from './api.url';

export const signWithGoogle = (token: string | null) => {
  return http.get(`/auth/google/${token}`);
};

export const restaurantLogin = (payload: { email: string; password: string }) => {
  return http.post(`/auth/signin`, payload);
};

export const registerRestaurant = (payload: { name: string; email: string; password: string }) => {
  return http.post(`/auth/users`, payload);
};

export const refreshAccessToken = (payload: { referenceToken: string }) => {
  return http.post(`/auth/token`, payload);
};

export const addCategory = (payload: FormData) => {
  return http.post(urls.food.CATEGORY, payload);
};

export const getCategories = () => {
  return http.get(urls.food.CATEGORY);
};

export const getMenus = () => {
  return http.get(urls.food.MENU);
};
