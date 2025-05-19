'use client';
import { BannerHome } from '@/components/sections/home/home-banner';
import { useEffect, useState } from 'react';
import LearnAbout from '@/components/sections/home/learn-about';
import {
  LocationForeign,
  LocationVietnam,
} from '@/components/sections/home/home-location';
import HomeComment from '@/components/sections/home/home-comment';
import SupportClient from '@/components/sections/home/support-client';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const error = searchParams.get('error');
    if (error === 'unauthorized') {
      toast.error('You are not authorized to access this page');
    }
  }, [searchParams]);

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
