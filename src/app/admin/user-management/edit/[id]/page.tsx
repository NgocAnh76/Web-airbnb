'use client';

import { useParams } from 'next/navigation';
import UserFormAdmin from '@/components/common/user-from-admin';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/configs/api/user';
import IsLoading from '@/components/common/isLoading';

const EditUserPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['users', id],
    queryFn: () => getUserById(Number(id)),
  });
  if (isLoading) return <IsLoading />;
  if (error) {
    console.error(error);
  }
  return <UserFormAdmin userId={Number(id)} mode="edit" initialData={data} />;
};

export default EditUserPage;
