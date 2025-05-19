import { ButtonCustom } from '@/components/atoms/buttons';
import { InputField } from '@/components/atoms/input';
import Link from 'next/link';
import React from 'react';
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { SlEnvolopeLetter } from 'react-icons/sl';

const FooterMain = () => {
  interface FooterType {
    title: string;
    element: {
      label: string;
      link: string;
      subtitle?: string;
    }[];
  }
  const DATA_FOOTER: FooterType[] = [
    {
      title: 'Contact Us',
      element: [
        {
          label: 'Toll Free Customer Care',
          link: '/',
          subtitle: '+(84)123456789',
        },
        {
          label: 'Need live support?',
          link: '/',
          subtitle: 'support@gmail.com',
        },
      ],
    },
    {
      title: 'Company',
      element: [
        { label: 'About Us', link: '/' },
        { label: 'Careers', link: '/' },
        {
          label: 'Press',
          link: '/',
        },
        {
          label: 'Blog',
          link: '/',
        },
      ],
    },
    {
      title: 'Support',
      element: [
        {
          label: 'Help Center',
          link: '/',
        },
        {
          label: 'Contact',
          link: '/',
        },
        {
          label: 'Terms and Conditions',
          link: '/',
        },
        {
          label: 'Sitemap',
          link: '/',
        },
      ],
    },
    {
      title: 'Other Services',
      element: [
        {
          label: 'Car hire',
          link: '/',
        },
        {
          label: 'Activity Finder',
          link: '/',
        },
        {
          label: 'Tour List',
          link: '/',
        },
        {
          label: 'Flight finder',
          link: '/',
        },
      ],
    },
  ];
  return (
    <section>
      <div className="text-white">
        {/* Footer top */}
        <div className="bg-[#0D2857] p-5 lg:p-20">
          <div className="container mx-auto">
            <div className="">
              <div className="items-end justify-start gap-5 md:flex">
                <SlEnvolopeLetter className="text-3xl md:text-6xl lg:text-7xl" />
                <div className="mt-5">
                  <h2 className="mb-3 text-white">
                    Your Travel Journey Starts Here
                  </h2>
                  <p className="text-white">
                    Sign up and well send the best deals to you
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-start gap-3">
                <InputField
                  placeholder="Your Email"
                  className="md:w-sm lg:w-md rounded-lg bg-white py-3 text-sm text-primary lg:py-5"
                />
                <ButtonCustom
                  label="Subscribe"
                  className="mt-3 py-3 font-medium md:px-10 md:py-4 lg:px-10 "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          {/* Footer center */}
          <div className="grid grid-cols-2 gap-5 border-b border-dark/20 px-5 py-10 lg:grid-cols-3 lg:py-20">
            {DATA_FOOTER.map((item, index) => (
              <div key={index}>
                <h3 className="mb-3 text-base font-semibold text-black lg:mb-5 lg:text-lg">
                  {item.title}
                </h3>
                <ul>
                  {item.element.map((element, index) => (
                    <li key={index} className="mb-3 lg:mb-5">
                      <Link
                        className="text-sm font-medium text-dark lg:text-base"
                        href={element.link}
                      >
                        {element.label}
                      </Link>{' '}
                      <br />
                      <Link
                        className="mt-2 text-sm text-primary lg:text-base"
                        href={element?.link}
                      >
                        {element?.subtitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 md:col-span-1">
              <h3 className="mb-3 text-base font-semibold text-black lg:mb-5 lg:text-lg">
                Mobile
              </h3>
              <div className="mb-5 flex items-center justify-start gap-5 rounded-lg border border-dark/30 p-3">
                <FaApple className="text-4xl text-black" />
                <div>
                  <p>Download on the</p>
                  <p className="text-base font-semibold text-black">
                    Apple Store
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-5 rounded-lg border border-dark/30 p-3">
                <FaGooglePlay className="text-4xl text-black" />
                <div>
                  <p>Get in on</p>
                  <p className="text-lg font-semibold text-black">
                    Google Play
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer bottom */}
          <div className="flex items-center justify-between p-5 lg:px-10">
            <div>
              <p className="text-sm md:text-base lg:text-lg">
                © 2025 <span className="text-primary">Travel</span>
              </p>
            </div>
            <div className="flex items-center gap-5 lg:gap-10">
              <FaFacebookF className="text-lg text-primary hover:text-secondary lg:text-xl" />
              <FaTwitter className="text-lg text-primary hover:text-secondary lg:text-xl" />
              <FaInstagram className="text-lg text-primary hover:text-secondary lg:text-xl" />
              <FaYoutube className="text-lg text-primary hover:text-secondary lg:text-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterMain;
