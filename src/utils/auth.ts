const TOKEN_KEY = 'access_token';
const REFERSH_KEY = 'refresh_token';

const isLogin = () => {
  return (
    !!localStorage.getItem(TOKEN_KEY) && !!localStorage.getItem(REFERSH_KEY)
  );
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};
const getRefreshToken = () => {
  return localStorage.getItem(REFERSH_KEY);
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};
const setRefreshToken = (token: string) => {
  localStorage.setItem(REFERSH_KEY, token);
};

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFERSH_KEY);
};

export {
  isLogin,
  getToken,
  setToken,
  clearToken,
  getRefreshToken,
  setRefreshToken,
};
