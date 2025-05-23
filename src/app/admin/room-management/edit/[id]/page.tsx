'use client';
import RoomFormPage from '../../RoomForm/page';
import { getRoomById } from '@/configs/api/room';
import { useParams } from 'next/navigation';
import IsLoading from '@/components/common/isLoading';
import { useQuery } from '@tanstack/react-query';

const RoomEditPage = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['room', id],
    queryFn: () => getRoomById(Number(id)),
  });

  if (isLoading) return <IsLoading />;
  if (error) {
    console.error(error);
  }

  return <RoomFormPage mode="edit" roomId={Number(id)} initialData={data} />;
};

export default RoomEditPage;
