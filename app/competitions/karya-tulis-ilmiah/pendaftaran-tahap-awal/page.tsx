"use client";

import React from "react";
import BackButton from "@/app/components/BackButton";
import { useRouter } from "next/navigation";

const CompetitionPage = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push(
      "/competitions/karya-tulis-ilmiah/pendaftaran-tahap-awal/reminder"
    );
  };

  return (
    <>
      <div className="mx-10 mt-5 lg:mx-28">
        <BackButton />
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="w-full lg:w-1/2">
            <div className="w-full flex flex-col gap-1 mt-5 text-4xl">
              <h1 className="font-winter uppercase w-full text-wrap">
                Pendaftaran Lomba
              </h1>
              <h1
                className="font-winter uppercase w-full text-wrap text-[#D4ECF8]"
                style={{
                  WebkitTextStroke: "1px #0A3981",
                }}
              >
                Karya Tulis Ilmiah
              </h1>
              <h1 className="font-winter uppercase w-full text-wrap">
                Tahap Awal (Abstrak)
              </h1>
            </div>

            <div className="mt-5 w-full">
              <form action="" className="flex flex-col gap-8">
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-1/2 gap-1">
                    <label htmlFor="namaTim">Nama Tim*</label>
                    <input
                      type="text"
                      name="namaTim"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                    />
                  </div>
                  <div className="flex flex-col w-1/2 gap-1">
                    <label htmlFor="asalSekolah">Asal Sekolah*</label>
                    <input
                      type="text"
                      name="asalSekolah"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-1/2 gap-1">
                    <label htmlFor="nomorTelepon">Nomor Telepon*</label>
                    <input
                      type="text"
                      name="nomorTelepon"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                    />
                  </div>
                  <div className="flex flex-col w-1/2 gap-1">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="text"
                      name="email"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:py-2"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="anggota1">
                      Nama Lengkap Anggota 1 (Ketua)*
                    </label>
                    <input
                      type="text"
                      name="anggota1"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:w-[99%] lg:py-2"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="anggota2">Nama Lengkap Anggota 2</label>
                    <input
                      type="text"
                      name="anggota2"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:w-[99%] lg:py-2"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="anggota3">Nama Lengkap Anggota 3</label>
                    <input
                      type="text"
                      name="anggota3"
                      className="px-2 py-1 border border-black rounded-lg w-[98%] lg:w-[99%] lg:py-2"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="ktpFile">
                      Scan KTP/ Kartu Pelajar* <br /> Note: Jadikan satu file
                    </label>
                    <input
                      type="file"
                      name="ktpFile"
                      className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white lg:w-[99%]"
                      accept=".pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file && file.size > 5 * 1024 * 1024) {
                          alert("File size exceeds 5 MB");
                          e.target.value = "";
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="ktpFile">
                      File Abstrak (Format pdf, Size limit 5 MB)*
                    </label>
                    <input
                      type="file"
                      name="abstrakFile"
                      className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white lg:w-[99%]"
                      accept=".pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file && file.size > 5 * 1024 * 1024) {
                          alert("File size exceeds 5 MB");
                          e.target.value = "";
                        }
                      }}
                    />
                  </div>
                </div>
                <button
                  className="bg-black text-white px-8 py-3 rounded-lg flex flex-row justify-center items-center w-1/4"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="w-1/2 flex-row h-auto hidden lg:flex items-center justify-between">
            <div className="h-full px-[0.10rem] bg-black py-1 rounded-xl"></div>
            <div className="font-winter uppercase text-8xl">
              <h1
                className="text-[#D4ECF8]"
                style={{
                  WebkitTextStroke: "1px #0A3981",
                }}
              >
                #<span className="text-[#F9C84D]">Strive</span>
              </h1>
              <h1
                className="text-[#E38F49]"
                style={{
                  WebkitTextStroke: "1px #0A3981",
                }}
              >
                for
              </h1>
              <h1
                className="text-[#D4ECF8]"
                style={{
                  WebkitTextStroke: "1px #0A3981",
                }}
              >
                Excellence
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompetitionPage;
