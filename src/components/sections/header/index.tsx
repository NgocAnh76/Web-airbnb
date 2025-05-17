'use client';
import '@/app/globals.css';
import { ButtonClient } from '@/components/atoms/buttons';
import Avatar from '@/components/common/avatar';
import MenuDesktop from '@/components/common/header/menuDesktop';
import MenuMobile from '@/components/common/header/menuMobile';
import { LogoWhite } from '@/components/common/logo';
import { getUser } from '@/configs/api/local-service';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

const MainHeader = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // state sidebar
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isRoomPage = pathname.includes('/room/'); // check if the current path is a room page

  const userLogin = getUser();
  return (
    <header
      className={twMerge(
        `smooth-hover fixed z-[998] w-full`,
        ` ${isRoomPage ? 'bg-secondary' : scrolled ? 'bg-secondary' : ''}`,
      )}
    >
      <div className="container mx-auto">
        <div className="flex-box justify-between px-3 md:px-10">
          <div className="flex-box gap-20">
            <LogoWhite />
            <MenuDesktop
              hovered={hovered}
              setHovered={setHovered}
              pathname={pathname}
            />
          </div>
          <div className="hidden items-center gap-2 lg:ml-5 lg:flex">
            <ButtonClient
              href="/"
              className="text-primary smooth-hover mr-5 bg-white py-3 text-sm whitespace-nowrap hover:bg-transparent hover:text-white"
            >
              Become An Expert
            </ButtonClient>
            {userLogin ? (
              <Avatar />
            ) : (
              <ButtonClient
                href="/auth/register"
                className="smooth-hover hover:bg-white md:py-3 lg:py-5"
              >
                Login/Register
              </ButtonClient>
            )}
          </div>
          {/* header right mobile */}
          <div className="flex-box gap-3 text-3xl lg:hidden">
            {userLogin ? (
              <Avatar />
            ) : (
              <Link href="/auth/register">
                <FaRegUserCircle className="text-2xl text-white md:text-3xl" />
              </Link>
            )}
            <button onClick={() => setIsOpen(true)}>
              <IoReorderThreeOutline />
            </button>

            {/* Overlay */}
            {isOpen && (
              <div
                className="fixed inset-0 z-[998] bg-black/50"
                onClick={() => setIsOpen(false)} // Click overlay để đóng
              />
            )}

            {/* menu mobile */}
            <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
