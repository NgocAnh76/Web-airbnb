import { useGetLocation } from '@/configs/api/queries';
import { FiMapPin } from 'react-icons/fi';
import IsLoading from '../isLoading';
import { LocationInfo } from '@/helper/type/location';
const Location = () => {
  const { data, isLoading, error } = useGetLocation();

  if (isLoading) return <IsLoading />;
  if (error) console.log(error.message);

  return (
    <div className="px-10 md:w-[500px]">
      <ul className="scrollbar-hide scrollbar-thumb-dark-2 scrollbar-track-transparent h-60 cursor-pointer overflow-y-auto rounded-md bg-white p-5 text-black shadow-md">
        {data.map((item: LocationInfo) => {
          return (
            <li
              key={item.location_id}
              className="smooth-hover flex items-center justify-start p-3 hover:bg-dark-2"
            >
              <FiMapPin className="mr-3 text-xl text-dark" />
              <div>
                <h3 className="text-base font-medium">{item.name_location}</h3>
                <p>{item.province}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Location;
