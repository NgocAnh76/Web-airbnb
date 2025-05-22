import Image from 'next/image';
import React from 'react';
import { IoStarSharp } from 'react-icons/io5';

const Mission = () => {
  const data = [
    {
      icon: <IoStarSharp />,
      title: 'MISSION',
      subTitle:
        'Using modern training methods to create a team of high-quality programming staff',
      desc: 'CyberSoft uses advanced and modern training methods on the educational technology platform, combining traditional methods, online methods, flipped classrooms and real project-based learning, coordinating between the experienced training team and the requirements of companies and businesses. Thereby, CyberSoft helps learners develop thinking, analysis, career specialization, lifelong learning, ready to meet all business needs.',
      url: '/images/blog/mission-2.jpg',
    },
  ];
  return (
    <section className="bg-blue-100 py-5 lg:py-10">
      <div className="container">
        {data.map((item, index) => {
          return (
            <div className="lg:flex" key={index}>
              <div className="lg:w-1/2">
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  src={item.url}
                  alt={item.title}
                  width={500}
                  height={500}
                />
              </div>
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Mission;
