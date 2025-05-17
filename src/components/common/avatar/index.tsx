import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { logOut } from '@/configs/api/local-service';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/rootReducer';
import { UserInfo } from '@/helper/type/type-user';
import { logout } from '@/redux/slice/user';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface AvatarCustomNameProps {
  name: string;
  defaultSize?: number;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export const AvatarCustomName = ({
  name,
  defaultSize = 40,
  bgColor = 'random',
  textColor = 'FFFFFF',
  className,
}: AvatarCustomNameProps) => {
  const [size, setSize] = useState(defaultSize);

  // Hàm xử lý resize
  const updateSize = () => {
    if (window.innerWidth < 640) {
      setSize(40); // Mobile
    } else if (window.innerWidth < 1024) {
      setSize(60); // Tablet
    } else {
      setSize(90); // Desktop
    }
  };

  useEffect(() => {
    updateSize(); // Cập nhật kích thước ban đầu
    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize); // Cleanup
    };
  }, []);

  // Tạo màu ngẫu nhiên nếu bgColor là 'random'
  // const getRandomColor = () => {
  //   const colors = [
  //     '1abc9c',
  //     '2ecc71',
  //     '3498db',
  //     '9b59b6',
  //     '34495e',
  //     '16a085',
  //     '27ae60',
  //     '2980b9',
  //     '8e44ad',
  //     '2c3e50',
  //     'f1c40f',
  //     'e67e22',
  //     'e74c3c',
  //     '95a5a6',
  //     'f39c12',
  //     'd35400',
  //     'c0392b',
  //     'bdc3c7',
  //     '7f8c8d',
  //   ];
  //   return colors[Math.floor(Math.random() * colors.length)];
  // };

  // const finalBgColor = bgColor === 'random' ? getRandomColor() : bgColor;
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name || 'User',
  )}&size=${size}&color=${textColor}&rounded=true`;

  return (
    <Image
      src={avatarUrl}
      alt={name || 'User Avatar'}
      className={twMerge(
        'rounded-full border border-gray-200 shadow-sm',
        className,
      )}
      width={size}
      height={size}
    />
  );
};

const Avatar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [hover, setHover] = useState(false);

  const dataUser = useSelector(
    (state: RootState) => state.user.info,
  ) as UserInfo | null;

  const avatarUser = dataUser?.avatar;

  const nameUser = dataUser?.full_name || 'User';

  const data: { id: number; title: string; link?: string }[] = [
    { id: 1, title: 'Dashboard', link: '/user/dashboard' },
    { id: 2, title: 'Logout' },
  ];
  const logoutUser = () => {
    dispatch(logout());
    toast.success('Logout successfully');
    router.push('/auth/login');
  };

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
        {avatarUser ? (
          <Image
            className="h-24 w-24 object-cover"
            src={avatarUser}
            alt={nameUser}
            width={200}
            height={200}
          />
        ) : (
          <AvatarCustomName name={nameUser} className="h-full w-full" />
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: hover ? 1 : 0, translateY: hover ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="absolute right-0 bottom-0 translate-y-full overflow-hidden rounded-lg bg-white"
      >
        <ul>
          {data.map((item) => {
            return (
              <li
                key={item.id}
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
