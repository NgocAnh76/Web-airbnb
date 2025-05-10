'use client';
import { SocialButton } from '@/components/atoms/buttons';
import { InputField } from '@/components/atoms/input';
import { signupValidationSchema } from '@/components/common/schemaValidation';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { IoReturnDownBack } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const formik = useFormik({
    initialValues: {
      email: '',
      full_name: '',
      pass_word: '',
      phone: '',
      birth_day: '',
      gender: '',
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values) => {
      // await mutation.mutateAsync(values);
      console.log(values);
    },
  });
  const dataInput: {
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
  return (
    <div className="mx-auto py-5 md:w-3/4 lg:w-1/2">
      <div className="mx-5 my-10 rounded-lg bg-white p-8 md:p-14">
        <div>
          <h2>Welcome black</h2>
          <div className="flex-box mt-2 justify-start">
            <p>Already have an account yet?</p>
            <Link href="/auth/login" className="text-primary ml-3">
              Login
            </Link>
          </div>
        </div>
        <form className="mb-8" onSubmit={formik.handleSubmit}>
          {dataInput.map((data, i) => {
            return (
              <div key={i} className="relative">
                <InputField
                  type={
                    data.type ||
                    (data.isPassword
                      ? data.name === 'pass_word'
                        ? showPassword
                          ? 'text'
                          : 'password'
                        : showConfirmPassword
                          ? 'text'
                          : 'password'
                      : 'text')
                  }
                  placeholder={data.placeholder}
                  name={data.name}
                  value={formik.values[data.name as keyof typeof formik.values]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors[data.name as keyof typeof formik.errors]}
                  touched={
                    formik.touched[data.name as keyof typeof formik.touched]
                  }
                />
                {data.isPassword && (
                  <button
                    type="button"
                    onClick={
                      data.name === 'password'
                        ? togglePasswordVisibility
                        : toggleConfirmPasswordVisibility
                    }
                    className={twMerge(
                      'absolute top-1/2 right-5 text-base text-gray-500 lg:text-xl',
                      formik.errors[data.name as keyof typeof formik.errors] &&
                        formik.touched[data.name as keyof typeof formik.touched]
                        ? '-translate-y-1/2 transform'
                        : '',
                    )}
                  >
                    {data.name === 'password' ? (
                      showPassword ? (
                        <FaEye />
                      ) : (
                        <FaEyeSlash />
                      )
                    ) : showConfirmPassword ? (
                      <FaEye />
                    ) : (
                      <FaEyeSlash />
                    )}
                  </button>
                )}
              </div>
            );
          })}
          <div className="flex-box items-end justify-between">
            <button
              type="submit"
              className="bg-primary smooth-hover hover:bg-secondary flex-box mt-8 w-2/5 rounded-lg py-3 text-lg text-white hover:text-white md:py-4 lg:mt-10"
            >
              Sign Up
            </button>

            <Link
              href="/"
              className="text-primary flex-box ml-3 gap-2 text-sm lg:text-base"
            >
              Back to Home <IoReturnDownBack />
            </Link>
          </div>
        </form>
        <div className="mt-8 text-center">
          <p className="font-semibold">or sign in with</p>
          <div className="m-5 gap-5 md:flex">
            <SocialButton icon={FaFacebookF} label="Facebook" color="primary" />
            <SocialButton icon={FaGoogle} label="Google" color="text-red-500" />
          </div>
          <p>
            By creating an account, you agree to our Terms of Service and
            Privacy Statement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
