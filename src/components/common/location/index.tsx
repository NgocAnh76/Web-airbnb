import React from "react";
import { FiMapPin } from "react-icons/fi";
const Location = () => {
  const data: { name: string; location: string }[] = [
    { name: "New York", location: "New York State, United States" },
    { name: "Paris", location: "France" },
    { name: "Madrid", location: "Spain" },
    { name: "Santorini", location: "Greece" },
  ];
  return (
    <div className="px-10 md:w-[500px]">
      <ul className="p-5 bg-white text-black rounded-sm">
        {data.map((item, i) => {
          return (
            <li
              key={i}
              className="flex-box justify-start p-3 hover:bg-dark-2 smooth-hover"
            >
              <FiMapPin className="text-2xl mr-3 text-dark" />
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
