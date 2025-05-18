export interface UserInfo {
  user_id: number;
  email: string;
  full_name: string;
  avatar: string;
  phone: string;
  role: string;
  birth_day: string;
  gender: string;
  created_at: string;
  updated_at: string;
  pass_word: string;
  role_id: number;
}

export interface TypeUpdateUser {
  email: string;
  full_name: string;
  phone: string;
  birth_day: string;
  gender: string;
  pass_word: string;
  role_id: string;
  avatar: string;
}
