'use client'

import { useState } from 'react'
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'

type CounterProps = {
  label: string
  subLabel?: string
  min?: number
  initial?: number
}

const Counter: React.FC<CounterProps> = ({ label, subLabel, min = 0, initial = 1 }) => {
  const [count, setCount] = useState(initial)

  return (
    <div className="flex justify-between items-center border-b py-4">
      <div>
        <p className="text-lg font-medium">{label}</p>
        {subLabel && <p className="text-sm text-gray-500">{subLabel}</p>}
      </div>
      <div className="flex items-center">
        <button
          className="text-primary disabled:text-gray-400"
          onClick={() => setCount(count - 1)}
          disabled={count <= min}
        >
          <CiSquareMinus size={40} />
        </button>
        <span className="mx-4 text-lg font-medium">{count}</span>
        <button className="text-primary" onClick={() => setCount(count + 1)}>
          <CiSquarePlus size={40} />
        </button>
      </div>
    </div>
  )
}

const MenuBooking: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg w-96 text-black">
      <Counter label="Người lớn" initial={2} min={1} />
      <Counter label="Phòng" initial={1} min={1} />
    </div>
  )
}

export default MenuBooking
