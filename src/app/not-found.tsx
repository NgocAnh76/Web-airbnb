import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex-box h-screen w-full bg-white lg:py-10">
      <div className="container mx-auto">
        <div className="items-center justify-center bg-white py-20 lg:flex">
          <div className="w-full">
            <Image
              className="w-full"
              src="/images/404.svg"
              alt="not found"
              width={500}
              height={500}
            />
          </div>
          <div className="px-5 md:mt-10">
            <p className="text-7xl font-bold text-black md:text-9xl">
              40<span className="text-primary">4</span>
            </p>
            <h1 className="py-3 text-black">Oops! Page not found</h1>
            <p className="mb-10">
              The page you are looking for does not exist. It might have been
              moved or deleted.
            </p>
            <Link
              href="/"
              className="bg-primary hover:bg-secondary smooth-hover rounded-md px-7 py-4 text-white"
            >
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
