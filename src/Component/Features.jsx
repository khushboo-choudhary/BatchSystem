import React from "react";

export default function Features() {
  return (
    <>
      <div
        id="Features"
        className="flex flex-col lg:flex-row h-[650px] max-md:h-auto justify-between   max-lg:ml-[5%] ml-[10%]"
      >
        <div className="w-full p-4 h-full max-lg:hidden">
          <div className="relative">
            <figcaption className="absolute">
              <img width={50} height={50} src={"/Star 8.png"} alt="Star" />
            </figcaption>
            <figcaption className="absolute right-0 lg:right-[120px] top-[0px] -z-9 hidden md:block rotate-180 w-full">
              <img width={670} height={570} src="/red.png" alt="red" />
            </figcaption>
            <figcaption className="absolute top-8 right-20 ">
              <img
                className="rotate-180"
                width={500}
                height={500}
                src={"Ellipse 2157.png"}
                alt="Ellipse"
              />
            </figcaption>
            <figcaption className="absolute top-16 right-32">
              <img
                className=" rotate-180"
                width={500}
                height={500}
                src={"/Ellipse 2157.png"}
                alt="Ellipse"
              />
            </figcaption>

            <figcaption className="absolute top-24 right-44">
              <img
                className=" rotate-180"
                width={500}
                height={500}
                src={"/Ellipse 2157.png"}
                alt="Ellipse"
              />
            </figcaption>
            <figcaption className="absolute top-0 right-32">
              <img
                className=""
                width={450}
                height={450}
                src={"/iPhone-13-Pro-FrontStr.png"}
                alt="iPhone"
              />
            </figcaption>
            
          </div>
        </div>
        <div className="w-full pt-14 pr-2 ">
          <div>
            <h5 className="text-red-400 text-2xl max-md:text-lg">FEATURES</h5>
            <h1 className="text-[50px] max-md:text-[35px] font-SecondF font-bold">
              Uifry Premium
            </h1>
          </div>
          <div className="my-6">
            <div className="flex gap-x-3">
              <img width={25} height={25} src={"/star-05.png"} alt="imge" />
              <p className="md:text-lg font-semibold ">Budgeting Intervals</p>
            </div>
            <div>
              <p className=" md:text-lg opacity-70 my-4 md:w-3/4">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor.
              </p>
            </div>
          </div>
          <div className=" my-6">
            <div className=" flex gap-x-3">
              <img width={25} height={25} src={"/cube-02.png"} alt="ime" />
              <p className="  md:text-lg font-semibold ">Budgeting Intervals</p>
            </div>
            <div>
              <p className="  md:text-lg opacity-70 my-4 md:w-3/4">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor.
              </p>
            </div>
          </div>
          <div className="my-6">
            <div className="flex gap-x-3">
              <img width={25} height={25} src={"/cube-04.png"} alt="i" />
              <p className="md:text-lg font-semibold ">Budgeting Intervals</p>
            </div>
            <div>
              <p className="md:text-lg opacity-70 my-4 md:w-3/4">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor.
              </p>
            </div>
          </div>
        </div>
        <div>
          <figcaption className="absolute right-3 -z-9">
            <img width={370} height={370} src={"Group 35897.png"} alt="Star" />
          </figcaption>
        </div>
      </div>
    </>
  );
}
