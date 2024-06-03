import React from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/theme";
import { IoMdSunny, IoMdMenu, IoMdClose } from "react-icons/io";
import { MdBrightness2 } from "react-icons/md";

export default function Navbar() {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id) => {
    if (id === "Home") {
      return navigate("/");
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src="/icon.png" alt="Logo" className="h-10 w-15" />
          </div>
          <div className="hidden md:flex md:space-x-8 md:mr-[500px]">
            <p
              className="hover:text-red-500 cursor-pointer md:text-lg text-red-500 font-semibold"
              onClick={() => handleScroll("Home")}
            >
              Home
            </p>
            <p
              className="hover:text-red-500 cursor-pointer md:text-lg"
              onClick={() => handleScroll("Footer")}
            >
              About Us
            </p>
            <p
              className="hover:text-red-500 cursor-pointer md:text-lg"
              onClick={() => navigate("/pricing")}
            >
              Pricing
            </p>
            <p
              className="hover:text-red-500 cursor-pointer md:text-lg"
              onClick={() => handleScroll("Features")}
            >
              Features
            </p>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button
              className="bg-black text-white px-4 py-2 rounded"
              onClick={() => navigate("/download")}
            >
              Download
            </button>
            <button
              type="button"
              onClick={toggeltheme}
              className="bg-white border border-gray-300 px-4 py-2 rounded flex items-center"
              aria-label="toggle theme"
            >
              {themename === "dark" ? (
                <IoMdSunny size={24} color="#2978b5" />
              ) : (
                <MdBrightness2 size={24} color="#F10086" />
              )}
            </button>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
            <button
              type="button"
              onClick={toggeltheme}
              className="bg-white border border-gray-300 px-4 py-2 rounded flex items-center"
              aria-label="toggle theme"
            >
              {themename === "dark" ? (
                <IoMdSunny size={24} color="#2978b5" />
              ) : (
                <MdBrightness2 size={24} color="#F10086" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <p
              className="block text-gray-700 hover:text-red-500 cursor-pointer"
              onClick={() => handleScroll("Home")}
            >
              Home
            </p>
            <p
              className="block text-gray-700 hover:text-red-500 cursor-pointer"
              onClick={() => handleScroll("Footer")}
            >
              About Us
            </p>
            <p
              className="block text-gray-700 hover:text-red-500 cursor-pointer"
              onClick={() => navigate("/pricing")}
            >
              Pricing
            </p>
            <p
              className="block text-gray-700 hover:text-red-500 cursor-pointer"
              onClick={() => handleScroll("Features")}
            >
              Features
            </p>
            <button
              className="block w-full text-left bg-black text-white px-4 py-2 rounded mt-2"
              onClick={() => navigate("/download")}
            >
              Download
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
