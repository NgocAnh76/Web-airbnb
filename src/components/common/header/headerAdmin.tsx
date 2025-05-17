'use client';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { LogoWhite } from '../logo';
import { useState } from 'react';
import { PiHouseLineDuotone } from 'react-icons/pi';
import { CiLocationOn, CiUser } from 'react-icons/ci';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';
import { DATA_MENU_ADMIN } from './data-header';

const HeaderAdmin = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="bg-primary flex h-16 items-center justify-between border-b border-white/50 px-5 py-3 lg:px-24">
        <LogoWhite />
        <div>
          <button onClick={handleOpen} className="lg:hidden">
            <IoReorderThreeOutline className="text-2xl" />
          </button>
        </div>
      </div>
      <ul
        className={twMerge(
          'bg-primary smooth-hover h-[calc(100vh-64px)] w-3/5 md:w-2/5',
          'fixed top-16',
          isOpen && 'translate-x-0',
          !isOpen && '-translate-x-full',
        )}
      >
        {DATA_MENU_ADMIN.map((item) => (
          <li
            key={item.id}
            className={twMerge(
              'border-dark-3 hover:bg-dark-2 border-b p-3',
              pathname === item.href && 'bg-gray-300',
            )}
          >
            <Link
              href={item.href}
              className={twMerge(
                'flex cursor-pointer items-center gap-2 text-white hover:text-white',
                pathname === item.href && 'text-primary',
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={twMerge(
          'fixed right-0 bottom-0 h-[calc(100vh-64px)] w-2/5 bg-black/40 md:w-3/5',
          'smooth-hover translate-x-full transform',
          isOpen && 'translate-x-0',
        )}
        onClick={handleClose}
      />
    </header>
  );
};

export default HeaderAdmin;
