import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeComment = () => {
  const dataComment: {
    image: string;
    name: string;
    job: string;
    comment: string;
  }[] = [
    {
      image: '/images/homePages/user_comment_1.png',
      name: 'John Doe',
      job: 'Designer',
      comment:
        'The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests. Really a nice place.',
    },
    {
      image: '/images/homePages/user_comment_2.png',
      name: 'Jane Doe',
      job: 'Developer',
      comment:
        'The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests. Really a nice place.',
    },
    {
      image: '/images/homePages/user_comment_3.png',
      name: 'John Doe',
      job: 'Designer',
      comment:
        'The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests. Really a nice place.',
    },
  ];
  return (
    <section className="bg-blue-1">
      <div className="container mx-auto">
        <div className="items-start gap-10 px-5 py-16 lg:flex">
          <div className="lg:w-1/2">
            <div>
              <h2 className="tracking-wider lg:max-w-md">
                What our customers are saying us?
              </h2>
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                Aenean eu enim justo.
              </p>
            </div>
            <div className="flex-box w-4/5 items-start justify-between">
              <div>
                <h2>13m+</h2>
                <p className="py-2">Happy People</p>
              </div>
              <div>
                <h2>4.88</h2>
                <p className="py-2">Overall Rating</p>
                <div className="flex-box text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStarHalfStroke />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:w-1/2">
            <Swiper
              spaceBetween={50}
              pagination={{ type: 'progressbar' }}
              scrollbar={{ draggable: true }}
              modules={[Pagination, Scrollbar]}
              className="mb-6 w-full"
            >
              {dataComment.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="">
                    <div className="flex-box mb-3 justify-start gap-3">
                      <div className="h-20 w-20 lg:h-28 lg:w-28">
                        <img className="object-cover" src={item.image} alt="" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black lg:text-3xl">
                          {item.name}
                        </h3>
                        <p className="lg:text-xl">{item.job}</p>
                      </div>
                    </div>
                    <p className="font-medium text-black lg:text-xl">
                      {item.comment}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              <div className="flex items-center justify-between text-black md:w-3/5">
                <span className="text-sm md:text-base lg:text-lg">01</span>
                <div className="mx-2 w-full">
                  <div className="swiper-scrollbar"></div>
                </div>
                <span className="text-sm md:text-base lg:text-lg">
                  {String(dataComment.length).padStart(2, '0')}
                </span>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComment;
