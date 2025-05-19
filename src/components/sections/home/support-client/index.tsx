import { ButtonClient } from '@/components/atoms/buttons';
import React from 'react';

const SupportClient = () => {
  const data = [
    {
      icon: '/images/homePages/support-client/customer_support_1.svg',
      title: 'Best Price Guarantee',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: '/images/homePages/support-client/customer_support_2.svg',
      title: 'Easy & Quick Booking',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: '/images/homePages/support-client/customer_support_3.svg',
      title: 'Customer Care 24/7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
  return (
    <>
      <div className="container">
        <div className=" flex items-center justify-between px-5">
          <h2>Support policy</h2>
          <ButtonClient
            href={'#'}
            className="smooth-hover border-primary bg-white px-10 py-3 text-primary hover:bg-primary hover:text-white lg:px-16 lg:py-5 "
          >
            Learn More
          </ButtonClient>
        </div>
        <div className=" grid grid-cols-1 items-center gap-4 py-5 text-center md:grid-cols-2 lg:grid-cols-3 lg:py-10">
          {data.map((item, index) => (
            <div key={index} className="my-3">
              <img
                className="mx-auto h-20 w-20"
                src={item.icon}
                alt={item.title}
              />
              <h3 className="py-5 text-black">{item.title}</h3>
              <p className="mx-auto lg:max-w-[300px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SupportClient;
