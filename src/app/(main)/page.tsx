'use client';
import { BannerHome } from '@/components/sections/home/home-banner';
import { useState } from 'react';
import LearnAbout from '@/components/sections/home/learn-about';
import {
  LocationForeign,
  LocationVietnam,
} from '@/components/sections/home/home-location';
import HomeComment from '@/components/sections/home/home-comment';
import SupportClient from '@/components/sections/home/support-client';

export default function Home() {
  const [backgroundImage] = useState('/images/homePages/banner_home.png');
  return (
    <div>
      <BannerHome backgroundImage={backgroundImage} />
      <LocationForeign />
      <LocationVietnam />
      <LearnAbout />
      <SupportClient />
      <HomeComment />
    </div>
  );
}
