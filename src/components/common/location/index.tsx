import React from 'react';
import { FiMapPin } from 'react-icons/fi';
const Location = () => {
  const data: { name: string; location: string }[] = [
    { name: 'New York', location: 'New York State, United States' },
    { name: 'Paris', location: 'France' },
    { name: 'Madrid', location: 'Spain' },
    { name: 'Santorini', location: 'Greece' },
  ];
  return (
    <div className="px-10 md:w-[500px]">
      <ul className="rounded-sm bg-white p-5 text-black">
        {data.map((item, i) => {
          return (
            <li
              key={i}
              className="smooth-hover flex items-center justify-start p-3 hover:bg-dark-2"
            >
              <FiMapPin className="mr-3 text-2xl text-dark" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.location}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Location;
