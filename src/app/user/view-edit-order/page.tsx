'use client';

import HeaderDashboard from '@/components/common/header/headerDashboard';
import { DeleteBooking, GetBooking } from '@/configs/api/booking';
import { ListBooking } from '@/helper/type/booking';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';
import './ViewEdit.css';

const ViewEditOrder = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ['booking'],
    queryFn: () => GetBooking(),
  });

  const handleDelete = async (id: number) => {
    console.log(id);
    await DeleteBooking(id);
    toast.success('Booking deleted successfully');
    await queryClient.invalidateQueries({ queryKey: ['booking'] });
  };
  return (
    <section>
      <div className="h-full w-full bg-primary pb-2">
        <HeaderDashboard />
        <div className="container mx-auto">
          <div className="flex items-center justify-start px-5 pt-2">
            <IoIosArrowRoundBack className="text-white lg:text-xl" />
            <Link
              href="/user/dashboard"
              className="text-sm text-white hover:text-white"
            >
              Account
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="rounded-md bg-white px-5 py-10 shadow-md lg:py-16 ">
          <div className="mb-5">
            <h2>List of booked rooms</h2>
            <p>
              You can view and edit your booked rooms here. You can also cancel
              your booking if you need to.
            </p>
          </div>
          {data?.length === 0 ? (
            <h3 className="text-black">No booking found</h3>
          ) : (
            <div className="overflow-x-auto ">
              <table className="w-full ">
                <thead>
                  <tr className="bg-gray-100 text-xs text-black md:text-sm lg:text-base">
                    <th>ID</th>
                    <th>Room</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                    <th>Number of people</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item: ListBooking) => (
                    <tr
                      key={item.booking_id}
                      className="border-b border-gray-300 text-center text-xs text-black md:text-sm"
                    >
                      <td>{item.booking_id}</td>
                      <td>{item.rooms.room_name}</td>
                      <td>
                        {new Date(item.arrival_date).toLocaleDateString()}
                      </td>
                      <td>
                        {new Date(item.departure_date).toLocaleDateString()}
                      </td>
                      <td>{item.number_guests}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(item.booking_id)}
                          className={twMerge(
                            'smooth-hover cursor-pointer rounded-md border p-1',
                            'border-red-500 text-red-500 hover:bg-red-500 hover:text-white lg:text-lg',
                          )}
                        >
                          <MdOutlineDeleteOutline />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ViewEditOrder;
