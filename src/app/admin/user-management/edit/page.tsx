'use client';
import { InputField } from '@/components/atoms/input';
import { DATA_EDIT_PROFILE_ADMIN } from '@/components/atoms/input/data.input';
import { signupValidationSchema } from '@/components/common/schemaValidation';
import { useFormik } from 'formik';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

const DATA_USER = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '081234567890',
    birthDate: '2021-01-01',
    gender: 'Male',
    role: 'Admin',
    pass_word: '123456',
  },
];

const normalizeUserData = (user: {
  email: string;
  name: string;
  pass_word: string;
  phone: string;
  birthDate: string;
  gender: string;
  role: string;
}) => {
  return {
    email: user.email,
    full_name: user.name,
    pass_word: user.pass_word,
    phone: user.phone,
    birth_day: user.birthDate,
    gender: user.gender,
    role: user.role,
  };
};

const AdminEditUserPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const user = normalizeUserData(DATA_USER[0]);

  const formik = useFormik({
    initialValues: user,
    validationSchema: signupValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const renderSelectOptions = (name: string) => {
    if (name === 'role') {
      return (
        <select
          name={name}
          value={formik.values[name as keyof typeof formik.values]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border-primary/50 text-dark focus:ring-primary/50 mt-3 w-full rounded-lg border bg-white p-3 text-sm shadow-md outline-none focus:border-none focus:ring-2 md:mt-5 md:p-4"
        >
          <option value="">Select Role</option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      );
    }
    if (name === 'gender') {
      return (
        <select
          name={name}
          value={formik.values[name as keyof typeof formik.values]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border-primary/50 text-dark focus:ring-primary/50 mt-3 w-full rounded-lg border bg-white p-3 text-sm shadow-md outline-none focus:border-none focus:ring-2 md:mt-5 md:p-4"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="mt-10">
        <h2>Edit Profile</h2>
        <p>
          "Make sure your information is always accurate and up to date –
          because this is where all connections start."
        </p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="relative grid grid-cols-1 gap-4 p-5 md:grid-cols-2"
      >
        {DATA_EDIT_PROFILE_ADMIN.map(
          ({ placeholder, name, isPassword, type }) => (
            <div key={name} className="relative">
              {type === 'select' ? (
                renderSelectOptions(name)
              ) : (
                <InputField
                  label=""
                  name={name}
                  placeholder={placeholder}
                  value={
                    formik.values[name as keyof typeof formik.values] || ''
                  }
                  type={
                    isPassword
                      ? showPassword
                        ? 'text'
                        : 'password'
                      : type || 'text'
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors[name as keyof typeof formik.errors]}
                  touched={formik.touched[name as keyof typeof formik.touched]}
                  className="bg-gray-100"
                />
              )}

              {isPassword && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={twMerge(
                    'absolute top-1/2 right-5 transform text-sm text-gray-500',
                    formik.errors[name as keyof typeof formik.errors] &&
                      formik.touched[name as keyof typeof formik.touched]
                      ? 'top-1/2 -translate-y-1/2'
                      : '',
                  )}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              )}
            </div>
          ),
        )}
      </form>
      <button
        className={twMerge(
          'hover:text-primary smooth-hover ml-5 rounded-md',
          'bg-blue-500 px-4 py-2 text-white hover:bg-white lg:px-10 lg:py-4',
          'hover:border-primary border border-transparent',
        )}
      >
        Save Changes
      </button>
    </div>
  );
};

export default AdminEditUserPage;
