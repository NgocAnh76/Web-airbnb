'use client';
import { SocialButton } from '@/components/atoms/buttons';
import { InputField } from '@/components/atoms/input';
import { loginValidationSchema } from '@/components/common/schemaValidation';
import { ApiLogin } from '@/configs/api/auth';
import { setAccessToken, setUserInfo } from '@/configs/api/cookie-service';
import {
  setAccessTokenLocal,
  setRefreshToken,
} from '@/configs/api/local-service';
import { login } from '@/redux/slice/user';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { IoReturnDownBack } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      email: '',
      pass_word: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await ApiLogin(values);
        toast.success('Login successfully');
        setAccessTokenLocal(response.metaData.token.accessToken);
        setUserInfo(response.metaData.user);
        setRefreshToken(response.metaData.token.refreshToken);
        setAccessToken(response.metaData.token.accessToken);

        dispatch(login(response.metaData.user));

        router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  });

  const dataInput: {
    placeholder: string;
    name: string;
    isPassword?: boolean;
    type?: string;
  }[] = [
    { placeholder: 'Email', name: 'email' },
    { placeholder: 'Password', name: 'pass_word', isPassword: true },
  ];
  return (
    <div className="mx-auto pt-10 md:w-3/4 lg:w-1/2 lg:pt-14">
      <div className="mx-5 my-10 rounded-lg bg-white p-8 md:p-14">
        <div>
          <h2>Welcome black</h2>
          <div className="mt-2 flex items-center justify-start">
            <p>Already have an account yet?</p>
            <Link href="/auth/register" className="ml-3 text-primary">
              Register
            </Link>
          </div>
        </div>
        <form className="mb-8" onSubmit={formik.handleSubmit}>
          {dataInput.map((data, i) => {
            return (
              <div key={i} className="relative">
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
              className="smooth-hover flex-box mt-8 w-2/5 rounded-lg bg-primary py-3 text-sm text-white hover:bg-secondary hover:text-white md:py-4 lg:mt-10"
            >
              Login
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

export default LoginPage;
