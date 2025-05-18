export const DATA_REGISTER: {
  placeholder: string;
  name: string;
  isPassword?: boolean;
  type?: string;
}[] = [
  { placeholder: 'Email', name: 'email' },
  { placeholder: 'Full name', name: 'full_name' },
  { placeholder: 'Password', name: 'pass_word', isPassword: true },
  { placeholder: 'Phone', name: 'phone' },
  { placeholder: 'Birthday', name: 'birth_day' },
  { placeholder: 'Gender', name: 'gender' },
];

export const DATA_EDIT_PROFILE_ADMIN: {
  placeholder: string;
  name: string;
  pass_word?: string;
  type?: string;
  phone?: string;
  birth_day?: string;
  gender?: string;
  role?: string;
}[] = [
  { placeholder: 'Email', name: 'email' },
  { placeholder: 'Full name', name: 'full_name' },
  { placeholder: 'Password', name: 'pass_word' },
  { placeholder: 'Phone', name: 'phone' },
  { placeholder: 'Birthday', name: 'birth_day' },
  { placeholder: 'Gender', name: 'gender', type: 'select' },
  { placeholder: 'Role', name: 'role_id', type: 'select' },
];

export const DATA_EDIT_PROFILE: {
  placeholder: string;
  name: string;
  type?: string;
  phone?: string;
  birth_day?: string;
  gender?: string;
}[] = [
  { placeholder: 'Email', name: 'email' },
  { placeholder: 'Full name', name: 'full_name' },
  { placeholder: 'Phone', name: 'phone' },
  { placeholder: 'Birthday', name: 'birth_day' },
  { placeholder: 'Gender', name: 'gender', type: 'select' },
  { placeholder: 'Role', name: 'role_id', type: 'select' },
];
