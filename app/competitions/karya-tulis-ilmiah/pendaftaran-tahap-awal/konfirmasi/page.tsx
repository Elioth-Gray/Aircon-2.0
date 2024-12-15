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
              <p>Airlangga Convention 2.0</p>
            </div>
            <div className="flex flex-row start items-center gap-6">
              <p className="flex flex-row justify-between items-center w-[38%]">
                <span>Asal Sekolah:</span> <span>:</span>
              </p>
              <p>Universitas Airlangga</p>
            </div>
            <div className="flex flex-row start items-center gap-6">
              <p className="flex flex-row justify-between items-center w-[38%]">
                <span>Cabang Lomba</span> <span>:</span>
              </p>
              <p>Karya Tulis Ilmiah</p>
            </div>
            <div className="flex flex-row start items-center gap-6">
              <p className="flex flex-row justify-between items-center w-[38%]">
                <span>Harga</span> <span>:</span>
              </p>
              <p>Rp.150.000,00</p>
            </div>
            <div className="flex flex-row start items-center gap-6">
              <p className="flex flex-row justify-between items-center w-[38%]">
                <span>Total</span> <span>:</span>
              </p>
              <p>Rp.150.000,00</p>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="">Metode Pembayaran*</label>
              <select
                name=""
                id=""
                className="w-2/3 px-2 py-2 rounded-lg border border-black"
              >
                <option value="Pepek">Pempek</option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-col items-start">
            <p>Nomor Rekening:</p>
            <p className="text-xl font-bold">123456789</p>
            <p>(INEY MEY WULANDARI)</p>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="ktpFile">Bukti Pembayaran*</label>
              <input
                type="file"
                name="ktpFile"
                className="px-4 py-8 border border-black rounded-lg w-[98%] bg-white"
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
        <button className="bg-black text-white px-8 py-2 rounded-lg flex flex-row justify-center items-center mt-5 text-sm">
          Daftarkan Dirimu
        </button>
      </div>
    </>
  );
};

export default ConfirmationPage;
