"use client";

import { useEffect, useState } from "react";
import React from "react";
import BackButton from "@/app/components/BackButton";
import { useRouter } from "next/navigation";

const CompetitionPage = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const nextStep = () => {
    if (step < 1) {
      setStep((step) => step + 1);
    } else {
      router.push("/competitions/infografis/pendaftaran/konfirmasi");
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
                Infografis
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
                    <label htmlFor="namaTim">Nama Lengkap*</label>
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
                    <label htmlFor="ktpFile">Scan KTP/ Kartu Pelajar*</label>
                    <input
                      type="file"
                      name="ktpFile"
                      className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label htmlFor="ktpFile">
                    File Infografis (Format PDF, Size limit 10 MB)*
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
              </>
            ) : null}
          </form>
          <div className="w-full mt-5 flex flex-row justify-start">
            <button
              className="bg-black text-white px-8 py-2 rounded-lg flex flex-row justify-center items-center"
              onClick={() => {
                window.location.href =
                  "/competitions/infografis/pendaftaran/konfirmasi";
              }}
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
