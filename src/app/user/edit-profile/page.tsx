'use client';
import { InputField } from '@/components/atoms/input';
import { DATA_EDIT_PROFILE } from '@/components/atoms/input/data.input';
import { AvatarImage } from '@/components/common/avatar';
import HeaderDashboard from '@/components/common/header/headerDashboard';
import { editProfileValidationSchema } from '@/components/common/schemaValidation';
import { updateUser, getUserById } from '@/configs/api/user';
import { TypeUpdateUser, UserInfo } from '@/helper/type/type-user';
import { RootState } from '@/redux/rootReducer';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineLock, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai';
import { BsShieldLock } from 'react-icons/bs';
import { FaCreditCard, FaUserFriends } from 'react-icons/fa';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';
import { setUserInfo } from '@/redux/slice/user';
import { setUser } from '@/configs/api/local-service';

const SETTINGS_MENU = [
  { id: 1, name: 'Personal Information', icon: <AiOutlineUser /> },
  { id: 2, name: 'Security Settings', icon: <AiOutlineLock /> },
  { id: 3, name: 'Travel Companion', icon: <FaUserFriends /> },
  { id: 4, name: 'General Settings', icon: <AiOutlineSetting /> },
  { id: 5, name: 'Payment Methods', icon: <FaCreditCard /> },
  { id: 6, name: 'Privacy & Data Management', icon: <BsShieldLock /> },
];

const MenuEdit = () => {
  return (
    <ul className="hidden rounded-lg border border-dark-3 lg:block lg:w-1/3">
      {SETTINGS_MENU.map((menu) => {
        return (
          <li
            key={menu.id}
            className={twMerge(
              'group border-b border-dark-3 py-3 hover:bg-gray-100',
              menu.id === 6 && 'rounded-b-lg border-b-0',
              menu.id === 1 && 'rounded-t-lg',
            )}
          >
            <div className="flex items-center justify-start gap-2 px-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <p className="smooth-hover text-black group-hover:text-primary">
                  {menu.icon}
                </p>
              </div>
              <p className="smooth-hover group-hover:text-primary">
                {menu.name}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const EditProfile = () => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const dispatch = useDispatch();

  const dataUser = useSelector(
    (state: RootState) => state.user.info,
  ) as UserInfo | null;

  useEffect(() => {
    if (dataUser?.avatar) {
      setPreviewUrl(dataUser.avatar);
    }
  }, [dataUser]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreviewUrl(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const IdUser = dataUser?.user_id || 0;

  const formik = useFormik({
    initialValues: {
      email: dataUser?.email || '',
      full_name: dataUser?.full_name || '',
      phone: dataUser?.phone || '',
      birth_day: dataUser?.birth_day || '',
      gender: dataUser?.gender || '',
      pass_word: dataUser?.pass_word || '',
      role_id: dataUser?.role_id || '',
      avatar: dataUser?.avatar || '',
    },
    validationSchema: editProfileValidationSchema,
    onSubmit: async (values) => {
      if (Object.keys(formik.errors).length > 0) {
        return;
      }

      try {
        const userData = {
          email: values.email,
          full_name: values.full_name,
          phone: values.phone,
          birth_day: values.birth_day,
          gender: values.gender,
          pass_word: values.pass_word,
          role_id: values.role_id,
          avatar: values.avatar,
        } as TypeUpdateUser;

        if (avatar) {
          const formData = new FormData();
          Object.keys(userData).forEach((key) => {
            if (key !== 'avatar') {
              formData.append(key, userData[key as keyof typeof userData]);
            }
          });
          formData.append('avatar', avatar);
          await updateUser(formData, IdUser);
        } else {
          await updateUser(userData, IdUser);
        }

        // Reload user data after update
        const updatedUser = await getUserById(IdUser);
        dispatch(setUserInfo(updatedUser));
        setUser(updatedUser);

        toast.success('Update profile successfully');
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="h-full w-full bg-primary pb-2">
        <HeaderDashboard />
        <div className="container mx-auto">
          <div className="flex items-center justify-start px-5 pt-2">
            <IoIosArrowRoundBack className="text-white lg:text-xl" />
            <Link
              href="/user/profile"
              className="text-sm text-white hover:text-white"
            >
              Account
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="px-5 py-10 md:px-10">
          {/* title */}
          <div className="flex w-full flex-col gap-5 border-b border-dark-3 pb-7 md:flex-row md:justify-between">
            <div className="w-3/5">
              <h2>Personal information</h2>
              <p>Update your information and learn how it is used.</p>
            </div>
            <div className="flex w-2/5 items-center justify-between gap-4">
              <div className="flex w-full items-center md:justify-end">
                <div className="relative">
                  <AvatarImage
                    src={previewUrl}
                    alt={dataUser?.full_name || 'User'}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                    <span className="rounded bg-black/50 px-2 py-1 text-[10px] text-white md:text-sm">
                      Edit Avatar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* input */}
          <div className="flex items-start gap-10 pt-5 lg:pt-10">
            <MenuEdit />
            <form
              className="mb-8 w-full lg:w-2/3"
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit(e);
              }}
            >
              {DATA_EDIT_PROFILE.map((data, i) => {
                const value =
                  formik.values[data.name as keyof typeof formik.values];
                const error =
                  formik.errors[data.name as keyof typeof formik.errors];
                const touched =
                  formik.touched[data.name as keyof typeof formik.touched];
                return (
                  <div key={i} className="relative py-3">
                    <InputField
                      type={data.type}
                      placeholder={data.placeholder}
                      label={data.placeholder}
                      name={data.name}
                      value={
                        typeof value === 'number'
                          ? value.toString()
                          : (value as string) || ''
                      }
                      onChange={(e) => formik.handleChange(e)}
                      onBlur={formik.handleBlur}
                      error={error}
                      touched={touched}
                      disabled={data.name === 'role_id'}
                    />
                  </div>
                );
              })}
              <div>
                <button
                  type="submit"
                  className={twMerge(
                    'smooth-hover mt-8 flex w-2/5 items-center justify-center bg-primary hover:bg-secondary',
                    'rounded-lg py-3 text-lg text-white hover:text-white md:py-4 lg:mt-10',
                  )}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
