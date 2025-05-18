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
