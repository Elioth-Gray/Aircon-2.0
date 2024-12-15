"use client";

import { useEffect, useState } from "react";
import React from "react";
import BackButton from "@/app/components/BackButton";

const CompetitionPage = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < 1) {
      setStep((step) => step + 1);
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
                Karya Tulis Ilmiah
              </h1>
              <h1 className="font-winter uppercase w-full text-wrap">
                Tahap Awal (Abstrak)
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
                    <label htmlFor="nomorTelepon">Nomor Telepon*</label>
                    <input
                      type="text"
                      name="nomorTelepon"
                      className="px-2 py-1 border border-black rounded-lg w-[98%]"
                    />
                  </div>
                  <div className="flex flex-col w-1/2 gap-1">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="text"
                      name="email"
                      className="px-2 py-1 border border-black rounded-lg w-[98%]"
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
                      className="px-2 py-1 border border-black rounded-lg w-[98%]"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="anggota2">Nama Lengkap Anggota 2</label>
                    <input
                      type="text"
                      name="anggota2"
                      className="px-2 py-1 border border-black rounded-lg w-[98%]"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="anggota3">Nama Lengkap Anggota 3</label>
                    <input
                      type="text"
                      name="anggota3"
                      className="px-2 py-1 border border-black rounded-lg w-[98%]"
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
                      className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white"
                    />
                  </div>
                </div>
              </>
            ) : null}

            {step === 1 ? (
              <>
                <div className="w-full flex flex-row justify-between gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label htmlFor="ktpFile">
                      File Abstrak (Format pdf, Size limit 5 MB)
                    </label>
                    <input
                      type="file"
                      name="abstrakFile"
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
