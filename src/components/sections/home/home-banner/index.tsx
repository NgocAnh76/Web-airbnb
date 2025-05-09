'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiSearch } from 'react-icons/ci';
import Calendar from '@/components/common/calender';
import MenuBooking from '@/components/menu-booking';
import Location from '@/components/common/location';

interface Props {
  backgroundImage: any;
}

export const BannerHome: React.FC<Props> = ({ backgroundImage }) => {
  const pathname = usePathname();
  const [active, setActive] = useState('Hotel');
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [modalPosition, setModalPosition] = useState<'top' | 'bottom'>(
    'bottom',
  );
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);

  const handleClick = (index: number) => {
    setActiveModal(index === activeModal ? null : index);
  };

  useEffect(() => {
    if (activeModal !== null && liRefs.current[activeModal]) {
      const liElement = liRefs.current[activeModal];
      const rect = liElement!.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const modalHeight = 200;
      setModalPosition(spaceBelow >= modalHeight ? 'bottom' : 'top');
    }
  }, [activeModal]);

  const listService: { link: string; label: string }[] = [
    { link: '#', label: 'Hotel' },
    { link: '#', label: 'Tour' },
    { link: '#', label: 'Holyday Rentals' },
    { link: '#', label: 'Car' },
    { link: '#', label: 'Cruise' },
    { link: '#', label: 'Flights' },
  ];

  const search: { title: string; subTitle: string; modal: React.ReactNode }[] =
    [
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
    ];

  return (
    <section>
      <div className="relative">
        <div className="overflow-hidden">
          <img
            className="h-[110vh] w-full object-cover lg:h-[100vh]"
            src={backgroundImage}
            alt="Banner"
          />
          <div className="bg-banner-home absolute inset-0 z-10"></div>
        </div>
        <div className="container">
          <div className="absolute inset-0 z-20">
            <div className="mx-auto w-[70%] lg:w-3/4">
              <div className="pt-44 text-center md:pt-72">
                <h1>Find Next Place To Visit</h1>
                <p className="mt-3 text-sm text-white md:text-base lg:text-lg">
                  Discover amzaing places at exclusive deals
                </p>
              </div>
              <div className="mt-16">
                <ul className="flex-box hide-scrollbar justify-start gap-8 overflow-x-auto md:justify-center">
                  {listService.map((item, i) => (
                    <li key={i} className="py-3 whitespace-nowrap">
                      <Link
                        href={item.link}
                        onClick={() => setActive(item.label)}
                        className={`pb-3 ${
                          active === item.label ? 'border-dark border-b-2' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <ul className="mx-3 mt-5 items-center justify-center rounded-md bg-white p-5 lg:flex lg:rounded-full lg:py-3">
                  {search.map((item, i) => (
                    <li
                      key={i}
                      ref={(el: HTMLLIElement | null) => {
                        liRefs.current[i] = el;
                      }}
                      className="border-dark-2 block border-b-2 p-4 whitespace-nowrap lg:relative lg:w-1/4"
                      onClick={() => handleClick(i)}
                    >
                      <h3 className="font-medium text-black">{item.title}</h3>
                      <p className="text-sm lg:text-base">{item.subTitle}</p>
                      {activeModal === i && (
                        <div
                          className={`absolute left-0 ${
                            modalPosition === 'bottom'
                              ? 'top-full'
                              : 'bottom-full'
                          }`}
                        >
                          {item.modal}
                        </div>
                      )}
                    </li>
                  ))}

                  <button className="bg-primary flex-box mx-auto mt-3 rounded-lg px-16 py-5 font-semibold md:px-40 lg:mt-0 lg:rounded-full lg:px-12">
                    <CiSearch className="mr-3 text-2xl" />
                    Search
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
