export interface TypeRegisterRequest {
  email: string;
  full_name: string;
  pass_word: string;
  phone: string;
  birth_day: string;
  gender: string;
}
export interface TypeLoginRequest {
  email: string;
  pass_word: string;
}
