"use client"; // Tambahkan "use client" jika Anda menggunakan hooks (useState) di file ini

import React from "react";
import Image from "next/image"; // Gunakan Next.js Image component
import { FaInstagram } from "react-icons/fa"; // Gunakan react-icons
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 mt-12 h-screen">
      {/* Padding footer */}
      <div className="flex flex-col justify center items-start lg:flex-row lg:items-center lg:hidden">
        {/* Menambah space-y untuk memberi jarak antar elemen */}
        {/* Gunakan Image dari Next.js */}
        <Image
          src="/logo-aircon-fix.png" // Path gambar logo
          alt="Airlangga Convention 2.0 Logo"
          width={150} // Tentukan lebar gambar
          height={43} // Tentukan tinggi gambar // Menambah margin bawah logo agar tidak terlalu rapat
        />
        <div className="flex flex-row gap-4 items-start justify-between w-full mb-11 mt-5">
          {/* About Us Section */}
          <div>
            <h2 className="font-bold mb-3">About Us</h2>{" "}
            {/* Menambah margin bawah pada judul */}
            <ul className="space-y-2">
              <li>Airlangga Convention 2.0</li>
              <li>Opening Party</li>
              <li>Closing Party</li>
              <li>Supporter</li>
              <li>Tenant</li>
              <li>Performance</li>
              <li>Sponsor & Media Partner</li>
            </ul>
          </div>

          {/* Competition Section */}
          <div className="">
            <h2 className="font-bold mb-3">Competition</h2>{" "}
            {/* Menambah margin bawah pada judul */}
            <ul className="space-y-2">
              <li>Karya Tulis Ilmiah</li>
              <li>Infografis</li>
              <li>Try Out</li>
              <li>Mobile Legends</li>
              <li>Business Plan</li>
              <li>Cerdas Cermat</li>
              <li>Basket</li>
            </ul>
          </div>

          {/* Contact Us Section */}
        </div>
        <div>
            <h2 className="font-bold mb-3">Contact Us</h2>{" "}
            {/* Menambah margin bawah pada judul */}
            <p className="flex items-center justify-center space-x-2">
              <FaInstagram className="text-xl" />
              <span>Instagram</span>
            </p>
          </div>
        {/* Divider */}
        <div className="border-t border-white w-full mt-6"></div>{" "}
        {/* Jarak lebih kecil antara divider dan konten */}
        {/* Copyright / Footer Text */}
        <p className="mt-4 text-center">&copy; Aircon2.0</p>{" "}
        {/* Jarak yang lebih besar antara divider dan teks */}
      </div>
      <div className="hidden lg:block w-full gap-3 mt-8 px-28">
        <div className="flex flex-row justify-between items-start gap-20">
        <div className="">
          <Image src="/logo-aircon-fix.png" width={200} height={200} alt="logo"></Image>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-start item-start gap-16">
            <div className="text-xl">
              <h1 className="text-xl mb-2 font-bold">About Us</h1>
              <Link href="/about-us">Airlangga Convention 2.0</Link>
            </div>
            <div className="text-xl">
              <h1 className="text-xl mb-2 font-bold">Competition</h1>
              <div className="w-full flex flex-col justify-start items-start gap-3">
                <Link href="/about-us">Karya Tulis Ilmiah</Link>
                <Link href="/about-us">Infografis</Link>  
                <Link href="/about-us">Try Out</Link>  
                <Link href="/about-us">Business Plan</Link>
                <Link href="/about-us">Basket</Link>        
              </div>
            </div>
            <div className="text-xl">
              <h1 className="text-xl mb-2 font-bold">Others</h1>
              <div className="w-full flex flex-col justify-start items-start gap-3">
                <Link href="/about-us">Opening Party</Link>
                <Link href="/about-us">Closing Party</Link>  
                <Link href="/about-us">Supporter</Link>  
                <Link href="/about-us">Tenant</Link>
                <Link href="/about-us">Performance</Link>
                <Link href="/about-us">Sponsor & Media Partner</Link>          
              </div>
            </div>
            <div className="text-xl">
              <h1 className="text-xl mb-2 font-bold">Competition</h1>
              <div className="w-full flex flex-col justify-start items-start gap-3">
                <Link href="/about-us">Karya Tulis Ilmiah</Link>
                <Link href="/about-us">Infografis</Link>  
                <Link href="/about-us">Try Out</Link>  
                <Link href="/about-us">Business Plan</Link>
                <Link href="/about-us">Basket</Link>        
              </div>
            </div>
          </div>
          <div className="w-full bg-white py-[0.015rem] mt-20"></div>
          <p className="mt-4 text-start">&copy; Aircon2.0</p>{" "}
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
