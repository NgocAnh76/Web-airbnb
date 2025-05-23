import * as Yup from 'yup';

export const signupValidationSchema = Yup.object().shape({
  pass_word: Yup.string()
    .matches(/^.{6,12}$/, 'Password must be between 6 and 12 characters')
    .required('Required password cannot be blank'),
  //   confirm_password: Yup.string()
  //     .matches(/^.{6,12}$/, "Password must be between 6 and 12 characters")
  //     .required("Required password cannot be blank"),
  full_name: Yup.string()
    .matches(
      /^[a-zA-ZÀ-ỹ\s]+$/,
      'Full name can only contain letters and spaces',
    )
    .required('Required fullname cannot be blank'),
  phone: Yup.string()
    .matches(/^\d{10,11}$/, 'Phone number must be 10 to 11 digits')
    .required('Required phone cannot be blank'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required email cannot be blank'),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required email cannot be blank'),
  pass_word: Yup.string()
    .matches(/^.{6,12}$/, 'Password must be between 6 and 12 characters')
    .required('Required password cannot be blank'),
});

export const editProfileValidationSchema = Yup.object().shape({
  full_name: Yup.string()
    .matches(
      /^[a-zA-ZÀ-ỹ\s]+$/,
      'Full name can only contain letters and spaces',
    )
    .required('Required fullname cannot be blank'),
  phone: Yup.string()
    .matches(/^\d{10,11}$/, 'Phone number must be 10 to 11 digits')
    .required('Required phone cannot be blank'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required email cannot be blank'),
  birth_day: Yup.string().required('Birthday is required'),
  gender: Yup.string().required('Gender is required'),
});

export const locationValidationSchema = Yup.object().shape({
  name_location: Yup.string().required('Name is required'),
  province: Yup.string().required('Province is required'),
  image_location: Yup.string().required('Image is required'),
  nation: Yup.string().required('Nation is required'),
});

export const roomValidationSchema = Yup.object().shape({
  room_name: Yup.string().required('Room name is required'),
  living_room: Yup.number()
    .required('Living room is required')
    .min(0, 'The minimum value can only be 0.'),
  bedroom: Yup.number()
    .required('Bedroom is required')
    .min(0, 'The minimum value can only be 0.'),
  bed: Yup.number()
    .required('Bed is required')
    .min(0, 'The minimum value can only be 0.'),
  bathroom: Yup.number()
    .required('Bathroom is required')
    .min(0, 'The minimum value can only be 0.'),
  description: Yup.string().required('Description is required'),
  price: Yup.number()
    .required('Price is required')
    .min(0, 'The minimum value can only be 0.'),
  washing_machine: Yup.boolean().required('Washing machine is required'),
  iron: Yup.boolean().required('Iron is required'),
  television: Yup.boolean().required('Television is required'),
  air_conditioner: Yup.boolean().required('Air conditioner is required'),
  wifi: Yup.boolean().required('Wifi is required'),
  kitchen: Yup.boolean().required('Kitchen is required'),
  parking: Yup.boolean().required('Parking is required'),
  pool: Yup.boolean().required('Pool is required'),
  image: Yup.string().required('Image is required'),
  location_id: Yup.number().required('Location is required'),
  address: Yup.string().required('Address is required'),
});
