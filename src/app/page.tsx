'use client';
import { BannerHome } from '@/components/sections/home/home-banner';
import { useState } from 'react';
import LearnAbout from '@/components/sections/home/learn-about';
import {
  LocationForeign,
  LocationVietnam,
} from '@/components/sections/home/home-location';
export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState(
    '/images/homePages/banner_home.png',
  );
  return (
    <div>
      <BannerHome backgroundImage={backgroundImage} />
      <LocationForeign />
      <LocationVietnam />
      <LearnAbout />
    </div>
  );
}
