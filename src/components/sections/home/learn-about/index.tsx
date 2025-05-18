import React from "react";
import SquareCard from "@/components/atoms/card/SquareCard";

const LearnAbout = () => {
  const data = [
    {
      image: "/images/homePages/learn_about1.png",
      title: "Things To Do On Your Trip",
      subtitle: "",
      link: "",
    },
    {
      image: "/images/homePages/learn_about2.png",
      title: "Up to 70% Discount!",
      subtitle: "Enjoy Summer Deals",
      link: "",
    },
  ];
  return (
    <section>
      <div className="container mx-auto py-10 lg:py-20">
        <div className="md:flex">
          {data.map((item, index) => (
            <SquareCard
              key={index}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnAbout;
