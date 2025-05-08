'use client'
import { BannerHome } from '@/components/sections/home/home-banner';
import { useState } from 'react';
export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState(
    "/images/homePages/banner_home.png"
  );
  return (
    <div>
      <BannerHome backgroundImage={backgroundImage} />
    </div>
  );
}
