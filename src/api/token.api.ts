// FIXME: later with serialization
export const Token = {
  getAccessToken() {
    localStorage.getItem('accessToken');
  },
  getRefreshToken() {
    localStorage.getItem('refreshToken');
  },
  refreshAccessToken(token: string) {
    localStorage.setItem('accessToken', token);
  },
};
