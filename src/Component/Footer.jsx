import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="flex items-center justify-center py-16 relative px-4 md:mt-16">
        <img
          className="max-md:hidden -z-9 absolute left-0 top-[-90px] left-[20px]"
          width={500}
          height={500}
          src={"/red.png"}
          alt="imge"
        />
        <img
          width={"70%"}
          height={"50%"}
          src={"/Frame.png"}
          alt="imge"
          className="md:w-[70%] w-[90%] relative"
        />
        <img
          className="max-sm:hidden absolute top-[240px] left-[130px]"
          width={50}
          height={50}
          src={"Star 8.png"}
          alt="imge"
        />
       
      </div>

      <div
        id="Footer"
        className="grid grid-cols-8 h-auto mx-[10%] max-md:grid-cols-3 max-md:gap-y-4 cursor-pointer w-4/5"
      >
        <div className="col-span-2 flex flex-col gap-y-2 max-md:col-span-3 items-center justify-center">
          <img height={150} width={150} src={"/icon.png"} alt="imge" />
          <div className="flex gap-x-2 items-center text-sm mt-2">
            <IoMail size={22} color="#fd5753" />
            <p className="font-clash-display md:text-lg">Help@frybix.com</p>
          </div>
          <div className="flex gap-x-2 items-center text-sm">
            <FaPhoneAlt size={16} color="#fd5753" />
            <p className="font-clash-display md:text-lg">+1 234 456 678 89</p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-y-2 max-md:col-span-1 items-center justify-center">
          <p className="text-3xl font-clash-display mb-2 max-lg:text-2xl max-sm:text-lg font-bold">
            Links
          </p>
          <p className="font-clash-display hover:text-[#fd5753] transform duration-200 max-sm:text-sm">
            Home
          </p>
          <p className="font-clash-display hover:text-[#fd5753] transform duration-200 max-sm:text-sm">
            About Us
          </p>
          <p className="font-clash-display hover:text-[#fd5753] transform duration-200 max-sm:text-sm">
            Bookings
          </p>
          <p className="font-clash-display hover:text-[#fd5753] transform duration-200 max-sm:text-sm">
            Blog
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-y-2 max-md:col-span-1 items-center">
          <p className="text-3xl font-clash-display mb-2 max-lg:text-2xl max-sm:text-lg font-bold">
            Legal
          </p>
          <p className="font-clash-display hover:text-[#fd5753] transform duration-200 max-sm:text-sm">
            Terms Of Use
          </p>
          <p className="font-clash-display hover:text-[#fd5753] transform duration-200 max-sm:text-sm">
            Privacy Policy
          </p>
          <p className="font-clash-display hover:text-[#fd5753] transform duration-200 max-sm:text-sm">
            Cookie Policy
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-y-2 max-md:col-span-1 items-center">
          <p className="text-3xl font-clash-display mb-2 max-lg:text-2xl max-sm:text-lg font-bold">
            Product
          </p>
          <p className="font-clash-display hover:text-[#fd5753] transform duration-200 max-sm:text-sm">
            Take Tour
          </p>
          <p className="font-clash-display hover:text-[#fd5753] transform duration-200 max-sm:text-sm">
            Live Chat
          </p>
          <p className="font-clash-display hover:text-[#fd5753] transform duration-200 max-sm:text-sm">
            Reviews
          </p>
          <p></p>
        </div>
        <div className="col-span-3 max-md:col-span-3 items-center max-md:items-start mx-auto px-9">
          <p className="text-3xl font-clash-display mb-2 max-lg:text-2xl max-sm:text-lg mx-auto font-bold">
            Newsletter
          </p>
          <p className="font-clash-display hover:text-[#fd5753] transform duration-200 max-sm:text-sm">
            Stay Up To Date
          </p>
          <div className="w-[90%] grid grid-cols-2 gap-2 h-16 mt-4 ">
            <input
              className="col-span-1 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#fd5753]"
              type="text"
              placeholder="Your Email"
            />
            <button className="col-span-1 bg-black rounded-r-md text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <hr className="my-10 border-gray-300" />
        <p className="text-lg text-center mb-10 font-clash-display">
          Copyright 2022 uifry.com all rights reserved
        </p>
      </div>
    </>
  );
}
