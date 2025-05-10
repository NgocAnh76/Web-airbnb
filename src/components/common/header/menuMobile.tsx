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
      className={`text-dark fixed top-0 left-0 z-[999] h-screen w-[80%] bg-white transition-transform duration-300 md:w-1/2 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện lan ra overlay
    >
      <div className="flex-box border-dark-2 justify-between border-b p-3">
        <div>
          <LogoDark />
        </div>
        <FaXmark
          className="hover:text-primary smooth-hover cursor-pointer text-base"
          onClick={() => setIsOpen(false)}
        />
      </div>
      {/* link menu mobile */}
      <ul className="border-dark-2 border-b py-5">
        {LINK_PAGES.map((link, i) => (
          <li
            key={i}
            className="group hover:bg-dark-2 hover:text-primary smooth-hover p-3"
          >
            <div className="flex-box justify-between px-7 text-lg">
              <Link
                className="text-dark text-base font-normal"
                href={link.link}
              >
                {link.label}
              </Link>
              <IoIosArrowForward className="group-hover:text-primary smooth-hover ml-2 text-base" />
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
              <Link href={item.href} className="text-secondary mt-2 text-sm">
                {item?.sub}
              </Link>
              <div className="flex-box text-secondary mt-2 justify-start gap-7 text-lg">
                {item?.social?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-secondary text-base"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <button className="bg-primary flex-box hover:bg-secondary smooth-hover mx-auto mt-3 rounded-lg px-20 py-4 text-sm text-white">
          Become An Expert
        </button>
      </div>
    </div>
  );
};

export default MenuMobile;
