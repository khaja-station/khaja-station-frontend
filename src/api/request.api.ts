import * as http from './http.api';

// FIXME: with actual api end points
export const signWithGoogle = (token: string | null) => {
  return http.get(`/auth/google/${token}`);
};

export const adminLogin = (payload: { email: string; password: string }) => {
  return http.post(`/auth/signin`, payload);
};

export const registerRestaurant = (payload: { name: string; email: string; password: string }) => {
  return http.post(`/auth/users`, payload);
};

export const refreshAccessToken = () => {
  return http.get(`/auth/refresh-token`);
};
