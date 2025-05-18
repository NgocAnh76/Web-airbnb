'use client';
import ActionButtons from '@/components/atoms/buttons';
import IsLoading from '@/components/common/isLoading';
import { deleteRoom, getRoom } from '@/configs/api/room';
import { RoomInfo } from '@/helper/type/room';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';

const RoomManagement = () => {
  const queryClient = useQueryClient();
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: getRoom,
  });

  if (isLoading) return <IsLoading />;
  if (error) {
    toast.error('Failed to load users');
    console.error(error);
  }

  const handleDelete = async (id: number) => {
    try {
      setDeletingId(id);
      await deleteRoom(id);
      toast.success('Room deleted successfully');
      // Invalidate and refetch users list
      await queryClient.invalidateQueries({ queryKey: ['rooms'] });
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete room');
    } finally {
      setDeletingId(null);
    }
  };
  const tableData = [
    { id: 1, name: 'Name' },
    { id: 2, name: 'Location' },
    { id: 3, name: 'Price' },
    { id: 4, name: 'Address' },
    { id: 5, name: 'Description' },
  ];

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="mt-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Room Management
          </h1>
          <p className="mt-2 text-gray-600">
            View and manage room information in the system
          </p>
        </div>
        <div className="scrollbar w-full overflow-x-scroll rounded-lg bg-white px-5 py-10 shadow-md md:overflow-auto lg:w-4/5">
          <table className="w-full text-black">
            <thead>
              <tr className="border-b border-gray-200 text-sm lg:text-base">
                {tableData.map((item) => (
                  <th key={item.id} className="pb-4 text-left">
                    {item.name}
                  </th>
                ))}
                <th className="pb-4 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((room: RoomInfo) => (
                <tr
                  key={room.room_id}
                  className="border-b border-gray-100 text-sm hover:bg-gray-50"
                >
                  <td className="py-4">{room.room_id}</td>
                  <td className="py-4">{room.room_name}</td>
                  {/* <td className="py-4">{room.locations.province}</td> */}
                  <td className="py-4">{room.price}</td>
                  <td className="py-4">{room.address}</td>
                  <td className="py-4">{room.description}</td>

                  <td className="py-4">
                    <ActionButtons
                      id={room.room_id}
                      basePath="/admin/room-management"
                      onDelete={() => handleDelete(room.room_id)}
                      isDeleting={deletingId === room.room_id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoomManagement;
