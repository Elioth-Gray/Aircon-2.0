"use client"; // Tambahkan "use client" jika Anda menggunakan hooks (useState) di file ini

import React from "react";
import Image from "next/image"; // Gunakan Next.js Image component
import { FaInstagram } from "react-icons/fa"; // Gunakan react-icons

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      {/* Padding footer */}
      <div className="flex flex-col items-center space-y-4">
        {/* Menambah space-y untuk memberi jarak antar elemen */}
        {/* Gunakan Image dari Next.js */}
        <Image
          src="/logo-1.png" // Path gambar logo
          alt="Airlangga Convention 2.0 Logo"
          width={150} // Tentukan lebar gambar
          height={43} // Tentukan tinggi gambar
          className="mb-4" // Menambah margin bawah logo agar tidak terlalu rapat
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left px-4">
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
          <div>
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
          <div>
            <h2 className="font-bold mb-3">Contact Us</h2>{" "}
            {/* Menambah margin bawah pada judul */}
            <p className="flex items-center justify-center space-x-2">
              <FaInstagram className="text-xl" />
              <span>Instagram</span>
            </p>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-white w-full mt-6"></div>{" "}
        {/* Jarak lebih kecil antara divider dan konten */}
        {/* Copyright / Footer Text */}
        <p className="mt-4 text-center">Aircon2.0</p>{" "}
        {/* Jarak yang lebih besar antara divider dan teks */}
      </div>
    </footer>
  );
};

export default Footer;
