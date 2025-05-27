import React from 'react';
import { FT_HEADERS, LINK_PAGES } from './data-header';
import { LogoDark } from '../logo';
import { FaXmark } from 'react-icons/fa6';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
const MenuMobile = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={`fixed left-0 top-0 z-[999] h-screen w-[80%] bg-white text-dark transition-transform duration-300 md:w-1/2 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện lan ra overlay
    >
      <div className="flex items-center justify-between border-b border-dark-2 p-3">
        <div>
          <LogoDark />
        </div>
        <FaXmark
          className="smooth-hover cursor-pointer text-base hover:text-primary"
          onClick={() => setIsOpen(false)}
        />
      </div>
      {/* link menu mobile */}
      <ul className="border-b border-dark-2 py-5">
        {LINK_PAGES.map((link, i) => (
          <li
            key={i}
            className="smooth-hover group  hover:bg-dark-2 hover:text-primary"
          >
            <div className="flex items-center  justify-between px-7 text-lg">
              <Link
                className="w-full p-3 text-base font-normal text-dark"
                href={link.link}
              >
                {link.label}
              </Link>
              <IoIosArrowForward className="smooth-hover ml-2 text-base group-hover:text-primary" />
            </div>
          </li>
        ))}
      </ul>
      {/* footer menu mobile */}
      <div>
        <ul className="p-7">
          {FT_HEADERS.map((item, i) => (
            <li className="p-3 text-base" key={i}>
              <h4 className="text-base font-medium">{item.title}</h4>
              <Link href={item.href} className="mt-2 text-sm text-secondary">
                {item?.sub}
              </Link>
              <div className="mt-2 flex items-center justify-start gap-7 text-lg text-secondary">
                {item?.social?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-base text-secondary"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <button className="smooth-hover mx-auto mt-3 flex items-center rounded-lg bg-primary px-20 py-4 text-sm text-white hover:bg-secondary">
          Become An Expert
        </button>
      </div>
    </div>
  );
};

export default MenuMobile;
