"use client";
import React, { useState } from "react";
import Image from "next/image";
import { List } from "@phosphor-icons/react";
import ReadMoreButton from "./ReadMoreButton";
import { ArrowUpRight } from "@phosphor-icons/react";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="relative w-full bg-[#EEEDE9] mt-10 mb-5">
        {" "}
        {/* Navbar background with margin-top */}
        <div className="mx-auto px-10 sm:px-6 lg:px-20">
          <div className="flex flex-row items-center justify-between w-full">
            {/* Logo di sebelah kiri */}
            <div className="flex-shrink-0 flex items-center py-2">
              {" "}
              {/* Menambahkan padding vertical */}
              <a href="/" className="text-black">
                {/* Gambar logo di sebelah kiri navbar */}
                <Image
                  src="/logo-aircon-fix.png" // Path gambar logo relatif dari folder public
                  alt="logo"
                  width={150} // Lebar gambar logo lebih kecil
                  height={150} // Tinggi gambar logo lebih kecil
                  className="object-contain lg:hidden" // Menjaga proporsi gambar
                />
                <Image
                  src="/logo-aircon-fix.png" // Path gambar logo relatif dari folder public
                  alt="logo"
                  width={180} // Lebar gambar logo lebih kecil
                  height={180} // Tinggi gambar logo lebih kecil
                  className="object-contain hidden lg:block" // Menjaga proporsi gambar
                />
              </a>
            </div>
            {/* Navbar Links on Desktop */}
            <div className="hidden lg:flex flex--row justify-center items-center space-x-4">
              <a
                href="/"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg lg:text-xl"
              >
                Home
              </a>
              <a
                href="/about-us"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg lg:text-xl"
              >
                About Us
              </a>
              <a
                href="/competitions"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg lg:text-xl"
              >
                Competition
              </a>
              <a
                href="/"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg lg:text-xl"
              >
                Supporter
              </a>
              <a
                href="/"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg lg:text-xl"
              >
                Tenant
              </a>
              <a
                href="/"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg lg:text-xl"
              >
                Performance
              </a>
              <a
                href="/"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg lg:text-xl"
              >
                Sponsor
              </a>
            </div>
            {/* Navbar Toggler (Hamburger Menu) */}
            <div className="lg:hidden flex items-center ml-auto">
              <button
                className="flex-col items-center justify-center p-1 py-3 rounded-lg text-black bg-white border border-black"
                onClick={toggleNavbar}
                style={{
                  width: "50px", // Lebar toggle lebih kecil
                  zIndex: 10, // Agar toggle berada di atas elemen lainnya
                }}
              >
                <List className="text-black w-full" size={20} />
              </button>
            </div>
            {/* Register Button */}
            <div className="hidden lg:flex items-center ">
              <button className="flex flex-row justify-between items-center text-xl bg-white py-3 px-7 rounded-full shadow-lg space-x-2 gap-6 font-medium">
                Register
                <div className="p-2 bg-[#F9C84D] rounded-full">
                  <ArrowUpRight size={25} />
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Navbar Links on Mobile */}
        {isClick && (
          <div className=" lg:hidden bg-white absolute w-full mt-3 z-50">
            <div className="px-4 pt-4 pb-4 space-y-2 sm:px-6 bg-white rounded-lg flex flex-col gap-3">
              {" "}
              {/* Menambahkan padding untuk membuat jarak lebih besar */}
              <a
                href="/"
                className="text-black text-[16px] block hover:text-[#B6723A] hover:font-bold  rounded-lg pl-4"
              >
                Home
              </a>{" "}
              {/* Menambahkan padding kiri */}
              <a
                href="/about-us"
                className="text-black text-[16px] block hover:bg-white hover:text-[#B6723A] hover:font-bold rounded-lg pl-4"
              >
                About Us
              </a>{" "}
              {/* Menambahkan padding kiri */}
              <a
                href="/competitions"
                className="text-black text-[16px] block hover:bg-white hover:text-[#B6723A] hover:font-bold rounded-lg pl-4"
              >
                Competition
              </a>{" "}
              {/* Menambahkan padding kiri */}
              <a
                href="/"
                className="text-black text-[16px] block hover:bg-white hover:text-[#B6723A] hover:font-bold rounded-lg pl-4"
              >
                Supporter
              </a>{" "}
              {/* Menambahkan padding kiri */}
              <a
                href="/"
                className="text-black text-[16px] block hover:bg-white hover:text-[#B6723A] hover:font-bold rounded-lg pl-4"
              >
                Tenant
              </a>{" "}
              {/* Menambahkan padding kiri */}
              <a
                href="/"
                className="text-black text-[16px] block hover:bg-white hover:text-[#B6723A] hover:font-bold rounded-lg pl-4"
              >
                Performance
              </a>{" "}
              {/* Menambahkan padding kiri */}
              <a
                href="/"
                className="text-black text-[16px] block hover:bg-white hover:text-[#B6723A] hover:font-bold rounded-lg pl-4"
              >
                Sponsor
              </a>{" "}
              {/* Menambahkan padding kiri */}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
