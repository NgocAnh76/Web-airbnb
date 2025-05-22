import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Destination = () => {
  const description = [
    {
      id: 1,
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.lorem ipsum dolor sit amet consectetur.',
    },
    {
      id: 2,
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
      id: 3,
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
      id: 4,
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
  ];

  const images = [
    { id: 1, src: '/images/blog/blog-1.jpg' },
    { id: 2, src: '/images/blog/blog-2.jpg' },
    { id: 3, src: '/images/blog/blog-3.jpg' },
    { id: 4, src: '/images/blog/blog-4.jpg' },
  ];

  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col p-5 py-5 lg:flex-row lg:py-10">
          <div className="w-full lg:w-2/5">
            <h2 className="mb-3 lg:mb-5">Some popular destinations</h2>
            {description.map((item) => (
              <div className="mb-4 flex items-center lg:mb-5" key={item.id}>
                <FaCheck className=" w-1/6 text-xl text-primary" />
                <p className=" w-5/6 capitalize leading-6 lg:leading-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 w-full lg:mt-0 lg:w-3/5 lg:p-5">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {images.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative h-[200px] ${
                    item.id === 1 || item.id === 3
                      ? 'lg:row-span-2 lg:h-[400px]'
                      : ''
                  }`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={item.src}
                      alt={`blog image ${index + 1}`}
                      fill
                      className="rounded-lg object-cover shadow-md"
                      priority={index === 0}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
