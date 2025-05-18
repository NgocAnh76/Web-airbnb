import React from "react";
import { FaCarSide } from "react-icons/fa";
import { GoDot } from "react-icons/go";
const IsLoading = () => {
  return (
    <div className="flex-box justify-start slide-animation">
      <GoDot className="text-black text-xl  " />
      <GoDot className="text-black text-lg " />
      <GoDot className="text-black text-base " />
      <p className="text-black text-xl font-bold">IsLoading</p>
      <GoDot className="text-black text-base" />
      <GoDot className="text-black text-lg" />
      <GoDot className="text-black text-xl" />
      <FaCarSide className="text-black text-3xl" />
    </div>
  );
};

export default IsLoading;
