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
      role_id: initialData?.role_id || '2', // Default to user role
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
          role_id: values.role_id,
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

  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="mb-8 text-2xl font-semibold text-gray-800">
        {mode === 'add' ? 'Add New User' : 'Edit User'}
      </h1>

      <form
        className="mb-8 w-full lg:w-2/3"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        {DATA_EDIT_PROFILE_ADMIN.map((data, i) => {
          const value = formik.values[data.name as keyof typeof formik.values];
          const error = formik.errors[data.name as keyof typeof formik.errors];
          const touched =
            formik.touched[data.name as keyof typeof formik.touched];

          return (
            <div key={i} className="relative py-3">
              <InputField
                type={data.type}
                placeholder={data.placeholder}
                label={data.placeholder}
                name={data.name}
                value={String(value || '')}
                onChange={(e) => formik.handleChange(e)}
                onBlur={formik.handleBlur}
                error={error}
                touched={touched}
                disabled={data.name === 'role_id' && mode === 'edit'}
              />
            </div>
          );
        })}

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isLoading}
            className={twMerge(
              'bg-primary smooth-hover hover:bg-secondary flex-box mt-8 w-2/5',
              'rounded-lg py-3 text-lg text-white hover:text-white md:py-4 lg:mt-10',
              isLoading && 'cursor-not-allowed opacity-50',
            )}
          >
            {isLoading
              ? 'Processing...'
              : mode === 'add'
                ? 'Add User'
                : 'Save Changes'}
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className={twMerge(
              'border-primary text-primary smooth-hover hover:bg-primary flex-box mt-8 w-2/5',
              'rounded-lg border-2 py-3 text-lg hover:text-white md:py-4 lg:mt-10',
            )}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
