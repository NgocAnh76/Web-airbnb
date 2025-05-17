'use client';
import Avatar from '@/components/common/avatar';
import HeaderDashboard from '@/components/common/header/headerDashboard';
import { UserInfo } from '@/helper/type/type-user';
import { RootState } from '@/redux/rootReducer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  CiCircleQuestion,
  CiCreditCard1,
  CiLock,
  CiMail,
  CiPhone,
} from 'react-icons/ci';
import { FaRegHandshake, FaRegUserCircle } from 'react-icons/fa';
import { ImGift } from 'react-icons/im';
import { IoIosArrowForward } from 'react-icons/io';
import {
  LuCalendarClock,
  LuHeart,
  LuSettings2,
  LuShieldCheck,
  LuStar,
  LuUser,
  LuUserPlus,
  LuWallet,
} from 'react-icons/lu';
import { MdOutlineSecurity } from 'react-icons/md';
import { PiHouseSimpleLight } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

const YourProfile = () => {
  const dataUser = useSelector(
    (state: RootState) => state.user.info,
  ) as UserInfo | null;

  const nameUser = dataUser?.full_name || 'User';

  const data: {
    id: number;
    title: string;
    item: { id: number; icon: React.ReactNode; title: string }[];
  }[] = [
    {
      id: 1,
      title: 'Payment Information',
      item: [
        { id: 1, icon: <LuWallet />, title: 'Rewards & Wallet' },
        { id: 2, icon: <CiCreditCard1 />, title: 'Payment Method' },
      ],
    },
    {
      id: 2,
      title: 'Account Management',
      item: [
        { id: 1, icon: <LuUser />, title: 'Personal Information' },
        { id: 2, icon: <CiLock />, title: 'Security Settings' },
        { id: 3, icon: <LuUserPlus />, title: 'Travel Companions' },
      ],
    },
    {
      id: 3,
      title: 'Settings',
      item: [
        { id: 1, icon: <LuSettings2 />, title: 'General Settings' },
        { id: 2, icon: <CiMail />, title: 'Email Settings' },
      ],
    },
    {
      id: 4,
      title: 'Travel Activities',
      item: [
        { id: 1, icon: <LuCalendarClock />, title: 'Trips & Bookings' },
        { id: 2, icon: <LuHeart />, title: 'Saved Lists' },
        { id: 3, icon: <LuStar />, title: 'My Reviews' },
      ],
    },
    {
      id: 5,
      title: 'Support',
      item: [
        { id: 1, icon: <CiPhone />, title: 'Contact Customer Service' },
        { id: 2, icon: <MdOutlineSecurity />, title: 'Security Info Center' },
        { id: 3, icon: <FaRegHandshake />, title: 'Resolve a Complaint' },
      ],
    },
    {
      id: 6,
      title: 'Legal & Privacy',
      item: [
        { id: 1, icon: <LuShieldCheck />, title: 'Privacy & Data Settings' },
        { id: 2, icon: <CiCircleQuestion />, title: 'Content Guidelines' },
      ],
    },
    {
      id: 7,
      title: 'For Hosts',
      item: [
        { id: 1, icon: <PiHouseSimpleLight />, title: 'List Your Property' },
      ],
    },
  ];
  return (
    <>
      {/* header anb banner */}
      <div className="bg-primary h-full w-full pb-5">
        <HeaderDashboard />
        <div className="container mx-auto">
          <div className="px-5 pt-3">
            <div className="flex-box mb-7 justify-start gap-5">
              <div>
                <Avatar />
              </div>
              <h2 className="text-white capitalize">Hello {nameUser}</h2>
            </div>
            <div className="mx-auto lg:w-4/5">
              <div className="flex-box mb-3 rounded-md bg-white p-5">
                <div className="flex-box w-full justify-between text-black">
                  <div className="flex-box gap-3">
                    <ImGift className="text-primary text-4xl" />
                    <div>
                      <h3>You have 3 bonuses</h3>
                      <p>10% off and more</p>
                    </div>
                  </div>
                  <IoIosArrowForward />
                </div>
              </div>
              <div className="flex-box justify-between rounded-md bg-white p-5 text-black">
                <p>No credit or voucher yet</p>
                <div className="flex-box gap-2">
                  <p className="text-base text-black">0</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="bg-dark-2">
        <div className="container mx-auto">
          <div className="py-5 lg:px-5">
            <div className="px-5 lg:px-0">
              <div className="rounded-md border border-gray-300 bg-white p-5 text-black">
                <div className="flex-box mb-3 justify-between gap-3">
                  <div>
                    <h3 className="mb-2">Complete your profile</h3>
                    <p>
                      Complete the form and use this information for future
                      orders.
                    </p>
                  </div>
                  <div className="rounded-md bg-blue-50 p-7">
                    <FaRegUserCircle className="text-3xl text-blue-400" />
                  </div>
                </div>
                <div className="flex-box justify-start gap-5">
                  <Link
                    href="/user/edit-profile"
                    className="bg-blue-2 border-blue-2 rounded-md border px-5 py-3 text-sm text-white"
                  >
                    Complete now
                  </Link>
                  <button className="border-blue-2 text-blue-2 rounded-md border px-5 py-3 text-sm">
                    Not now
                  </button>
                </div>
              </div>
            </div>
            <ul className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
              {data.map((item) => (
                <li
                  key={item.id}
                  className="rounded-lg border-gray-300 p-5 text-black lg:border lg:bg-white"
                >
                  <h3 className="mb-3">{item.title}</h3>
                  <div className="rounded-md border border-gray-300 bg-white lg:border-0">
                    {/* dùng thẻ link khi đầy đủ để chuyển trang */}
                    {item.item.map((subItem, index) => (
                      <div
                        key={subItem.id}
                        className={twMerge(
                          'flex-box smooth-hover w-full justify-between rounded-md p-3 hover:bg-gray-100',
                          index !== item.item.length - 1 &&
                            'border-dark-3 border-b lg:border-b-0',
                        )}
                      >
                        <div className="flex-box gap-3">
                          {subItem.icon}
                          <p>{subItem.title}</p>
                        </div>
                        <IoIosArrowForward />
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourProfile;
