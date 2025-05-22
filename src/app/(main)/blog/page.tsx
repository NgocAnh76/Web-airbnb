'use client';
import Destination from '@/components/sections/blog/Destination';
import Mission from '@/components/sections/blog/Mission';
import Vision from '@/components/sections/blog/Vision';
import { BannerHome } from '@/components/sections/home/home-banner';
import React, { useState } from 'react';

const BlogPage = () => {
  const [ImageBanner] = useState('/images/banner/banner-2.jpg');
  return (
    <section>
      <BannerHome backgroundImage={ImageBanner} />
      <Destination />
      <Mission />
      <Vision />
    </section>
  );
};

export default BlogPage;
