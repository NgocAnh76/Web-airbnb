'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { IoCheckboxOutline } from 'react-icons/io5';
import { FaXmark } from 'react-icons/fa6';
import { ButtonClient } from '../buttons';

interface RectangleCardProps {
  image: string;
  title: string;
  link: string;
  className?: string;
}

export const RectangleCard = ({
  image,
  title,
  link = '/',
  className,
}: RectangleCardProps) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="h-full w-full object-cover">
        <Image
          className="h-full w-full object-cover"
          src={image}
          alt={title}
          width={300}
          height={300}
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={twMerge(
          'absolute inset-0 rounded-lg bg-black/50',
          className,
        )}
      >
        <Link href={link}></Link>
      </motion.div>
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2"
        initial={{ y: 100 }}
        animate={{ y: hover ? 0 : 100 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-5 text-center">
          <h3 className="mb-10 text-lg text-white lg:text-xl">{title}</h3>
          <Link
            className="text-secondary mb-3 rounded-md bg-white px-20 py-4"
            href={link}
          >
            Discover
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

interface RoomCardProps {
  data: {
    image: string;
    room_name: string;
    address: string;
    living_room: string;
    bedroom: string;
    bed: string;
    bathroom: string;
    kitchen: boolean;
    washing_machine: boolean;
    air_conditioner: boolean;
    television: boolean;
    wifi: boolean;
    iron: boolean;
    parking: boolean;
    pool: boolean;
    price: number;
    room_id: number;
    locations: {
      province: string;
    };
  }[];
}

export const RoomCard = ({ data }: RoomCardProps) => {
  console.log(data);
  const iconTrue = <IoCheckboxOutline className="text-2xl text-green-500" />;
  const iconFalse = <FaXmark className="text-2xl text-red-500" />;
  return (
    <div className="container">
      {data.map((data, index) => {
        return (
          <div
            className="flex-box border-dark mx-2 my-2 gap-5 rounded-lg border p-3"
            key={index}
          >
            <div className="w-2/5">
              <img
                className="h-52 w-full rounded-lg object-cover md:h-56"
                src={data.image}
                alt={data.room_name}
              />
            </div>
            <div className="w-3/5">
              <div>
                <h3 className="text-black md:text-2xl">{data.room_name}</h3>
                <p className="md:text-lg">
                  {data.address}-{data.locations.province}
                </p>
              </div>
              <div className="justify-between gap-5 md:flex">
                <ul className="border-dark mt-3 h-24 w-full overflow-y-auto border-l-2 pl-2 md:mt-5 md:h-40 md:pl-3">
                  <li>
                    <p>Living Room:</p>
                    <p>{data.living_room}</p>
                  </li>
                  <li>
                    <p>Bed Room:</p>
                    <p>{data.bedroom}</p>
                  </li>
                  <li>
                    <p>Bed:</p>
                    <p>{data.bed}</p>
                  </li>
                  <li>
                    <p>Bathroom:</p>
                    <p>{data.bathroom}</p>
                  </li>
                  <li>
                    <p>Kitchen:</p>
                    <p>{data.kitchen ? iconTrue : iconFalse}</p>
                  </li>
                  <li>
                    <p>Washing Machine:</p>
                    <p>{data.washing_machine ? iconTrue : iconFalse}</p>
                  </li>
                  <li>
                    <p>Air Conditioner:</p>
                    <p>{data.air_conditioner ? iconTrue : iconFalse}</p>
                  </li>
                  <li>
                    <p>Television:</p>
                    <p>{data.television ? iconTrue : iconFalse} </p>
                  </li>
                  <li>
                    <p>Wifi:</p>
                    <p>{data.wifi ? iconTrue : iconFalse} </p>
                  </li>
                  <li>
                    <p>Iron</p>
                    <p>{data.iron ? iconTrue : iconFalse}</p>
                  </li>
                  <li>
                    <p>Kitchen:</p>
                    <p>{data.kitchen ? iconTrue : iconFalse}</p>
                  </li>
                  <li>
                    <p>Parking:</p>
                    <p>{data.parking ? iconTrue : iconFalse}</p>
                  </li>
                  <li>
                    <p>Pool:</p>
                    <p>{data.pool ? iconTrue : iconFalse}</p>
                  </li>
                </ul>

                <div className="mt-3 flex-col items-center justify-end md:flex">
                  <p className="mb-3 font-semibold text-black">
                    VND <span>{data.price}</span>
                  </p>
                  <ButtonClient
                    href={`/room/${data.room_id}`}
                    className="bg-primary px-5 py-2 whitespace-nowrap text-white"
                  >
                    View Details
                  </ButtonClient>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
