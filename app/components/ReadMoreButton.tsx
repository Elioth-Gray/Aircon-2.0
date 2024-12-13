"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

interface ReadMoreButtonProps {
  onClick?: () => void;
  url: string;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ onClick, url }) => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="flex flex-row px-[0.6rem] py-1 bg-white w-[80%] rounded-full justify-between space-x-2 text-[10px]  items-center font-bold"
      onClick={() => router.push(url)}
    >
      <p>Read More</p>
      <span className="p-2 rounded-full bg-[#F9C84D]">
        <FaArrowUp className="text-black transform rotate-45" />
      </span>
    </button>
  );
};

export default ReadMoreButton;
