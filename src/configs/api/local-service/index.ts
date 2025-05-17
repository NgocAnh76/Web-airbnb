'use client';
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER,
} from '@/components/constant/app.constant';
import { logout } from '@/redux/slice/user';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN);
}
export function setAccessToken(accessToken: string) {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN);
}
export function setRefreshToken(RefreshToken: string) {
  localStorage.setItem(REFRESH_TOKEN, RefreshToken);
}

export function setUser(user: any) {
  localStorage.setItem(USER, JSON.stringify(user));
}
export function getUser() {
  return JSON.parse(localStorage.getItem(USER) || '{}');
}

// export function logOut() {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   return () => {
//     // localStorage.clear();
//     localStorage.removeItem(ACCESS_TOKEN);
//     localStorage.removeItem(REFRESH_TOKEN);
//     localStorage.removeItem(USER);

//     dispatch(logout());
//     router.push('/auth/login');
//   };
// }

export function logOut() {
  const dispatch = useDispatch();
  const router = useRouter();

  return () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(USER);

    dispatch(logout());
    router.push('/auth/login');
  };
}
