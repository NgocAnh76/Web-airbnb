'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';
import { Range } from 'react-range';
import { twMerge } from 'tailwind-merge';
import { DATA_MENU_ADMIN } from '../header/data-header';

const DashboardClient = () => {
  const [budget, setBudget] = useState([50000, 2000000]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [selectedReviewScore, setSelectedReviewScore] = useState<string[]>([]);
  const [selectedRoomFacilities, setSelectedRoomFacilities] = useState<
    string[]
  >([]);

  const facilities = ['CiParking1', 'Free withFormik', 'Swimming Pool'];
  const reviewScore = [
    'Superb: 9+',
    'Very Good: 8+',
    'Good: 7+',
    'Pleasant: 6+',
    'Poor: 5+',
  ];
  const roomFacilities = [
    'Kitchen',
    'Air conditioning',
    'Washing Machine',
    'Free Wifi',
    'Free Iron',
    'Free Breakfast',
    'Free Parking',
  ];

  const toggleSelection = (
    item: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    state: string[],
  ) => {
    if (state.includes(item)) {
      setter(state.filter((i) => i !== item));
    } else {
      setter([...state, item]);
    }
  };

  return (
    <div className="hidden w-1/4 rounded-md bg-white p-4 shadow-md md:block">
      <h3 className="text-lg font-bold">Filter by:</h3>

      {/* Budget Filter */}
      <div className="mt-4 text-black">
        <h4 className="font-semibold">Your budget (per night)</h4>
        <p>
          VND {budget[0].toLocaleString()} - VND {budget[1].toLocaleString()}+
        </p>
        <div className="relative mt-2 h-2 rounded-full bg-gray-200 text-black">
          <div
            className="absolute left-0 top-0 h-2 rounded-full bg-blue-500"
            style={{
              width: `${((budget[1] - 50000) / (2000000 - 50000)) * 100}%`,
            }}
          ></div>
        </div>
        <Range
          step={10000}
          min={50000}
          max={2000000}
          values={budget}
          onChange={(values) => setBudget(values)}
          renderTrack={({ props, children }) => (
            <div {...props} className="mt-2 h-2 bg-transparent">
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} className="h-4 w-4 rounded-full bg-blue-500" />
          )}
        />
      </div>

      {/* Dynamic Filters */}
      {[
        {
          label: 'Facilities',
          items: facilities,
          state: selectedFacilities,
          setter: setSelectedFacilities,
        },
        {
          label: 'Room Facilities',
          items: roomFacilities,
          state: selectedRoomFacilities,
          setter: setSelectedRoomFacilities,
        },
        {
          label: 'Review Score',
          items: reviewScore,
          state: selectedReviewScore,
          setter: setSelectedReviewScore,
        },
      ].map(({ label, items, state, setter }) => (
        <div key={label} className="mt-4 flex flex-col lg:gap-4">
          <h4 className="mb-2 font-semibold text-black">{label}</h4>
          {items.map((item) => (
            <div
              key={item}
              className="flex cursor-pointer items-center space-x-2 text-black"
              onClick={() => toggleSelection(item, setter, state)}
            >
              {state.includes(item) ? (
                <FaCheckSquare className="text-blue-500" />
              ) : (
                <FaRegSquare className="text-gray-500" />
              )}
              <p>{item}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DashboardClient;

export const DashboardAdmin = () => {
  const pathname = usePathname();
  return (
    <ul className="h-full">
      {DATA_MENU_ADMIN.map((item) => (
        <li
          key={item.id}
          className={twMerge(
            'group border-b border-dark-3 px-10 py-4',
            pathname === item.href && 'bg-primary',
          )}
        >
          <Link
            href={item.href}
            className="flex w-full items-center justify-start gap-2 px-3"
          >
            <p className="smooth-hover text-white group-hover:text-primary">
              {item.icon}
            </p>

            <p className="smooth-hover text-white group-hover:text-primary">
              {item.name}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
