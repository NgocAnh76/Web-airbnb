'use client'

import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './custom-datepicker.css'

const Calendar: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  return (
    <div className="flex flex-col items-center shadow-md p-4 rounded bg-white w-fit">
      <h2 className="text-lg font-semibold mb-2">Chọn ngày Check-in & Check-out</h2>
      <DatePicker
        selected={startDate}
        onChange={(dates: [Date | null, Date | null]) => {
          const [start, end] = dates
          setStartDate(start)
          setEndDate(end)
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        monthsShown={2}
        dateFormat="dd/MM/yyyy"
        className="custom-datepicker"
      />
      <div className="border mt-4 p-3 rounded w-64 text-center">
        {startDate && endDate ? (
          <p>
            <strong>Check-in:</strong> {startDate.toLocaleDateString()} <br />
            <strong>Check-out:</strong> {endDate.toLocaleDateString()}
          </p>
        ) : (
          <p>Chọn ngày để đặt phòng</p>
        )}
      </div>
    </div>
  )
}

export default Calendar
