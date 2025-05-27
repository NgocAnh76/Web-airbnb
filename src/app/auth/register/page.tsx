'use client';
import { SocialButton } from '@/components/atoms/buttons';
import { InputField } from '@/components/atoms/input';
import { DATA_INPUT_REGISTER } from '@/components/atoms/input/data.input';
import { signupValidationSchema } from '@/components/common/schemaValidation';
import { register } from '@/configs/api/auth';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { IoReturnDownBack } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

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
      try {
        console.log(values);
        await register(values);
        toast.success('Register successfully');
        router.push('/auth/login');
      } catch (error) {
        console.log(error);
      }
    },
  });

  const renderSelectOptions = (name: string) => {
    if (name === 'gender') {
      return (
        <select
          name={name}
          value={formik.values[name as keyof typeof formik.values]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={twMerge(
            'mt-3 w-full rounded-lg border border-primary/50 bg-white',
            ' p-3 text-sm text-dark shadow-md outline-none focus:border-none focus:ring-2',
            'focus:ring-primary/50 md:mt-5 md:p-4',
          )}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      );
    }
    return null;
  };

  return (
    <div className="mx-auto mt-40 py-5 md:mt-0 md:w-3/4 lg:w-1/2 xl:h-[80%]">
      <div className="mx-5 rounded-lg bg-white p-8 md:p-14">
        <div>
          <h2>Welcome black</h2>
          <div className="mt-2 flex items-center justify-start">
            <p>Already have an account yet?</p>
            <Link href="/auth/login" className="ml-3 text-primary">
              Login
            </Link>
          </div>
        </div>
        <form className="mb-8" onSubmit={formik.handleSubmit}>
          {DATA_INPUT_REGISTER.map((data, i) => {
            return (
              <div key={i} className="relative">
                {data.type === 'select' ? (
                  <div className="flex flex-col">
                    {renderSelectOptions(data.name)}
                  </div>
                ) : (
                  <InputField
                    type={
                      data.isPassword
                        ? showPassword
                          ? 'text'
                          : 'password'
                        : data.type || 'text'
                    }
                    placeholder={data.placeholder}
                    name={data.name}
                    value={
                      formik.values[data.name as keyof typeof formik.values]
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.errors[data.name as keyof typeof formik.errors]
                    }
                    touched={
                      formik.touched[data.name as keyof typeof formik.touched]
                    }
                  />
                )}
                {data.isPassword && (
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={twMerge(
                      'absolute right-5 top-1/2 text-base text-gray-500 lg:text-xl',
                      formik.errors[data.name as keyof typeof formik.errors] &&
                        formik.touched[data.name as keyof typeof formik.touched]
                        ? '-translate-y-1/2 transform'
                        : '',
                    )}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                )}
              </div>
            );
          })}
          <div className="flex items-end justify-between">
            <button
              type="submit"
              className="smooth-hover mt-8 w-2/5 rounded-lg bg-primary py-3 text-sm text-white hover:bg-secondary hover:text-white md:py-4 lg:mt-10"
            >
              Sign Up
            </button>

            <Link
              href="/"
              className="ml-3 flex items-center gap-2 text-sm text-primary lg:text-base"
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
