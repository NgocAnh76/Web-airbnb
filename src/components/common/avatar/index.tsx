import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { logOut } from '@/components/common/Api/auth';
import Link from 'next/link';
import Image from 'next/image';
const Avatar = () => {
  const [hover, setHover] = useState(false);
  const data: { title: string; link?: string }[] = [
    { title: 'My Profile', link: '/user/profile' },
    { title: 'Dashboard', link: '/user/dashboard' },
    { title: 'Logout' },
  ];
  const logoutUser = logOut();
  return (
    <div
      className="relative p-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={twMerge(
          'h-12 w-12 rounded-full md:h-14 md:w-14',
          'block overflow-hidden object-center',
        )}
      >
        <Image
          className="h-24 w-24 object-cover"
          src="/images/homePages/barcelona.jpg"
          alt="avatar"
          width={200}
          height={200}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: hover ? 1 : 0, translateY: hover ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="absolute right-0 bottom-0 translate-y-full overflow-hidden rounded-lg bg-white"
      >
        <ul>
          {data.map((item, index) => {
            return (
              <li
                key={index}
                className="smooth-hover px-5 py-1 hover:bg-gray-300 lg:px-10 lg:py-2"
              >
                {item.title === 'Logout' ? (
                  <button
                    className={twMerge('text-dark text-sm')}
                    onClick={() => {
                      logoutUser();
                    }}
                  >
                    {item.title}
                  </button>
                ) : (
                  <Link
                    className={twMerge('text-dark text-sm')}
                    href={item.link || ''}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default Avatar;
