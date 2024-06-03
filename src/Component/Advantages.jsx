import React from "react";

export default function Advantages() {
  return (
    <>
      <section className="mx-auto lg:w-4/5">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center pt-14 pr-2 mx-auto">
          <div className="w-4/5 lg:w-[535px] mb-8 lg:mb-0">
            <h5 className="text-red-400 text-2xl max-md:text-lg text-center lg:text-left">
              ADVANTAGES
            </h5>
            <h1 className="text-[50px] max-md:text-[35px] font-SecondF font-bold text-center lg:text-left">
              Why Choose Ureka?
            </h1>
            <div className="icon-title flex items-center justify-center lg:justify-start my-4">
              <img src="/bell.png" alt="Icon" className="w-10 h-10 mr-2" />
              <h3 className="text-2xl font-semibold">Clever Notifications</h3>
            </div>
            <p className="text-gray-700 text-center lg:text-left">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>

          <div className="flex-2 mt-8 lg:mt-0">
            <img
              src="/Group 35935.png"
              alt="Illustration"
              className="w-full lg:w-auto"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto lg:w-4/5">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse items-center justify-center pt-14 pr-2 mx-auto">
          <div className="w-4/5 lg:w-[535px] mb-8 lg:mb-0">
            <div className="icon-title flex items-center justify-center lg:justify-start my-4">
              <img
                src="/Group 35899.png"
                alt="Icon"
                className="w-10 h-10 mr-2"
              />
              <h3 className="text-2xl font-semibold text-center lg:text-left">
                Fully Customizable
              </h3>
            </div>
            <p className="text-gray-700 text-center lg:text-left">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
          <div className="flex-2 mt-8 lg:mt-0">
            <img
              src="/Group 35937.png"
              alt="Illustration"
              className="w-full lg:w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
