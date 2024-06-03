import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <>
      <div
        id="Home"
        className="flex flex-col lg:flex-row justify-between items-center lg:items-start"
      >
        <div className="w-full lg:w-1/2 flex flex-col p-4">
          <div className="w-[10%] max-lg:w-[6%] relative max-md:hidden left-10">
            <div className="absolute top-5">
              <img className="w-[45px] h-[45px]" src="/Star 8.png" alt="star" />
            </div>
          </div>
          <div className="relative w-full mb-8 lg:max-w-[400px] lg:ml-[180px] md:ml-[50%]">
            <figcaption className="absolute right-[345px] top-[-60px] -z-10 max-sm:hidden">
              <img
                width={570}
                height={470}
                src="/red.png"
                alt="Decorative Red Element"
              />
            </figcaption>
            <p className="text-5xl lg:text-7xl mt-[120px] font-bold leading-[64px] w-full lg:w-[718px] lg:h-[128px] lg:top-[215px] lg:left-[175px]">
              Make The Best Financial Decisions
            </p>
            <p className="text-lg opacity-70 my-4 mt-8 w-full lg:w-[638px]">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
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
                width={700}
                height={400}
                src="/Group 35924.png"
                alt="Strip"
              />
              <img
                className="absolute top-14 left-[320px]"
                width={50}
                height={50}
                src="/Star 8.png"
                alt="Star"
              />
            </figcaption>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4 flex flex-col h-[700px] max-md:h-[700px] max-sm:hidden">
          <div className="relative h-full">
            <figcaption className="absolute">
              <img src="/Frame 1.png" alt="frame" width={780} height={300} />
            </figcaption>
            <figcaption className="absolute max-lg:hidden right-20 top-[500px] left-[150px] -z-10 max-md:top-44 ">
              <img
                className="rotate-180"
                width={470}
                height={470}
                src="/Ellipse 2.png"
                alt="Decorative Red Element"
              />
            </figcaption>
          </div>
        </div>
      </div>
    </>
  );
}
