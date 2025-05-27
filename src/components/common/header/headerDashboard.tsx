import React from 'react';
import { LogoWhite } from '../logo';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { removeUserInfo } from '@/configs/api/cookie-service';
import { logout } from '@/redux/slice/user';
import { removeAccessToken } from '@/configs/api/cookie-service';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const HeaderDashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const logoutUser = () => {
    removeAccessToken();
    removeUserInfo();
    dispatch(logout());
    toast.success('Logout successfully');
    router.push('/auth/login');
  };
  return (
    <header>
      <div className="flex items-center justify-between border-b border-white/50 px-5 py-3 lg:px-24">
        <LogoWhite />
        <div className="flex-box gap-5">
          <div className="flex-box smooth-hover cursor-pointer gap-2 rounded-md border border-transparent px-5 py-2 text-sm hover:border-white">
            <Link href={'/'} className="block hover:text-white lg:hidden">
              Home
            </Link>
            <Link href={'/'} className="hidden hover:text-white lg:block">
              Back to home{' '}
            </Link>
            <IoReturnDownBackOutline />
          </div>
          <button
            className={twMerge(
              'smooth-hover rounded-md bg-white px-4 py-2 text-sm text-primary hover:bg-primary hover:text-white lg:px-7',
              'border border-white',
            )}
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
