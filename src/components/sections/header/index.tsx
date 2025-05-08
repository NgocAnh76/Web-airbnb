'use client'
import { ButtonClient } from '@/components/atoms/buttons';
import { getUser } from '@/components/common/Api/auth';
import Avatar from '@/components/common/avatar';
import { FT_HEADERS, LINK_PAGES } from '@/components/common/header/header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { IoIosArrowForward, IoMdArrowDropdown } from 'react-icons/io';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';
import '@/app/globals.css';

const MainHeader = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // state sidebar
    const [hovered, setHovered] = useState(null);
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
      <div className="flex-box justify-between">
        <div className="flex-box gap-5">
          <Link className=" flex-box lg:w-40 lg:h-28" href={"/"}>
            <img
              className=""
              src="/images/homePages/logo-light.svg"
              alt="logo"
            />
          </Link>
          <div className="hidden lg:block">
            <ul className="flex-box">
              {LINK_PAGES.map((link, i) => {
                 const isActive = pathname === link.link
                return (
                  <li
                    className={`relative group `}
                    key={i}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="px-7 flex-box text-xl">
                      <Link
                      className={twMerge(
                        "py-10 group-hover:text-primary",
                        isActive ? "text-primary" : "text-white"
                      )}
                        href={link.link}
                      >
                        {link.label}
                      </Link>
                      <IoMdArrowDropdown className="ml-2 text-3xl group-hover:text-primary smooth-hover" />
                    </div>
                    <div
                      className={`slide-down-effect bg-white ${
                        hovered === i
                          ? "slide-down-visible"
                          : "slide-down-hidden"
                      }`}
                    ></div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="lg:ml-5 hidden lg:flex items-center gap-2">
          <ButtonClient
            href="/"
            className="mr-2 md:py-3 lg:py-5 lg:mr-5 text-primary bg-white hover:bg-transparent hover:text-white smooth-hover whitespace-nowrap "
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
        {/* Sidebar  */}
        <div className="flex-box text-3xl px-3 lg:hidden">
          {/* Icons */}
          {userLogin ? (
            <Avatar />
          ) : (
            <Link href="/auth/register">
              <FaRegUserCircle className="mr-3" />
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

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 w-[90%] md:w-1/2 h-[100vh] bg-white text-dark z-[999] 
        transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
            onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện lan ra overlay
          >
            {/* Header */}
            <div className="flex-box justify-between p-3 border-b-2 border-dark-2">
              <div>
                <img src="/images/homePages/logo-dark.svg" alt="logo" />
              </div>
              <FaXmark
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Menu */}
            <ul className="border-b-2 border-dark-2 py-5">
              {LINK_PAGES.map((link, i) => (
                <li
                  key={i}
                  className="group p-3 hover:bg-dark-2 hover:text-primary smooth-hover"
                >
                  <div className="px-7 flex-box justify-between text-lg">
                    <Link className="text-dark font-normal" href={link.link}>
                      {link.label}
                    </Link>
                    <IoIosArrowForward className="ml-2 text-xl group-hover:text-primary smooth-hover" />
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div>
              <ul className="p-7">
                {FT_HEADERS.map((item, i) => (
                  <li className="text-base p-3" key={i}>
                    <h4>{item.title}</h4>
                    <Link href={item.href} className="text-secondary mt-2">
                      {item?.sub}
                    </Link>
                    <div className="flex-box justify-start gap-7 text-secondary text-lg mt-2">
                      {item?.social?.map((item, index) => (
                        <Link key={index} href={item.href}>
                          {item.icon}
                        </Link>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
              <button className="bg-primary mt-3 py-5 px-20 mx-auto rounded-lg flex-box text-base text-white hover:bg-secondary smooth-hover">
                Become An Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default MainHeader