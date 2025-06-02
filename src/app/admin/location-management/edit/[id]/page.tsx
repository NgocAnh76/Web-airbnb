'use client';
import React from 'react';
import LocationFormAdmin from '@/components/common/location-form-admin';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import IsLoading from '@/components/common/isLoading';
import { getLocationById } from '@/configs/api/location';

const EditLocationPage = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['locations', id],
    queryFn: () => getLocationById(Number(id)),
  });
  if (isLoading) return <IsLoading />;
  if (error) {
    console.error(error);
  }
  return (
    <LocationFormAdmin mode="edit" locationId={Number(id)} initialData={data} />
  );
};

export default EditLocationPage;
