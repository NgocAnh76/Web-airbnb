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
      <div className="container mx-auto">
        <div className="mt-10 grid grid-cols-1 items-center gap-4 py-5 text-center md:grid-cols-2 lg:grid-cols-3 lg:py-16">
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
