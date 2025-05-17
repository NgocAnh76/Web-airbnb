'use client';
import { InputField } from '@/components/atoms/input';
import { DATA_EDIT_PROFILE } from '@/components/atoms/input/data.input';
import Avatar from '@/components/common/avatar';
import HeaderDashboard from '@/components/common/header/headerDashboard';
import { editProfileValidationSchema } from '@/components/common/schemaValidation';
import { updateUser } from '@/configs/api/user';
import { UserInfo } from '@/helper/type/type-user';
import { RootState } from '@/redux/rootReducer';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineLock, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai';
import { BsShieldLock } from 'react-icons/bs';
import { FaCreditCard, FaUserFriends } from 'react-icons/fa';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';

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
    <ul className="border-dark-3 hidden rounded-lg border lg:block lg:w-1/3">
      {SETTINGS_MENU.map((menu) => {
        return (
          <li
            key={menu.id}
            className={twMerge(
              'group border-dark-3 border-b py-3 hover:bg-gray-100',
              menu.id === 6 && 'rounded-b-lg border-b-0',
              menu.id === 1 && 'rounded-t-lg',
            )}
          >
            <div className="flex-box justify-start gap-2 px-3">
              <div className="flex-box h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <p className="group-hover:text-primary smooth-hover text-black">
                  {menu.icon}
                </p>
              </div>
              <p className="group-hover:text-primary smooth-hover">
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
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const IdUser = dataUser?.user_id || 0;
  console.log(IdUser);
  const formik = useFormik({
    initialValues: {
      email: dataUser?.email || '',
      full_name: dataUser?.full_name || '',
      phone: dataUser?.phone || '',
      birth_day: dataUser?.birth_day || '',
      gender: dataUser?.gender || '',
    },
    validationSchema: editProfileValidationSchema,
    onSubmit: async (values) => {
      console.log('Form submitted with values:', values);
      console.log('Form validation errors:', formik.errors);
      console.log('Form touched fields:', formik.touched);

      if (Object.keys(formik.errors).length > 0) {
        console.log('Form has validation errors');
        return;
      }

      try {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key as keyof typeof values]);
        });
        if (avatar) {
          formData.append('avatar', avatar);
        }
        // Convert FormData to TypeUpdateUser
        const userData = {
          email: values.email,
          full_name: values.full_name,
          phone: values.phone,
          birth_day: values.birth_day,
          gender: values.gender,
        };

        await updateUser(userData, IdUser);
        toast.success('Update profile successfully');
      } catch (error) {
        toast.error('Failed to update profile');
      }
    },
  });

  return (
    <>
      <div className="bg-primary h-full w-full pb-2">
        <HeaderDashboard />
        <div className="container mx-auto">
          <div className="flex-box justify-start px-5 pt-2">
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
          <div className="flex-box border-dark-3 justify-between border-b pb-7">
            <div>
              <h2>Personal information</h2>
              <p>Update your information and learn how it is used.</p>
            </div>
            <div>
              <div className="relative">
                <Avatar />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
              </div>
            </div>
          </div>
          {/* input */}
          <div className="flex-box items-start gap-10 pt-5 lg:pt-10">
            <MenuEdit />
            <form
              className="mb-8 w-full lg:w-2/3"
              onSubmit={(e) => {
                e.preventDefault();
                console.log('Form submit event triggered');
                formik.handleSubmit(e);
              }}
            >
              {DATA_EDIT_PROFILE.map((data, i) => {
                return (
                  <div key={i} className="relative py-3">
                    <InputField
                      type={data.type}
                      placeholder={data.placeholder}
                      label={data.placeholder}
                      name={data.name}
                      value={
                        formik.values[data.name as keyof typeof formik.values]
                      }
                      onChange={(e) => {
                        console.log(
                          'Field changed:',
                          data.name,
                          e.target.value,
                        );
                        formik.handleChange(e);
                      }}
                      onBlur={formik.handleBlur}
                      error={
                        formik.errors[data.name as keyof typeof formik.errors]
                      }
                      touched={
                        formik.touched[data.name as keyof typeof formik.touched]
                      }
                    />
                  </div>
                );
              })}
              <div>
                <button
                  type="submit"
                  className="bg-primary smooth-hover hover:bg-secondary flex-box mt-8 w-2/5 rounded-lg py-3 text-lg text-white hover:text-white md:py-4 lg:mt-10"
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
