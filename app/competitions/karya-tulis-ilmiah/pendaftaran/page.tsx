"use client"

import { useState } from "react";
import React from "react";
import BackButton from "@/app/components/BackButton";

const CompetitionPage = () => {

    const [step, setStep] = useState(0);

    const nextStep = () => {
        if(step < 2){
            setStep(step => step + 1)
        }
    }

    const prevStep = () => {
        if(step > 0){
            setStep(step => step - 1)
        }
    }

  return (
    <>
      <div className="mx-10 mt-5">
        <BackButton/>
        <div className="w-full flex flex-col gap-1 mt-5">
          <h1 className="text-2xl font-bold uppercase w-1/2 text-wrap">
            Pendaftaran Lomba
          </h1>
          <h1 className="text-2xl font-bold uppercase w-1/2 text-wrap">
            Karya Tulis Ilmiah
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
                  className="px-2 py-1 border border-black rounded-lg w-[98%]"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <label htmlFor="namaTim">Asal Sekolah*</label>
                <input
                  type="text"
                  name="namaTim"
                  className="px-2 py-1 border border-black rounded-lg w-[98%]"
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-between gap-2">
              <div className="flex flex-col w-1/2 gap-1">
                <label htmlFor="namaTim">Nomor Telepon*</label>
                <input
                  type="text"
                  name="namaTim"
                  className="px-2 py-1 border border-black rounded-lg w-[98%]"
                />
              </div>
              <div className="flex flex-col w-1/2 gap-1">
                <label htmlFor="namaTim">Email</label>
                <input
                  type="text"
                  name="namaTim"
                  className="px-2 py-1 border border-black rounded-lg w-[98%]"
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-between gap-2">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="namaTim">Nama Lengkap Anggota 1*</label>
                <input
                  type="text"
                  name="namaTim"
                  className="px-2 py-1 border border-black rounded-lg w-[98%]"
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-between gap-2">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="namaTim">Nama Lengkap Anggota 2*</label>
                <input
                  type="text"
                  name="namaTim"
                  className="px-2 py-1 border border-black rounded-lg w-[98%]"
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-between gap-2">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="namaTim">Nama Lengkap Anggota 3*</label>
                <input
                  type="text"
                  name="namaTim"
                  className="px-2 py-1 border border-black rounded-lg w-[98%]"
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-between gap-2">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="namaTim">
                  Scan Kartu Identitas Tiap Anggota (KTP/ Kartu Pelajar) * NOTE:
                  Jadikan dalam satu file
                </label>
                <input
                  type="file"
                  name="namaTim"
                  className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white"
                />
              </div>
            </div>
          </form>
          <div className="w-full mt-5 items-start">
            <button className="bg-black text-white px-8 py-2 rounded-lg flex flex-row justify-center items-center">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompetitionPage;
