"use client";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

interface ReadMoreButtonProps {
  onClick?: () => void;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`custom-button flex items-center justify-center p-1 w-[218.79px] h-[49.14px] rounded-full relative text-[15px] font-semibold font-inter-bold leading-none cursor-pointer transition duration-300 ease ${
        isClicked ? "bg-[#F9C84D] text-white" : "bg-white text-black"
      }`}
    >
      <span className="whitespace-nowrap overflow-hidden overflow-ellipsis pl-4">
        Read more
      </span>
      <div
        className={`flex items-center justify-center w-8 h-8 ml-16 rounded-full ${
          isClicked ? "bg-white" : "bg-[#F9C84D]"
        }`}
      >
        <FaArrowUp className="text-black transform rotate-45" />
      </div>
    </button>
  );
};

export default ReadMoreButton;