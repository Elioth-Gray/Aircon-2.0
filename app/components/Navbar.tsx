"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="relative w-full bg-[#EEEDE9] mt-4 ">
        {" "}
        {/* Navbar background with margin-top */}
        <div className="mx-auto px-10 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo di sebelah kiri */}
            <div className="flex-shrink-0 flex items-center py-2">
              {" "}
              {/* Menambahkan padding vertical */}
              <a href="/" className="text-black">
                {/* Gambar logo di sebelah kiri navbar */}
                <Image
                  src="/logo-1.png" // Path gambar logo relatif dari folder public
                  alt="logo"
                  width={120} // Lebar gambar logo lebih kecil
                  height={43} // Tinggi gambar logo lebih kecil
                  className="object-contain" // Menjaga proporsi gambar
                />
              </a>
            </div>
            {/* Navbar Links on Desktop */}
            <div className="hidden lg:flex flex-grow justify-center space-x-4">
              <a
                href="/"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg"
              >
                Home
              </a>
              <a
                href="/"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg"
              >
                About Us
              </a>
              <a
                href="/"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg"
              >
                Competition
              </a>
              <a
                href="/"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg"
              >
                Supporter
              </a>
              <a
                href="/"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg"
              >
                Tenant
              </a>
              <a
                href="/"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg"
              >
                Performance
              </a>
              <a
                href="/"
                className="text-black text-[16px] hover:bg-white hover:text-black hover:font-bold px-3 py-2 rounded-lg"
              >
                Sponsor
              </a>
            </div>
            {/* Navbar Toggler (Hamburger Menu) */}
            <div className="lg:hidden flex items-center ml-auto">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
                style={{
                  width: "50px", // Lebar toggle lebih kecil
                  zIndex: 10, // Agar toggle berada di atas elemen lainnya
                }}
              >
                <Image
                  src="/Toggle.png" // Path gambar Toggle yang disediakan
                  alt="toggle-icon"
                  width={40} // Lebar gambar toggle lebih kecil
                  height={40} // Tinggi gambar toggle lebih kecil
                  className="w-full h-full" // Menyesuaikan ukuran gambar dengan container
                />
              </button>
            </div>
            {/* Register Button */}
            <div className="hidden lg:flex items-center ml-auto">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Register
              </button>
            </div>
          </div>
        </div>
        {/* Navbar Links on Mobile */}
        {isClick && (
          <div className=" lg:hidden bg-white">
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
                href="/"
                className="text-black text-[16px] block hover:bg-white hover:text-[#B6723A] hover:font-bold rounded-lg pl-4"
              >
                About Us
              </a>{" "}
              {/* Menambahkan padding kiri */}
              <a
                href="/"
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
