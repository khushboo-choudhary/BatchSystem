import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <div
      id="Home"
      className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 py-8 lg:px-20"
    >
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="relative w-full mb-8 lg:ml-20">
          
          <p className="text-4xl lg:text-5xl xl:text-7xl mt-8 lg:mt-[120px] font-bold leading-snug lg:leading-[64px] w-full lg:w-[718px]">
            Make The Best Financial Decisions
          </p>

          <p className="text-base lg:text-lg opacity-70 my-4 mt-8 w-full lg:w-[638px]">
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
          <figcaption className="absolute right-0 lg:right-[35px] top-[-70px] -z-9 hidden md:block blur-2xl">
            <img width={570} height={470} src="/red.png" alt="red" />
          </figcaption>
          <div className="flex flex-col sm:flex-row items-center gap-4 cursor-pointer mt-6 w-full">
            <div className="flex items-center h-12 bg-black text-white px-4 rounded-md">
              <button className="mr-2 font-bold">Get Started</button>
              <HiOutlineArrowNarrowRight size={24} />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/Watch.png" alt="Watch" className="w-8 h-8" />
              <p className="text-lg font-semibold">Watch Video</p>
            </div>
          </div>
        </div>
        <div className="relative mt-8 lg:mt-0">
          <figcaption className="flex justify-center">
            <img
              className="w-full max-w-[700px] h-auto"
              src="/Group 35924.png"
              alt="Strip"
            />
            <img
              className="absolute top-14 left-1/2 transform -translate-x-1/2 md:left-[320px] md:translate-x-0 w-12 h-12"
              src="/Star 8.png"
              alt="Star"
            />
          </figcaption>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4 flex flex-col h-[700px] md:flex">
        <div className="relative h-full">
          <figcaption className="absolute right-0 lg:left-[100px] top-[380px] lg:left-[150px] -z-9 blur-xl">
            <img
              className="rotate-180"
              width={470}
              height={470}
              src="/Ellipse 2.png"
              alt="red"
            />
          </figcaption>
          <figcaption className="absolute">
            <img src="/Frame 1.png" alt="frame" width={780} height={300} />
          </figcaption>
        </div>
      </div>
    </div>
  );
}

