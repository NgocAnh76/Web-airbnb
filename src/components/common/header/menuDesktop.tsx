import React from 'react';
import { LINK_PAGES } from './data-header';
import { twMerge } from 'tailwind-merge';
import { IoMdArrowDropdown } from 'react-icons/io';
import Link from 'next/link';

type Props = {
  hovered: number | null;
  setHovered: (index: number | null) => void;
  pathname: string;
};
const MenuDesktop = ({ hovered, setHovered, pathname }: Props) => {
  return (
    <div className="hidden lg:block">
      <ul className="flex-box">
        {LINK_PAGES.map((link, i) => {
          const isActive = pathname === link.link;
          return (
            <li
              className={`group relative`}
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex-box px-5 text-sm">
                <Link
                  className={twMerge(
                    'group-hover:text-primary py-7 font-semibold',
                    isActive ? 'text-primary' : 'text-white',
                  )}
                  href={link.link}
                >
                  {link.label}
                </Link>
                <IoMdArrowDropdown className="group-hover:text-primary smooth-hover ml-2 text-2xl" />
              </div>
              <div
                className={`slide-down-effect bg-white ${
                  hovered === i ? 'slide-down-visible' : 'slide-down-hidden'
                }`}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuDesktop;
