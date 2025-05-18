'use client';
import { RoomCard } from '@/components/atoms/card';
import DashboardClient from '@/components/common/dashboard';
import { BannerHome } from '@/components/sections/home/home-banner';
import { useGetRoomByLocationId } from '@/configs/api/queries';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import IsLoading from '@/components/common/isLoading';

const DetailLocation = () => {
  const [backgroundImage] = useState('/images/banner/banner-location.png');
  const { id } = useParams();
  const { data, isLoading, error } = useGetRoomByLocationId(Number(id));
  if (isLoading) return <IsLoading />;
  if (error) toast.error(error.message);
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  return (
    <>
      <BannerHome backgroundImage={backgroundImage} />
      <section>
        <div className="container mx-auto">
          <div className="my-10 flex gap-2 lg:gap-5">
            <DashboardClient />
            <RoomCard data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailLocation;
