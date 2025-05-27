'use client';

import { useState } from 'react';

interface CounterProps {
  label: string;
  subLabel?: string;
  min?: number;
  initial?: number;
  className?: string;
  onChange?: (value: number) => void;
}

const Counter = ({
  label,
  subLabel,
  min = 0,
  initial = 1,
  className = '',
  onChange,
}: CounterProps) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange?.(newCount);
  };

  const decrement = () => {
    if (count > min) {
      const newCount = count - 1;
      setCount(newCount);
      onChange?.(newCount);
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 border-b py-4">
      <div>
        <p className={`text-base font-medium ${className}`}>{label}</p>
        {subLabel && <p className="text-sm text-gray-500">{subLabel}</p>}
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={decrement}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-gray-400"
        >
          -
        </button>
        <span className="w-8 text-center">{count}</span>
        <button
          onClick={increment}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-gray-400"
        >
          +
        </button>
      </div>
    </div>
  );
};

interface MenuBookingProps {
  className?: string;
  onChange?: (data: { people: number; rooms: number }) => void;
}

const MenuBooking = ({ className, onChange }: MenuBookingProps) => {
  const [people, setPeople] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handlePeopleChange = (value: number) => {
    setPeople(value);
    onChange?.({ people: value, rooms });
  };

  // const handleRoomsChange = (value: number) => {
  //   setRooms(value);
  //   onChange?.({ people, rooms: value });
  // };

  return (
    <div
      className={`rounded-lg bg-white px-6 py-3 text-base text-black shadow-lg lg:w-96 lg:p-6 ${className}`}
    >
      <Counter
        label="Number of people"
        initial={0}
        min={0}
        className="text-sm font-medium text-gray-800 lg:text-base"
        onChange={handlePeopleChange}
      />
      {/* <Counter
        label="Number of room"
        initial={1}
        min={1}
        className="text-base font-medium text-gray-800"
        onChange={handleRoomsChange}
      /> */}
    </div>
  );
};

export default MenuBooking;
