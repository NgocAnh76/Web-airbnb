import React from 'react'
import { LINK_PAGES } from './header';
import { twMerge } from 'tailwind-merge';
import { IoMdArrowDropdown } from 'react-icons/io';
import Link from 'next/link';

type Props = {
  hovered: number | null
  setHovered: (index: number | null) => void
  pathname: string
}
const MenuDesktop = ({ hovered, setHovered, pathname }: Props) => {
  return (
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
                    <div className="px-5 flex-box text-sm">
                      <Link
                      className={twMerge(
                        "py-7 font-semibold group-hover:text-primary",
                        isActive ? "text-primary" : "text-white"
                      )}
                        href={link.link}
                      >
                        {link.label}
                      </Link>
                      <IoMdArrowDropdown className="ml-2 text-2xl group-hover:text-primary smooth-hover" />
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
  )
}

export default MenuDesktop