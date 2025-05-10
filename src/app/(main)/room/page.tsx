import Image from 'next/image';
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
import './room.css';

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
  locations: {
    province: string;
    address: string;
  };
}

const DetailRoom = () => {
  const data: Room = {
    room_id: 1,
    room_name: 'Santori Hotel Da Nang Bay',
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/222463008.jpg?k=7ed07544673e44438d4567e557348ab0e2125c244374b8b60f42fe8aece05c23&o=&hp=1,https://cf.bstatic.com/xdata/images/hotel/max1024x768/222463163.jpg?k=f83ce1f33337f03320844b2059bca3c9eaf10ce69f6d1b404fa4ad4db4702dff&o=&hp=1,https://cf.bstatic.com/xdata/images/hotel/max1024x768/426454599.jpg?k=55296b49e4a730b8dc1dd8f3c63e7166f98ed931467650e0bfd5bfada88e3d9a&o=&hp=1,https://cf.bstatic.com/xdata/images/hotel/max1024x768/163687181.jpg?k=7f2605a0e8aaaef508bcff49bb21cc0a1dd69fef648192881d804cb58a75752d&o=&hp=1,https://cf.bstatic.com/xdata/images/hotel/max1024x768/208634495.jpg?k=c6710c3973cc21bdb0bd84b0e090c50f5326bb36fb21e16fee073e4b90a5f00e&o=&hp=1,https://cf.bstatic.com/xdata/images/hotel/max1024x768/163688397.jpg?k=6f303bc34fd3ab190837b9678c50e5ab340e786d44095a506c225129984c0e4b&o=&hp=1',
    living_room: 1,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    kitchen: true,
    washing_machine: true,
    air_conditioner: true,
    television: true,
    wifi: true,
    iron: true,
    parking: true,
    pool: true,
    price: 100,
    locations: {
      province: 'Da Nang',
      address: '123 Main St, Anytown, USA',
    },
    address: '123 Main St, Anytown, USA',
    description: 'This is a description of the room',
  };

  const listImage = data.image.split(',');
  const cleanImageList = listImage
    .map((url) => url.trim())
    .filter((url) => url.startsWith('http'));
  console.log(cleanImageList);
  const descriptions = data.description.split('.');
  const middleDescription = Math.floor(descriptions.length / 2);
  const firstDescription = descriptions.slice(0, middleDescription);
  const secondDescription = descriptions.slice(middleDescription);

  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  };
  const propertyHighlights = [
    {
      icon: <PiAirplaneTakeoffDuotone />,
      label: 'Airport transfer',
    },
    {
      icon: <HiOutlineBellAlert />,
      label: 'Front desk [24-hour]',
    },
    {
      icon: <PiCigaretteSlashDuotone />,
      label: 'No smoking',
    },
    {
      icon: <LuCircleParking />,
      label: 'Free parking',
    },
    {
      icon: <FaWifi />,
      label: 'Free wifi',
    },
    {
      icon: <MdOutlineRoomService />,
      label: 'Room service',
    },
  ];

  const iconTrue = <IoCheckmarkOutline className="text-2xl text-green-500" />;
  const iconFalse = <HiXMark className="text-2xl text-red-500" />;
  return (
    <div className="container mx-auto">
      <div className="px-5 pt-20 md:pt-28 lg:pt-40">
        <div>
          <h1 className="max-w-3xs text-2xl font-bold text-black md:max-w-xl md:text-3xl lg:max-w-4xl lg:text-4xl">
            {data.room_name}
          </h1>
          <p className="flex-box justify-start gap-2 py-2">
            <LuMapPin className="text-primary text-xl" /> {data.address} -{' '}
            {data.locations.province}
          </p>
        </div>
        <div className="flex-box justify-between py-3">
          <p className="text-primary text-2xl font-bold lg:text-4xl">
            {formatPrice(data.price)}
          </p>
          <button className="bg-primary hover:bg-secondary focus:bg-secondary smooth-hover rounded-lg px-4 py-2 text-white md:py-5 lg:px-15 lg:text-lg">
            Book now
          </button>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-2 p-4 md:grid-cols-3">
            <div className="md:col-span-2 md:row-span-2">
              <Image
                src={cleanImageList[0]}
                alt="Main"
                className="h-full w-full rounded-xl object-cover"
                width={300}
                height={300}
              />
            </div>
            {cleanImageList.slice(1, 7).map((img, index) => (
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
        </div>
        <div className="mt-10">
          <h2>Description</h2>
          <p className="py-1 lg:mt-5">{firstDescription}</p>
          <p className="py-1">{secondDescription}</p>
        </div>
        <div className="mt-10">
          <h2>Property highlights</h2>
          <ul className="grid grid-cols-2 gap-10 py-5 md:grid-cols-3">
            {propertyHighlights.map((highlight, index) => (
              <li className="flex-col gap-2 text-center" key={index}>
                <p className="text-primary text-3xl">{highlight.icon}</p>
                <p>{highlight.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <h2>Room amenities</h2>
          <ul className="grid grid-cols-2 gap-7 py-5 md:ml-12 md:grid-cols-3 lg:ml-0">
            <li>
              <MdLiving /> <span>Living room:</span>
              <span className="text-primary">{data.living_room}</span>
            </li>
            <li>
              <MdBedroomParent /> <span>Bed room:</span>
              <span className="text-primary">{data.bedroom}</span>
            </li>
            <li>
              <MdBathtub /> <span>Bath room:</span>
              <span className="text-primary">{data.bathroom}</span>
            </li>
            <li>
              <FaBed /> <span>Bed:</span>
              <span className="text-primary">{data.bed}</span>
            </li>
            <li>
              <GiWashingMachine />
              <span>Washing Machine:</span>
              <span>{data.washing_machine ? iconTrue : iconFalse}</span>
            </li>
            <li>
              <TbAirConditioning />
              <span>Air Conditioner:</span>
              <span>{data.air_conditioner ? iconTrue : iconFalse}</span>
            </li>
            <li>
              <PiTelevisionSimpleDuotone />
              <span>Television:</span>
              <span>{data.television ? iconTrue : iconFalse} </span>
            </li>
            <li>
              <FaWifi />
              <span>Wifi:</span>
              <span>{data.wifi ? iconTrue : iconFalse} </span>
            </li>
            <li>
              <TbIroningSteamFilled />
              <span>Iron</span>
              <span>{data.iron ? iconTrue : iconFalse}</span>
            </li>
            <li>
              <FaKitchenSet />
              <span>Kitchen:</span>
              <span>{data.kitchen ? iconTrue : iconFalse}</span>
            </li>
            <li>
              <FaParking />
              <span>Parking:</span>
              <span>{data.parking ? iconTrue : iconFalse}</span>
            </li>
            <li>
              <MdOutlinePool />
              <span>Pool:</span>
              <span>{data.pool ? iconTrue : iconFalse}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailRoom;
