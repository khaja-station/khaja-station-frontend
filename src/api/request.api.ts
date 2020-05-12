import * as http from './http.api';

// FIXME: with actual api end points
export const signWithGoogle = (token: string | null) => {
  return http.get(`/auth/google/${token}`);
};
export const refreshAccessToken = () => {
  return http.get(`/auth/refresh-token`);
};
