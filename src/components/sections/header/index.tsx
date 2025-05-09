'use client'
import '@/app/globals.css';
import { ButtonClient } from '@/components/atoms/buttons';
import { getUser } from '@/components/common/Api/auth';
import Avatar from '@/components/common/avatar';
import MenuDesktop from '@/components/common/header/menuDesktop';
import MenuMobile from '@/components/common/header/menuMobile';
import { LogoWhite } from '@/components/common/logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

const MainHeader = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // state sidebar
    const [hovered, setHovered] = useState<number | null>(null)
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const isRoomPage = pathname.includes("/room/"); // check if the current path is a room page

     

    const userLogin = getUser("isLogin");
  return (
    <header
    className={twMerge(
      `fixed z-[998] w-full smooth-hover`,
      ` ${isRoomPage ? "bg-secondary" : scrolled ? "bg-secondary" : ""}`
    )}
  >
    <div className="container mx-auto">
      <div className="flex-box justify-between px-3 md:px-10">
        <div className="flex-box gap-20">
         <LogoWhite />
         <MenuDesktop hovered={hovered} setHovered={setHovered} pathname={pathname} />
        </div>
        <div className="lg:ml-5 hidden lg:flex items-center gap-2">
          <ButtonClient
            href="/"
            className="text-sm py-3 mr-5 text-primary bg-white hover:bg-transparent hover:text-white smooth-hover whitespace-nowrap "
          >
            Become An Expert
          </ButtonClient>
          {userLogin ? (
            <Avatar />
          ) : (
            <ButtonClient
              href="/auth/register"
              className=" md:py-3 lg:py-5 hover:bg-white smooth-hover"
            >
              Login/Register
            </ButtonClient>
          )}
        </div>
        {/* header right mobile */}
        <div className="flex-box text-3xl gap-3 lg:hidden">
          {userLogin ? (
            <Avatar />
          ) : (
            <Link href="/auth/register">
              <FaRegUserCircle className="text-2xl md:text-3xl text-white" />
            </Link>
          )}
          <button onClick={() => setIsOpen(true)}>
            <IoReorderThreeOutline />
          </button>

          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-[998]"
              onClick={() => setIsOpen(false)} // Click overlay để đóng
            />
          )}

              {/* menu mobile */}
              <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  </header>
  )
}

export default MainHeader