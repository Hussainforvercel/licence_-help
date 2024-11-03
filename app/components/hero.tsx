"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HeroSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("Auto");

  return (
    <section className="relative flex flex-col items-center text-center h-screen bg-[#F1F1F1]">
      {/* Main Content */}
      <div className="max-w-3xl px-4 pt-10 md:pt-20 lg:pt-28">
        {/* Heading with Image on the Right */}
        <div className="flex items-center justify-center space-x-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            {/* First Row */}
            <div className="whitespace-nowrap">
              Choose from <span className="text-yellow-500">1000+</span> Driving
              Instructors
            </div>
            {/* Second Row */}
            <div className="whitespace-nowrap">
              start your{" "}
              <span className="inline-flex items-center text-yellow-500">
                <img src="sign-arrow.png" className="mx-1" alt="Arrow Icon" />{" "}
                journey
              </span>{" "}
              with <span className="text-yellow-500">us today</span>
            </div>
          </h1>
          <img src="sign-attention.png" className="ml-3" alt="Attention Icon" />
        </div>

        {/* Paragraph Text */}
        <p className="mt-4 text-gray-600 text-lg md:text-base">
          With user-friendly tools, clear guidelines, and dedicated support,
          we're here to help you hit the road with confidence. Drive with ease
        </p>

        {/* Options and Input directly below the paragraph */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <img
            src="sign-route.png"
            className="ml-3 absolute left-28"
            alt="Route Icon"
          />
          <button
            onClick={() => setSelectedOption("Auto")}
            className={`px-4 py-2 rounded-full border ${
              selectedOption === "Auto"
                ? "bg-green-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Auto
          </button>
          <button
            onClick={() => setSelectedOption("Manual")}
            className={`px-4 py-2 rounded-full border ${
              selectedOption === "Manual"
                ? "bg-gray-700 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Manual
          </button>

          {/* Input Field */}
          <div className="flex items-center border rounded-full bg-white px-4 py-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Enter your suburb"
              className="outline-none bg-transparent flex-grow text-gray-700 placeholder-gray-500"
            />
            <FaSearch className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Full-Width Background for Options and Input with Fade Overlay */}
      <div className="w-full h-full mt-8 flex justify-center relative">
        {/* Background Image with Rounded Bottom Sides */}
        <div
          className="absolute inset-0 w-full h-1/2 mx-auto rounded-bl-[200px] rounded-br-[200px] overflow-hidden"
          style={{
            backgroundImage: "url('/bg.png')", // Replace with the path to your image
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Overlay with Fade Effect */}
        <div
          className="absolute inset-0 w-full h-1/2 mx-auto bg-[#F1F1F1] rounded-bl-[200px] rounded-br-[200px]"
          style={{ opacity: 0.5 }} // Adjust opacity to achieve desired fade effect
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
