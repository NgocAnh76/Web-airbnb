'use client';
import { ButtonClient } from '@/components/atoms/buttons';
import { SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { LOCATIONS_FOREIGN, LOCATIONS_VIETNAM } from '@/_mocks/home.mock';
import 'swiper/css';
import 'swiper/css/navigation';
import { RectangleCard } from '@/components/atoms/card';
import { MdArrowOutward } from 'react-icons/md';
import './Location.css';
import Link from 'next/link';
import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

export const LocationForeign = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="px-5 py-20">
          <div className="flex-box justify-between">
            <div className="">
              <h2 className="mb-2 text-black">Popular Destinations</h2>
              <p className="text-base">
                These popular destinations have a lot to offer
              </p>
            </div>
            <div className="hidden lg:block">
              <ButtonClient
                href={'/'}
                className="flex-box text-primary bg-dark-2 smooth-hover hover:bg-primary px-10 text-sm hover:text-white lg:text-base"
              >
                View All Destinations <MdArrowOutward />
              </ButtonClient>
            </div>
          </div>
          <div>
            <div className="mt-5 w-full overflow-hidden lg:mt-10">
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={false} // Căn giữa slide
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 2.1,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4.2,
                    spaceBetween: 20,
                  },
                }}
                style={{ overflow: 'visible' }} // Đảm bảo các slide không bị ẩn
                className="w-100% h-[500px] lg:h-[400px] lg:w-[1200px]"
              >
                {LOCATIONS_FOREIGN.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className="">
                      <RectangleCard
                        image={item.image}
                        title={item.name}
                        link={`/location/${item.id}`}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export const LocationVietnam = () => {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section>
      <div className="container mx-auto">
        <div className="mb-5 px-5 py-10">
          <div className="md:mb-5">
            <h2 className="py-2">Trending domestic destinations</h2>
            <p>Travelers searching for Vietnam also book these places</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {LOCATIONS_VIETNAM.slice(0, 2).map((item, index) => (
              <div
                className="relative mt-2 h-full w-full overflow-hidden py-5 md:p-2"
                key={index}
                onMouseEnter={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
              >
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                />
                <div className="absolute top-0 left-0 flex items-center gap-2 p-10">
                  <h3>{item.name} </h3>
                  <Image
                    className="block h-10 w-10 object-cover"
                    src={'/images/homePages/homeLocations/flag-vietnam.png'}
                    alt="vietnam"
                    width={40}
                    height={40}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hover === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={twMerge(
                    'absolute inset-0 my-5 rounded-lg bg-black/50 md:m-2',
                  )}
                >
                  <Link
                    href={`/location/${item.id}`}
                    className="block h-full w-full"
                  ></Link>
                </motion.div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS_VIETNAM.slice(2, 6).map((item, index) => (
              <div
                className="relative mt-2 h-full w-full overflow-hidden py-5 md:p-2"
                key={index}
                onMouseEnter={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
              >
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                />
                <div className="absolute top-0 left-0 flex items-center gap-2 p-10">
                  <h3>{item.name} </h3>
                  <Image
                    className="block h-10 w-10 object-cover object-center"
                    src={'/images/homePages/homeLocations/flag-vietnam.png'}
                    alt="vietnam"
                    width={40}
                    height={40}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hover === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={twMerge(
                    'absolute inset-0 my-5 rounded-lg bg-black/50 md:m-2',
                  )}
                >
                  <Link
                    href={`/location/${item.id}`}
                    className="block h-full w-full"
                  ></Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
