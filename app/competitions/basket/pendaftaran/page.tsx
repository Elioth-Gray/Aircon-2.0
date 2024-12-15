"use client";

import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";

const CompetitionPage = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const nextStep = () => {
    if (step < 1) {
      setStep((step) => step + 1);
    } else if (step === 1) {
      router.push("/competitions/basket/pendaftaran/konfirmasi");
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep((step) => step - 1);
    }
  };

  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <>
      <div className="mx-10 mt-5">
        <BackButton />
        {step === 0 ? (
          <>
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
                Basket
              </h1>
            </div>
          </>
        ) : null}
        <div className="mt-5 w-full">
          <form action="" className="flex flex-col gap-8">
            {step === 0 ? (
              <>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-1/2 gap-1">
                    <label htmlFor="namaTim">Nama Tim*</label>
                    <input
                      type="text"
                      name="namaTim"
                      className="px-2 py-1 border border-black rounded-lg w-[98%]"
                    />
                  </div>
                  <div className="flex flex-col w-1/2 gap-1">
                    <label htmlFor="asalSekolah">Asal Sekolah*</label>
                    <input
                      type="text"
                      name="asalSekolah"
                      className="px-2 py-1 border border-black rounded-lg w-[98%]"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-1/2 gap-1">
                    <label htmlFor="nomorTelepon">
                      Nomor Telepon (Perwakilan)*
                    </label>
                    <input
                      type="text"
                      name="nomorTelepon"
                      className="px-2 py-1 border border-black rounded-lg w-[98%]"
                    />
                  </div>
                  <div className="flex flex-col w-1/2 gap-1">
                    <label htmlFor="email">
                      Email <br /> (Perwakilan)*
                    </label>
                    <input
                      type="text"
                      name="email"
                      className="px-2 py-1 border border-black rounded-lg w-[98%]"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="anggota1">Nama Lengkap Perwakilan*</label>
                    <input
                      type="text"
                      name="anggota1"
                      className="px-2 py-1 border border-black rounded-lg w-[98%]"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="ktpFile">
                      Scan KTP/Kartu Pelajar (PDF/gambar)* <br /> Note: Jadikan
                      satu file
                    </label>
                    <input
                      type="file"
                      name="ktpFile"
                      className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white"
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
              </>
            ) : null}

            {step === 1 ? (
              <>
                <h1 className="font-winter text-2xl -mb-7 mt-2">
                  Data Official
                </h1>
                <p>(Tidak terdaftar sebagai pemain)</p>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="namaCoach">Nama Lengkap Coach*</label>
                    <input
                      type="text"
                      name="namaCoach"
                      className="px-2 py-1 border border-black rounded-lg w-[98%]"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="namaCoach">Nama Lengkap Manager*</label>
                    <input
                      type="text"
                      name="namaCoach"
                      className="px-2 py-1 border border-black rounded-lg w-[98%]"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="namaCoach">Nama Lengkap Official*</label>
                    <input
                      type="text"
                      name="namaCoach"
                      className="px-2 py-1 border border-black rounded-lg w-[98%]"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="ktpFile">
                      Kartu Identitas Tiap Official <br />
                      (KTP/Kartu Pelajar)* <br /> Note: Jadikan dalam 1 file
                    </label>
                    <input
                      type="file"
                      name="abstrakFile"
                      className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white"
                      accept=".pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file && file.size > 10 * 1024 * 1024) {
                          alert("File size exceeds 10 MB");
                          e.target.value = "";
                        }
                      }}
                    />
                  </div>
                </div>
              </>
            ) : null}
          </form>
          <div className="w-full mt-5 flex flex-row justify-between">
            {step > 0 ? (
              <button
                className="bg-black text-white px-8 py-2 rounded-lg flex flex-row justify-center items-center"
                onClick={prevStep}
              >
                Prev
              </button>
            ) : null}
            <button
              className="bg-black text-white px-8 py-2 rounded-lg flex flex-row justify-center items-center"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompetitionPage;
