import Cookies from 'js-cookie';
import { UserInfo } from '@/helper/type/type-user';

const TOKEN_KEY = 'accessToken';
const USER_KEY = 'userInfo';

export const setAccessToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, { expires: 7 }); // Expires in 7 days
};

export const getAccessToken = () => {
  return Cookies.get(TOKEN_KEY);
};

export const removeAccessToken = () => {
  Cookies.remove(TOKEN_KEY);
};

export const setUserInfo = (user: UserInfo) => {
  Cookies.set(USER_KEY, JSON.stringify(user), { expires: 7 });
};

export const getUserInfo = () => {
  const userInfo = Cookies.get(USER_KEY);
  return userInfo ? JSON.parse(userInfo) : null;
};

export const removeUserInfo = () => {
  Cookies.remove(USER_KEY);
};
