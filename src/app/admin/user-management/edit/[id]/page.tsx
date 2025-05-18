'use client';
import { InputField } from '@/components/atoms/input';
import { DATA_EDIT_PROFILE_ADMIN } from '@/components/atoms/input/data.input';
import IsLoading from '@/components/common/isLoading';
import { editProfileValidationSchema } from '@/components/common/schemaValidation';
import { setUser } from '@/configs/api/local-service';
import { getUserById, updateUser } from '@/configs/api/user';
import { TypeUpdateUser } from '@/helper/type/type-user';
import { setUserInfo } from '@/redux/slice/user';
import { useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';

const AdminEditUserPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ['users', id],
    queryFn: () => getUserById(Number(id)),
  });

  const formik = useFormik({
    initialValues: {
      email: data?.email || '',
      full_name: data?.full_name || '',
      phone: data?.phone || '',
      birth_day: data?.birth_day || '',
      gender: data?.gender || '',
      pass_word: data?.pass_word || '',
      role_id: data?.role_id || '',
      avatar: data?.avatar || '',
    },
    validationSchema: editProfileValidationSchema,
    enableReinitialize: true,
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

        await updateUser(userData, Number(id));

        // Reload user data after update
        const updatedUser = await getUserById(Number(id));
        dispatch(setUserInfo(updatedUser));
        setUser(updatedUser);

        toast.success('Update profile successfully');
        router.push('/admin/user-management');
      } catch (error) {
        console.error(error);
        toast.error('Update profile failed');
      }
    },
  });

  const renderSelectOptions = (name: string, role: number) => {
    if (name === 'role_id') {
      return (
        <select
          name={name}
          value={role}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border-primary/50 text-dark focus:ring-primary/50 mt-3 w-full rounded-lg border bg-white p-3 text-sm shadow-md outline-none focus:border-none focus:ring-2 md:mt-5 md:p-4"
        >
          <option value="">Select role</option>
          <option value="1">Admin</option>
          <option value="2">User</option>
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
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      );
    }
    return null;
  };

  if (isLoading) return <IsLoading />;
  if (error) {
    toast.error('Failed to load user information');
    console.error(error);
  }

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center gap-2">
          <Link
            href="/admin/user-management"
            className="text-gray-600 hover:text-gray-900"
          >
            <IoIosArrowRoundBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-800">
            Edit User Information
          </h1>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <div className="mb-6">
            <h2 className="text-xl font-medium text-gray-800">
              Personal Information
            </h2>
            <p className="mt-2 text-gray-600">
              Make sure your information is always accurate and up to date
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {DATA_EDIT_PROFILE_ADMIN.map(({ placeholder, name, type }) => {
              const value = formik.values[name as keyof typeof formik.values];
              const error = formik.errors[name as keyof typeof formik.errors];
              const touched =
                formik.touched[name as keyof typeof formik.touched];
              return (
                <div key={name} className="relative">
                  {type === 'select' ? (
                    renderSelectOptions(name, data?.role_id)
                  ) : (
                    <InputField
                      label=""
                      name={name}
                      placeholder={placeholder}
                      value={value}
                      type={type}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={error as string}
                      touched={touched as boolean}
                      className="bg-gray-50"
                    />
                  )}
                </div>
              );
            })}

            <div className="col-span-2 mt-4 flex justify-end">
              <button
                type="submit"
                className={twMerge(
                  'smooth-hover rounded-lg bg-blue-600 px-6 py-3 text-white',
                  'hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none',
                )}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminEditUserPage;
