'use client';
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER,
} from '@/components/constant/app.constant';
import { UserInfo } from '@/helper/type/type-user';

// Kiểm tra xem code có đang chạy ở browser không
const isBrowser = typeof window !== 'undefined';

export function getAccessTokenLocal() {
  if (!isBrowser) return null;
  return localStorage.getItem(ACCESS_TOKEN);
}

export function setAccessTokenLocal(token: string) {
  if (!isBrowser) return;
  localStorage.setItem(ACCESS_TOKEN, token);
}

export function getRefreshToken() {
  if (!isBrowser) return null;
  return localStorage.getItem(REFRESH_TOKEN);
}

export function setRefreshToken(token: string) {
  if (!isBrowser) return;
  localStorage.setItem(REFRESH_TOKEN, token);
}

export function setUser(user: UserInfo) {
  if (!isBrowser) return;
  localStorage.setItem(USER, JSON.stringify(user));
}

export function getUser() {
  if (!isBrowser) return null;
  return JSON.parse(localStorage.getItem(USER) || '{}');
}

export function clearLocalStorage() {
  if (!isBrowser) return;
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem(USER);
}
