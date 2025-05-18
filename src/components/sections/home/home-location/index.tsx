'use client';
import { ButtonClient } from '@/components/atoms/buttons';
import { RectangleCard } from '@/components/atoms/card';
import IsLoading from '@/components/common/isLoading';
import { useForeignLocations, useVNLocation } from '@/configs/api/queries';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { toast } from 'react-toastify';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { twMerge } from 'tailwind-merge';
import './Location.css';

interface Location {
  location_id: number;
  name_location: string;
  image_location: string;
}

interface LocationCardProps {
  item: Location;
  onHover: (id: number | null) => void;
  isHovered: boolean;
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  showViewAll?: boolean;
}

const SWIPER_BREAKPOINTS = {
  640: { slidesPerView: 1, spaceBetween: 15 },
  768: { slidesPerView: 2.1, spaceBetween: 20 },
  1024: { slidesPerView: 4.2, spaceBetween: 20 },
};

const LocationCard = ({ item, onHover, isHovered }: LocationCardProps) => (
  <div
    className="relative mt-2 h-full w-full overflow-hidden py-5 md:p-2"
    onMouseEnter={() => onHover(item.location_id)}
    onMouseLeave={() => onHover(null)}
  >
    <Image
      className="h-full w-full rounded-lg object-cover"
      src={item.image_location}
      alt={item.name_location}
      width={300}
      height={300}
    />
    <div className="absolute top-0 left-0 flex items-center gap-2 p-10">
      <h3>{item.name_location}</h3>
      <Image
        className="block h-10 w-10 object-cover"
        src="/images/homePages/homeLocations/flag-vietnam.png"
        alt="vietnam"
        width={40}
        height={40}
      />
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={twMerge('absolute inset-0 my-5 rounded-lg bg-black/50 md:m-2')}
    >
      <Link
        href={`/location/${item.location_id}`}
        className="block h-full w-full"
      />
    </motion.div>
  </div>
);

const SectionHeader = ({
  title,
  subtitle,
  showViewAll = false,
}: SectionHeaderProps) => (
  <div className="flex-box justify-between">
    <div>
      <h2 className="mb-2 text-black">{title}</h2>
      <p className="text-base">{subtitle}</p>
    </div>
    {showViewAll && (
      <div className="hidden lg:block">
        <ButtonClient
          href="/"
          className={twMerge(
            'flex-box text-primary bg-dark-2 smooth-hover hover:bg-primary px-10',
            'border-primary border text-sm hover:border-none hover:text-white lg:text-base',
          )}
        >
          View All Destinations <MdArrowOutward />
        </ButtonClient>
      </div>
    )}
  </div>
);

export const LocationForeign = () => {
  const { data, isLoading, error } = useForeignLocations(84);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  if (isLoading) return <IsLoading />;

  return (
    <section>
      <div className="container mx-auto">
        <div className="px-5 py-20">
          <SectionHeader
            title="Popular Destinations"
            subtitle="These popular destinations have a lot to offer"
            showViewAll
          />
          <div className="mt-5 w-full overflow-hidden lg:mt-10">
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={1}
              breakpoints={SWIPER_BREAKPOINTS}
              style={{ overflow: 'visible' }}
              className="h-[500px] w-full lg:h-[400px]"
            >
              {data?.map((item: Location) => (
                <SwiperSlide key={item.location_id} className="h-full w-full">
                  <RectangleCard
                    image={item.image_location}
                    title={item.name_location}
                    link={`/location/${item.location_id}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export const LocationVietnam = () => {
  const [hover, setHover] = useState<number | null>(null);
  const { data, isLoading, error } = useVNLocation(84);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  if (isLoading) return <IsLoading />;

  return (
    <section>
      <div className="container mx-auto">
        <div className="mb-5 px-5 py-10">
          <SectionHeader
            title="Trending domestic destinations"
            subtitle="Travelers searching for Vietnam also book these places"
          />
          <div className="grid grid-cols-1 md:grid-cols-2">
            {data
              ?.slice(0, 2)
              .map((item: Location) => (
                <LocationCard
                  key={item.location_id}
                  item={item}
                  onHover={setHover}
                  isHovered={hover === item.location_id}
                />
              ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {data
              ?.slice(2, 6)
              .map((item: Location) => (
                <LocationCard
                  key={item.location_id}
                  item={item}
                  onHover={setHover}
                  isHovered={hover === item.location_id}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
