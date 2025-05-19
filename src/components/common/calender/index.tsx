'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';

const Calendar: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="flex w-fit flex-col items-center rounded bg-white p-4 shadow-md">
      <h2 className="mb-2 text-lg font-semibold">
        Select date Check-in & Check-out
      </h2>
      <DatePicker
        selected={startDate}
        onChange={(dates: [Date | null, Date | null]) => {
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        monthsShown={2}
        dateFormat="dd/MM/yyyy"
        className="custom-datepicker"
      />
      <div className="mt-4 w-64 rounded border p-3 text-center">
        {startDate && endDate ? (
          <p>
            <strong>Check-in:</strong> {startDate.toLocaleDateString()} <br />
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
