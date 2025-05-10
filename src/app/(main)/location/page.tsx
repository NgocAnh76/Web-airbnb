'use client';
import { RoomCard } from '@/components/atoms/card';
import DashboardClient from '@/components/common/dashboard';
import { BannerHome } from '@/components/sections/home/home-banner';
import React, { useState } from 'react';

const DetailLocation = () => {
  const [backgroundImage] = useState('/images/banner/banner-location.png');
  const data = [
    {
      image: '/images/banner/banner-location.png',
      room_name: 'Room 1',
      address: '123 Main St, Anytown, USA',
      living_room: '1',
      bedroom: '1',
      bed: '1',
      bathroom: '1',
      kitchen: true,
      washing_machine: true,
      air_conditioner: true,
      television: true,
      wifi: true,
      iron: true,
      parking: true,
      pool: true,
      price: 100,
      room_id: 1,
      locations: {
        province: 'Anytown, USA',
      },
    },
  ];
  return (
    <>
      <BannerHome backgroundImage={backgroundImage} />
      <section className="my-10 lg:flex">
        <DashboardClient />
        <RoomCard data={data} />
      </section>
    </>
  );
};

export default DetailLocation;
