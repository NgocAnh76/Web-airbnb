'use client';
import Destination from '@/components/sections/blog/Destination';
import Mission from '@/components/sections/blog/Mission';
import Vision from '@/components/sections/blog/Vision';
import { BannerHome } from '@/components/sections/home/home-banner';

const BlogPage = () => {
  return (
    <section>
      <BannerHome backgroundImage={'/images/banner/banner-2.jpg'} />
      <Destination />
      <Mission />
      <Vision />
    </section>
  );
};

export default BlogPage;
