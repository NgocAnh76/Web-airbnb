'use client';

import { UserInfo } from '@/helper/type/type-user';
import { RootState } from '@/redux/rootReducer';
import { logout } from '@/redux/slice/user';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';
import {
  removeAccessToken,
  removeUserInfo,
} from '@/configs/api/cookie-service';

// Custom hook để xử lý responsive size
const useAvatarSize = (defaultSize: number) => {
  const [size, setSize] = useState(defaultSize);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setSize(40); // Mobile
      } else if (window.innerWidth < 1024) {
        setSize(60); // Tablet
      } else {
        setSize(90); // Desktop
      }
    };

    updateSize(); // Cập nhật kích thước ban đầu
    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return size;
};

interface AvatarCustomNameProps {
  name: string;
  defaultSize?: number;
  bgColor?: string;
  textColor?: string;
  className?: string;
  userId?: number | string;
}

export const AvatarCustomName = ({
  name,
  defaultSize = 40,
  bgColor = 'random',
  textColor = 'FFFFFF',
  userId,
  className,
}: AvatarCustomNameProps) => {
  const size = useAvatarSize(defaultSize);

  // Tạo màu ngẫu nhiên nếu bgColor là 'random'
  const getColorFromId = (id: number | string) => {
    const colors = [
      '1abc9c',
      '2ecc71',
      '3498db',
      '9b59b6',
      '34495e',
      '16a085',
      '27ae60',
      '2980b9',
      '8e44ad',
      '2c3e50',
      'f1c40f',
      'e67e22',
      'e74c3c',
      '95a5a6',
      'f39c12',
      'd35400',
      'c0392b',
      'bdc3c7',
      '7f8c8d',
    ];
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
    return colors[Math.abs(numericId) % colors.length];
  };

  const finalBgColor =
    bgColor === 'random' ? getColorFromId(userId || 0) : bgColor;
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name || 'User',
  )}&size=${size}&color=${textColor}&background=${finalBgColor}&rounded=true`;

  return (
    <div
      className={twMerge(
        'flex h-full w-full items-center justify-center rounded-full bg-gray-200',
        className,
      )}
    >
      <Image
        src={avatarUrl}
        alt={name}
        width={size}
        height={size}
        className="h-full w-full rounded-full object-cover"
      />
    </div>
  );
};

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
  name?: string;
  textColor?: string;
  bgColor?: string;
  userId?: number | string;
}

export const AvatarImage = ({
  src,
  alt = 'Avatar',
  size = 60,
  className,
  name,
  textColor = 'FFFFFF',
  bgColor = 'random',
  userId,
}: AvatarProps) => {
  const isBase64 = src?.startsWith('data:image');
  const [error, setError] = useState(false);
  const currentSize = useAvatarSize(size);

  return (
    <div
      className={twMerge('relative overflow-hidden rounded-full', className)}
      style={{ width: currentSize, height: currentSize }}
    >
      {src && !error ? (
        <Image
          src={isBase64 ? src : src}
          alt={alt}
          width={currentSize}
          height={currentSize}
          className="h-full w-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <AvatarCustomName
          name={name || alt}
          className="h-full w-full"
          defaultSize={currentSize}
          textColor={textColor}
          bgColor={bgColor}
          userId={userId}
        />
      )}
    </div>
  );
};

const Avatar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const pathname = usePathname();
  const isLogin = useSelector((state: RootState) => state.user.isLogin);

  const dataUser = useSelector(
    (state: RootState) => state.user.info,
  ) as UserInfo | null;

  const avatarUser = dataUser?.avatar;

  const nameUser = dataUser?.full_name || 'User';

  const data: { id: number; title: string; link?: string }[] = isLogin
    ? [
        { id: 1, title: 'Dashboard', link: '/user/dashboard' },
        { id: 2, title: 'Logout' },
      ]
    : [
        { id: 1, title: 'Dashboard', link: '/user/dashboard' },
        { id: 2, title: 'Login', link: '/auth/login' },
      ];
  const logoutUser = () => {
    removeAccessToken();
    removeUserInfo();
    dispatch(logout());
    toast.success('Logout successfully');
    router.push('/auth/login');
  };

  const hoverEnabled = useMemo(() => {
    const allowHoverPaths = ['/', '/home', '/detail', '/contact'];
    return allowHoverPaths.some(
      (allowedPath) =>
        pathname === allowedPath || pathname.startsWith(allowedPath),
    );
  }, [pathname]);

  return (
    <div
      className="relative p-2"
      onMouseEnter={() => hoverEnabled && setHover(true)}
      onMouseLeave={() => hoverEnabled && setHover(false)}
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
        className="absolute right-0 top-full overflow-hidden rounded-lg bg-white shadow-lg"
      >
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              className="smooth-hover cursor-pointer px-5 py-2 text-sm hover:bg-gray-300 lg:px-10 lg:py-3"
              onClick={() => {
                if (item.title === 'Logout') logoutUser();
              }}
            >
              {item.link ? (
                <Link
                  href={item.link}
                  className="block w-full text-sm text-black"
                >
                  {item.title}
                </Link>
              ) : (
                <button className="block w-full text-sm text-black">
                  {item.title}
                </button>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
export default Avatar;
