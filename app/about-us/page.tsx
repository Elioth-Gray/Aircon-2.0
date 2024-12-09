"use client";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="px-10 mt-5">
        <BackButton></BackButton>
        <div className="w-full mt-5 relative">
          <p className="text-8xl font-bold -z-30 relative">About</p> 
          <p className="text-8xl font-bold mt-4 z-10 relative">Us</p>
          <Image
            src="/logo-2.png"
            width={300}
            height={300}
            alt="Logo"
            className="absolute bottom-[10rem] top-3 left-10 -z-20"
          /> {/* z-index for Image */}
        </div>
        <div className="w-full mt-28 flex flex-col justify-center gap-5">
          <p className="text-xl font-medium">
            Hello Conners!! Kalian pasti bertanya-tanya apa sih AIRCON itu (Airlangga Convention)?
          </p>
          <p className="text-xl font-medium">
            Aircon adalah sebuah Kompetisi untuk para pelajar SMA/K seperti Kompetisi Menulis, Olimpiade Cerdas Cermat, Poster, Basket, dan Futsal.
          </p>
          <p className="text-xl font-medium">
            Kalian juga bisa nonton keseruan AIRCON loh dan hadir saat sekolah kalian bertanding serta mendukung sebagai supporter.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
