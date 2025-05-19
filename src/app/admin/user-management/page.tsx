'use client';

import ActionButtons from '@/components/atoms/buttons';
import './user-management.css';

import IsLoading from '@/components/common/isLoading';
import { deleteUser, getUser } from '@/configs/api/user';
import { UserInfo } from '@/helper/type/type-user';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const UserManagementPage = () => {
  const queryClient = useQueryClient();
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUser,
  });

  if (isLoading) return <IsLoading />;
  if (error) {
    toast.error('Failed to load users');
    console.error(error);
  }

  const handleDelete = async (id: number) => {
    try {
      setDeletingId(id);
      await deleteUser(id);
      toast.success('User deleted successfully');
      // Invalidate and refetch users list
      await queryClient.invalidateQueries({ queryKey: ['users'] });
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete user');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="">
      <div className="container ">
        <div className="px-5 py-5 lg:px-10">
          <div className="mt-3 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                User Management
              </h1>
              <p className="mt-2 text-gray-600">
                View and manage user information in the system
              </p>
            </div>
            <Link
              href="/admin/user-management/add"
              className={twMerge(
                'smooth-hover bg-primary hover:bg-secondary',
                'rounded-lg px-6 py-3 text-white',
                'hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              )}
            >
              Add New User
            </Link>
          </div>
          <div className="scrollbar w-full overflow-x-scroll rounded-lg bg-white px-5 py-10 shadow-md md:overflow-auto lg:w-4/5">
            <table className="w-full text-black">
              <thead>
                <tr className="border-b border-gray-200 text-sm lg:text-base">
                  <th className="pb-4 text-left">ID</th>
                  <th className="pb-4 text-left">Tên</th>
                  <th className="pb-4 text-left">Email</th>
                  <th className="pb-4 text-left">Phone</th>
                  <th className="pb-4 text-left">Birthday</th>
                  <th className="pb-4 text-left">Gender</th>
                  <th className="pb-4 text-left">Role</th>
                  <th className="pb-4 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {data?.map((user: UserInfo) => (
                  <tr
                    key={user.user_id}
                    className="border-b border-gray-100 text-sm hover:bg-gray-50"
                  >
                    <td className="py-4">{user.user_id}</td>
                    <td className="py-4">{user.full_name}</td>
                    <td className="py-4">{user.email}</td>
                    <td className="py-4">{user.phone}</td>
                    <td className="py-4">{user.birth_day}</td>
                    <td className="py-4">{user.gender}</td>
                    <td className="py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs ${
                          user.role_id === 1
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {user.role_id === 1 ? 'Admin' : 'User'}
                      </span>
                    </td>
                    <td className="py-4">
                      <ActionButtons
                        id={user.user_id}
                        basePath="/admin/user-management"
                        onDelete={() => handleDelete(user.user_id)}
                        isDeleting={deletingId === user.user_id}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
