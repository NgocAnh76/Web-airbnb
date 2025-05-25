'use client';
import Avatar from '@/components/common/avatar';
import Calendar from '@/components/common/calender';
import IsLoading from '@/components/common/isLoading';
import MenuBooking from '@/components/menu-booking';
import renderStars from '@/components/common/render/render.start';
import { useGetComment, useGetRoomById } from '@/configs/api/queries';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { CiWarning } from 'react-icons/ci';
import { FaBed, FaParking, FaWifi } from 'react-icons/fa';
import { FaKitchenSet } from 'react-icons/fa6';
import { GiWashingMachine } from 'react-icons/gi';
import { HiOutlineBellAlert, HiXMark } from 'react-icons/hi2';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { LuCircleParking, LuMapPin } from 'react-icons/lu';
import {
  MdBathtub,
  MdBedroomParent,
  MdLiving,
  MdOutlinePool,
  MdOutlineRoomService,
} from 'react-icons/md';
import {
  PiAirplaneTakeoffDuotone,
  PiCigaretteSlashDuotone,
  PiTelevisionSimpleDuotone,
} from 'react-icons/pi';
import { TbAirConditioning, TbIroningSteamFilled } from 'react-icons/tb';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/rootReducer';
import { UserInfo } from '@/helper/type/type-user';
import { AddBooking } from '@/configs/api/booking';

// Types
interface Location {
  province: string;
  address: string;
}

interface Room {
  room_id: number;
  room_name: string;
  image: string;
  living_room: number;
  bedroom: number;
  bed: number;
  bathroom: number;
  kitchen: boolean;
  washing_machine: boolean;
  air_conditioner: boolean;
  television: boolean;
  wifi: boolean;
  iron: boolean;
  parking: boolean;
  pool: boolean;
  description: string;
  price: number;
  address: string;
  locations: Location;
}

interface PropertyHighlight {
  icon: ReactNode;
  label: string;
}

interface RoomAmenity {
  icon: ReactNode;
  label: string;
  value: number | boolean;
}

interface BookingData {
  room_id: number;
  user_id: number;
  arrival_date: string;
  departure_date: string;
  number_guests: number;
}

// Constants
const PROPERTY_HIGHLIGHTS: PropertyHighlight[] = [
  { icon: <PiAirplaneTakeoffDuotone />, label: 'Airport transfer' },
  { icon: <HiOutlineBellAlert />, label: 'Front desk [24-hour]' },
  { icon: <PiCigaretteSlashDuotone />, label: 'No smoking' },
  { icon: <LuCircleParking />, label: 'Free parking' },
  { icon: <FaWifi />, label: 'Free wifi' },
  { icon: <MdOutlineRoomService />, label: 'Room service' },
];

const ROOM_AMENITIES = (data: Room): RoomAmenity[] => [
  { icon: <MdLiving />, label: 'Living room', value: data.living_room },
  { icon: <MdBedroomParent />, label: 'Bed room', value: data.bedroom },
  { icon: <MdBathtub />, label: 'Bath room', value: data.bathroom },
  { icon: <FaBed />, label: 'Bed', value: data.bed },
  {
    icon: <GiWashingMachine />,
    label: 'Washing Machine',
    value: data.washing_machine,
  },
  {
    icon: <TbAirConditioning />,
    label: 'Air Conditioner',
    value: data.air_conditioner,
  },
  {
    icon: <PiTelevisionSimpleDuotone />,
    label: 'Television',
    value: data.television,
  },
  { icon: <FaWifi />, label: 'Wifi', value: data.wifi },
  { icon: <TbIroningSteamFilled />, label: 'Iron', value: data.iron },
  { icon: <FaKitchenSet />, label: 'Kitchen', value: data.kitchen },
  { icon: <FaParking />, label: 'Parking', value: data.parking },
  { icon: <MdOutlinePool />, label: 'Pool', value: data.pool },
];

