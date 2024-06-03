import React from 'react'
import Navbar from './Navbar';

export default function Download() {
  return (
    <>
    <Navbar />
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Get in Touch or Download Our App
        </h2>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-8">
          {/* Contact Form */}
          <form className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </form>
          {/* Download Links */}
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Download Our App</h3>
            <p className="text-gray-700 mb-4 text-center">
              Available on your favorite platforms. Download now!
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="bg-black text-white font-bold py-2 px-4 rounded flex items-center justify-center"
              >
               
                Download on the Apple Store
              </a>
              <a
                href="#"
                className="bg-green-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
              >
                
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
