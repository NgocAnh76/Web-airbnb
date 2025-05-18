'use client';

import UserForm from '../../components/UserForm';
import { getUserById } from '@/configs/api/user';
import { useQuery } from '@tanstack/react-query';
import IsLoading from '@/components/common/isLoading';

interface EditUserPageProps {
  params: {
    id: string;
  };
}

const EditUserPage = ({ params }: EditUserPageProps) => {
  const { data: userData, isLoading } = useQuery({
    queryKey: ['user', params.id],
    queryFn: () => getUserById(Number(params.id)),
  });

  if (isLoading) return <IsLoading />;
  if (!userData) return <div>User not found</div>;

  return (
    <UserForm mode="edit" userId={Number(params.id)} initialData={userData} />
  );
};

export default EditUserPage;
