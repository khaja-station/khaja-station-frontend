import * as http from './http.api';
import { setUserDetails } from 'app/app.storage';

export const signWithGoogle = (token: string | null) => {
  return http.get(`/auth/google/${token}`);
};

export const adminLogin = async (payload: { email: string; password: string }) => {
  const { data, error } = await http.post(`/auth/signin`, payload);
  if (!error && data?.token) {
    setUserDetails(data);
  }
  return { data, error };
};

export const registerRestaurant = (payload: { name: string; email: string; password: string }) => {
  const { data, error } = http.post(`/auth/users`, payload);
  if (!error && data?.token) {
    setUserDetails(data);
  }
  return { data, error };
};

export const refreshAccessToken = () => {
  return http.get(`/auth/refresh-token`);
};