const ModalBooking = ({ roomId }: { roomId: number }) => {
  const userInfo = useSelector(
    (state: RootState) => state.user.info,
  ) as UserInfo | null;
  // const userId = userInfo?.user_id;
  console.log(userInfo);
  const [bookingData, setBookingData] = useState<BookingData>({
    room_id: roomId,
    user_id: userInfo?.user_id || 0,
    arrival_date: '',
    departure_date: '',
    number_guests: 0,
  });

  const handleCalendarChange = (dates: {
    startDate: string;
    endDate: string;
  }) => {
    setBookingData((prev) => ({
      ...prev,
      arrival_date: dates.startDate,
      departure_date: dates.endDate,
    }));
  };

  const handleMenuBookingChange = (data: { people: number; rooms: number }) => {
    setBookingData((prev) => ({
      ...prev,
      number_guests: data.people,
    }));
  };

  const handleBooking = async () => {
    if (!userInfo) {
      toast.error('Please login to book a room');
      return;
    }

    if (!bookingData.arrival_date || !bookingData.departure_date) {
      toast.error('Please select check-in and check-out dates');
      return;
    }

    if (bookingData.number_guests === 0) {
      toast.error('Please select number of people');
      return;
    }

    try {
      // TODO: Add your booking API call here
      console.log(bookingData);
      const response = await AddBooking(bookingData);
      toast.success('Booking successful!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to book room');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex items-end justify-between gap-5 rounded-md bg-gray-100 p-5 shadow-md"
      >
        <div className="flex items-start justify-center gap-5">
          <Calendar onChange={handleCalendarChange} />
          <MenuBooking onChange={handleMenuBookingChange} />
        </div>
        <button
          onClick={handleBooking}
          className="smooth-hover rounded-lg bg-primary px-10 py-2 text-white hover:bg-secondary focus:bg-secondary md:py-3 lg:text-lg"
        >
          Booking
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

// Components
const PropertyHighlights = () => (
  <div className="mt-10">
    <h2>Property highlights</h2>
    <ul className="grid grid-cols-2 gap-10 py-5 md:grid-cols-3">
      {PROPERTY_HIGHLIGHTS.map((highlight, index) => (
        <li
          className="flex items-center gap-2 text-center lg:gap-5"
          key={index}
        >
          <p className="text-3xl text-primary">{highlight.icon}</p>
          <p className="">{highlight.label}</p>
        </li>
      ))}
    </ul>
  </div>
);

const RoomAmenities = ({ data }: { data: Room }) => {
  const iconTrue = <IoCheckmarkOutline className="text-2xl text-green-500" />;
  const iconFalse = <HiXMark className="text-2xl text-red-500" />;

  return (
    <div className="mt-10">
      <h2>Room amenities</h2>
      <ul className="grid grid-cols-2 gap-7 py-5 md:ml-12 md:grid-cols-3 lg:ml-0">
        {ROOM_AMENITIES(data).map((amenity, index) => (
          <li key={index} className="flex items-center gap-2">
            {amenity.icon}
            <p>{amenity.label}:</p>
            <p className="text-primary">
              {typeof amenity.value === 'boolean'
                ? amenity.value
                  ? iconTrue
                  : iconFalse
                : amenity.value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ImageGallery = ({ images }: { images: string[] }) => (
  <div className="grid grid-cols-1 gap-2 p-4 md:grid-cols-3">
    <div className="md:col-span-2 lg:row-span-3">
      <Image
        src={images[0]}
        alt="Main"
        className="h-full w-full rounded-xl object-cover"
        width={300}
        height={300}
      />
    </div>
    {images.slice(1, 7).map((img, index) => (
      <div key={index}>
        <Image
          src={img}
          alt={`Image ${index + 1}`}
          className="h-full w-full rounded-xl object-cover"
          width={300}
          height={300}
        />
      </div>
    ))}
  </div>
);

const Comment = ({ roomId }: { roomId: number }) => {
  const { data, isLoading, error } = useGetComment(roomId);
  if (isLoading) return <IsLoading />;
  if (error) toast.error(error.message);
  if (!data || !Array.isArray(data) || data.length === 0)
    return (
      <div>
        <div className="mb-3">
          <h2>Comment</h2>
          <p className="ml-2 mt-2 lg:ml-4">Peoples reviews of the room</p>
        </div>
        <p className="border-gray-3 ml-2 flex items-center gap-2 rounded-lg border p-3 text-primary lg:ml-4 lg:w-1/2">
          No reviews yet
          <div className="flex items-center text-yellow-400">
            <CiWarning /> <CiWarning /> <CiWarning />
          </div>
        </p>
        ;
      </div>
    );
  return (
    <div>
      <div>
        <h2>Comment</h2>
        <p>Peoples reviews of the room</p>
      </div>
      <ul className="grid grid-cols-1 gap-3 p-3 md:grid-cols-2">
        {data.map((comment) => (
          <li
            key={comment.comment_id}
            className="mb-2 rounded-lg border border-dark-3 bg-dark-3 p-3 shadow-sm"
          >
            <div className="flex items-start gap-2">
              <Avatar />
              <div>
                <div>
                  <h4 className="font-semibold capitalize text-black">
                    {comment.users.full_name}
                  </h4>
                  <p className="flex items-center">
                    {renderStars(comment.star_comment)}
                  </p>
                </div>
                <p className="mt-2">{comment.content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Utilities
const formatPrice = (price: number) => {
  return price.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};

const processDescription = (description: string | undefined | null) => {
  if (!description) {
    return {
      firstPart: 'No description available.',
      secondPart: 'Please contact support for more information.',
    };
  }

  const descriptions = description.split('.');
  const middleDescription = Math.floor(descriptions.length / 2);
  return {
    firstPart: descriptions.slice(0, middleDescription).join('.'),
    secondPart: descriptions.slice(middleDescription).join('.'),
  };
};

const processImages = (imageString: string | undefined | null) => {
  if (!imageString) return [];

  return imageString
    .split(',')
    .filter(Boolean)
    .map((url) => url.trim())
    .filter((url) => url.startsWith('http') || url.startsWith('https'));
};

// Main Component
const DetailRoom = () => {
  const pathname = usePathname();
  const roomId = pathname.split('/')[2];
  const [isOpenModalBooking, setIsOpenModalBooking] = useState(false);
  const { data, isLoading, error } = useGetRoomById(Number(roomId));

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  if (isLoading) return <IsLoading />;

  const cleanImageList = processImages(data.image);
  const { firstPart, secondPart } = processDescription(data.description);

  return (
    <div className="container mx-auto">
      <div className="px-5 pt-20 md:pt-28 lg:pt-40">
        <div>
          <h1 className="max-w-3xs text-2xl font-bold text-black md:max-w-xl md:text-3xl lg:max-w-4xl lg:text-4xl">
            {data.room_name || 'No name available'}
          </h1>
          <p className="flex items-center justify-start gap-2 py-2">
            <LuMapPin className="text-xl text-primary" />{' '}
            {data.address || 'No address available'} -{' '}
            {data.locations?.province || 'No province available'}
          </p>
        </div>

        <div className="flex items-center justify-between py-3">
          <p className="text-2xl font-bold text-primary lg:text-4xl">
            {formatPrice(data.price || 0)}
          </p>
          <button
            className="smooth-hover rounded-lg bg-primary px-10 py-2 text-white hover:bg-secondary focus:bg-secondary md:py-5 lg:px-20 lg:text-lg"
            onClick={() => setIsOpenModalBooking((prev) => !prev)}
          >
            {isOpenModalBooking ? 'Close' : 'Book now'}
          </button>
        </div>

        <AnimatePresence>
          {isOpenModalBooking && <ModalBooking roomId={Number(roomId)} />}
        </AnimatePresence>

        <ImageGallery images={cleanImageList} />

        <div className="mt-10">
          <h2>Description</h2>
          <p className="py-1 lg:mt-5">{firstPart}</p>
          <p className="py-1">{secondPart}</p>
        </div>

        <PropertyHighlights />
        <RoomAmenities data={data} />
        <Comment roomId={Number(roomId)} />
      </div>
    </div>
  );
};

export default DetailRoom;
