"use client";
import React from "react";
import BackButton from "@/app/components/BackButton";

const ConfirmationPage = () => {
  return (
    <>
      <div className="mx-8 mt-5">
        <BackButton></BackButton>
        <form action="" className="mt-5 w-full flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Konfirmasi Pembayaran</h1>
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row start items-center gap-6">
              <p className="flex flex-row justify-between items-center w-[38%]">
                <span>Nama Lengkap</span> <span>:</span>
              </p>
              <p>(Full Name)</p>
            </div>
            <div className="flex flex-row start items-center gap-6">
              <p className="flex flex-row justify-between items-center w-[38%]">
                <span>Asal Sekolah:</span> <span>:</span>
              </p>
              <p>(School Name)</p>
            </div>
            <div className="flex flex-row start items-center gap-6">
              <p className="flex flex-row justify-between items-center w-[38%]">
                <span>Cabang Lomba</span> <span>:</span>
              </p>
              <p>Infografis</p>
            </div>
            <div className="flex flex-row start items-center gap-6">
              <p className="flex flex-row justify-between items-center w-[38%]">
                <span>Harga</span> <span>:</span>
              </p>
              <p>(Price)</p>
            </div>
            <div className="flex flex-row start items-center gap-6">
              <p className="flex flex-row justify-between items-center w-[38%]">
                <span>Total</span> <span>:</span>
              </p>
              <p>(Price)</p>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="">Metode Pembayaran*</label>
              <select
                name=""
                id=""
                className="w-2/3 px-2 py-2 rounded-lg border border-black"
              >
                <option value="Pepek">MANDIRI</option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-col items-start">
            <p>Nomor Rekening:</p>
            <p className="text-xl font-bold">1420021866396</p>
            <p>(ARIKA TRI WULANDARI)</p>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="ktpFile">
                Bukti Pembayaran* <br /> Note: Format PDF/gambar, size limit 5
                MB
              </label>
              <input
                type="file"
                name="ktpFile"
                className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white"
                accept=".pdf,image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file && file.size > 5 * 1024 * 1024) {
                    alert("File size exceeds 5 MB");
                    e.target.value = "";
                  }
                }}
              />
            </div>
            <div className="flex flex-row justify-start items-center gap-3 mt-2">
              <input type="checkbox" className="p-6" />
              <label htmlFor="" className="text-[0.8rem]">
                Saya memastikan data yang diisi benar, dan siap menerima sanksi
                jika terdapat kesalahan.
              </label>
            </div>
          </div>
        </form>
        <button
          className="bg-black text-white px-5 py-2 rounded-lg flex flex-row justify-center items-center mt-5"
          onClick={(e) => {
            e.preventDefault();
            try {
              window.location.href =
                "/competitions/infografis/pendaftaran/konfirmasi/reminder";
            } catch (error) {
              console.error("Navigation error:", error);
            }
          }}
        >
          DAFTAR
        </button>
      </div>
    </>
  );
};

export default ConfirmationPage;
