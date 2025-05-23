'use client';

import { InputField } from '@/components/atoms/input';
import { DATA_EDIT_PROFILE_ADMIN } from '@/components/atoms/input/data.input';
import { editProfileValidationSchema } from '@/components/common/schemaValidation';
import { register } from '@/configs/api/auth';
import { updateUser } from '@/configs/api/user';
import { TypeUpdateUser, UserInfo } from '@/helper/type/type-user';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';

interface UserFormProps {
  mode: 'add' | 'edit';
  userId?: number;
  initialData?: UserInfo;
}

const UserForm = ({ mode, userId, initialData }: UserFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: initialData?.email || '',
      full_name: initialData?.full_name || '',
      phone: initialData?.phone || '',
      birth_day: initialData?.birth_day || '',
      gender: initialData?.gender || '',
      pass_word: initialData?.pass_word || '',
      role_id: initialData?.role_id || 2, // Default to user role as number
      avatar: initialData?.avatar || '',
    },
    validationSchema: editProfileValidationSchema,
    onSubmit: async (values) => {
      if (Object.keys(formik.errors).length > 0) {
        return;
      }

      setIsLoading(true);
      try {
        const userData = {
          email: values.email,
          full_name: values.full_name,
          phone: values.phone,
          birth_day: values.birth_day,
          gender: values.gender,
          pass_word: values.pass_word,
          role_id: Number(values.role_id), // Ensure role_id is a number
          avatar: values.avatar,
        } as TypeUpdateUser;

        if (mode === 'add') {
          await register(userData);
          toast.success('User created successfully');
        } else if (mode === 'edit' && userId) {
          await updateUser(userData, userId);
          toast.success('User updated successfully');
        }

        router.push('/admin/user-management');
        router.refresh();
      } catch (error) {
        console.error(error);
        toast.error(
          mode === 'add' ? 'Failed to create user' : 'Failed to update user',
        );
      } finally {
        setIsLoading(false);
      }
    },
  });

  const renderSelectOptions = (name: string) => {
    if (name === 'role_id') {
      return (
        <select
          name={name}
          value={formik.values.role_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-3 w-full rounded-lg border border-primary/50 bg-white p-3 text-sm text-dark shadow-md outline-none focus:border-none focus:ring-2 focus:ring-primary/50 md:mt-5 md:p-4"
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
          value={String(
            formik.values[name as keyof typeof formik.values] || '',
          )}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-3 w-full rounded-lg border border-primary/50 bg-white p-3 text-sm text-dark shadow-md outline-none focus:border-none focus:ring-2 focus:ring-primary/50 md:mt-5 md:p-4"
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
    <div className="container mx-auto px-5 py-10">
      <h1 className="mb-8 text-2xl font-semibold text-gray-800">
        {mode === 'add' ? 'Add New User' : 'Edit User'}
      </h1>

      <form
        className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {DATA_EDIT_PROFILE_ADMIN.map(({ placeholder, name, type }) => {
            const value = formik.values[name as keyof typeof formik.values];
            const error = formik.errors[name as keyof typeof formik.errors];
            const touched = formik.touched[name as keyof typeof formik.touched];
            return (
              <div key={name} className="relative mb-3">
                {type === 'select' ? (
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium text-gray-700">
                      {placeholder}
                    </label>
                    {renderSelectOptions(name)}
                    {error && touched && (
                      <p className="mt-1 text-sm text-red-500">{error}</p>
                    )}
                  </div>
                ) : (
                  <InputField
                    label={placeholder}
                    name={name}
                    placeholder={placeholder}
                    value={String(value || '')}
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
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className={twMerge(
              'smooth-hover flex-box w-32 rounded-lg border-2 border-primary py-3',
              'text-sm font-medium text-primary hover:bg-primary hover:text-white',
            )}
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className={twMerge(
              'smooth-hover flex-box w-32 rounded-lg bg-primary py-3',
              'text-sm font-medium text-white hover:bg-secondary',
              isLoading && 'cursor-not-allowed opacity-50',
            )}
          >
            {isLoading
              ? 'Processing...'
              : mode === 'add'
                ? 'Add User'
                : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
