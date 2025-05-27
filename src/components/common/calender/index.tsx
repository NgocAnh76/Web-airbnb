'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';

interface CalendarProps {
  onChange?: (dates: { startDate: string; endDate: string }) => void;
}

const Calendar = ({ onChange }: CalendarProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (dates: { startDate: string; endDate: string }) => {
    setStartDate(dates.startDate ? new Date(dates.startDate) : null);
    setEndDate(dates.endDate ? new Date(dates.endDate) : null);
    onChange?.(dates);
  };

  return (
    <div className="mx-auto flex w-fit flex-col items-center justify-center rounded bg-white p-4 shadow-md ">
      <h2 className="mb-2 text-base font-semibold">
        Select date Check-in & Check-out
      </h2>
      <DatePicker
        selected={startDate}
        onChange={(dates: [Date | null, Date | null]) => {
          const [start, end] = dates;
          handleDateChange({
            startDate: start ? start.toISOString() : '',
            endDate: end ? end.toISOString() : '',
          });
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        monthsShown={2}
        dateFormat="dd/MM/yyyy"
        className=""
      />
      <div className="mt-4 w-64 rounded border p-3 text-center">
        {startDate && endDate ? (
          <p className="text-base">
            <strong className="">Check-in:</strong>{' '}
            {startDate.toLocaleDateString()} <br />
            <strong>Check-out:</strong> {endDate.toLocaleDateString()}
          </p>
        ) : (
          <p>Select date to book</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;
