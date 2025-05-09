'use client';

import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER,
} from '@/components/constant/app.constant';

export function setAccessToken(accessToken: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
  }
}

export function getRefreshToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(REFRESH_TOKEN);
  }
  return null;
}

export function setRefreshToken(refreshToken: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }
}

export function setUser(user: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER, JSON.stringify(user));
  }
}

export function getUser(user: string): string {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(user) || '{}');
  }
  return {};
}

export function logOut() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(USER);
  }
}

// export function getUserLogin() {
//   const user = getUser();
//   return user.isLogin;
// }
