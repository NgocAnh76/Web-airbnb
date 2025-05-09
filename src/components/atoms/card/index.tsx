'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

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
