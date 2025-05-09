import { motion } from "framer-motion";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { logOut } from "@/components/common/Api/auth";
import Link from "next/link";
import Image from "next/image";
const Avatar = () => {
  const [hover, setHover] = useState(false);
  const data: { title: string; link?: string }[] = [
    { title: "My Profile", link: "/user/profile" },
    { title: "Dashboard", link: "/user/dashboard" },
    { title: "Logout" },
  ];
  const logoutUser = logOut();
  return (
    <div
      className="p-2 relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        href="/user/profile"
        className={twMerge(
          "w-12 h-12 md:w-14 md:h-14 rounded-full",
          " block overflow-hidden object-center "
        )}
      >
        <Image
          className="w-24 h-24 object-cover "
          src="/images/homePages/barcelona.jpg"
          alt="avatar"
          width={200}
          height={200}
        />
      </Link>
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: hover ? 1 : 0, translateY: hover ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 right-0  rounded-lg overflow-hidden translate-y-full bg-white"
      >
        <ul>
          {data.map((item, index) => {
            return (
              <li
                key={index}
                className="py-2 px-5 lg:py-4 lg:px-10 hover:bg-gray-300 smooth-hover  "
              >
                {item.title === "Logout" ? (
                  <button
                    className={twMerge("text-dark text-sm ")}
                    onClick={() => {
                      logoutUser();
                    }}
                  >
                    {item.title}
                  </button>
                ) : (
                  <Link
                    className={twMerge("text-dark text-sm")}
                    href={item.link || ""}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default Avatar;
