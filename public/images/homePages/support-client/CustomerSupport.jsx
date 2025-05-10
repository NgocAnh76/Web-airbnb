import React from "react";
const CustomerSupport = () => {
  const data = [
    {
      icon: "./public/images/homePages/customer_support_1.svg",
      title: "Best Price Guarantee",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "./public/images/homePages/customer_support_2.svg",
      title: "Easy & Quick Booking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "./public/images/homePages/customer_support_3.svg",
      title: "Customer Care 24/7",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 lg:py-16 items-center text-center mt-10">
          {data.map((item, index) => (
            <div key={index} className="my-3">
              <img
                className="mx-auto w-20 h-20"
                src={item.icon}
                alt={item.title}
              />
              <h3 className="text-black py-5">{item.title}</h3>
              <p className="lg:max-w-[300px] mx-auto">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
