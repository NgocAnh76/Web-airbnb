'use client';

import ActionButtons from '@/components/atoms/buttons';
import IsLoading from '@/components/common/isLoading';
import { deleteLocation, getLocation } from '@/configs/api/location';
import { LocationInfo } from '@/helper/type/location';
import { useQuery } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../user-management/user-management.css';

const LocationManagement = () => {
  const queryClient = useQueryClient();
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocation,
  });

  if (isLoading) return <IsLoading />;
  if (error) {
    toast.error('Failed to load users');
    console.error(error);
  }

  const handleDelete = async (id: number) => {
    try {
      setDeletingId(id);
      await deleteLocation(id);
      toast.success('Location deleted successfully');
      // Invalidate and refetch users list
      await queryClient.invalidateQueries({ queryKey: ['locations'] });
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete location');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="mt-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Location Management
          </h1>
          <p className="mt-2 text-gray-600">
            View and manage location information in the system
          </p>
        </div>
        <div className="scrollbar w-full overflow-x-scroll rounded-lg bg-white px-5 py-10 shadow-md md:overflow-auto lg:w-4/5">
          <table className="w-full text-black">
            <thead>
              <tr className="border-b border-gray-200 text-sm lg:text-base">
                <th className="pb-4 text-left">ID</th>
                <th className="pb-4 text-left">Image</th>
                <th className="pb-4 text-left">Name</th>
                <th className="pb-4 text-left">Province</th>
                <th className="pb-4 text-left">Nation</th>
                <th className="pb-4 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((location: LocationInfo) => (
                <tr
                  key={location.location_id}
                  className="border-b border-gray-100 text-sm hover:bg-gray-50"
                >
                  <td className="py-4 text-center">
                    <Image
                      src={location.image_location}
                      alt={location.name_location}
                      width={100}
                      height={100}
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                  </td>
                  <td className="py-4">{location.location_id}</td>
                  <td className="py-4">{location.name_location}</td>
                  <td className="py-4">{location.province}</td>
                  <td className="py-4">{location.nation}</td>
                  <td className="py-4">
                    <ActionButtons
                      id={location.location_id}
                      basePath="/admin/location-management"
                      onDelete={() => handleDelete(location.location_id)}
                      isDeleting={deletingId === location.location_id}
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

export default LocationManagement;
