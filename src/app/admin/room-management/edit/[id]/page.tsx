'use client';

import IsLoading from '@/components/common/isLoading';
import { getRoomById } from '@/configs/api/room';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import RoomFormAdmin from '../../component/RoomFormAdmin';

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

  return <RoomFormAdmin mode="edit" roomId={Number(id)} initialData={data} />;
};

export default RoomEditPage;
