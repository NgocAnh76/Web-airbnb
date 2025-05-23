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

export const DATA_ADD_LOCATION: {
  name_location?: string;
  province?: string;
  image_location?: string;
  nation?: number;
  placeholder: string;
  name: string;
  type?: string;
}[] = [
  { placeholder: 'Name Location', name: 'name_location' },
  { placeholder: 'Province', name: 'province' },
  { placeholder: 'Image Location', name: 'image_location' },
  { placeholder: 'Nation', name: 'nation' },
];

export const DATA_ADD_ROOM: {
  room_name?: string;
  living_room?: string;
  bedroom?: string;
  bed?: string;
  bathroom?: string;
  description?: string;
  price?: number;
  image?: string;
  location_id?: number;
  address?: string;
  washing_machine?: boolean;
  iron?: boolean;
  television?: boolean;
  air_conditioner?: boolean;
  wifi?: boolean;
  kitchen?: boolean;
  parking?: boolean;
  pool?: boolean;
  placeholder: string;
  name: string;
  type?: string;
}[] = [
  { placeholder: 'Room Name', name: 'room_name' },
  { placeholder: 'Living Room', name: 'living_room', type: 'number' },
  { placeholder: 'Bedroom', name: 'bedroom', type: 'number' },
  { placeholder: 'Bed', name: 'bed', type: 'number' },
  { placeholder: 'Bathroom', name: 'bathroom', type: 'number' },
  { placeholder: 'Description', name: 'description' },
  { placeholder: 'Price', name: 'price', type: 'number' },
  { placeholder: 'Image', name: 'image' },
  { placeholder: 'Location ', name: 'location_id', type: 'select' },
  { placeholder: 'Address', name: 'address' },
  { placeholder: 'Washing Machine', name: 'washing_machine', type: 'checkbox' },
  { placeholder: 'Iron', name: 'iron', type: 'checkbox' },
  { placeholder: 'Television', name: 'television', type: 'checkbox' },
  { placeholder: 'Air Conditioner', name: 'air_conditioner', type: 'checkbox' },
  { placeholder: 'Wifi', name: 'wifi', type: 'checkbox' },
  { placeholder: 'Kitchen', name: 'kitchen', type: 'checkbox' },
  { placeholder: 'Parking', name: 'parking', type: 'checkbox' },
  { placeholder: 'Pool', name: 'pool', type: 'checkbox' },
];
