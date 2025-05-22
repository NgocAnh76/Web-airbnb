import Image from 'next/image';
import React from 'react';
import { IoStarSharp } from 'react-icons/io5';

const Vision = () => {
  const data = [
    {
      icon: <IoStarSharp />,
      title: 'VISION',
      subTitle:
        'Become the leading professional programming training system in the region',
      desc: 'Become the leading professional programming training system in the region, providing highly skilled and specialized human resources for the development of the software industry in the current digital age, contributing to the development of society, making Vietnam a software development powerhouse.',
      url: '/images/blog/vission.jpg',
    },
  ];
  return (
    <section className="bg-blue-100 py-5 lg:py-10">
      <div className="container">
        {data.map((item, index) => {
          return (
            <div className="lg:flex" key={index}>
              <div className="p-5 lg:w-1/2">
                <div className="mb-3 flex items-center">
                  <p className="mr-2 text-3xl lg:text-5xl">{item.icon}</p>
                  <h2>{item.title}</h2>
                </div>
                <p className="mb-3 text-base font-semibold lg:text-lg">
                  {item.subTitle}
                </p>
                <p>{item.desc}</p>
              </div>
              <div className="lg:w-1/2">
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  src={item.url}
                  alt={item.title}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Vision;
