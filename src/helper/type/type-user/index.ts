export interface UserInfo {
  user_id: number;
  full_name: string;
  email: string;
  avatar: string;
  phone: string;
  role_id: number;
  birth_day: string;
  gender: string;
  created_at: string;
  updated_at: string;
}

export interface UserState {
  info: UserInfo | null;
  isLogin: boolean;
}
