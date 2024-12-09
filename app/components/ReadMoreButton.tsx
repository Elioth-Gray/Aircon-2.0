"use client";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link"; // Mengimpor Link dari Next.js

interface ReadMoreButtonProps {
  onClick?: () => void;
  href?: string; // Menambahkan href sebagai props untuk navigasi
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ onClick, href }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick();
    }
  };

  // Jika ada `href`, gunakan Link untuk navigasi, jika tidak, lakukan aksi onClick biasa
  const buttonContent = (
    <button
      onClick={handleClick}
      className="flex flex-row px-2 py-1 bg-white w-full rounded-full justify-between space-x-2 text-[10px] items-center font-bold"
    >
      <p>Read More</p>
      <span className="p-2 rounded-full bg-[#F9C84D]">
        <FaArrowUp className="text-black transform rotate-45" />
      </span>
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

export default ReadMoreButton;
