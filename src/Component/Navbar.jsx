import React from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/theme";
import { IoMdSunny } from "react-icons/io";
import { MdBrightness2 } from "react-icons/md";

export default function Navbar() {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
const navigate = useNavigate();

  const handleScrollToFooter = (id) => {
    if (id === "Home") {
      return navigate("/");
    }
   
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav>
      <div className="flex justify-between max-sm:mx-0  mt-6 max-md:mx-2 h-[40px] max-sm:gap-x-1 top-[40px] left-[175px] h-[60px] w-11/12">
        <div className=" w-[160px] max-lg:w-[100px] max-md:hidden"></div>
        <figure className="max-md:w-[200px] flex items-center justify-center">
          <img src="/icon.png" alt="" />
        </figure>
        <div className="flex gap-x-6  w-[60%] max-sm:gap-x-4 max-lg:w-[45%] max-md:w-[60%] items-center font-semibold max-md:text-sm max-sm:w-[70%] max-sm:text-[10px]">
          <p
            className=" hover:font-semibold hover:text-red-500 cursor-pointer text-[20px] text-[#FF5555]"
            onClick={() => handleScrollToFooter("Home")}
          >
            Home
          </p>
          <p
            className=" hover:font-semibold hover:text-red-500 cursor-pointer text-[20px]"
            onClick={() => handleScrollToFooter("Footer")}
          >
            About Us
          </p>
          <p
            className=" hover:font-semibold hover:text-red-500 cursor-pointer text-[20px]"
            onClick={() => navigate("/pricing")}
          >
            Pricing
          </p>
          <p
            className=" hover:font-semibold hover:text-red-500 cursor-pointer text-[20px]"
            onClick={() => handleScrollToFooter("Features")}
          >
            Features
          </p>
        </div>
        <div className="w-[8%] max-lg:w-[13%]  max-md:w-[15%]">
          <button
            className=" w-full h-full bg-black text-white font-extralight max-md:text-sm max-sm:text-[10px] text-[20px] rounded"
            onClick={() => navigate("/download")}
          >
            Download
          </button>
        </div>
        <button
          type="button"
          onClick={toggeltheme}
          className="btn"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <IoMdSunny size={34} color="blue"/> : <MdBrightness2 size={34}  color="red"/>}

        </button>
        <div className="w-[180px] max-lg:w-[100px] relative max-md:hidden"></div>
      </div>
    </nav>
  );
}
