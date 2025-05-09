import React from 'react'
import { FT_HEADERS, LINK_PAGES } from './header'
import { LogoDark } from '../logo'
import { FaXmark } from 'react-icons/fa6'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

type Props = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}
const MenuMobile = ({isOpen,setIsOpen}:Props) => {
  return (
    <div
    className={`fixed top-0 left-0 w-[80%] md:w-1/2 h-screen bg-white text-dark z-[999] 
transition-transform duration-300 ${
  isOpen ? "translate-x-0" : "-translate-x-full"
}`}
    onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện lan ra overlay
  >

    <div className="flex-box justify-between p-3 border-b border-dark-2">
      <div>
       <LogoDark />
      </div>
      <FaXmark
        className="cursor-pointer text-base hover:text-primary smooth-hover"
        onClick={() => setIsOpen(false)}
      />
    </div>
    {/* link menu mobile */}
    <ul className="border-b border-dark-2 py-5">
      {LINK_PAGES.map((link, i) => (
        <li
          key={i}
          className="group p-3 hover:bg-dark-2 hover:text-primary smooth-hover "
        >
          <div className="px-7 flex-box justify-between text-lg">
            <Link className="text-dark font-normal text-base" href={link.link}>
              {link.label}
            </Link>
            <IoIosArrowForward className="ml-2 text-base group-hover:text-primary smooth-hover" />
          </div>
        </li>
      ))}
    </ul>
    {/* footer menu mobile */}
    <div>
      <ul className="p-7">
        {FT_HEADERS.map((item, i) => (
          <li className="text-base p-3" key={i}>
            <h4 className='text-base font-medium'>{item.title}</h4>
            <Link href={item.href} className="text-secondary text-sm mt-2">
              {item?.sub}
            </Link>
            <div className="flex-box justify-start gap-7 text-secondary text-lg mt-2">
              {item?.social?.map((item, index) => (
                <Link key={index} href={item.href} className='text-secondary text-base'>
                  {item.icon}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <button className="bg-primary mt-3 py-4 px-20 mx-auto rounded-lg flex-box text-sm text-white hover:bg-secondary smooth-hover">
        Become An Expert
      </button>
    </div>
  </div>
  )
}

export default MenuMobile