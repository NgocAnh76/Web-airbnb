'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiSearch } from 'react-icons/ci'
import Calendar from '@/components/common/calender'
import MenuBooking from '@/components/menu-booking'
import Location from '@/components/common/location'

interface Props {
  backgroundImage: any
}

export const BannerHome: React.FC<Props> = ({ backgroundImage }) => {
  const pathname = usePathname()
  const [active, setActive] = useState('Hotel')
  const [activeModal, setActiveModal] = useState<number | null>(null)
  const [modalPosition, setModalPosition] = useState<'top' | 'bottom'>('bottom')
  const liRefs = useRef<(HTMLLIElement | null)[]>([])

  const handleClick = (index: number) => {
    setActiveModal(index === activeModal ? null : index)
  }

  useEffect(() => {
    if (activeModal !== null && liRefs.current[activeModal]) {
      const liElement = liRefs.current[activeModal]
      const rect = liElement!.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom
      const modalHeight = 200
      setModalPosition(spaceBelow >= modalHeight ? 'bottom' : 'top')
    }
  }, [activeModal])

  const listService: { link: string; label: string }[] = [
    { link: '#', label: 'Hotel' },
    { link: '#', label: 'Tour' },
    { link: '#', label: 'Holyday Rentals' },
    { link: '#', label: 'Car' },
    { link: '#', label: 'Cruise' },
    { link: '#', label: 'Flights' },
  ]

  const search: { title: string; subTitle: string; modal: React.ReactNode }[] = [
    {
      title: 'Location',
      subTitle: 'Where are you going?',
      modal: <Location />,
    },
    {
      title: 'Check in - Check out',
      subTitle: 'Check xem nè',
      modal: <Calendar />,
    },
    {
      title: 'Guest',
      subTitle: 'where where where',
      modal: <MenuBooking />,
    },
  ]

  return (
    <section>
      <div className="relative">
        <div className="overflow-hidden">
          <img
            className="w-full h-[110vh] lg:h-[100vh] object-cover"
            src={backgroundImage}
            alt="Banner"
          />
          <div className="absolute inset-0 bg-banner-home z-10"></div>
        </div>
        <div className="container">
          <div className="absolute inset-0 z-20">
            <div className="w-[70%] lg:w-3/4 mx-auto">
              <div className="text-center pt-44 md:pt-72">
                <h1>Find Next Place To Visit</h1>
                <p className="text-white mt-3 text-base">
                  Discover amzaing places at exclusive deals
                </p>
              </div>
              <div className="mt-16">
                <ul className="flex-box justify-start md:justify-center gap-8 overflow-x-auto hide-scrollbar">
                  {listService.map((item, i) => (
                    <li key={i} className="py-3 whitespace-nowrap">
                      <Link
                        href={item.link}
                        onClick={() => setActive(item.label)}
                        className={`pb-3 ${
                          active === item.label
                            ? 'border-b-2 border-dark'
                            : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 mx-3 lg:py-3 bg-white p-5 rounded-md lg:rounded-full lg:flex items-center justify-center">
                  {search.map((item, i) => (
                    <li
                      key={i}
                      ref={(el: HTMLLIElement | null) => {
                        liRefs.current[i] = el
                      }}
                      className="p-4 lg:relative border-b-2 border-dark-2 block lg:w-1/4"
                      onClick={() => handleClick(i)}
                    >
                      <h3 className="text-black font-medium">{item.title}</h3>
                      <p className="lg:text-base">{item.subTitle}</p>
                      {activeModal === i && (
                        <div
                          className={`absolute left-0 ${
                            modalPosition === 'bottom' ? 'top-full' : 'bottom-full'
                          }`}
                        >
                          {item.modal}
                        </div>
                      )}
                    </li>
                  ))}

                  <button className="bg-primary mt-3 lg:mt-0 py-5 px-16 md:px-40 lg:px-12 lg:py-7 mx-auto rounded-lg lg:rounded-full font-medium flex-box">
                    <CiSearch className="text-2xl mr-3" />
                    Search
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

