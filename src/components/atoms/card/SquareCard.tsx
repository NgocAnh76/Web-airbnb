import React from "react";
import { ButtonClient } from "../buttons";
import Image from "next/image";

interface SquareCardProps {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

const SquareCard = ({ image, title, subtitle, link }: SquareCardProps) => {
  return (
    <>
      <div className=" px-5  pb-5 rounded-lg w-full md:w-1/2 h-96 lg:h-[600px]">
        <div className=" relative w-full h-full  rounded-lg overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={image}
            alt={title}
            width={500}
            height={500}
          />

          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute top-0 left-0 right-0 p-12 lg:p-24 ">
            <p className="text-white text-lg lg:text-2xl capitalize lg:mb-3">
              {subtitle}
            </p>
            <h2 className="text-white max-w-64 lg:max-w-80 tracking-wide  mb-8 lg:mb-12 font-bold">
              {title}
            </h2>
            <ButtonClient
              href={link}
              className="bg-white text-black px-10 py-3 border-none lg:text-lg lg:px-16 lg:py-5 hover:bg-primary hover:text-white smooth-hover"
            >
              Learn More
            </ButtonClient>
          </div>
        </div>
      </div>
    </>
  );
};

export default SquareCard;
